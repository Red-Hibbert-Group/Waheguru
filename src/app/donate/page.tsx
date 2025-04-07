'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Donate() {
	const [amount, setAmount] = useState('')
	const [donationType, setDonationType] = useState('one-time')
	const [isLoading, setIsLoading] = useState(false)
	const [isCustom, setIsCustom] = useState(false)
	const [step, setStep] = useState(1) // 1: amount selection, 2: payment details

	// Predefined donation amounts
	const donationAmounts = ['1', '5', '11', '51', '101']

	// Stripe URLs for different amounts
	const stripeUrls = {
		monthly: {
			'1': 'https://buy.stripe.com/6oEbJ9eIb62u7Bu14d',
			'5': 'https://buy.stripe.com/14k14varVbmOf3W9AI',
			'11': 'https://buy.stripe.com/9AQ28zdE74Yq3ledR0',
			'51': 'https://buy.stripe.com/6oEfZp43x3UmcVO4gr',
			'101': 'https://buy.stripe.com/bIY28zdE78aC2habIU',
			'custom': 'https://donate.stripe.com/eVa00r8jN76ybRK00d'
		},
		'one-time': {
			'1': 'https://donate.stripe.com/28o8wX57B1MeaNGcMP',
			'5': 'https://donate.stripe.com/5kA5kL43xduW0925kq',
			'11': 'https://donate.stripe.com/fZe00r7fJ62ucVO6os',
			'51': 'https://donate.stripe.com/bIY5kL7fJcqS4pi9AC',
			'101': 'https://donate.stripe.com/14kdRhdE7cqS3lebIN',
			'custom': 'https://donate.stripe.com/aEU14v6bFcqS7Bu14b'
		}
	}

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { 
			opacity: 1,
			transition: { 
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 }
	}

	// Handle donation submission
	const handleDonate = async (e: React.FormEvent) => {
		e.preventDefault()
		if (isLoading) return
		
		setIsLoading(true)
		
		try {
			// Get the appropriate URL based on donation type and amount
			const urls = stripeUrls[donationType as keyof typeof stripeUrls]
			const targetUrl = isCustom || !donationAmounts.includes(amount) ? 
				urls.custom : 
				urls[amount as keyof typeof urls]

			// Redirect to the appropriate Stripe page
			window.location.href = targetUrl
		} catch (error) {
			console.error('Navigation error:', error)
			alert('Failed to open donation page. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	// Handle amount selection
	const handleAmountSelect = (amt: string) => {
		setAmount(amt)
		setIsCustom(false)
	}

	// Handle custom amount button click
	const handleCustomClick = () => {
		setAmount('')
		setIsCustom(true)
	}

	return (
		<div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50 relative overflow-hidden">
			{/* Content container */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl font-bold text-gray-900 mb-4">
						Make a <span className="text-orange-600">Difference</span> Today
					</h1>
					<p className="text-xl text-neutral-700 max-w-3xl mx-auto">
						Your generous donation supports our mission to empower communities through Seva.
						Every contribution, no matter the size, helps us create lasting positive change.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Donation Form */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden"
					>
						{/* Decorative Elements */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10 opacity-70"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100 rounded-tr-full -z-10 opacity-70"></div>

						<motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-8">
							Your Donation
						</motion.h2>

						<form onSubmit={handleDonate}>
							<motion.div variants={itemVariants} className="mb-8">
								<label className="block text-lg font-medium text-gray-700 mb-4">
									Choose Donation Type
								</label>
								<div className="flex flex-wrap gap-4 mb-6">
									<button
										type="button"
										className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
											donationType === 'one-time'
												? 'bg-orange-600 text-white shadow-md'
												: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
										}`}
										onClick={() => setDonationType('one-time')}
									>
										One-time Donation
									</button>
									<button
										type="button"
										className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
											donationType === 'monthly'
												? 'bg-orange-600 text-white shadow-md'
												: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
										}`}
										onClick={() => setDonationType('monthly')}
									>
										Monthly Donation
									</button>
								</div>
							</motion.div>

							<motion.div variants={itemVariants} className="mb-8">
								<label className="block text-lg font-medium text-gray-700 mb-4">
									Select Amount
								</label>
								<div className="grid grid-cols-3 gap-3 mb-4">
									{donationAmounts.map((amt) => (
										<button
											key={amt}
											type="button"
											className={`py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 
											${amount === amt && !isCustom
												? 'bg-orange-600 text-white shadow-md scale-105'
												: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
											}`}
											onClick={() => handleAmountSelect(amt)}
										>
											${amt}{donationType === 'monthly' ? ' Monthly' : ''}
										</button>
									))}
									<button
										type="button"
										className={`py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 
										${isCustom
											? 'bg-orange-600 text-white shadow-md scale-105'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
										}`}
										onClick={handleCustomClick}
									>
										Custom
									</button>
								</div>

								{isCustom && (
									<div className="mt-4">
										<div className="relative">
											<span className="absolute inset-y-0 left-0 flex items-center pl-4 text-lg font-medium text-gray-700">
												$
											</span>
											<input
												type="number"
												className="w-full pl-10 pr-4 py-4 rounded-lg bg-gray-100 border-transparent 
												focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-lg"
												placeholder="Enter amount"
												value={amount}
												onChange={(e) => setAmount(e.target.value)}
												min="1"
											/>
										</div>
									</div>
								)}
							</motion.div>

							<motion.div 
								variants={itemVariants}
								className="mb-6"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6 }}
							>
								<p className="text-lg mb-2">
									{donationType === 'one-time' ? (
										<span className="font-medium">
											You're making a one-time donation of{' '}
											<span className="text-orange-600 font-bold">${amount || '0'}</span>
										</span>
									) : (
										<span className="font-medium">
											You're donating{' '}
											<span className="text-orange-600 font-bold">${amount || '0'} monthly</span>
										</span>
									)}
								</p>
								<p className="text-gray-600">
									Your donation will support our community programs, langar services, and educational initiatives.
								</p>
							</motion.div>

							<motion.div variants={itemVariants} className="mt-8">
								<button
									type="submit"
									disabled={!amount || isLoading}
									className={`w-full py-4 px-6 rounded-xl text-xl font-semibold text-white
									transition-all duration-300 relative overflow-hidden
									group hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] 
									${isLoading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 hover:scale-[1.02]'}
									before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-500
									before:translate-x-[-100%] before:hover:translate-x-[100%] before:transition-transform before:duration-700
									before:opacity-50 before:hover:opacity-100
									`}
								>
									<span className="relative z-10 flex items-center justify-center">
										{isLoading ? (
											<>
												<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
													<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
													<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
												Processing...
											</>
										) : donationType === 'one-time' ? (
											'Donate Now'
										) : (
											'Start Monthly Donation'
										)}
									</span>
								</button>
							</motion.div>
						</form>
					</motion.div>

					{/* Impact Section */}
					<div className="space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
						>
							<h2 className="text-2xl font-semibold text-primary-700 mb-6">
								Your Impact
							</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-900">Support Daily Langar</h3>
										<p className="text-gray-600">Your donation helps provide free meals to anyone who visits our gurdwaras, regardless of faith or background.</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-900">Education Programs</h3>
										<p className="text-gray-600">Help us provide religious and cultural education to children and adults through classes and workshops.</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-full">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-900">Community Facilities</h3>
										<p className="text-gray-600">Your donation helps maintain and improve our gurdwara facilities for the entire community.</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
						>
							<h2 className="text-2xl font-semibold text-primary-700 mb-4">
								Other Ways to Support
							</h2>
							<ul className="space-y-4 text-gray-600">
								<li className="flex items-center">
									<svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									Volunteer your time at our gurdwaras
								</li>
								<li className="flex items-center">
									<svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									Donate items for langar or special events
								</li>
								<li className="flex items-center">
									<svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									Help spread awareness about Sikhism
								</li>
								<li className="flex items-center">
									<svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
									</svg>
									Consider a planned gift or bequest
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
} 