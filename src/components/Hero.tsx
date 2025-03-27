'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
	return (
		<section className="relative min-h-[600px] flex items-center overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div className="text-center lg:text-left">
						<h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6">
							Empowering Communities Through Seva
						</h1>
						<p className="text-xl text-neutral-700 mb-8 max-w-2xl lg:max-w-none mx-auto">
							Join us in making a difference. Your contribution helps us create
							lasting positive change in communities around the world.
						</p>
						<Link
							href="/donate"
							className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full
							font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all
							duration-300 shadow-lg hover:shadow-xl"
						>
							Donate Now
						</Link>
					</div>

					{/* Background Image */}
					<div className="hidden lg:block relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src="/images/hero-image.jpg"
							alt="Sikh Community Service"
							fill
							className="object-cover"
							priority
						/>
						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent" />
					</div>
				</div>
			</div>

			{/* Decorative background elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400" />
				<div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(255,255,255,0.4)_30%,transparent_100%)]" />
				<div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-l from-white/20 to-transparent" />
				<div className="absolute left-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-r from-white/20 to-transparent" />
			</div>
		</section>
	)
} 