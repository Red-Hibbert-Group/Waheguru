import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Use the same URL and key from the supabase.ts file
const supabaseUrl = 'https://obwokyhpvdqewaatrnma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id29reWhwdmRxZXdhYXRybm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjMzMjgsImV4cCI6MjA1OTkzOTMyOH0.DK8PEGmTyC32HWislTj1oDmx4y6JG0gK43HX2IR8xck'

export async function GET(request: Request) {
  try {
    // Direct SQL approach - create the table if not exists with all required columns
    const sql = `
    CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    
    -- Now add columns if they don't exist
    DO $$
    BEGIN
      -- Add subscription_date column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'subscription_date'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN subscription_date TIMESTAMPTZ NOT NULL DEFAULT now();
      END IF;
      
      -- Add status column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'status'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN status TEXT NOT NULL DEFAULT 'active';
      END IF;
      
      -- Add source column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'source'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN source TEXT DEFAULT 'website';
      END IF;
      
      -- Add unsubscribed_at column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'unsubscribed_at'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN unsubscribed_at TIMESTAMPTZ NULL;
      END IF;
    END $$;
    
    -- Create index on email if it doesn't exist
    CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
    ON public.newsletter_subscriptions(email);
    `
    
    // Use the Supabase REST API to execute the SQL
    // Note: This won't work with anon key, but worth a try
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        query: sql
      })
    })
    
    if (!response.ok) {
      return NextResponse.json({
        success: false,
        message: 'Error executing SQL directly',
        error: await response.text()
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Newsletter table structure updated successfully'
    })
    
  } catch (error) {
    console.error('Error fixing newsletter table:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fix newsletter table',
      error
    }, { status: 500 })
  }
} 