'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/components/Logo'
import Header from '@/components/Header'

const pillars = [
  {
    title: "Naam Japna",
    description: "The practice of meditation and remembrance of God's name. This pillar emphasizes the importance of connecting with the Divine through meditation and prayer.",
    details: [
      "Daily meditation on God's name",
      "Recitation of Gurbani (sacred hymns)",
      "Maintaining a spiritual connection",
      "Practicing mindfulness in daily life"
    ],
    icon: "🙏"
  },
  {
    title: "Kirat Karni",
    description: "Earning an honest living through hard work and dedication. This pillar emphasizes the importance of honest work and self-reliance.",
    details: [
      "Working honestly and diligently",
      "Avoiding exploitation and fraud",
      "Contributing to society through work",
      "Maintaining ethical business practices"
    ],
    icon: "💼"
  },
  {
    title: "Vand Chakna",
    description: "Sharing with others and contributing to the community. This pillar emphasizes the importance of selfless service and generosity.",
    details: [
      "Sharing resources with those in need",
      "Participating in community service",
      "Supporting charitable causes",
      "Helping others without expectation"
    ],
    icon: "🤝"
  }
]

const philosophy = [
  {
    title: "Equality",
    description: "Sikhism teaches that all human beings are equal, regardless of their race, gender, or social status. This principle is reflected in the langar (community kitchen) where everyone sits together to eat.",
    icon: "⚖️"
  },
  {
    title: "Service",
    description: "Selfless service (seva) is a fundamental aspect of Sikhism. It involves helping others without expecting anything in return, promoting community welfare.",
    icon: "🫂"
  },
  {
    title: "Justice",
    description: "Sikhism emphasizes standing up for justice and protecting the rights of all people. This includes speaking out against oppression and working towards social equality.",
    icon: "⚔️"
  }
]

export default function FaithPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] w-full pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center py-12">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[65vh] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg"
                alt="Sikh Traditions"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                Discover<br />Sikh Faith
              </h1>
              <p className="text-xl text-gray-700 max-w-xl">
                Explore the rich traditions, philosophy, and teachings of Sikhism - 
                a religion that emphasizes equality, service, and spiritual growth.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full 
                  font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 
                  shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
                <Link 
                  href="/about"
                  className="inline-block bg-transparent border-2 border-primary-600 text-primary-600 
                  px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 
                  transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Understanding Sikhism</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Sikhism is a monotheistic religion founded in the 15th century in the Punjab region of South Asia.
            It emphasizes the importance of living a truthful life, serving others, and maintaining a connection with God.
          </p>
        </div>

        {/* Three Pillars Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">The Three Pillars of Sikhism</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-neutral-700 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-neutral-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Philosophy Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sacred Texts</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Guru Granth Sahib - The eternal Guru</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Dasam Granth - Collection of compositions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Ik Onkar - One God</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Hukam - Divine Order</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Seva - Selfless Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Explore More Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Recommended Books</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.amazon.com/Guru-Granth-Sahib-English-Translation/dp/0143105501" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Guru Granth Sahib: English Translation</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com/Sikhism-Very-Short-Introduction/dp/0195662765" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Sikhism: A Very Short Introduction</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com/History-Sikhs-1469-1839-Vol/dp/0195673082" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>A History of the Sikhs</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Online Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.sikhnet.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>SikhNet - Educational Resources</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sikhs.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Sikhs.org - Information Portal</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sgpc.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>SGPC - Official Sikh Organization</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Courses & Workshops</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.coursera.org/courses?query=sikhism" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Coursera - Sikhism Courses</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.udemy.com/courses/search/?q=sikhism" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Udemy - Sikhism Classes</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sikhresearchinstitute.org/programs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Sikh Research Institute Programs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visit Our Gurdwara */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Sikh Faith in Person</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8">
            Visit our Gurdwara to experience the teachings of Sikhism firsthand. Participate in prayers, 
            langar (community meal), and connect with the Sikh community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 
            transition-colors duration-300 shadow-md"
          >
            <span>Plan Your Visit</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 