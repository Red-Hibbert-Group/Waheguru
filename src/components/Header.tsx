'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="bg-white shadow-lg border-b border-neutral-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="text-2xl font-bold text-primary-600">
						Waheguru
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/about"
							className="text-neutral-600 hover:text-primary-500 transition-colors"
						>
							About Us
						</Link>
						<Link
							href="/projects"
							className="text-neutral-600 hover:text-primary-500 transition-colors"
						>
							Our Projects
						</Link>
						<Link
							href="/contact"
							className="text-neutral-600 hover:text-primary-500 transition-colors"
						>
							Contact Us
						</Link>
						<Link
							href="/donate"
							className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full
							font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all
							duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
						>
							<span className="relative z-10">Donate</span>
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
						</Link>
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-neutral-600"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isMenuOpen ? (
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

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-white">
							<Link
								href="/about"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-500 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								About Us
							</Link>
							<Link
								href="/projects"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-500 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Our Projects
							</Link>
							<Link
								href="/contact"
								className="block px-3 py-2 text-neutral-600 hover:text-primary-500 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact Us
							</Link>
							<Link
								href="/donate"
								className="block px-3 py-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full 
								hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 
								shadow-lg hover:shadow-xl text-center font-semibold"
								onClick={() => setIsMenuOpen(false)}
							>
								Donate
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	)
} 