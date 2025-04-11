import { NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/supabase'

export const dynamic = 'force-dynamic' // Mark this route as dynamic

// Define the subscription result type
type SubscriptionResult = {
  success: boolean
  message: string
  emailSent?: boolean
}

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
    const subscriptionResult = await subscribeToNewsletter(email)
    
    // Create a new result object of the proper type
    const result: SubscriptionResult = {
      success: subscriptionResult.success,
      message: subscriptionResult.message
    }
    
    // If subscription was successful, send confirmation email
    if (result.success) {
      try {
        // Send confirmation email via API route
        const emailResponse = await fetch(new URL('/api/newsletter/send-confirmation', request.url).toString(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
        
        const emailResult = await emailResponse.json()
        
        if (!emailResponse.ok) {
          console.error('Error sending newsletter confirmation email:', emailResult)
          // We don't fail the overall subscription if the email fails
          result.emailSent = false
        } else {
          result.emailSent = true
          result.message = `${result.message} A confirmation email has been sent to your inbox.`
        }
      } catch (emailError) {
        console.error('Failed to send newsletter confirmation email:', emailError)
        result.emailSent = false
      }
    }
    
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