import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createClient } from '@supabase/supabase-js'

// Direct database client for raw SQL
const supabaseUrl = 'https://obwokyhpvdqewaatrnma.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id29reWhwdmRxZXdhYXRybm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjMzMjgsImV4cCI6MjA1OTkzOTMyOH0.DK8PEGmTyC32HWislTj1oDmx4y6JG0gK43HX2IR8xck'
const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export async function GET(request: Request) {
  try {
    // Try multiple approaches to fix the table
    
    // Approach 1: Simple insert to check if table exists and has required columns
    try {
      console.log('Trying direct insert to test table structure...')
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: `test_${Date.now()}@example.com`,
          subscription_date: new Date().toISOString(),
          status: 'test',
          source: 'test'
        })
        .select()
        .single()
      
      if (!error) {
        // If successful, delete the test record
        await supabase
          .from('newsletter_subscriptions')
          .delete()
          .eq('id', data.id)
        
        return NextResponse.json({
          success: true,
          message: 'Table structure is valid, test record created and deleted successfully',
          approach: 'direct-insert'
        })
      } else {
        console.log('Initial test failed:', error.message)
      }
    } catch (e) {
      console.log('Insert test failed:', e)
    }
    
    // Approach 2: Try to add columns individually with RPC
    try {
      console.log('Trying RPC method...')
      const query = `
        SELECT 1;
      `
      
      const { error: rpcError } = await supabase.rpc('exec_sql', { sql: query })
      
      if (!rpcError) {
        // We can execute SQL, so let's create the table and columns
        const createTableSql = `
          CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            subscription_date TIMESTAMPTZ DEFAULT now(),
            status TEXT DEFAULT 'active',
            source TEXT DEFAULT 'website',
            unsubscribed_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now()
          );
        `
        
        const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableSql })
        
        if (!createError) {
          return NextResponse.json({
            success: true,
            message: 'Table created or updated successfully',
            approach: 'rpc-sql'
          })
        } else {
          console.log('RPC execution failed:', createError)
        }
      } else {
        console.log('RPC method not available:', rpcError)
      }
    } catch (e) {
      console.log('RPC approach failed:', e)
    }
    
    // Approach 3: Use raw SQL with the REST API
    try {
      console.log('Trying REST API approach...')
      const response = await fetch(`${supabaseUrl}/rest/sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          query: `
            CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
              id UUID PRIMARY KEY DEFAULT gen_uuid_generate_v4(),
              email TEXT NOT NULL UNIQUE,
              subscription_date TIMESTAMPTZ DEFAULT now(),
              status TEXT DEFAULT 'active',
              source TEXT DEFAULT 'website',
              unsubscribed_at TIMESTAMPTZ,
              created_at TIMESTAMPTZ DEFAULT now(),
              updated_at TIMESTAMPTZ DEFAULT now()
            );
          `
        })
      })
      
      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: 'Table created successfully via REST API',
          approach: 'rest-api'
        })
      } else {
        console.log('REST API approach failed:', await response.text())
      }
    } catch (e) {
      console.log('REST API approach failed:', e)
    }
    
    // Approach 4: Try using Supabase client's pgsql method if available
    try {
      console.log('Trying direct SQL execution if available...')
      // @ts-ignore - This method might exist in some versions of the client
      const { error: sqlError } = await supabase.rpc('pgdump', {
        command: `
          CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            subscription_date TIMESTAMPTZ DEFAULT now(),
            status TEXT DEFAULT 'active',
            source TEXT DEFAULT 'website',
            unsubscribed_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now()
          );
        `
      })
      
      if (!sqlError) {
        return NextResponse.json({
          success: true,
          message: 'Table created successfully via pgdump',
          approach: 'pgdump'
        })
      }
    } catch (e) {
      console.log('Direct SQL execution failed:', e)
    }
    
    // If all else fails, suggest manual fixes
    return NextResponse.json({
      success: false,
      message: 'Could not automatically fix the database structure. Please add the missing columns manually.',
      requiredColumns: [
        { name: 'id', type: 'UUID', constraints: 'PRIMARY KEY DEFAULT gen_random_uuid()' },
        { name: 'email', type: 'TEXT', constraints: 'NOT NULL UNIQUE' },
        { name: 'subscription_date', type: 'TIMESTAMPTZ', constraints: 'DEFAULT now()' },
        { name: 'status', type: 'TEXT', constraints: "DEFAULT 'active'" },
        { name: 'source', type: 'TEXT', constraints: "DEFAULT 'website'" },
        { name: 'unsubscribed_at', type: 'TIMESTAMPTZ', constraints: '' },
        { name: 'created_at', type: 'TIMESTAMPTZ', constraints: 'DEFAULT now()' },
        { name: 'updated_at', type: 'TIMESTAMPTZ', constraints: 'DEFAULT now()' }
      ],
      manualSql: `
      -- Run this in the Supabase SQL Editor:
      
      -- First check if the table exists
      CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT now() NOT NULL
      );
      
      -- Then add each column if it doesn't exist
      DO $$
      BEGIN
        -- Check and add subscription_date
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'subscription_date'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN subscription_date TIMESTAMPTZ DEFAULT now();
        END IF;
        
        -- Check and add status
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'status'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN status TEXT DEFAULT 'active';
        END IF;
        
        -- Check and add source
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'source'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN source TEXT DEFAULT 'website';
        END IF;
        
        -- Check and add unsubscribed_at
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'unsubscribed_at'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN unsubscribed_at TIMESTAMPTZ;
        END IF;
        
        -- Check and add updated_at
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'updated_at'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN updated_at TIMESTAMPTZ DEFAULT now();
        END IF;
      END $$;
      `
    })
    
  } catch (error) {
    console.error('Error fixing database:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fix database structure',
      error
    }, { status: 500 })
  }
} 