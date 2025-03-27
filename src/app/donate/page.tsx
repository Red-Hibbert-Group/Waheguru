'use client'

import { useState } from 'react'

export default function Donate() {
	const [amount, setAmount] = useState('')
	const [frequency, setFrequency] = useState('one-time')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle donation submission here
		console.log('Donation submitted:', { amount, frequency })
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold text-primary mb-4">Support Our Cause</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Your contribution helps us create lasting positive change in communities
					around the world.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-12">
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-primary mb-6">
						Make a Donation
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="frequency"
								className="block text-sm font-medium text-gray-700"
							>
								Donation Frequency
							</label>
							<select
								id="frequency"
								value={frequency}
								onChange={(e) => setFrequency(e.target.value)}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
								focus:border-primary focus:ring-primary"
							>
								<option value="one-time">One-time Donation</option>
								<option value="monthly">Monthly Donation</option>
								<option value="yearly">Yearly Donation</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="amount"
								className="block text-sm font-medium text-gray-700"
							>
								Amount
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<span className="text-gray-500 sm:text-sm">$</span>
								</div>
								<input
									type="number"
									id="amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									className="block w-full pl-7 rounded-md border-gray-300
									focus:border-primary focus:ring-primary"
									placeholder="0.00"
									required
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-primary text-white py-2 px-4 rounded-md
							hover:bg-primary-dark transition-colors duration-300"
						>
							Donate Now
						</button>
					</form>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-primary mb-6">
						Your Impact
					</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900">
								$25 Monthly
							</h3>
							<p className="mt-1 text-gray-600">
								Provides educational materials for one child for a month
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">
								$50 Monthly
							</h3>
							<p className="mt-1 text-gray-600">
								Supports a family with essential food supplies
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">
								$100 Monthly
							</h3>
							<p className="mt-1 text-gray-600">
								Helps provide healthcare services to a community
							</p>
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-900">
								$250 Monthly
							</h3>
							<p className="mt-1 text-gray-600">
								Supports an entire community project
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-16 text-center">
				<h2 className="text-3xl font-bold text-primary mb-8">
					Other Ways to Support
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">
							Volunteer
						</h3>
						<p className="text-gray-600">
							Join our volunteer program and make a direct impact in communities
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">
							Corporate Partnership
						</h3>
						<p className="text-gray-600">
							Partner with us to create sustainable change at a larger scale
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">
							Legacy Giving
						</h3>
						<p className="text-gray-600">
							Leave a lasting impact through planned giving and bequests
						</p>
					</div>
				</div>
			</div>
		</div>
	)
} 