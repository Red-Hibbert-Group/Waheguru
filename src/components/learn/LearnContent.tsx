'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Practice {
  title: string
  description: string
  icon: string
}

interface Quote {
  text: string
  source: string
}

interface LearnContentProps {
  title: string
  subtitle: string
  description: string
  practices: Practice[]
  quotes: Quote[]
  modernApplications: {
    title: string
    description: string
    icon: string
  }[]
}

export function LearnContent({
  title,
  subtitle,
  description,
  practices,
  quotes,
  modernApplications
}: LearnContentProps) {
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
          <h4 className="text-primary-600 font-semibold mb-4">{subtitle}</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Key Practices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Key Aspects of {title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((practice) => (
              <div key={practice.title} className="space-y-4">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">{practice.icon}</span>
                </div>
                <h4 className="text-xl font-medium text-gray-900 text-center">
                  {practice.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scriptural References Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Scriptural References
          </h3>
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-primary-50 rounded-xl p-8"
              >
                <blockquote className="text-xl text-primary-900">
                  {quote.text}
                </blockquote>
                <footer className="mt-4 text-primary-600 font-medium">
                  — {quote.source}
                </footer>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modern Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Modern Application of {title}
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {modernApplications.map((app, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <span className="text-2xl">{app.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{app.title}</h4>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Learn More</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how the principle of {title} can transform your life and deepen your spiritual journey.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/sikh-philosophy"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Explore Sikh Philosophy
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-primary-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-300 transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 