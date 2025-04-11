import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    // Check if the table exists
    const { error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .limit(1)
    
    let message = ''
    
    // If we can query the table but source column is missing,
    // the table structure needs to be updated
    if (!checkError) {
      // Execute custom SQL to add the source column if it doesn't exist
      const { error: sourceError } = await supabase.rpc(
        'add_column_if_not_exists',
        { 
          table_name: 'newsletter_subscriptions', 
          column_name: 'source', 
          column_type: 'TEXT',
          column_default: "'website'" 
        }
      )
      
      if (sourceError) {
        // If the stored procedure doesn't exist, create it first
        if (sourceError.message.includes('could not find the function')) {
          const createFunctionSQL = `
          create or replace function add_column_if_not_exists(
            table_name text,
            column_name text,
            column_type text,
            column_default text default null
          ) returns void as $$
          declare
            column_exists boolean;
            alter_statement text;
          begin
            select exists(
              select 1
              from information_schema.columns
              where table_schema = 'public'
              and table_name = add_column_if_not_exists.table_name
              and column_name = add_column_if_not_exists.column_name
            ) into column_exists;
          
            if not column_exists then
              alter_statement := format('ALTER TABLE public.%I ADD COLUMN %I %s', 
                                        table_name, column_name, column_type);
                                        
              if column_default is not null then
                alter_statement := alter_statement || ' DEFAULT ' || column_default;
              end if;
              
              execute alter_statement;
            end if;
          end;
          $$ language plpgsql security definer;
          `
          
          // Create the function
          const { error: createFnError } = await supabase.rpc(
            'exec_sql', 
            { sql: createFunctionSQL }
          )
          
          if (createFnError) {
            // If we can't create the function, try a direct SQL approach
            // Note: This might not work with anon key, but worth a try
            message = 'Could not create helpers, trying direct SQL'
            
            // Check if column exists
            try {
              const { data: colData, error: colCheckError } = await supabase
                .from('newsletter_subscriptions')
                .select('source')
                .limit(1)
              
              if (colCheckError && colCheckError.message.includes('column')) {
                // Try to add the column directly
                const { error: alterError } = await supabase.rpc(
                  'exec_sql',
                  { sql: "ALTER TABLE public.newsletter_subscriptions ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website'" }
                )
                
                if (alterError) {
                  return NextResponse.json({
                    success: false,
                    message: 'Could not add source column. Please execute SQL manually.',
                    error: alterError
                  }, { status: 500 })
                } else {
                  message = 'Added source column directly'
                }
              } else {
                message = 'Source column already exists'
              }
            } catch (err) {
              // Column doesn't exist, which is what we expected
              // Try to add the column directly
              const { error: alterError } = await supabase.rpc(
                'exec_sql',
                { sql: "ALTER TABLE public.newsletter_subscriptions ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website'" }
              )
              
              if (alterError) {
                return NextResponse.json({
                  success: false,
                  message: 'Could not add source column. Please execute SQL manually.',
                  error: alterError
                }, { status: 500 })
              } else {
                message = 'Added source column directly after error'
              }
            }
          } else {
            // Function created, now try to add the column
            const { error: addColError } = await supabase.rpc(
              'add_column_if_not_exists',
              { 
                table_name: 'newsletter_subscriptions', 
                column_name: 'source', 
                column_type: 'TEXT',
                column_default: "'website'" 
              }
            )
            
            if (addColError) {
              return NextResponse.json({
                success: false,
                message: 'Created function but could not add source column',
                error: addColError
              }, { status: 500 })
            } else {
              message = 'Created helper function and added source column'
            }
          }
        } else {
          return NextResponse.json({
            success: false,
            message: 'Error adding source column',
            error: sourceError
          }, { status: 500 })
        }
      } else {
        message = 'Added source column successfully'
      }
      
      // Add subscription_date column if needed
      const { error: dateError } = await supabase.rpc(
        'add_column_if_not_exists',
        { 
          table_name: 'newsletter_subscriptions', 
          column_name: 'subscription_date', 
          column_type: 'TIMESTAMPTZ',
          column_default: 'now()' 
        }
      )
      
      if (!dateError) {
        message += ', added subscription_date column'
      }
      
      // Add status column if needed
      const { error: statusError } = await supabase.rpc(
        'add_column_if_not_exists',
        { 
          table_name: 'newsletter_subscriptions', 
          column_name: 'status', 
          column_type: 'TEXT',
          column_default: "'active'" 
        }
      )
      
      if (!statusError) {
        message += ', added status column'
      }
      
      return NextResponse.json({
        success: true,
        message: message || 'Table structure updated successfully'
      })
    } else if (checkError.code === '42P01') {
      // Table doesn't exist, try to create it
      const createTableSQL = `
      CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        subscription_date TIMESTAMPTZ NOT NULL DEFAULT now(),
        status TEXT NOT NULL DEFAULT 'active',
        source TEXT DEFAULT 'website',
        unsubscribed_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      
      -- Create index on email if it doesn't exist
      CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
      ON public.newsletter_subscriptions(email);
      `
      
      const { error: createError } = await supabase.rpc(
        'exec_sql',
        { sql: createTableSQL }
      )
      
      if (createError) {
        // If we can't execute the SQL directly, provide instructions
        return NextResponse.json({
          success: false,
          message: 'Table does not exist and could not be created automatically',
          error: createError
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: true,
        message: 'Created newsletter_subscriptions table with all required columns'
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Unknown error checking table existence',
        error: checkError
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Database fix error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fix database structure',
      error
    }, { status: 500 })
  }
} 