'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CommunitySupport() {
  const supportServices = [
    {
      title: "Mental Health Support",
      description: "Confidential counseling services and mental health resources for community members.",
      schedule: "By appointment",
      contact: "counseling@gurdwara.org",
      icon: "🧠"
    },
    {
      title: "Senior Care",
      description: "Support services for elderly community members including transportation and home visits.",
      schedule: "Daily, 9:00 AM - 5:00 PM",
      contact: "seniors@gurdwara.org",
      icon: "👴"
    },
    {
      title: "Family Services",
      description: "Support for families including parenting resources and marriage counseling.",
      schedule: "Weekdays, 10:00 AM - 6:00 PM",
      contact: "family@gurdwara.org",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Crisis Support",
      description: "24/7 emergency assistance and crisis intervention services.",
      schedule: "24/7 Emergency Hotline",
      contact: "crisis@gurdwara.org",
      icon: "🆘"
    }
  ]

  const initiatives = [
    {
      title: "Food Bank",
      description: "Weekly distribution of groceries and essential items to families in need.",
      schedule: "Every Saturday, 9:00 AM - 1:00 PM",
      icon: "🥫"
    },
    {
      title: "Job Search Assistance",
      description: "Resume writing workshops and job placement support.",
      schedule: "Monthly Workshops",
      icon: "💼"
    },
    {
      title: "Immigration Support",
      description: "Guidance and resources for immigration-related matters.",
      schedule: "By appointment",
      icon: "📋"
    },
    {
      title: "Housing Assistance",
      description: "Help finding temporary and permanent housing solutions.",
      schedule: "Weekdays, 10:00 AM - 4:00 PM",
      icon: "🏠"
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
          <h4 className="text-orange-600 font-semibold mb-4">Supporting Our Community</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Community Support Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to supporting our community members through various
            programs and services designed to help in times of need.
          </p>
        </motion.div>

        {/* Support Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {supportServices.map((service) => (
            <div key={service.title} className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-orange-600">{service.schedule}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="bg-orange-50 rounded-xl px-4 py-2">
                <span className="text-orange-600 font-medium">{service.contact}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Community Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Community Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="text-center">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 mb-2">{initiative.description}</p>
                <p className="text-orange-600 font-medium">{initiative.schedule}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Get Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us to learn more about our
            support services or to schedule an appointment.
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