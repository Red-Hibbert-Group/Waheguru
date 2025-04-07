import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: Request) {
  try {
    const { amount, type } = await req.json()

    // Create a product
    const product = await stripe.products.create({
      name: `${type === 'one-time' ? 'One-time' : 'Monthly'} Donation`,
      description: `Donation to Waheguru - ${type === 'one-time' ? 'One-time' : 'Monthly'} contribution`,
    })

    // Create a price for the product
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      recurring: type === 'monthly' ? { interval: 'month' } : undefined,
    })

    return NextResponse.json({ priceId: price.id })
  } catch (error) {
    console.error('Error creating Stripe product/price:', error)
    return NextResponse.json(
      { error: 'Error creating Stripe product/price' },
      { status: 500 }
    )
  }
} 