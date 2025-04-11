import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateContactEmailTemplate } from '@/lib/email-templates/contact-confirmation'

// Initialize Resend with API key
const resend = new Resend('re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij')

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, message } = body
    
    console.log('Sending email to:', email)
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Send the confirmation email using verified domain
    const { data, error } = await resend.emails.send({
      from: 'Waheguru Contact <contact@e.waheguru.org>',
      to: [email],
      subject: 'Thank you for contacting Waheguru',
      html: generateContactEmailTemplate({ name, email }),
      text: `Dear ${name}, Thank you for contacting Waheguru. We have received your message and will get back to you shortly.`,
    })
    
    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }
    
    console.log('Email sent successfully, ID:', data?.id)
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: data?.id
    })
  } catch (error: any) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    )
  }
} 