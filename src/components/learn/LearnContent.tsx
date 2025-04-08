'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LearnContent() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/"
                className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-orange-600">Naam Japo</span>
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            One of the Three Pillars of Sikhism that guides daily living and spiritual practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                What is Naam Japo?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Naam Japo is one of the three fundamental principles of Sikhism, focusing on the meditation and contemplation of God's names. It involves the practice of remembering the Divine through various methods including meditation, singing hymns, and recitation of scriptures.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Key Practices
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Kirtan</h3>
                    <p className="text-gray-600">Singing hymns and devotional songs from the Guru Granth Sahib, accompanied by traditional instruments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Paath</h3>
                    <p className="text-gray-600">Recitation of scriptures like Japji Sahib, Rehras Sahib, and Sukhmani Sahib with focus on understanding and applying the teachings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Simran</h3>
                    <p className="text-gray-600">Silent meditation on God's name (Waheguru), practiced individually or in a group setting to cultivate inner peace.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Spiritual Benefits
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Control over the Five Evils (lust, anger, greed, attachment, and ego)</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Development of inner peace and tranquility</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Connection with the Divine through regular practice</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">Living a more conscious and fulfilling life</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Daily Practice
              </h2>
              <div className="prose prose-orange">
                <p className="text-gray-600 mb-4">
                  Sikhs are encouraged to practice Naam Japo throughout their daily lives. This can be done through:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Morning meditation during Amrit Vela (pre-dawn)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular attendance at Sangat (congregation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Participating in Kirtan and collective meditation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Continuous remembrance while performing daily tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl font-medium text-gray-900 italic">
            "Remember the One, who pervades all creation; God's Name is the Support of the soul."
            <footer className="text-lg text-gray-600 mt-2">— Guru Nanak Dev Ji</footer>
          </blockquote>
        </motion.div>
      </div>
    </main>
  )
} 