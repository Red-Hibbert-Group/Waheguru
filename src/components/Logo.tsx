'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface LogoProps {
	isScrolled?: boolean
	isFaithPage?: boolean
}

export default function Logo({ isScrolled, isFaithPage }: LogoProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Link 
			href="/" 
			className="flex items-center space-x-3"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.div 
				className="relative w-9 h-9"
				animate={{ rotate: isHovered ? 360 : 0 }}
				transition={{ duration: 0.8, ease: "easeInOut" }}
			>
				<svg 
					className={`w-full h-full transition-colors duration-300 ${
						isScrolled 
							? 'text-black' 
							: isFaithPage 
								? 'text-white' 
								: 'text-black'
					}`} 
					viewBox="0 0 100 100" 
					fill="none" 
					stroke="currentColor" 
					strokeWidth="1.5"
				>
					{/* Vertical Line */}
					<path d="M50,5 L50,95" />
					
					{/* Double-edged Sword */}
					<path d="M26,28 C26,28 37,35 50,28 C63,35 74,28 74,28 C74,28 66,50 74,72 C74,72 63,65 50,72 C37,65 26,72 26,72 C26,72 34,50 26,28 Z" />
					
					{/* Circle */}
					<circle cx="50" cy="50" r="14" />
					
					{/* Outer Circle */}
					<path d="M20,20 C20,20 36,36 50,20 C64,36 80,20 80,20 C80,20 64,64 80,80 C80,80 64,64 50,80 C36,64 20,80 20,80 C20,80 36,36 20,20 Z" />
				</svg>
			</motion.div>
			
			{/* Text with gradient */}
			<div>
				<span 
					className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
						isScrolled 
							? 'bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent' 
							: isFaithPage 
								? 'text-white' 
								: 'bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent'
					}`}
				>
					Waheguru
				</span>
			</div>
		</Link>
	)
} 