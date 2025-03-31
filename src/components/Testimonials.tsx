'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      quote: "The support and guidance from the Waheguru community has been transformative. Their educational programs have given my children hope for a brighter future.",
      author: "Jaspreet Singh",
      role: "Community Member",
      avatar: "/images/avatar-1.jpg" // Replace with actual avatar path or use default
    },
    {
      quote: "I've volunteered with Waheguru for two years now, and the sense of community and purpose I've found is incredible. The impact we make together is truly inspiring.",
      author: "Amrita Kaur",
      role: "Volunteer",
      avatar: "/images/avatar-2.jpg" // Replace with actual avatar path or use default
    },
    {
      quote: "The cultural education and language programs helped me connect with my heritage in ways I never thought possible. I'm grateful for this community.",
      author: "Ravinder Gill",
      role: "Program Participant",
      avatar: "/images/avatar-3.jpg" // Replace with actual avatar path or use default
    },
    {
      quote: "During difficult times, the support from Waheguru's community services made all the difference for my family. They truly embody the spirit of seva.",
      author: "Gurpreet Dhaliwal",
      role: "Community Member",
      avatar: "/images/avatar-4.jpg" // Replace with actual avatar path or use default
    }
  ]

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, testimonials.length, isInView])

  // Navigation functions
  const goToPrevious = () => {
    setAutoplay(false)
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setAutoplay(false)
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToIndex = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  // Text variants for animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-orange-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-100/30 to-transparent"></div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange-200 blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-amber-200 blur-3xl -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary-600">Voices</span> from Our Community
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Hear from members of our community about the impact of our programs and initiatives.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Main testimonial area */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-10 overflow-hidden shadow-xl min-h-[320px] md:min-h-[280px] flex items-center">
            {/* Quote decoration - positioned differently for mobile vs desktop */}
            <div className="absolute top-6 left-6 text-primary-200 opacity-20 md:opacity-30 hidden md:block">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391C14.017 10.257 16.748 7.41 20.143 7.41v3.304c-1.513 0-2.739 1.394-2.739 3.11V21h-3.387zm-9.304 0v-7.391C4.713 10.257 7.443 7.41 10.839 7.41v3.304c-1.513 0-2.739 1.394-2.739 3.11V21H4.713z" />
              </svg>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full md:pl-8 py-6"
              >
                <div className="md:flex md:items-center md:gap-8">
                  {/* Testimonial content */}
                  <div className="md:flex-1 relative">
                    {/* Smaller quote icon for mobile only */}
                    <div className="absolute -top-3 -left-2 text-primary-200 opacity-20 md:hidden">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391C14.017 10.257 16.748 7.41 20.143 7.41v3.304c-1.513 0-2.739 1.394-2.739 3.11V21h-3.387zm-9.304 0v-7.391C4.713 10.257 7.443 7.41 10.839 7.41v3.304c-1.513 0-2.739 1.394-2.739 3.11V21H4.713z" />
                      </svg>
                    </div>
                    
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-lg md:text-xl text-neutral-700 italic mb-6 font-light leading-relaxed md:pr-12 pl-1"
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.div>
                    
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                      className="flex items-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 overflow-hidden">
                        {testimonials[currentIndex].avatar ? (
                          <Image 
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].author}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-primary-600 font-bold">
                            {testimonials[currentIndex].author.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">
                          {testimonials[currentIndex].author}
                        </h3>
                        <p className="text-neutral-500 text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2 md:px-6">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/80 shadow-lg text-neutral-700 hover:bg-primary-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white/80 shadow-lg text-neutral-700 hover:bg-primary-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                index === currentIndex 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-neutral-300 hover:bg-primary-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Play/Pause button for slideshow */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors"
          >
            {autoplay ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
} 