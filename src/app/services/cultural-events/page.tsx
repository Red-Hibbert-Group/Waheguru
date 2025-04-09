'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Event {
  title: string
  description: string
  date: string
  icon: string
}

interface Highlight {
  title: string
  description: string
  icon: string
}

export default function CulturalEvents() {
  const events: Event[] = [
    {
      title: "Vaisakhi Celebration",
      description: "Annual celebration of the birth of Khalsa with kirtan, cultural performances, and langar.",
      date: "April 14th",
      icon: "🎊"
    },
    {
      title: "Gurpurab Celebrations",
      description: "Special programs commemorating important dates in Sikh history and Guru's teachings.",
      date: "Throughout the year",
      icon: "✨"
    },
    {
      title: "Cultural Festivals",
      description: "Celebrations of Punjabi culture including music, dance, and art exhibitions.",
      date: "Quarterly Events",
      icon: "🎭"
    },
    {
      title: "Nagar Kirtan",
      description: "Processions through the community with kirtan, seva, and community engagement.",
      date: "Bi-annual",
      icon: "🚶‍♂️"
    }
  ]

  const highlights: Highlight[] = [
    {
      title: "Live Performances",
      description: "Traditional music and dance performances",
      icon: "🎵"
    },
    {
      title: "Art Exhibitions",
      description: "Displays of Sikh art and cultural artifacts",
      icon: "🎨"
    },
    {
      title: "Food Festival",
      description: "Traditional Punjabi cuisine and cooking demonstrations",
      icon: "🍲"
    },
    {
      title: "Cultural Workshops",
      description: "Learn about Sikh traditions and customs",
      icon: "📚"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-orange-600 font-semibold mb-4">Celebrations & Programs</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Cultural Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in celebrating our rich cultural heritage through various
            events and programs throughout the year.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{event.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-orange-600">{event.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="text-center">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our calendar to receive updates about upcoming events
            and cultural celebrations.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors duration-200"
          >
            Subscribe to Calendar
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 