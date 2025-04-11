'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from '@/lib/supabase'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null as {
    success?: boolean;
    message?: string;
  } | null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await subscribeToNewsletter(email)
      
      if (result.success) {
        setEmail('')
      }
      
      setSubmitStatus(result)
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-primary-700 mb-3">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-neutral-600 mb-4">
        Stay updated with our latest events, announcements, and community activities.
      </p>
      
      {submitStatus && (
        <div 
          className={`p-3 mb-4 rounded-md text-sm ${
            submitStatus.success 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="Your email address"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <button
          type="submit"
          className={`w-full bg-primary-500 text-white px-4 py-2 rounded-md
          font-medium hover:bg-primary-600 transition-colors
          ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
} 