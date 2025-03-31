'use client'

import Link from 'next/link'

export default function Footer() {
	const usefulLinks = [
		{
			name: 'Sikh Coalition',
			href: 'https://www.sikhcoalition.org'
		},
		{
			name: 'Sikh History',
			href: 'https://www.sikhhistory.com'
		},
		{
			name: 'Sikhs.org',
			href: 'https://www.sikhs.org'
		},
		{
			name: 'Sikh Wikipedia',
			href: 'https://en.wikipedia.org/wiki/Sikhism'
		}
	]

	const socialLinks = [
		{
			name: 'Twitter',
			href: 'https://twitter.com/waheguru',
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
				</svg>
			)
		},
		{
			name: 'Facebook',
			href: 'https://facebook.com/waheguru',
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
				</svg>
			)
		},
		{
			name: 'Pinterest',
			href: 'https://pinterest.com/waheguru',
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
				</svg>
			)
		}
	]

	return (
		<footer className="bg-primary-500 text-neutral-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
					{/* About Column */}
					<div>
						<h3 className="text-xl font-semibold text-secondary-500 mb-4">
							ABOUT WAHEGURU
						</h3>
						<p className="text-neutral-800 leading-relaxed">
							Waheguru is devoted to the spread of Sikhism through community outreach. 
							We are a religious nonprofit and all proceeds help advance our gurdwara facilities.
						</p>
					</div>

					{/* Useful Links Column */}
					<div>
						<h3 className="text-xl font-semibold text-secondary-500 mb-4">
							USEFUL LINKS
						</h3>
						<ul className="space-y-3">
							{usefulLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-neutral-800 hover:text-secondary-500 transition-colors duration-200"
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Social Column */}
					<div>
						<h3 className="text-xl font-semibold text-secondary-500 mb-4">
							SOCIAL
						</h3>
						<ul className="space-y-3">
							{socialLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="flex items-center gap-3 text-neutral-800 hover:text-secondary-500 transition-colors duration-200 group"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span className="group-hover:text-secondary-500 transition-colors duration-200">
											{link.icon}
										</span>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 pt-8 border-t border-primary-400">
					<p className="text-center text-neutral-800 text-sm">
						© {new Date().getFullYear()} Waheguru. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
} 