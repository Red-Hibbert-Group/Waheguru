'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const stats = [
    {
      value: 3,
      symbol: '+',
      label: 'Gurdwaras',
      description: 'Serving the community across multiple locations',
      color: 'bg-primary-500',
      hoverColor: 'group-hover:bg-primary-600',
      textColor: 'text-primary-600',
      iconBg: 'bg-primary-100',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 1000,
      symbol: '+',
      label: 'Daily Meals Served',
      description: 'Free langar service to all visitors daily',
      color: 'bg-primary-500',
      hoverColor: 'group-hover:bg-primary-600',
      textColor: 'text-primary-600',
      iconBg: 'bg-primary-100',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2L8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12H16V16H12V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 50,
      symbol: '+',
      label: 'Community Events',
      description: 'Regular cultural and spiritual gatherings',
      color: 'bg-primary-500',
      hoverColor: 'group-hover:bg-primary-600',
      textColor: 'text-primary-600',
      iconBg: 'bg-primary-100',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 5000,
      symbol: '+',
      label: 'Members',
      description: 'Growing family of devotees and volunteers',
      color: 'bg-primary-500',
      hoverColor: 'group-hover:bg-primary-600',
      textColor: 'text-primary-600',
      iconBg: 'bg-primary-100',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-white relative" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Our <span className="text-primary-600">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Serving the community through spiritual guidance, charitable work, and community building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="relative group overflow-hidden"
            >
              {/* Card with subtle shadow and hover effect */}
              <div className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-neutral-200 group-hover:border-primary-300 h-full flex flex-col items-center">
                {/* Colorful top border that expands on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${stat.color} transform origin-left transition-all duration-300 group-hover:h-2`}></div>
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20, 
                      delay: 0.1 + index * 0.1
                    }}
                    className={`p-5 rounded-full ${stat.iconBg} ${stat.textColor} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="absolute -inset-1 bg-primary-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </div>
                
                {/* Stat number with counting animation */}
                <div className="flex items-baseline justify-center mb-3">
                  <h3 className={`text-4xl md:text-5xl font-bold ${stat.textColor}`}>
                    {isInView ? (
                      <CountUp 
                        end={stat.value} 
                        duration={2.5} 
                        delay={0.2}
                        useEasing={true}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <span className={`text-4xl md:text-5xl font-bold ${stat.textColor} ml-1`}>{stat.symbol}</span>
                </div>
                
                {/* Label with animated underline */}
                <div className="relative mb-3">
                  <h4 className="text-xl font-semibold text-neutral-800">{stat.label}</h4>
                  <div className={`h-0.5 w-0 ${stat.color} absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full rounded-full`}></div>
                </div>
                
                {/* Description */}
                <p className="text-neutral-600 text-sm text-center">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 