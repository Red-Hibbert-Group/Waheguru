import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend('re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij')

export const dynamic = 'force-dynamic' // Mark this route as dynamic

export async function GET(request: NextRequest) {
  try {
    // Get test email from query params or use a default
    const searchParams = request.nextUrl.searchParams
    const testEmail = searchParams.get('email') || 'test@example.com'
    
    console.log('Sending test email to:', testEmail)
    
    // Send a simple test email
    const { data, error } = await resend.emails.send({
      from: 'Waheguru Contact <contact@e.waheguru.org>',
      to: [testEmail],
      subject: 'Test Email from Waheguru',
      html: `
        <div>
          <h1>Test Email</h1>
          <p>This is a test email from the Waheguru contact form.</p>
          <p>If you received this, the Resend integration is working!</p>
        </div>
      `,
      text: 'This is a test email from the Waheguru contact form. If you received this, the Resend integration is working!',
    })
    
    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }
    
    console.log('Test email sent successfully, ID:', data?.id)
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: data?.id,
      to: testEmail
    })
  } catch (error: any) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test email',
        details: error.message 
      },
      { status: 500 }
    )
  }
} 