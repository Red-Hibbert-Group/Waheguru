'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function NaamJapoPage() {
  const [activeStep, setActiveStep] = useState(0)

  const meditationSteps = [
    {
      title: "Find a Peaceful Space",
      description: "Choose a quiet, comfortable place where you won't be disturbed."
    },
    {
      title: "Proper Posture",
      description: "Sit in a comfortable position with your spine straight and shoulders relaxed."
    },
    {
      title: "Focus on Breath",
      description: "Take deep breaths and become aware of your breathing pattern."
    },
    {
      title: "Begin Recitation",
      description: "Start reciting 'Waheguru' mentally or verbally, focusing on its divine meaning."
    },
    {
      title: "Maintain Awareness",
      description: "Keep your mind centered on the divine name, gently returning focus when distracted."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Removed Back to Home button */}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-orange-600 font-semibold mb-4">Understanding Sikh Philosophy</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            NAAM JAPO: The Sacred Practice
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            One of the Three Pillars of Sikhism, Naam Japo is the meditation and contemplation of God's names
            that guides us towards spiritual enlightenment.
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
            <div className="bg-orange-500 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">NAAM JAPO</h2>
              <p className="text-xl mb-8">Divine Name Meditation</p>
              <blockquote className="italic text-orange-100 border-l-4 border-orange-200 pl-4">
                "Through the Guru's teachings, we meditate on the Name of the Lord.
                Through the Guru's teachings, we hear the Name with our ears."
                <footer className="mt-2 text-sm">— Sri Guru Granth Sahib Ji</footer>
              </blockquote>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Foundation of Spiritual Practice
              </h3>
              <p className="text-gray-600 mb-6">
                Naam Japo is one of the Three Pillars of Sikhism, alongside Kirat Karo (honest living) and 
                Vand Chhako (sharing with others). It represents the spiritual foundation of Sikh practice,
                focusing on meditation and remembrance of the Divine.
              </p>
              <p className="text-gray-600">
                Through Naam Japo, practitioners aim to control the five evils (lust, anger, greed, 
                attachment, and ego) while cultivating a direct connection with the Divine presence.
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
            Essential Practices of Naam Japo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Kirtan</h4>
              <p className="text-gray-600 text-center">
                The musical expression of divine poetry, singing hymns from the Guru Granth Sahib 
                with traditional instruments. This practice helps create a deep emotional and 
                spiritual connection.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Paath</h4>
              <p className="text-gray-600 text-center">
                The systematic reading and recitation of sacred texts, including Japji Sahib, 
                Rehras Sahib, and Sukhmani Sahib. This practice deepens understanding of 
                Sikh teachings.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-900 text-center">Simran</h4>
              <p className="text-gray-600 text-center">
                The continuous remembrance and meditation on God's name, particularly 
                "Waheguru." This personal practice cultivates inner peace and spiritual awareness.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits and Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Spiritual Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Liberation from the Five Evils (Kaam, Krodh, Lobh, Moh, Ahankaar)</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Development of divine wisdom and understanding</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Attainment of inner peace and spiritual enlightenment</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Strengthened connection with the Divine presence</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Daily Practice Guidelines
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Begin each day with Amrit Vela meditation (pre-dawn prayer)</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Participate in regular Sangat (spiritual congregation)</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Engage in daily Nitnem (prescribed daily prayers)</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-600">Practice mindful remembrance throughout daily activities</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Historical Context Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Historical Significance
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-gray-600">
                  Naam Japo has been a central practice in Sikhism since its inception by Guru Nanak Dev Ji. 
                  The practice emphasizes direct communion with the Divine through meditation and remembrance, 
                  breaking away from ritualistic traditions.
                </p>
                <p className="text-gray-600">
                  Throughout Sikh history, the Gurus have emphasized the importance of Naam Japo as a means 
                  to overcome the cycle of birth and death, and to achieve union with the Divine. This practice 
                  has been preserved and passed down through generations of Sikh practitioners.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-orange-100 rounded-2xl p-8"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Historical Aspects</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <p className="text-gray-600">Established by Guru Nanak Dev Ji as a core practice</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <p className="text-gray-600">Emphasized in Guru Granth Sahib Ji throughout</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <p className="text-gray-600">Practiced by all ten Gurus and their followers</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <p className="text-gray-600">Integral part of the Khalsa tradition</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Meditation Guide Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Step-by-Step Meditation Guide
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
              <div className="flex space-x-4">
                {meditationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex-shrink-0 w-64 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-orange-50 hover:bg-orange-100'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center mb-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-semibold ${
                        activeStep === index 
                          ? 'bg-white text-orange-500' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        {index + 1}
                      </span>
                      <h4 className={`ml-3 font-medium ${
                        activeStep === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className={activeStep === index ? 'text-orange-50' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white"
          >
            <svg className="w-12 h-12 mb-6 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl mb-6">
              "Those who meditate on Naam are blessed with eternal peace and contentment. 
              Their faces radiate with divine joy."
            </blockquote>
            <footer className="text-orange-200">— Sri Guru Granth Sahib Ji</footer>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
          >
            <svg className="w-12 h-12 mb-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl mb-6">
              "Through Naam Japo, the mind becomes pure and the soul finds its way back to its divine origin. 
              It is the ladder to reach the Lord's mansion."
            </blockquote>
            <footer className="text-gray-400">— Guru Amar Das Ji</footer>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community to learn more about Naam Japo and discover how this sacred practice
            can transform your spiritual life through meditation, devotion, and divine connection.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
          >
            Connect With Us
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 