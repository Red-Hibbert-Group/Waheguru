'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageGalleryProps {
  images: string[]
  title: string
  description: string
}

export default function ImageGallery({ images, title, description }: ImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [showFullscreen, setShowFullscreen] = useState(false)
  
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
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  // Get images for masonry layout in columns
  const getImagesForColumn = (columnIndex: number, columnCount: number) => {
    return images.filter((_, index) => index % columnCount === columnIndex)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            {title}
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Mobile Featured Image */}
        <div className="md:hidden mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-square"
            onClick={() => setShowFullscreen(true)}
          >
            <Image
              src={images[activeImage]}
              alt="Featured gallery image"
              fill
              className="object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-4">
                <p className="text-white text-sm">Tap to view fullscreen</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry grid - desktop only */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {getImagesForColumn(columnIndex, 3).map((image, index) => {
                  const actualIndex = images.indexOf(image)
                  const randomHeight = index % 2 === 0 ? 'h-80' : 'h-96'
                  
                  return (
                    <motion.div
                      key={image}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className={`relative ${randomHeight} rounded-xl overflow-hidden shadow-lg cursor-pointer 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group`}
                      onClick={() => {
                        setActiveImage(actualIndex)
                        setShowFullscreen(true)
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${actualIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                        flex items-end justify-between p-4">
                        <p className="text-white text-sm font-medium">View larger</p>
                        <span className="text-white p-2 bg-black/20 rounded-full">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile image grid */}
        <div className="grid grid-cols-2 gap-3 mt-4 md:hidden">
          {images.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer
                ${activeImage === index ? 'ring-2 ring-orange-500' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Dots - Mobile Only */}
        <div className="flex justify-center mt-6 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                activeImage === index ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* "View all photos" button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button 
            onClick={() => setShowFullscreen(true)}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition-colors 
              flex items-center space-x-2 text-lg font-medium"
          >
            <span>View All Photos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Fullscreen gallery */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowFullscreen(false)}
          >
            <button 
              className="absolute top-4 right-4 z-10 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setShowFullscreen(false)
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative w-full max-w-4xl h-full max-h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[activeImage]}
                  alt={`Gallery image ${activeImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {activeImage + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 