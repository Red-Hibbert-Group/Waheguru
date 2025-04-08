'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: '',
    experience: '',
    interests: [] as string[]
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Volunteer opportunities data
  const volunteerAreas = [
    {
      title: "Langar Service",
      description: "Help prepare and serve meals in our community kitchen",
      schedule: "Daily, various shifts",
      icon: "🍽️"
    },
    {
      title: "Education Programs",
      description: "Assist with teaching Sikh history, language, and values",
      schedule: "Weekends and evenings",
      icon: "📚"
    },
    {
      title: "Youth Activities",
      description: "Mentor and guide young members in various programs",
      schedule: "Weekends",
      icon: "👥"
    },
    {
      title: "Community Outreach",
      description: "Help organize and participate in community service events",
      schedule: "Flexible",
      icon: "🤝"
    }
  ]

  const interestOptions = [
    "Langar Service",
    "Education Programs",
    "Youth Activities",
    "Community Outreach",
    "Event Organization",
    "Administrative Support",
    "Technical Support",
    "Media & Communications"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        area: '',
        availability: '',
        experience: '',
        interests: []
      })
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-orange-600">Volunteer</span> Team
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Make a difference in your community by volunteering your time and skills.
            Every contribution, no matter how small, helps us serve better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100 rounded-tr-full -z-10 opacity-70"></div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Volunteer Registration</h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your volunteer application. Our team will contact you soon to discuss next steps.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    id="availability"
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Experience
                  </label>
                  <textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your relevant experience"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
                >
                  {isLoading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>

          {/* Volunteer Opportunities */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">
                Volunteer Opportunities
              </h2>
              <div className="space-y-6">
                {volunteerAreas.map((area) => (
                  <div key={area.title} className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                      <p className="text-orange-600 font-medium mt-1">{area.schedule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">
                Benefits of Volunteering
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Make a positive impact in your community
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Develop new skills and gain experience
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Connect with like-minded individuals
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Build a stronger community together
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 