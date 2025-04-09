'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Activity {
  title: string
  description: string
  schedule: string
  icon: string
}

interface Benefit {
  title: string
  description: string
  icon: string
}

export default function YouthActivities() {
  const activities: Activity[] = [
    {
      title: "Sports Programs",
      description: "Weekly sports activities including basketball, soccer, and gatka training.",
      schedule: "Weekends, 10:00 AM - 2:00 PM",
      icon: "⚽"
    },
    {
      title: "Leadership Camp",
      description: "Monthly leadership development workshops for young Sikhs.",
      schedule: "First Saturday of each month",
      icon: "🎯"
    },
    {
      title: "Youth Kirtan",
      description: "Learn and practice kirtan with experienced ragis.",
      schedule: "Every Sunday, 4:00 PM - 6:00 PM",
      icon: "🎵"
    },
    {
      title: "Summer Camp",
      description: "Annual summer camp focusing on Sikh values, culture, and fun activities.",
      schedule: "July-August (2 weeks)",
      icon: "⛺"
    }
  ]

  const benefits: Benefit[] = [
    {
      title: "Personal Growth",
      description: "Develop leadership skills and self-confidence",
      icon: "🌱"
    },
    {
      title: "Cultural Connection",
      description: "Stay connected with Sikh heritage and values",
      icon: "🤝"
    },
    {
      title: "Community Building",
      description: "Make lifelong friendships with fellow youth",
      icon: "👥"
    },
    {
      title: "Physical Fitness",
      description: "Stay active and healthy through sports",
      icon: "💪"
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
          <h4 className="text-orange-600 font-semibold mb-4">Youth Programs</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Youth Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engaging programs designed to help young Sikhs grow spiritually,
            physically, and socially while having fun.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {activities.map((activity) => (
            <div key={activity.title} className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{activity.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                  <p className="text-orange-600">{activity.schedule}</p>
                </div>
              </div>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Program Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Youth Programs</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register your children for our youth activities and help them grow in a
            supportive, fun environment.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors duration-200"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 