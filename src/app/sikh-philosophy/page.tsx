'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

const philosophicalConcepts = [
  {
    title: "Core Principles",
    concepts: [
      {
        name: "Naam Japo",
        description: "Meditation and remembrance of the Divine Name",
        link: "/naam-japo"
      },
      {
        name: "Kirat Karo",
        description: "Earning an honest living through ethical means",
        link: "/kirat-karo"
      },
      {
        name: "Vand Chhako",
        description: "Sharing with others and serving the community",
        link: "/vand-chhako"
      }
    ]
  },
  {
    title: "Five Virtues",
    concepts: [
      {
        name: "Sat (Truth)",
        description: "Living truthfully and practicing honest conduct in all aspects of life",
        icon: "🌟"
      },
      {
        name: "Santokh (Contentment)",
        description: "Finding peace and satisfaction in what we have, free from greed",
        icon: "🕊️"
      },
      {
        name: "Daya (Compassion)",
        description: "Showing kindness and mercy to all beings, practicing empathy",
        icon: "💝"
      },
      {
        name: "Nimrata (Humility)",
        description: "Living with humility and avoiding ego, serving others selflessly",
        icon: "🙏"
      },
      {
        name: "Pyaar (Love)",
        description: "Universal love for all creation, seeing the Divine in everyone",
        icon: "❤️"
      }
    ]
  }
]

export default function SikhPhilosophyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-orange-600 font-semibold mb-4">Understanding the Path</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sikh Philosophy & Teachings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the profound wisdom and timeless teachings of Sikhism that guide us
            toward spiritual enlightenment and service to humanity.
          </p>
        </motion.div>

        {/* Main Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Core Beliefs</h2>
              <p className="text-xl mb-8">Universal Truth & Divine Unity</p>
              <blockquote className="italic text-orange-50 border-l-4 border-orange-200 pl-4">
                "There is but One God, His name is Truth, He is the Creator, He fears none, 
                He is without hate, He never dies, He is beyond birth and death, by His Grace one reaches Him."
                <footer className="mt-2 text-sm">— Mool Mantar</footer>
              </blockquote>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Foundation of Faith
              </h3>
              <p className="text-gray-600 mb-6">
                Sikhism teaches the values of equality, social justice, and honest living
                while emphasizing the importance of remembering the Divine in all aspects of life.
              </p>
              <p className="text-gray-600">
                The path of a Sikh is one of continuous learning, spiritual growth, and
                selfless service to humanity, guided by the teachings of the Gurus.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Philosophical Concepts */}
        {philosophicalConcepts.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (sectionIndex * 0.1) }}
            className="bg-white rounded-3xl shadow-xl p-12 mb-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {section.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {section.concepts.map((concept) => (
                <motion.div
                  key={concept.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:from-orange-100 hover:to-amber-100 transition-all duration-200 shadow-sm"
                >
                  {concept.link ? (
                    <Link href={concept.link} className="block">
                      <h4 className="text-xl font-medium text-gray-900 mb-3">{concept.name}</h4>
                      <p className="text-gray-600">{concept.description}</p>
                    </Link>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{concept.icon}</span>
                        <h4 className="text-xl font-medium text-gray-900">{concept.name}</h4>
                      </div>
                      <p className="text-gray-600">{concept.description}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Logo isScrolled={true} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  )
} 