import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * This is a protected API route that initializes the database structure
 * It should only be called by administrators
 */
export async function GET(request: Request) {
  try {
    // In a real app, you would add authentication here to ensure only admins can run this
    
    // Check if the newsletter_subscriptions table exists
    const { error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .limit(1)
    
    if (checkError && checkError.code === '42P01') {
      // Table doesn't exist, create it using the SQL API
      // Note: This requires the service_role key with more permissions
      // than the anon key in a real application
      
      const { error: createError } = await supabase
        .rpc('create_newsletter_table', {})
      
      if (createError) {
        return NextResponse.json({
          success: false,
          message: 'Failed to create table',
          error: createError
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: true,
        message: 'Newsletter subscriptions table created successfully'
      })
    }
    
    // Check if we need to add missing columns
    const { data: columns, error: columnsError } = await supabase
      .rpc('get_table_columns', { table_name: 'newsletter_subscriptions' })
    
    if (columnsError) {
      return NextResponse.json({
        success: false,
        message: 'Failed to check table columns',
        error: columnsError
      }, { status: 500 })
    }
    
    const requiredColumns = [
      'id', 'email', 'subscription_date', 'status', 'source', 'unsubscribed_at'
    ]
    
    const missingColumns = requiredColumns.filter(
      col => !columns || !columns.some((c: any) => c.column_name === col)
    )
    
    if (missingColumns.length > 0) {
      // Add missing columns
      const { error: alterError } = await supabase
        .rpc('add_missing_columns', { 
          table_name: 'newsletter_subscriptions',
          missing_columns: missingColumns
        })
      
      if (alterError) {
        return NextResponse.json({
          success: false,
          message: 'Failed to add missing columns',
          error: alterError
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: true,
        message: `Added missing columns: ${missingColumns.join(', ')}`
      })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Database structure is correct'
    })
    
  } catch (error) {
    console.error('Error initializing database:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to initialize database',
      error
    }, { status: 500 })
  }
} 