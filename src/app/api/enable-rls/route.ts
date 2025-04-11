import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    // Try to create the RLS policy for anonymous users
    const createPolicySql = `
      -- Enable RLS on the table if it's not already enabled
      ALTER TABLE IF EXISTS public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
      
      -- Drop existing policies if they exist to avoid conflicts
      DROP POLICY IF EXISTS "Allow anonymous inserts to newsletter_subscriptions" ON public.newsletter_subscriptions;
      
      -- Create policy to allow inserts from anonymous users
      CREATE POLICY "Allow anonymous inserts to newsletter_subscriptions"
        ON public.newsletter_subscriptions
        FOR INSERT
        TO anon
        WITH CHECK (true);
        
      -- Policy to allow reading subscriptions (needed for insert...returning)
      DROP POLICY IF EXISTS "Allow public read access to newsletter_subscriptions" ON public.newsletter_subscriptions;
      CREATE POLICY "Allow public read access to newsletter_subscriptions"
        ON public.newsletter_subscriptions
        FOR SELECT
        TO anon
        USING (true);
    `
    
    // Try multiple approaches to execute the SQL
    
    // Approach 1: Using RPC if available
    try {
      const { error: rpcError } = await supabase.rpc('exec_sql', { sql: createPolicySql })
      
      if (!rpcError) {
        return NextResponse.json({
          success: true,
          message: 'RLS policies created successfully',
          method: 'rpc'
        })
      }
    } catch (e) {
      console.error('RPC approach failed:', e)
    }
    
    // Approach 2: Test if we can insert directly now - maybe policy already exists
    try {
      const testEmail = `test_${Date.now()}@example.com`
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email: testEmail })
        .select()
        .single()
      
      if (!error) {
        // Clean up test data
        await supabase
          .from('newsletter_subscriptions')
          .delete()
          .eq('email', testEmail)
        
        return NextResponse.json({
          success: true, 
          message: 'Insert test successful, RLS appears to be properly configured',
          method: 'test-insert'
        })
      }
    } catch (e) {
      console.error('Test insert failed:', e)
    }
    
    // If we can't fix it automatically, provide SQL for manual execution
    return NextResponse.json({
      success: false,
      message: 'Could not automatically configure RLS policies. Please run the following SQL in the Supabase SQL editor:',
      sql: createPolicySql
    })
    
  } catch (error) {
    console.error('Error configuring RLS:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to configure RLS policies',
      error
    }, { status: 500 })
  }
} 