'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const ctaItems = [
    {
      title: "Volunteer",
      description: "Join our team of dedicated volunteers making a difference in the community",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/volunteer",
      color: "from-blue-500 to-sky-400",
      hover: "hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500"
    },
    {
      title: "Donate",
      description: "Support our mission and make a lasting impact with your contribution",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/donate",
      color: "from-orange-500 to-amber-400",
      hover: "hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-500"
    },
    {
      title: "Attend Events",
      description: "Participate in our upcoming community gatherings and cultural celebrations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: "/events",
      color: "from-emerald-500 to-green-400",
      hover: "hover:bg-gradient-to-br hover:from-emerald-600 hover:to-green-500"
    }
  ]
  
  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30 via-transparent to-yellow-100/30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get <span className="text-orange-600">Involved</span> Today
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            There are many ways to contribute to our mission and become an active member of our community.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group"
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex rounded-full p-4 bg-gradient-to-br ${item.color} text-white mb-6 shadow-lg
                  transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-neutral-800">
                  {item.title}
                </h3>
                
                <p className="text-neutral-600 mb-8">
                  {item.description}
                </p>
                
                <Link 
                  href={item.link}
                  className={`inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200
                  text-neutral-700 font-medium transition-all duration-300 ${item.hover} hover:text-white hover:border-transparent
                  shadow-sm hover:shadow-md group-hover:-translate-y-1`}
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/40 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom comprehensive CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500
            text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-200/50
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            Contact Us to Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <p className="mt-4 text-neutral-600">
            Have questions? Reach out to us and we'll help you find the best way to contribute.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 