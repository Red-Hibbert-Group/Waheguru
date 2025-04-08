'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: "Community Support",
      description: "Social services, counseling, and support for community members in need.",
      icon: "👥",
      href: "/services/community-support"
    },
    {
      title: "Youth Activities",
      description: "Sports, camps, and leadership programs designed for Sikh youth.",
      icon: "🎵",
      href: "/services/youth-activities"
    },
    {
      title: "Cultural Events",
      description: "Celebrations of Gurpurabs, festivals, and cultural programs throughout the year.",
      icon: "📅",
      href: "/services/cultural-events"
    },
    {
      title: "Prayer Services",
      description: "Daily prayers, kirtan, and meditation sessions.",
      icon: "🙏",
      href: "/services/prayer"
    },
    {
      title: "Education Programs",
      description: "Classes on Sikhi, Gurmukhi, and Gurbani understanding.",
      icon: "📚",
      href: "/services/education"
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of services designed to support spiritual growth,
            community well-being, and cultural connection.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center text-orange-600 font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  )
} 