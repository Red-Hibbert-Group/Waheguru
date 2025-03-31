'use client'

import { motion, useInView } from 'framer-motion' 
import { useRef } from 'react'
import Link from 'next/link'

export default function Locations() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Location data
  const locations = [
    {
      name: "Waheguru Sikh Center Fremont",
      address: "180 Vineyard Drive, Fremont, CA 94536",
      phoneNumbers: ["+1 (510) 579-4679"],
      schedule: "Daily, 5:00 AM - 9:00 PM",
      coordinates: {
        lat: 37.560087,
        lng: -121.994900
      }
    },
    {
      name: "Waheguru Sikh Center Tracy",
      address: "29707 S Manthey Rd, Tracy, CA 95337",
      phoneNumbers: ["+1 (510) 579-4679"],
      schedule: "Daily, 5:00 AM - 9:00 PM",
      coordinates: {
        lat: 37.735968,
        lng: -121.352483
      }
    },
    {
      name: "Waheguru Sikh Center Manteca",
      address: "1201 S Airport Way, Manteca, CA 95336",
      phoneNumbers: ["+1 (510) 579-4679", "+1 (209) 275-1408"],
      schedule: "Daily, 5:00 AM - 9:00 PM", 
      coordinates: {
        lat: 37.784772,
        lng: -121.217711
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const locationVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="locations" 
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 bg-primary-200 w-[600px] h-[600px] rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 bg-secondary-200 w-[500px] h-[500px] rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-neutral-900 lg:text-5xl mb-6"
          >
            Our Locations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-700 max-w-3xl mx-auto"
          >
            Visit us at one of our Gurdwaras. Everyone is welcome regardless of 
            background, religion, or beliefs.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={locationVariants}
              className="bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-primary-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-neutral-900 text-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg">
                    {location.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <p className="text-neutral-700">{location.address}</p>
                </div>

                <div className="mb-4 flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  <div>
                    {location.phoneNumbers.map((phone, idx) => (
                      <p key={idx} className="text-secondary-600 hover:text-secondary-700 transition-colors">
                        <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mb-6 flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p className="text-neutral-700">{location.schedule}</p>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View on map
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="ml-1 w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </Link>
                  
                  <Link
                    href={`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/locations"
            className="inline-flex items-center justify-center bg-primary-500 text-neutral-900 
            px-8 py-3 text-lg font-semibold rounded-xl 
            hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Locations
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 