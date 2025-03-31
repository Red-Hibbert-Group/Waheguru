'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Hero Section */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">Understanding Waheguru</h1>
					<p className="text-xl text-neutral-700 max-w-3xl mx-auto">
						Exploring the concept of the divine in Sikhism and our community's mission to embody its principles.
					</p>
				</motion.div>

				{/* Concept of Waheguru */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="mb-20"
				>
					<div className="bg-white rounded-2xl shadow-soft overflow-hidden">
						<div className="md:flex">
							<div className="md:w-1/2 relative h-64 md:h-auto">
								<Image 
									src="/images/6688458a164260a6abdb0087_IMG_6764-scaled.jpg" 
									alt="Waheguru Symbol"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8 md:w-1/2 md:p-12">
								<h2 className="text-3xl font-bold text-primary-600 mb-4">The Meaning of Waheguru</h2>
								<p className="text-neutral-700 mb-6">
									<span className="font-semibold text-primary-600">Waheguru</span> (ਵਾਹਿਗੁਰੂ) is the most common term used in Sikhism to refer to God. The word literally means "Wondrous Teacher" or "Wonderful Lord" and expresses an awe and amazement at the divine.
								</p>
								<p className="text-neutral-700">
									In Sikhism, Waheguru is described as a formless and omnipresent deity with whom devotees can establish a personal relationship by following the teachings of the Sikh Gurus. The term represents ultimate goodness, into which the purified soul merges while evil is vanquished.
								</p>
								<div className="mt-6 inline-block">
									<div className="text-lg font-semibold text-primary-600">"The world is a garden, Waheguru its gardener."</div>
									<div className="h-0.5 w-full bg-primary-400 mt-1"></div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Core Principles Grid */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="mb-20"
				>
					<h2 className="text-3xl font-bold text-primary-600 text-center mb-12">The Three Pillars of Sikhism</h2>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-soft border border-primary-100 hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
							<div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-primary-600 mb-3">Naam Japo</h3>
							<p className="text-neutral-700">
								Meditation on God's name to control the five evils and live a fulfilling life. This involves regular contemplation and prayer to connect with the divine.
							</p>
						</div>
						
						<div className="bg-white p-8 rounded-2xl shadow-soft border border-primary-100 hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
							<div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-primary-600 mb-3">Kirat Karo</h3>
							<p className="text-neutral-700">
								Earning an honest living through hard work and ethical means. This principle emphasizes the dignity of labor and rejects exploitation or fraud in one's work.
							</p>
						</div>
						
						<div className="bg-white p-8 rounded-2xl shadow-soft border border-primary-100 hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
							<div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-primary-600 mb-3">Vand Chhako</h3>
							<p className="text-neutral-700">
								Sharing with others and helping those in need. This practice of selfless service (seva) and charity is essential to building a strong, supportive community.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Our Mission Section */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="mb-20"
				>
					<div className="bg-white rounded-2xl shadow-soft overflow-hidden">
						<div className="md:flex flex-row-reverse">
							<div className="md:w-1/2 relative h-64 md:h-auto">
								<Image 
									src="/images/667e08c8024626a0fdf13e63_fremont-5.png" 
									alt="Community Service"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8 md:w-1/2 md:p-12">
								<h2 className="text-3xl font-bold text-primary-600 mb-4">Our Community Mission</h2>
								<p className="text-neutral-700 mb-4">
									Our organization is dedicated to embodying the principles of Sikhism in practical ways that benefit our community. We strive to:
								</p>
								<ul className="space-y-3">
									<li className="flex items-start">
										<svg className="w-5 h-5 text-primary-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>Empower communities through seva (selfless service)</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-primary-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>Provide langar (free community meals) to all who need it</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-primary-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>Promote equality, compassion, and respect for all people</span>
									</li>
									<li className="flex items-start">
										<svg className="w-5 h-5 text-primary-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>Create sustainable positive change in our communities</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Five Virtues */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="mb-20"
				>
					<h2 className="text-3xl font-bold text-primary-600 text-center mb-12">The Five Virtues We Embrace</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
						{[
							{ name: "Sat", description: "Truth in thoughts, words, and actions", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
							{ name: "Santokh", description: "Contentment and gratitude for what we have", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
							{ name: "Daya", description: "Compassion towards all living beings", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
							{ name: "Nimrata", description: "Humility in serving others", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
							{ name: "Pyaar", description: "Unconditional love for all humanity", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
						].map((virtue, index) => (
							<div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-primary-100 hover:border-primary-300 transition-all duration-300 text-center">
								<div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
									<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={virtue.icon} />
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-primary-600 mb-2">{virtue.name}</h3>
								<p className="text-neutral-700 text-sm">{virtue.description}</p>
							</div>
						))}
					</div>
				</motion.div>
				
				{/* Join Us CTA */}
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.5 }}
					className="text-center"
				>
					<div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 border border-primary-100">
						<h2 className="text-3xl font-bold text-primary-600 mb-4">Join Our Community</h2>
						<p className="text-neutral-700 max-w-3xl mx-auto mb-8">
							Become part of our growing family of devotees and volunteers dedicated to living the principles of Sikhism and making a positive impact in our community.
						</p>
						<div className="inline-block">
							<a 
								href="/contact"
								className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors duration-300"
							>
								Get Involved
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
} 