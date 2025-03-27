import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Waheguru - Empowering Communities Through Seva',
	description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
} 