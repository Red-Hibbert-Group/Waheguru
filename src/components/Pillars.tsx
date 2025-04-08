'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const pillars = [
    {
      title: "NAAM JAPO",
      subtitle: "Meditate on God's Name",
      icon: (
        <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      practices: [
        {
          title: "Kirtan",
          description: "Singing hymns and devotional songs from the Guru Granth Sahib, accompanied by traditional instruments like the harmonium, tabla, and stringed instruments.",
          icon: "🎵"
        },
        {
          title: "Paath",
          description: "Recitation of scriptures like Japji Sahib, Rehras Sahib, and Sukhmani Sahib with focus on understanding the meaning and applying the teachings in daily life.",
          icon: "📖"
        },
        {
          title: "Simran",
          description: "Silent meditation on God's name (Waheguru), practiced individually or in a group setting to cultivate inner peace and divine connection.",
          icon: "🧘‍♂️"
        }
      ],
      quote: "Remember the One, who pervades all creation; God's Name is the Support of the soul.",
      quoteAuthor: "Guru Nanak Dev Ji",
      learnMoreLink: "/naam-japo"
    },
    {
      title: "KIRAT KARO",
      subtitle: "Earn an Honest Living",
      icon: (
        <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7v-4h2v4h3l-4 4-4-4h3z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      practices: [
        {
          title: "Ethical Work",
          description: "Pursuing an occupation that adheres to moral principles and benefits society, while avoiding exploitative or harmful activities.",
          icon: "🛠️"
        },
        {
          title: "Hard Work",
          description: "Embracing diligence and dedication in all endeavors, reflecting commitment to excellence and service in both professional and personal life.",
          icon: "💪"
        },
        {
          title: "Self-Reliance",
          description: "Maintaining independence through honest labor while contributing to family and community, avoiding dependency on others for basic needs.",
          icon: "🌱"
        }
      ],
      quote: "He who earns with the sweat of his brow and shares with others, has discovered the path of righteousness.",
      quoteAuthor: "Guru Nanak Dev Ji",
      learnMoreLink: "/kirat-karo"
    },
    {
      title: "VAND CHHAKO",
      subtitle: "Share with Others",
      icon: (
        <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zm-9 15a6 6 0 110-12 6 6 0 010 12zm0-10a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      practices: [
        {
          title: "Langar",
          description: "The community kitchen where free meals are served to all visitors regardless of faith, caste, gender, economic status or ethnicity, promoting equality and inclusion.",
          icon: "🍲"
        },
        {
          title: "Dasvandh",
          description: "Contributing one-tenth (10%) of one's income to charitable causes and community development, supporting those in need.",
          icon: "🤲"
        },
        {
          title: "Seva",
          description: "Selfless service without expectation of reward or recognition, done with humility and love for humanity, reflecting divine connection.",
          icon: "❤️"
        }
      ],
      quote: "The one who shares what they have, shall receive treasures in abundance.",
      quoteAuthor: "Guru Arjan Dev Ji",
      learnMoreLink: "/vand-chhako"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute bottom-40 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-40 right-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-lg text-orange-600 font-medium">Understanding Sikh Philosophy</span>
          <h2 className="text-4xl font-bold text-neutral-900 mt-2 mb-4">
            The Three Pillars of Sikhism
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            The three fundamental principles of Sikhi that guide daily living and spiritual practice
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className={`rounded-3xl overflow-hidden shadow-xl ${pillar.bgColor}`}
            >
              <div className="grid md:grid-cols-3 lg:grid-cols-4">
                {/* Left sidebar - colored section with icon */}
                <div className={`bg-gradient-to-br ${pillar.color} text-white p-8 flex flex-col items-center justify-center text-center md:col-span-1`}>
                  <div className="mb-6 transform transition-transform duration-500 hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{pillar.subtitle}</p>
                  <div className="mt-4 pt-4 border-t border-white/30 w-full">
                    <blockquote className="italic text-sm">
                      "{pillar.quote}"
                      <footer className="mt-2 font-medium not-italic">
                        — {pillar.quoteAuthor}
                      </footer>
                    </blockquote>
                  </div>
                </div>
                
                {/* Main content area */}
                <div className="p-8 md:p-10 md:col-span-2 lg:col-span-3">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                        Key Practices of {pillar.title}
                      </h4>
                      
                      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                        {pillar.practices.map((practice) => (
                          <div 
                            key={practice.title}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="flex items-start mb-4">
                              <span className="text-2xl mr-3">{practice.icon}</span>
                              <h5 className="text-lg font-medium text-neutral-900">{practice.title}</h5>
                            </div>
                            <p className="text-neutral-600 text-sm">{practice.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link 
                        href={pillar.learnMoreLink}
                        className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${pillar.color} text-white 
                        transition-all duration-300 hover:shadow-md hover:opacity-90`}
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/faith"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 
            transition-colors duration-300 shadow-md"
          >
            <span>Explore Sikh Faith & Philosophy</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 