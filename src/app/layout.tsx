import type { Metadata } from 'next'
import { Inter, Poppins, Merriweather } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ 
	subsets: ['latin'],
	variable: '--font-inter',
})

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
})

const merriweather = Merriweather({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
	variable: '--font-merriweather',
})

export const metadata: Metadata = {
	title: 'Waheguru - Empowering Communities Through Seva',
	description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
	keywords: 'Sikh, Gurdwara, Community Service, Seva, Education, Langar, California',
	openGraph: {
		title: 'Waheguru - Empowering Communities Through Seva',
		description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Waheguru Community Service',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Waheguru - Empowering Communities Through Seva',
		description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
		images: ['/images/og-image.jpg'],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable} ${merriweather.variable}`}>
			<body className="min-h-screen flex flex-col">
				<ClientLayout>
					{children}
				</ClientLayout>
			</body>
		</html>
	)
} 