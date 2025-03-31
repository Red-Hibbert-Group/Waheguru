'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Info', href: '/info' },
		{ name: 'Contact', href: '/contact' },
	]

	const headerVariants = {
		hidden: { y: -100 },
		visible: { y: 0 },
	}

	const menuItemVariants = {
		closed: { opacity: 0, x: -10 },
		open: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: i * 0.1 },
		}),
	}

	return (
		<motion.header
			variants={headerVariants}
			initial="hidden"
			animate="visible"
			transition={{ type: 'spring', stiffness: 100, damping: 20 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
			}`}
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold text-primary-600">Waheguru</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`relative px-3 py-2 text-sm font-medium transition-colors ${
									pathname === item.href
										? 'text-primary-600'
										: 'text-neutral-600 hover:text-primary-600'
								}`}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										layoutId="underline"
										className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-600"
										initial={false}
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									/>
								)}
							</Link>
						))}
						<Link
							href="/donate"
							className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 bg-primary-600 rounded-lg hover:bg-primary-700 focus:shadow-outline focus:outline-none"
						>
							Donate
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden"
						>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
								{navItems.map((item, i) => (
									<motion.div
										key={item.name}
										custom={i}
										variants={menuItemVariants}
										initial="closed"
										animate="open"
										exit="closed"
									>
										<Link
											href={item.href}
											className={`block px-3 py-2 rounded-md text-base font-medium ${
												pathname === item.href
													? 'text-primary-600 bg-primary-50'
													: 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									</motion.div>
								))}
								<motion.div
									custom={navItems.length}
									variants={menuItemVariants}
									initial="closed"
									animate="open"
									exit="closed"
								>
									<Link
										href="/donate"
										className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										Donate
									</Link>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	)
} 