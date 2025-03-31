'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Define the Service interface
interface Service {
	title: string
	description: string
	icon: React.ReactNode
	link: string
}

export default function Services() {
	// Reference for the section to trigger animations when in view
	const sectionRef = useRef(null)
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

	// Define services data with SVG icons
	const services: Service[] = [
		{
			title: 'Langar Services',
			description:
				'Free community kitchen providing meals to all visitors regardless of background.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
					<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
					<line x1="6" y1="1" x2="6" y2="4"></line>
					<line x1="10" y1="1" x2="10" y2="4"></line>
					<line x1="14" y1="1" x2="14" y2="4"></line>
				</svg>
			),
			link: '/services/langar',
		},
		{
			title: 'Prayer Services',
			description:
				'Daily prayer services including Nitnem, Rehras Sahib, and Kirtan sessions.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
				</svg>
			),
			link: '/services/prayer',
		},
		{
			title: 'Education Programs',
			description:
				'Sikh history, philosophy, and language classes for all age groups.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
					<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
				</svg>
			),
			link: '/services/education',
		},
		{
			title: 'Community Support',
			description:
				'Social services, counseling, and support for community members in need.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
				</svg>
			),
			link: '/services/support',
		},
		{
			title: 'Youth Activities',
			description:
				'Sports, camps, and leadership programs designed for Sikh youth.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M9 18V5l12-2v13"></path>
					<circle cx="6" cy="18" r="3"></circle>
					<circle cx="18" cy="16" r="3"></circle>
				</svg>
			),
			link: '/services/youth',
		},
		{
			title: 'Cultural Events',
			description:
				'Celebrations of Gurpurabs, festivals, and cultural programs throughout the year.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
					<line x1="16" y1="2" x2="16" y2="6"></line>
					<line x1="8" y1="2" x2="8" y2="6"></line>
					<line x1="3" y1="10" x2="21" y2="10"></line>
				</svg>
			),
			link: '/services/events',
		},
	]

	// Animation variants for staggered animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0],
			},
		},
	}

	return (
		<section
			ref={sectionRef}
			className="py-24 relative bg-neutral-50 overflow-hidden"
		>
			{/* Background decorations */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
				<div className="absolute top-0 right-0 bg-primary-200 w-[400px] h-[400px] rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 blur-3xl" />
				<div className="absolute bottom-0 left-0 bg-secondary-200 w-[600px] h-[600px] rounded-full opacity-10 -translate-x-1/2 translate-y-1/2 blur-3xl" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section heading */}
				<div className="text-center mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="inline-block"
					>
						<span className="bg-primary-100 text-primary-800 text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
							Our Services
						</span>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-4 text-4xl font-bold text-neutral-900 lg:text-5xl"
					>
						How We Serve The Community
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-4 max-w-3xl mx-auto"
					>
						<p className="text-xl text-neutral-700">
							We are committed to serving humanity through various programs
							centered around Sikh principles of equality, service, and
							compassion.
						</p>
					</motion.div>
				</div>

				{/* Services grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
						>
							{/* Golden top border */}
							<div className="h-1 w-full bg-primary-500"></div>
							
							{/* Card content */}
							<div className="p-6">
								{/* Icon circle */}
								<div className="mb-5 w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
									{service.icon}
								</div>
								
								<h3 className="text-xl font-bold text-neutral-900 mb-3">
									{service.title}
								</h3>
								
								<p className="text-neutral-600 mb-4">
									{service.description}
								</p>
								
								<a
									href={service.link}
									className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
								>
									Learn more →
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Call to action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-16 text-center"
				>
					<a
						href="/services"
						className="inline-flex items-center justify-center px-8 py-4 text-lg
						font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600
						transform transition-all duration-300 shadow-lg"
					>
						View All Services
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							className="ml-2 w-5 h-5" 
							fill="none" 
							viewBox="0 0 24 24" 
							stroke="currentColor"
						>
							<path 
								strokeLinecap="round" 
								strokeLinejoin="round" 
								strokeWidth={2} 
								d="M14 5l7 7m0 0l-7 7m7-7H3" 
							/>
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	)
} 