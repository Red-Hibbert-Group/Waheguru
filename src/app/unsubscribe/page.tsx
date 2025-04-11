'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { unsubscribeFromNewsletter } from '@/lib/supabase'
import Link from 'next/link'

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState('idle' as 'idle' | 'loading' | 'success' | 'error')
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    // Get email and token from URL parameters
    const emailParam = searchParams?.get('email')
    const tokenParam = searchParams?.get('token')
    
    if (emailParam) setEmail(emailParam)
    if (tokenParam) setToken(tokenParam)
    
    // Auto-unsubscribe if both email and token are provided
    if (emailParam && tokenParam) {
      handleUnsubscribe()
    }
  }, [searchParams])
  
  const handleUnsubscribe = async () => {
    if (!email) {
      setMessage('Please enter your email address.')
      setStatus('error')
      return
    }
    
    setStatus('loading')
    
    try {
      const result = await unsubscribeFromNewsletter(email, token)
      
      if (result.success) {
        setStatus('success')
        setMessage(result.message)
      } else {
        setStatus('error')
        setMessage(result.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('An unexpected error occurred. Please try again later.')
    }
  }
  
  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <svg 
                className="h-12 w-12 text-amber-600" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M50,5 L50,95 M26,28 C26,28 37,35 50,28 C63,35 74,28 74,28 C74,28 66,50 74,72 C74,72 63,65 50,72 C37,65 26,72 26,72 C26,72 34,50 26,28 Z M35,50 C35,43 42,36 50,36 C58,36 65,43 65,50 C65,57 58,64 50,64 C42,64 35,57 35,50 Z M20,20 C20,20 36,36 50,20 C64,36 80,20 80,20 C80,20 64,64 80,80 C80,80 64,64 50,80 C36,64 20,80 20,80 C20,80 36,36 20,20 Z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-center text-amber-900 mb-4">
              Unsubscribe from Newsletter
            </h1>
            
            {status === 'success' ? (
              <div className="text-center space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                  <div className="flex items-center justify-center">
                    <svg 
                      className="h-6 w-6 text-green-600 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800">{message}</p>
                  </div>
                </div>
                
                <p className="text-amber-700">
                  We're sorry to see you go. You can always subscribe again in the future.
                </p>
                
                <div className="mt-6">
                  <Link 
                    href="/" 
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {status === 'error' && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                    <p className="text-red-800">{message}</p>
                  </div>
                )}
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white border-amber-200 border-2
                    focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-amber-900"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <button
                  onClick={handleUnsubscribe}
                  disabled={status === 'loading' || !email}
                  className={`w-full py-3 px-6 rounded-lg text-base font-medium text-white
                  transition-all duration-300 relative overflow-hidden
                  ${status === 'loading' ? 'bg-amber-500 cursor-not-allowed' : 'bg-amber-800 hover:bg-amber-900'}`}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Unsubscribe'}
                </button>
                
                <p className="text-sm text-amber-700 text-center">
                  Your privacy matters to us. We'll stop sending newsletter emails to this address.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 