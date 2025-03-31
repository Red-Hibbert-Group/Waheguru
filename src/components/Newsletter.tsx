'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement newsletter subscription API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Subscribe to our newsletter to receive updates about community events,
            educational programs, and ways to get involved.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`px-8 py-3 rounded-full font-semibold text-white transition-all duration-300
                ${status === 'loading'
                  ? 'bg-primary-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 hover:shadow-lg'
                }`}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-600 font-medium">
              Thank you for subscribing! We'll keep you updated.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-red-600 font-medium">
              Something went wrong. Please try again later.
            </p>
          )}

          <p className="mt-4 text-sm text-neutral-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
} 