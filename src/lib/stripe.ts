import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Create a payment intent on the server
export async function createPaymentIntent(amount: number) {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    })
    
    const data = await response.json()
    return data.clientSecret
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
} 