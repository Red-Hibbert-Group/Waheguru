import { NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({
        success: false,
        message: 'Email is required'
      }, { status: 400 })
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a valid email address'
      }, { status: 400 })
    }
    
    // Subscribe to newsletter
    const result = await subscribeToNewsletter(email)
    
    return NextResponse.json(result, { 
      status: result.success ? 200 : 400 
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    // Check for RLS errors
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes('violates row-level security policy')) {
      return NextResponse.json({
        success: false,
        message: 'Database security policy error. Please visit /api/enable-rls to fix this issue or contact the administrator.',
        errorType: 'rls',
        details: 'The database has Row Level Security enabled, but anon users do not have permission to insert records.'
      }, { status: 403 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again later.'
    }, { status: 500 })
  }
} 