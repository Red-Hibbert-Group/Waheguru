'use client'

import { useState } from 'react'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log('Form submitted:', formData)
	}

	return (
		<div className="min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-primary-500 text-white px-8 py-3 rounded-lg
								font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all
								duration-300 shadow-lg hover:shadow-xl"
							>
								SEND MESSAGE
							</button>
						</form>
					</div>

					{/* Contact Info Card */}
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
	)
} 