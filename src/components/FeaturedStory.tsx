'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedStoryProps {
  title: string
  description: string
  image: string
}

export default function FeaturedStory({ title, description, image }: FeaturedStoryProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  // Define our animation variants
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
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }
  
  // Featured initiatives data
  const initiatives = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "Community Outreach",
      description: "Bringing resources and support to underserved neighborhoods"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Global Impact",
      description: "Extending our service beyond borders to help communities worldwide"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Youth Programs",
      description: "Empowering the next generation with education and leadership skills"
    }
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? {
            opacity: 0.6,
            scale: 1,
            x: isHovered ? 10 : 0,
          } : {}}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? {
            opacity: 0.5,
            scale: 1,
            x: isHovered ? -10 : 0,
          } : {}}
          transition={{ 
            duration: 2.5,
            ease: "easeOut",
            delay: 0.3
          }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid md:grid-cols-5">
            {/* Image Side - now with larger area */}
            <div className="relative h-[300px] md:h-auto md:col-span-2 overflow-hidden">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: isHovered ? 1.05 : 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={image} 
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-l"></div>
                
                {/* Overlay ribbon */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2 px-4 md:hidden">
                  <p className="text-sm font-medium">Featured Initiative</p>
                </div>
                
                {/* Floating badge - desktop only */}
                <div className="absolute top-6 left-6 hidden md:block">
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2 px-4 rounded-full shadow-lg"
                  >
                    <p className="text-sm font-medium">Featured Initiative</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Content Side - now with 3 columns */}
            <div className="p-8 md:p-12 relative md:col-span-3">
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold leading-tight relative"
                >
                  {title}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "40%" } : { width: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-1 bg-gradient-to-r from-orange-500 to-amber-400 mt-2"
                  />
                </motion.h2>
                
                <motion.p variants={itemVariants} className="text-lg text-neutral-700 leading-relaxed">
                  {description}
                </motion.p>
                
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mt-8">
                  {initiatives.map((initiative, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5, 
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 10 
                        } 
                      }}
                      className="flex items-start gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <span className="p-2 bg-orange-100 rounded-full text-orange-600 flex-shrink-0">
                        {initiative.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{initiative.title}</h3>
                        <p className="text-neutral-600 text-sm mt-1">{initiative.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 mt-8 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl"
                >
                  {[
                    { value: "500+", label: "Volunteers" },
                    { value: "20+", label: "Programs" },
                    { value: "5,000+", label: "Lives Impacted" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-orange-600">{stat.value}</p>
                      <p className="text-xs md:text-sm text-neutral-600">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
                
                <motion.div variants={itemVariants} className="mt-6">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-600 text-white font-medium
                    hover:bg-orange-700 transition-colors duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Learn More About Our Work
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 