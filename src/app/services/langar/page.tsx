'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LangarServicesPage() {
  const schedule = [
    { day: "Monday - Friday", time: "4:00 AM - 9:00 PM" },
    { day: "Saturday", time: "4:00 AM - 10:00 PM" },
    { day: "Sunday", time: "4:00 AM - 10:00 PM" },
    { day: "Special Events", time: "Extended Hours" }
  ]

  const guidelines = [
    {
      title: "Everyone Welcome",
      description: "All visitors are welcome regardless of faith, background, or status.",
      icon: "🤝"
    },
    {
      title: "Vegetarian Meals",
      description: "All meals are vegetarian to accommodate diverse dietary preferences.",
      icon: "🥗"
    },
    {
      title: "Seva Opportunity",
      description: "Volunteers can participate in cooking, serving, and cleaning.",
      icon: "💝"
    },
    {
      title: "Respectful Environment",
      description: "Cover head, remove shoes, and maintain peaceful atmosphere.",
      icon: "🙏"
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
          <h4 className="text-orange-600 font-semibold mb-4">Community Kitchen</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Langar Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the spirit of equality and community through our Langar service,
            where free meals are served to all visitors in our community kitchen.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Langar</h2>
            <p className="text-gray-600 mb-6">
              Langar is a cornerstone of Sikh practice, embodying the principles of equality,
              community service, and selfless giving. Our community kitchen serves fresh,
              vegetarian meals to everyone, regardless of their background.
            </p>
            <p className="text-gray-600 mb-6">
              The tradition of Langar was started by Guru Nanak Dev Ji to challenge the
              caste system and promote equality. Today, it continues to serve as a powerful
              demonstration of community service and shared responsibility.
            </p>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Service</h3>
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-gray-600">{item.time}</span>
                  </div>
                ))}
              </div>
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
          </motion.div>
        </div>

        {/* Volunteer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Volunteer for Seva</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in serving the community through Langar seva. We welcome volunteers
            for cooking, serving, and cleaning. No experience necessary - just a willing heart.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors duration-200"
          >
            Sign Up for Seva
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 