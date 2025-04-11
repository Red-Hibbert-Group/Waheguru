'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { submitContactForm } from '@/lib/supabase'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	
	// Define submitStatus without explicit generic type parameter
	const [submitStatus, setSubmitStatus] = useState(null as {
		success?: boolean;
		message?: string;
	} | null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)
		
		try {
			// 1. Store form submission in the database
			const result = await submitContactForm(
				formData.name,
				formData.email,
				formData.message
			)
			
			// 2. Send confirmation email if database submission is successful
			if (result.success) {
				let emailSent = false
				let emailError: string | undefined = undefined
				
				try {
					console.log('Sending email to:', formData.email)
					
					// Send email via API route
					const emailResponse = await fetch('/api/send-email', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formData),
					})
					
					const emailResult = await emailResponse.json()
					console.log('Email API response:', emailResult)
					
					emailSent = emailResponse.ok && emailResult.success
					
					if (!emailResponse.ok || !emailResult.success) {
						emailError = emailResult.error || 'Failed to send confirmation email'
						console.error('Error sending email:', emailError)
					}
				} catch (error) {
					// Log email error but don't fail the overall submission
					console.error('Exception when sending confirmation email:', error)
					emailError = 'Network error when sending email'
				}
				
				// Clear form fields
				setFormData({ name: '', email: '', message: '' })
				
				// Update success message to include email confirmation status
				if (emailSent) {
					result.message = `${result.message} A confirmation email has been sent to your inbox.`
				} else if (emailError) {
					// Add warning about email failure but keep success status for form submission
					result.message = `${result.message} However, we couldn't send you a confirmation email (${emailError}). Please check your email address.`
				}
			}
			
			setSubmitStatus(result)
		} catch (error) {
			console.error('Error submitting form:', error)
			setSubmitStatus({
				success: false,
				message: 'Something went wrong. Please try again later.'
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
			{/* Remove navigation section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Logo */}
				<div className="flex justify-center mb-8">
					<Image
						src="/images/667e0d840e1f4b734ef723a1_Tri-Valley-Sikh-Center-Logo.png"
						alt="Tri-Valley Sikh Center Logo"
						width={120}
						height={120}
						className="object-contain"
					/>
				</div>

				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
						CONTACT US TODAY
					</h1>
					<p className="text-xl text-neutral-700 mb-2">
						WANT SOME MORE INFORMATION REGARDING OUR OPERATIONS?
					</p>
					<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
						We'd love to hear from you! Whether you have a question, feedback, or need assistance, 
						our team is here to help. Please reach out to us using by filling out the form below 
						or checking our social accounts linked underneath.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Contact Form */}
					<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
						{submitStatus && (
							<div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
								{submitStatus.message}
							</div>
						)}
						
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
									placeholder="Enter your name..."
									required
									disabled={isSubmitting}
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
									placeholder="Enter your email..."
									required
									disabled={isSubmitting}
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									rows={6}
									className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
									placeholder="Your message..."
									required
									disabled={isSubmitting}
								/>
							</div>

							<button
								type="submit"
								className={`w-full bg-primary-500 text-white px-8 py-3 rounded-lg
								font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all
								duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
								disabled={isSubmitting}
							>
								{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
							</button>
						</form>
					</div>

					{/* Contact Info Card */}
					<div className="space-y-8">
						<div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
							<Image
								src="/images/667c8ef5919336892cfe67e2_Main.jpg"
								alt="Gurdwara"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						</div>

						<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-fit">
							<h3 className="text-2xl font-semibold text-primary-700 mb-6">
								Visit Our Gurdwara
							</h3>
							<p className="text-neutral-600 text-lg mb-8">
								Come join us for prayer, langar, or community service. Our doors are always open.
							</p>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<span className="text-primary-600 text-xl">📍</span>
									<p className="text-neutral-600 text-lg">1234 Waheguru Street, Livermore, CA 94550</p>
								</div>
								<div className="flex items-center space-x-3">
									<span className="text-primary-600 text-xl">📞</span>
									<p className="text-neutral-600 text-lg">(555) 123-4567</p>
								</div>
								<div className="flex items-center space-x-3">
									<span className="text-primary-600 text-xl">✉️</span>
									<p className="text-neutral-600 text-lg">info@waheguru.org</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
} 