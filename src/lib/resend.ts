import { Resend } from 'resend'
import { generateContactEmailTemplate } from './email-templates/contact-confirmation'

// Initialize Resend with API key - ensure there are no extra spaces or characters
const resendApiKey = 're_JQWx3euy_8D2grrbT8wCG6GAURADqAVij'
export const resend = new Resend(resendApiKey)

/**
 * Send a contact confirmation email to a user
 * @param name - The name of the contact
 * @param email - The email of the contact
 * @param message - The message content from the contact form
 * @returns A result object with success flag and message
 */
export async function sendContactConfirmationEmail(name: string, email: string, message: string) {
  try {
    console.log('Sending confirmation email to:', email)
    
    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.error('Invalid email format:', email)
      return {
        success: false,
        message: 'Invalid email address format'
      }
    }
    
    // Send email with proper error handling
    const { data, error } = await resend.emails.send({
      from: 'Waheguru Contact <contact@e.waheguru.org>',
      to: [email], // Ensure email is in an array format as some Resend versions require this
      subject: 'Thank you for contacting Waheguru',
      html: generateContactEmailTemplate({ name, email }),
      text: `Dear ${name}, Thank you for contacting Waheguru. We have received your message and will get back to you shortly.`, // Fallback plain text
    })
    
    if (error) {
      console.error('Resend API error:', error)
      throw error
    }
    
    console.log('Email sent successfully, ID:', data?.id)
    return { 
      success: true,
      messageId: data?.id,
      message: 'Email sent successfully'
    }
  } catch (error) {
    console.error('Error sending contact confirmation email:', error)
    return { 
      success: false, 
      message: 'Failed to send confirmation email'
    }
  }
} 