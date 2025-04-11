import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateNewsletterEmailTemplate } from '@/lib/email-templates/newsletter-confirmation'

// Initialize Resend with API key
const resend = new Resend('re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij')

export const dynamic = 'force-dynamic' // Mark this route as dynamic

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { email } = body
    
    console.log('Sending newsletter confirmation email to:', email)
    
    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Missing email address' },
        { status: 400 }
      )
    }
    
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Send the confirmation email using verified domain
    const { data, error } = await resend.emails.send({
      from: 'Waheguru Newsletter <newsletter@e.waheguru.org>',
      to: [email],
      subject: 'Welcome to the Waheguru Newsletter',
      html: generateNewsletterEmailTemplate({ email }),
      text: `Thank you for subscribing to the Waheguru newsletter! You'll now receive our latest updates, focused on seva and spiritual guidance.`,
    })
    
    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }
    
    console.log('Newsletter confirmation email sent successfully, ID:', data?.id)
    return NextResponse.json({ 
      success: true, 
      message: 'Newsletter confirmation email sent successfully',
      messageId: data?.id
    })
  } catch (error: any) {
    console.error('Newsletter email sending error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send newsletter confirmation email',
        details: error.message 
      },
      { status: 500 }
    )
  }
} 