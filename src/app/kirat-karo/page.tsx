'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function KiratKaroPage() {
  const [activeQuote, setActiveQuote] = useState(0)
  
  const scripturalQuotes = [
    {
      text: "Those who have meditated on the Naam, the Name of the Lord, and departed after having worked by the sweat of their brows -O Nanak, their faces are radiant in the Court of the Lord, and many are saved along with them!",
      source: "Sri Guru Granth Sahib Ji, Page 8"
    },
    {
      text: "Deep within the hearts of His GurSikhs, the True Guru is pervading. The Guru is pleased with those who long for His Sikhs. As the True Guru directs them, they do their work and chant their prayers. The True Lord accepts the service of His GurSikhs.",
      source: "Sri Guru Granth Sahib Ji, Page 317"
    },
    {
      text: "Those who understand the Lord's Court, never suffer separation from him. The True Guru has imparted this understanding. They practice truth, self-restraint and good deeds; their comings and goings are ended.",
      source: "Sri Guru Granth Sahib Ji, Page 1234"
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
          <h4 className="text-blue-600 font-semibold mb-4">Understanding Sikh Philosophy</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            KIRAT KARO: Honest Living
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            One of the Three Pillars of Sikhism, Kirat Karo emphasizes the importance of earning an 
            honest living through ethical work and dedication.
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
            <div className="bg-blue-500 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">KIRAT KARO</h2>
              <p className="text-xl mb-8">Earn Through Honest Means</p>
              <blockquote className="italic text-blue-100 border-l-4 border-blue-200 pl-4">
                "He who earns with the sweat of his brow and shares with others,
                has discovered the path of righteousness."
                <footer className="mt-2 text-sm">— Guru Nanak Dev Ji</footer>
              </blockquote>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Foundation of Ethical Living
              </h3>
              <p className="text-gray-600 mb-6">
                Kirat Karo teaches us to earn our livelihood through honest work and ethical means. 
                It emphasizes dignity of labor and rejects exploitation of any kind.
              </p>
              <p className="text-gray-600">
                This principle encourages Sikhs to live as householders, maintain high moral standards
                in their professional lives, and contribute positively to society through their work.
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
            Key Aspects of Kirat Karo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Ethical Work</h4>
              <p className="text-gray-600 text-center">
                Pursuing an occupation that adheres to moral principles and benefits society,
                while avoiding exploitative or harmful activities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Hard Work</h4>
              <p className="text-gray-600 text-center">
                Embracing diligence and dedication in all endeavors, reflecting commitment to
                excellence and service in both professional and personal life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Self-Reliance</h4>
              <p className="text-gray-600 text-center">
                Maintaining independence through honest labor while contributing to family and
                community, avoiding dependency on others for basic needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scriptural References Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-50 hover:bg-blue-100'
                  }`}
                  onClick={() => setActiveQuote(index)}
                >
                  <div className="h-32 overflow-hidden">
                    <p className={`text-sm ${activeQuote === index ? 'text-blue-50' : 'text-blue-900'}`}>
                      {quote.text.substring(0, 100)}...
                    </p>
                  </div>
                  <p className={`mt-4 text-sm font-medium ${
                    activeQuote === index ? 'text-blue-100' : 'text-blue-600'
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
              className="bg-blue-50 rounded-xl p-8"
            >
              <blockquote className="text-xl text-blue-900">
                {scripturalQuotes[activeQuote].text}
              </blockquote>
              <footer className="mt-4 text-blue-600 font-medium">
                — {scripturalQuotes[activeQuote].source}
              </footer>
            </motion.div>
          </div>
        </motion.div>

        {/* Practical Implementation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Modern Application of Kirat Karo
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Professional Ethics</h4>
                  <p className="text-gray-600">
                    Maintaining high moral standards in business dealings, ensuring transparency,
                    and practicing fair trade in all professional endeavors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Community Development</h4>
                  <p className="text-gray-600">
                    Using one's skills and resources to contribute to society's progress while
                    maintaining the dignity of labor in all forms of work.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Sustainable Living</h4>
                  <p className="text-gray-600">
                    Earning livelihood while being mindful of environmental impact and ensuring
                    sustainable practices in work and daily life.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Work-Life Balance</h4>
                  <p className="text-gray-600">
                    Maintaining harmony between professional duties and spiritual practices while
                    fulfilling family and social responsibilities.
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
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Live with Purpose</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how the principle of Kirat Karo can guide you towards a more meaningful
            and fulfilling professional life while maintaining high ethical standards.
          </p>
        </motion.div>
      </div>
    </main>
  )
} 