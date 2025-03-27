'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState('LIVERMORE')

  const locations = [
    {
      name: 'LIVERMORE',
      image: '/images/gurdwara-livermore.jpg',
      title: 'Gurdwara Sahib of Livermore',
      description: 'The Tri Valley Sikh Center is a non-profit organization, established with a vision of "Sarbat Da Bhala," has become a beacon of Sikh teachings and community in the Tri-Valley area. Embracing the timeless teachings of the Guru Granth Sahib Ji, it fosters cultural, religious, and social consciousness.'
    },
    {
      name: 'SAN JOSE',
      image: '/images/gurdwara-sanjose.jpg',
      title: 'Gurdwara Sahib of San Jose',
      description: 'The San Jose Gurdwara serves as a spiritual hub for the Sikh community in the South Bay Area. With its serene atmosphere and dedicated sevadars, it provides a peaceful space for worship, learning, and community gathering.'
    },
    {
      name: 'FREMONT',
      image: '/images/gurdwara-fremont.jpg',
      title: 'Gurdwara Sahib of Fremont',
      description: 'The Fremont Gurdwara is a vibrant center of Sikh faith and culture in the East Bay. It offers regular services, educational programs, and community outreach initiatives, serving as a cornerstone for the local Sikh population.'
    }
  ]

  const currentLocation = locations.find(loc => loc.name === activeLocation) || locations[0]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            OUR LOCATIONS
          </h2>
          <p className="text-xl text-neutral-700 mb-12">
            FIND A GURDWARA NEAR YOU (CALIFORNIA ONLY)
          </p>

          {/* Location Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {locations.map((location) => (
              <button
                key={location.name}
                onClick={() => setActiveLocation(location.name)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.name === activeLocation
                    ? 'bg-primary-600 text-white shadow-lg hover:bg-primary-700'
                    : 'bg-neutral-400 text-white shadow hover:bg-neutral-500'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>

          {/* Tri Valley Sikh Center Logo */}
          <div className="mb-12">
            <Image
              src="/images/tri-valley-logo.png"
              alt="Tri Valley Sikh Center"
              width={400}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* Gurdwara Image with Fade Transition */}
          <div className="relative h-[500px] w-full mb-8 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={currentLocation.image}
              alt={`${currentLocation.title}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Gurdwara Title */}
          <h3 className="text-3xl font-bold text-primary-700 mb-6">
            {currentLocation.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
            {currentLocation.description}
          </p>
        </div>
      </div>
    </section>
  )
} 