'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrayerServicesPage() {
  const schedule = [
    { name: "Amrit Vela", time: "3:00 AM - 6:00 AM", description: "Early morning prayers and meditation" },
    { name: "Nitnem", time: "6:00 AM - 7:00 AM", description: "Daily prayers including Japji Sahib" },
    { name: "Evening Rehras", time: "6:00 PM - 7:00 PM", description: "Evening prayers" },
    { name: "Kirtan", time: "7:00 PM - 8:30 PM", description: "Divine music and hymns" },
    { name: "Ardas", time: "8:30 PM", description: "Collective prayer" }
  ]

  const guidelines = [
    {
      title: "Dress Code",
      description: "Please dress modestly and cover your head in the prayer hall.",
      icon: "👔"
    },
    {
      title: "Remove Shoes",
      description: "Remove shoes and wash hands before entering the prayer hall.",
      icon: "👞"
    },
    {
      title: "Seating",
      description: "Sit cross-legged on the floor if possible, facing Sri Guru Granth Sahib Ji.",
      icon: "🪑"
    },
    {
      title: "Respectful Silence",
      description: "Maintain silence during prayers and meditation.",
      icon: "🤫"
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
          <Link 
            href="/services"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Services
          </Link>
          <h4 className="text-orange-600 font-semibold mb-4">Daily Devotion</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Prayer Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in daily prayers, kirtan, and meditation sessions as we connect with
            the Divine and strengthen our spiritual practice together.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Daily Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Schedule</h2>
            <div className="space-y-6">
              {schedule.map((item) => (
                <div key={item.name} className="bg-amber-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <span className="text-orange-600 font-medium">{item.time}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guidelines</h2>
            <div className="grid gap-6">
              {guidelines.map((guideline) => (
                <div key={guideline.title} className="flex items-start gap-4">
                  <div className="text-3xl">{guideline.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600">{guideline.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Programs</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Weekly Sukhmani Sahib Path</li>
                <li>• Monthly Kirtan Darbars</li>
                <li>• Special programs on Gurpurabs</li>
                <li>• Youth Kirtan sessions</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Participation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Sangat</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Everyone is welcome to join our prayer services. Whether you're new to Sikhi
            or a regular practitioner, come experience the peace and joy of collective worship.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 