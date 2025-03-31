'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Event type definition
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

export default function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Sample upcoming events data
  const events: Event[] = [
    {
      id: "event-1",
      title: "Annual Cultural Celebration",
      date: "July 15, 2023",
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
      date: "July 25, 2023",
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
      date: "August 5, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Various Locations",
      description: "A day dedicated to giving back to our community through various service projects.",
      category: "Service",
      image: "/images/667e08c8024626a0fdf13e63_fremont-5.png",
      categoryColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
      id: "event-4",
      title: "Senior Citizens Meet",
      date: "August 12, 2023",
      time: "11:00 AM - 2:00 PM",
      location: "Waheguru Community Hall",
      description: "A special gathering for our senior community members featuring lunch and activities.",
      category: "Community",
      image: "/images/667e08b15ad4a78219a7e41b_1b39eccb-5ba0-425a-aa11-1d0023ff8e3b.jpg",
      categoryColor: "bg-purple-100 text-purple-800 border-purple-200"
    }
  ]
  
  // Get all unique categories
  const categories = Array.from(new Set(events.map(event => event.category)))
  
  // Filter events based on active category
  const filteredEvents = activeCategory 
    ? events.filter(event => event.category === activeCategory)
    : events
    
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }
  
  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-orange-50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Upcoming <span className="text-orange-600">Events</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Join us for these upcoming gatherings and activities in our community.
          </p>
        </motion.div>
        
        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
              ${!activeCategory 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Events
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${activeCategory === category 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Events grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Event image */}
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${event.categoryColor}`}>
                    {event.category}
                  </span>
                </div>
                
                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 text-center w-16">
                  <div className="text-xs text-gray-500">{event.date.split(',')[0]}</div>
                  <div className="text-xl font-bold text-gray-800">{event.date.split(' ')[1].replace(',', '')}</div>
                </div>
              </div>
              
              {/* Event content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all events button */}
        {events.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-orange-600 text-orange-600 
              font-medium hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              View All Events
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
} 