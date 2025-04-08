'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function VandChhakoPage() {
  const [activeQuote, setActiveQuote] = useState(0)
  
  const scripturalQuotes = [
    {
      text: "The twelfth day of the lunar cycle: Dedicate yourself to giving charity, chanting the Naam and purification. Worship the Lord with devotion, and get rid of your pride. Drink in the Ambrosial Nectar of the Lord's Name, in the Saadh Sangat, the Company of the Holy.",
      source: "Sri Guru Granth Sahib Ji, Page 299"
    },
    {
      text: "I have enshrined the Lord's Feet within my heart. Contemplating my Lord and Master, my True Guru, all my affairs have been resolved. The merits of giving donations to charity and devotional worship come from the Kirtan of the Praises of the Transcendent Lord.",
      source: "Sri Guru Granth Sahib Ji, Page 718"
    },
    {
      text: "The Gurus of the Sikhs inspire the Sikhs of the Guru to serve. Serving the holy congregation they receive the fruit of happiness. Sweeping and spreading the sitting mats they bathe in the dust of the holy congregation.",
      source: "Bhai Gurdas Ji, Vaar 20"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-green-600 font-semibold mb-4">Understanding Sikh Philosophy</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            VAND CHHAKO: Share with Others
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            One of the Three Pillars of Sikhism, Vand Chhako teaches us to share our blessings 
            and consume together as a community, fostering unity and equality.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-green-500 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">VAND CHHAKO</h2>
              <p className="text-xl mb-8">Share & Consume Together</p>
              <blockquote className="italic text-green-100 border-l-4 border-green-200 pl-4">
                "Vand Ke Chakna - Share the fruits of one's labor with others before considering oneself"
                <footer className="mt-2 text-sm">— Sikh Teaching</footer>
              </blockquote>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Foundation of Community Service
              </h3>
              <p className="text-gray-600 mb-6">
                Vand Chhako emphasizes the importance of sharing one's wealth, food, and resources
                with the community, especially those in need.
              </p>
              <p className="text-gray-600">
                This principle encourages Sikhs to live as generous contributors to society,
                maintaining the spirit of selfless service and communal harmony.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Practices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Key Aspects of Vand Chhako
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Langar</h4>
              <p className="text-gray-600 text-center">
                The community kitchen where free meals are served to all, regardless of their
                background, promoting equality and sharing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Dasvandh</h4>
              <p className="text-gray-600 text-center">
                Contributing one-tenth of one's earnings to support charitable causes and
                community development initiatives.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Seva</h4>
              <p className="text-gray-600 text-center">
                Selfless service to humanity through volunteer work, community support, and
                helping those in need.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scriptural References Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Scriptural References
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {scripturalQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                    activeQuote === index 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-50 hover:bg-green-100'
                  }`}
                  onClick={() => setActiveQuote(index)}
                >
                  <div className="h-32 overflow-hidden">
                    <p className={`text-sm ${activeQuote === index ? 'text-green-50' : 'text-green-900'}`}>
                      {quote.text.substring(0, 100)}...
                    </p>
                  </div>
                  <p className={`mt-4 text-sm font-medium ${
                    activeQuote === index ? 'text-green-100' : 'text-green-600'
                  }`}>
                    {quote.source}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              key={activeQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 rounded-xl p-8"
            >
              <blockquote className="text-xl text-green-900">
                {scripturalQuotes[activeQuote].text}
              </blockquote>
              <footer className="mt-4 text-green-600 font-medium">
                — {scripturalQuotes[activeQuote].source}
              </footer>
            </motion.div>
          </div>
        </motion.div>

        {/* Modern Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Modern Application of Vand Chhako
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Community Support</h4>
                  <p className="text-gray-600">
                    Organizing food banks, donation drives, and community services to help
                    those in need within our local communities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Skill Sharing</h4>
                  <p className="text-gray-600">
                    Offering professional expertise, mentoring, and educational support to
                    help others grow and develop their capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Global Initiatives</h4>
                  <p className="text-gray-600">
                    Participating in international humanitarian efforts and disaster relief
                    programs to help communities worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Environmental Stewardship</h4>
                  <p className="text-gray-600">
                    Sharing resources responsibly and supporting sustainable practices to
                    preserve our environment for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Share Your Blessings</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how the principle of Vand Chhako can transform your life and the lives of
            others through the power of sharing and community service.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/sikh-philosophy"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors duration-200"
            >
              Explore Sikh Philosophy
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-300 transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 