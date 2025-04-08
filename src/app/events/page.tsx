'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  category: string
  image: string
  categoryColor: string
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  numberOfAttendees: number;
  specialRequirements: string;
}

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isRegistering, setIsRegistering] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfAttendees: 1,
    specialRequirements: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)

  // Sample events data
  const events: Event[] = [
    {
      id: "event-1",
      title: "Annual Cultural Celebration",
      date: "July 15, 2024",
      time: "11:00 AM - 6:00 PM",
      location: "Fremont Gurdwara",
      description: "Join us for a day of music, dance, food, and cultural activities celebrating our heritage.",
      category: "Cultural",
      image: "/images/667c8ef5919336892cfe67e2_Main.jpg",
      categoryColor: "bg-orange-100 text-orange-800 border-orange-200"
    },
    {
      id: "event-2",
      title: "Youth Leadership Workshop",
      date: "July 25, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center",
      description: "A workshop designed to develop leadership skills in young adults from our community.",
      category: "Education",
      image: "/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg",
      categoryColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      id: "event-3",
      title: "Community Service Day",
      date: "August 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Various Locations",
      description: "A day dedicated to giving back to our community through various service projects.",
      category: "Service",
      image: "/images/667e08c8024626a0fdf13e63_fremont-5.png",
      categoryColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
      id: "event-4",
      title: "Gurpurab Celebration",
      date: "August 15, 2024",
      time: "All Day",
      location: "Main Gurdwara",
      description: "Special celebration commemorating the birth anniversary of Guru Nanak Dev Ji.",
      category: "Religious",
      image: "/images/667e08c8024626a0fdf13e63_fremont-5.png",
      categoryColor: "bg-purple-100 text-purple-800 border-purple-200"
    }
  ]

  const categories = Array.from(new Set(events.map(event => event.category)))

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category === selectedCategory)
    : events

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventTitle: selectedEvent?.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      setShowRegistrationModal(false)
      setFormData({ name: '', email: '', phone: '', numberOfAttendees: 1, specialRequirements: '' })
      alert('Registration successful! Please check your email for confirmation.')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Failed to register. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-orange-600">Events</span>
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Join us for these upcoming gatherings and activities in our community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${!selectedCategory 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-orange-50'}`}
          >
            All Events
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${selectedCategory === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-orange-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${event.categoryColor}`}>
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedEvent(event)
                    setShowRegistrationModal(true)
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration Modal */}
        {showRegistrationModal && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Register for Event</h2>
              <h3 className="text-lg font-semibold text-orange-600 mb-6">{selectedEvent.title}</h3>
              
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowRegistrationModal(false)
                      setSelectedEvent(null)
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Register
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
} 