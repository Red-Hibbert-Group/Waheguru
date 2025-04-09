'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EducationProgramsPage() {
  const courses = [
    {
      title: "Gurmukhi Classes",
      schedule: "Saturdays, 10:00 AM - 12:00 PM",
      description: "Learn to read and write Punjabi in the Gurmukhi script.",
      level: "Beginner to Advanced",
      icon: "✍️"
    },
    {
      title: "Sikh History",
      schedule: "Sundays, 11:00 AM - 1:00 PM",
      description: "Explore the rich history of Sikhism from its origins to modern times.",
      level: "All levels",
      icon: "📚"
    },
    {
      title: "Gurbani Understanding",
      schedule: "Wednesdays, 6:00 PM - 8:00 PM",
      description: "Deep dive into the meanings of Gurbani and their practical application.",
      level: "Intermediate",
      icon: "🕉️"
    },
    {
      title: "Kirtan Classes",
      schedule: "Fridays, 5:00 PM - 7:00 PM",
      description: "Learn traditional Sikh musical instruments and singing.",
      level: "Beginner to Advanced",
      icon: "🎵"
    }
  ]

  const features = [
    {
      title: "Expert Teachers",
      description: "Learn from experienced and knowledgeable instructors.",
      icon: "👨‍🏫"
    },
    {
      title: "Interactive Learning",
      description: "Engage in discussions, activities, and practical exercises.",
      icon: "💭"
    },
    {
      title: "Study Materials",
      description: "Access to books, digital resources, and learning aids.",
      icon: "📖"
    },
    {
      title: "Flexible Schedule",
      description: "Multiple time slots to accommodate different schedules.",
      icon: "⏰"
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
          <h4 className="text-orange-600 font-semibold mb-4">Learn & Grow</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Education Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage of Sikhism through our comprehensive education
            programs designed for learners of all ages and backgrounds.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{course.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-orange-600">{course.schedule}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="bg-orange-50 rounded-xl px-4 py-2 inline-block">
                <span className="text-orange-600 font-medium">{course.level}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Program Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our educational programs and embark on a transformative journey of
            learning about Sikh history, philosophy, and practices.
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