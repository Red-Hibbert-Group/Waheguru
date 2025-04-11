import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://obwokyhpvdqewaatrnma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id29reWhwdmRxZXdhYXRybm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjMzMjgsImV4cCI6MjA1OTkzOTMyOH0.DK8PEGmTyC32HWislTj1oDmx4y6JG0gK43HX2IR8xck'

export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Initialize the database by ensuring the newsletter_subscriptions table exists
 * This function will run automatically when the module is imported
 */
export async function initializeDatabase() {
  try {
    console.log('Checking database tables...')
    
    // Check if the newsletter_subscriptions table exists
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .limit(1)
    
    if (error) {
      console.error('Error checking newsletter_subscriptions table:', error)
      // If the table doesn't exist, we need to create it
      if (error.code === '42P01') { // PostgreSQL code for "table does not exist"
        console.log('Creating newsletter_subscriptions table...')
        // This requires more permissions than the anon key provides,
        // so this is just a placeholder. In a real app, you'd use migrations
        // or a server-side function with proper permissions.
        console.error('Table missing! Please create the newsletter_subscriptions table manually.')
      }
    } else {
      console.log('Newsletter table found:', data !== null)
    }
  } catch (err) {
    console.error('Failed to initialize database:', err)
  }
}

// Run initialization
initializeDatabase().catch(console.error)

/**
 * Subscribe an email to the newsletter
 * @param email - The email to subscribe
 * @returns A result object with success flag and message
 */
export async function subscribeToNewsletter(email: string) {
  try {
    console.log('Starting newsletter subscription process for:', email)
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Email validation failed for:', email)
      return {
        success: false,
        message: 'Please provide a valid email address.'
      }
    }
    
    // Minimal approach - just store the email to avoid column issues
    console.log('Attempting to insert into newsletter_subscriptions table with just email')
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])
      .select()
    
    console.log('Insert result:', { data, error })
      
    if (error) throw error
    
    return { 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    }
  } catch (error: any) {
    console.error('Newsletter subscription error details:', error)
    
    // Handle unique constraint violations (email already subscribed)
    if (error.code === '23505') {
      console.log('Detected duplicate email')
      
      return { 
        success: false, 
        message: 'This email is already subscribed to our newsletter.' 
      }
    }
    
    console.error('Newsletter subscription error:', error)
    return { 
      success: false, 
      message: `Failed to subscribe. Error: ${error.message || 'Unknown error'}` 
    }
  }
}

/**
 * Submit a contact form message
 * @param name - The name of the contact
 * @param email - The email of the contact
 * @param message - The message content
 * @returns A result object with success flag and message
 */
export async function submitContactForm(name: string, email: string, message: string) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, message }])
      
    if (error) throw error
    
    return { 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }
  }
}

/**
 * Unsubscribe an email from the newsletter
 * @param email - The email to unsubscribe
 * @param token - Optional security token for verification
 * @returns A result object with success flag and message
 */
export async function unsubscribeFromNewsletter(email: string, token?: string) {
  try {
    // You could implement token verification here for added security
    // This would require generating and storing tokens when sending emails
    
    // First check if the email exists and is active
    const { data: existingSubscription, error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('id')
      .eq('email', email)
      .eq('status', 'active')
      .single()
    
    if (checkError || !existingSubscription) {
      return {
        success: false,
        message: 'Email not found in our active subscription list.'
      }
    }
    
    // Update the subscription status
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .update({ 
        status: 'inactive',
        unsubscribed_at: new Date().toISOString() 
      })
      .eq('email', email)
    
    if (error) throw error
    
    return { 
      success: true, 
      message: 'Successfully unsubscribed from our newsletter.' 
    }
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return { 
      success: false, 
      message: 'Failed to unsubscribe. Please try again later.' 
    }
  }
} 