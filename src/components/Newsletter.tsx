'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isRlsError, setIsRlsError] = useState(false)
  const [debugInfo, setDebugInfo] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')
    setDebugInfo('')
    setIsRlsError(false)
    setEmailSent(false)
    
    if (!email || email.trim() === '') {
      setErrorMessage('Please enter a valid email address')
      setIsLoading(false)
      return
    }
    
    try {
      console.log('Attempting to subscribe with email:', email)
      
      // Use the API endpoint instead of directly calling the Supabase function
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })
      
      const result = await response.json()
      
      console.log('Subscription result:', result)
      
      if (result.success) {
        setIsSubmitted(true)
        setEmail('')
        setEmailSent(!!result.emailSent)
      } else {
        // Check if this is an RLS error and provide a helpful message
        if (result.errorType === 'rls') {
          setErrorMessage('Database security policy error.')
          setIsRlsError(true)
          setDebugInfo(`${result.message} ${result.details || ''}`)
        } else {
          setErrorMessage(result.message || 'Something went wrong. Please try again.')
          setDebugInfo(`Failed with message: ${result.message}`)
        }
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setErrorMessage('Failed to subscribe. Please try again later.')
      
      if (error instanceof Error) {
        setDebugInfo(`Error: ${error.message}`)
      } else {
        setDebugInfo(`Unknown error: ${String(error)}`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  // Benefits of subscribing
  const benefits = [
    {
      icon: "📅",
      title: "Gurdwara Updates",
      description: "Receive timely updates about programs at local Gurdwaras"
    },
    {
      icon: "🙏",
      title: "Spiritual Guidance",
      description: "Get insights from Gurbani and Sikh teachings for daily life"
    },
    {
      icon: "🤝",
      title: "Seva Opportunities",
      description: "Learn about ways to serve the community through selfless service"
    }
  ]

  // Add debug info display to the form
  const renderDebugInfo = () => {
    if (!debugInfo) return null;
    
    return (
      <div className="mt-4 p-3 text-xs bg-gray-100 text-gray-800 rounded-md font-mono overflow-auto">
        <p className="font-bold mb-1">Debug Info:</p>
        <pre>{debugInfo}</pre>
      </div>
    );
  }

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative khanda symbol in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          className="absolute opacity-5 text-orange-600 w-[800px] h-[800px] -right-40 -bottom-40 transform rotate-12"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <path d="M50,5 L50,95 M26,28 C26,28 37,35 50,28 C63,35 74,28 74,28 C74,28 66,50 74,72 C74,72 63,65 50,72 C37,65 26,72 26,72 C26,72 34,50 26,28 Z M35,50 C35,43 42,36 50,36 C58,36 65,43 65,50 C65,57 58,64 50,64 C42,64 35,57 35,50 Z M20,20 C20,20 36,36 50,20 C64,36 80,20 80,20 C80,20 64,64 80,80 C80,80 64,64 50,80 C36,64 20,80 20,80 C20,80 36,36 20,20 Z" />
        </svg>
        
        {/* Abstract design elements inspired by Sikh patterns */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
        <div className="absolute w-96 h-96 -left-20 top-20 rounded-full border-8 border-amber-800/5"></div>
        <div className="absolute w-96 h-96 -right-20 bottom-20 rounded-full border-8 border-amber-800/5"></div>
        <div className="absolute w-72 h-72 right-1/4 top-1/4 rounded-full border-8 border-orange-600/5"></div>
        
        {/* Repeating pattern inspired by Sikh designs */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 gap-10 w-full h-full p-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-orange-800"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-5">
            {/* Left decorative side - Sikh-themed design */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-amber-800 to-orange-700 p-8 relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-pattern-paisley"></div>
                <div className="grid grid-cols-3 gap-4 w-full h-full p-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-full h-full border-2 border-white rounded-lg opacity-20"></div>
                  ))}
                </div>
              </div>
              
              <div className="h-full flex flex-col justify-between relative z-10">
                {/* Khanda symbol at top */}
                <div className="mb-8">
                  <svg className="w-16 h-16 text-amber-200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M50,5 L50,95 M26,28 C26,28 37,35 50,28 C63,35 74,28 74,28 C74,28 66,50 74,72 C74,72 63,65 50,72 C37,65 26,72 26,72 C26,72 34,50 26,28 Z M35,50 C35,43 42,36 50,36 C58,36 65,43 65,50 C65,57 58,64 50,64 C42,64 35,57 35,50 Z M20,20 C20,20 36,36 50,20 C64,36 80,20 80,20 C80,20 64,64 80,80 C80,80 64,64 50,80 C36,64 20,80 20,80 C20,80 36,36 20,20 Z" />
                  </svg>
                </div>
                
                {/* Gurmukhi script-inspired decorative text */}
                <div className="text-amber-50">
                  <h3 className="text-2xl font-bold mb-3">ਸੰਦੇਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ</h3>
                  <p className="opacity-80 mb-4">Receive our messages</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-amber-300 text-xl mr-3">ੴ</span>
                      <p className="text-sm opacity-80">Stay connected with your spiritual community</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-300 text-xl mr-3">ੴ</span>
                      <p className="text-sm opacity-80">Learn about upcoming Gurpurabs and events</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-300 text-xl mr-3">ੴ</span>
                      <p className="text-sm opacity-80">Receive weekly Hukamnama updates</p>
                    </div>
                  </div>
                </div>
                
                {/* Sikh quote */}
                <blockquote className="mt-12 border-l-2 border-amber-400 pl-4 text-amber-50 italic">
                  <p className="text-sm">"Through the Guru's teachings, we remain absorbed in the Lord's Name."</p>
                  <footer className="text-xs opacity-80 mt-1">— Guru Granth Sahib Ji</footer>
                </blockquote>
              </div>
            </div>
            
            {/* Content side */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-amber-50 to-orange-50 md:col-span-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-amber-900">
                    Connect With Our Sangat
                  </h2>
                  <div className="h-1 w-20 bg-orange-600 mt-4 mb-6"></div>
                </motion.div>
                
                <motion.p variants={itemVariants} className="text-lg text-amber-900">
                  Join our newsletter to receive updates on Gurdwara events, 
                  Sikh teachings, and ways to get involved in seva and community service.
                </motion.p>
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                      key="form"
                      variants={itemVariants}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">Email Address</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white border-amber-200 border-2
                            focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-amber-900"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {errorMessage && (
                        <div className="p-3 text-sm bg-red-50 text-red-800 rounded-md">
                          {errorMessage}
                          {isRlsError && (
                            <a 
                              href="/api/enable-rls" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="block underline text-orange-700 mt-1 font-medium"
                            >
                              Click here to fix the database policy issue
                            </a>
                          )}
                        </div>
                      )}
                      
                      {renderDebugInfo()}
                      
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-6 rounded-lg text-base font-medium text-white
                        transition-all duration-300 relative overflow-hidden
                        ${isLoading ? 'bg-amber-500 cursor-not-allowed' : 'bg-amber-800 hover:bg-amber-900'}
                        `}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Subscribe to Newsletter 
                          </span>
                        )}
                      </motion.button>
                      
                      <p className="text-sm text-amber-700">
                        We respect your privacy. You may unsubscribe at any time.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="bg-green-50 p-6 rounded-lg border border-green-200"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <motion.svg 
                            className="h-6 w-6 text-green-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </motion.svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-green-800">
                            Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!
                          </h3>
                          <p className="mt-2 text-sm text-green-700">
                            Thank you for subscribing. You will now receive updates on Gurdwara events and activities.
                            {emailSent && (
                              <span className="block mt-1 font-medium">
                                A confirmation email has been sent to your inbox.
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 text-sm text-amber-800 hover:text-amber-900 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Subscribe with a different email
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* What you'll receive */}
                <div className="mt-8 pt-8 border-t border-amber-200">
                  <h4 className="text-lg font-semibold text-amber-900 mb-4">What you'll receive:</h4>
                  <div className="grid gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={benefit.title}
                        variants={itemVariants}
                        className="flex items-start"
                      >
                        <span className="text-xl mr-3">{benefit.icon}</span>
                        <div>
                          <h5 className="font-medium text-amber-900">{benefit.title}</h5>
                          <p className="text-sm text-amber-700">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 