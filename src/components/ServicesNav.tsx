'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ServicesNav() {
	const [isScrolled, setIsScrolled] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 200)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const serviceNavItems = [
		{ name: 'Prayer Services', href: '/services/prayer' },
		{ name: 'Education Programs', href: '/services/education' },
		{ name: 'Community Support', href: '/services/community-support' },
		{ name: 'Youth Activities', href: '/services/youth-activities' },
		{ name: 'Cultural Events', href: '/services/cultural-events' },
		{ name: 'Langar', href: '/services/langar' },
	]

	return (
		<nav 
			className={`sticky top-16 z-40 w-full transition-all duration-300 ${
				isScrolled 
				? 'bg-transparent py-2' 
				: 'bg-transparent py-4'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center items-center">
					<div className="hidden md:flex items-center space-x-1 overflow-x-auto">
						{serviceNavItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`relative px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
									pathname === item.href
										? 'text-primary-600'
										: 'text-neutral-700 hover:text-primary-600'
								}`}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										layoutId="service-underline"
										className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-600"
										initial={false}
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</div>
					
					{/* Mobile dropdown */}
					<div className="md:hidden w-full">
						<select 
							value={pathname || ''}
							onChange={(e) => {
								window.location.href = e.target.value
							}}
							className="w-full p-2 bg-transparent border border-neutral-200 rounded-lg text-neutral-700 font-medium"
						>
							{serviceNavItems.map((item) => (
								<option key={item.name} value={item.href}>
									{item.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</nav>
	)
} 