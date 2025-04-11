import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateNewsletterEmailTemplate } from '@/lib/email-templates/newsletter-confirmation'

// Initialize Resend with API key
const resend = new Resend('re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij')

export const dynamic = 'force-dynamic' // Mark this route as dynamic

export async function GET(request: NextRequest) {
  try {
    // Get test email from query params or use a default
    const searchParams = request.nextUrl.searchParams
    const testEmail = searchParams.get('email') || 'test@example.com'
    
    console.log('Sending test newsletter email to:', testEmail)
    
    // Send a test newsletter email
    const { data, error } = await resend.emails.send({
      from: 'Waheguru Newsletter <newsletter@e.waheguru.org>',
      to: [testEmail],
      subject: 'Welcome to the Waheguru Newsletter',
      html: generateNewsletterEmailTemplate({ email: testEmail }),
      text: `Thank you for subscribing to the Waheguru newsletter! You'll now receive our latest updates, focused on seva and spiritual guidance.`,
    })
    
    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }
    
    console.log('Test newsletter email sent successfully, ID:', data?.id)
    return NextResponse.json({ 
      success: true, 
      message: 'Test newsletter email sent successfully',
      messageId: data?.id,
      to: testEmail
    })
  } catch (error: any) {
    console.error('Test newsletter email error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test newsletter email',
        details: error.message 
      },
      { status: 500 }
    )
  }
} 