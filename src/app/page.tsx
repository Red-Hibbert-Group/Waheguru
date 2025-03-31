import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import ImageGallery from '@/components/ImageGallery'
import Newsletter from '@/components/Newsletter'

const galleryImages = [
	{
		src: '/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg',
		alt: 'Educational Programs at Gurdwara',
		title: 'Educational Programs',
		description: 'Providing quality education and spiritual guidance to our community.',
	},
	{
		src: '/images/667e08b15ad4a78219a7e41b_1b39eccb-5ba0-425a-aa11-1d0023ff8e3b.jpg',
		alt: 'Langar Service at Gurdwara',
		title: 'Community Langar',
		description: 'Serving free meals to all visitors, promoting equality and community spirit.',
	},
	{
		src: '/images/667c8ef5919336892cfe67e2_Main.jpg',
		alt: 'Community Service Activities',
		title: 'Community Service',
		description: 'Engaging in various community service activities throughout the year.',
	},
	{
		src: '/images/667e08c8024626a0fdf13e63_fremont-5.png',
		alt: 'Khalsa School Activities',
		title: 'Khalsa School',
		description: 'Nurturing young minds with Sikh values and modern education.',
	},
	{
		src: '/images/667e0dfffde882eaac42dcce_tri-valleysikhcenterslider1.webp',
		alt: 'Tri Valley Sikh Center Events',
		title: 'Community Events',
		description: 'Organizing cultural and religious events to strengthen community bonds.',
	},
	{
		src: '/images/667e0eeb8f01ab47aaaa15f9_san-jose-seik-gurudwara.jpg',
		alt: 'San Jose Gurdwara Activities',
		title: 'San Jose Gurdwara',
		description: 'A hub of spiritual and community activities in the South Bay Area.',
	},
]

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
			<Hero />
			<Pillars />
			<Services />
			<Locations />
			<ImageGallery
				images={galleryImages}
				title="Community Gallery"
				description="Explore our community activities, events, and initiatives through these moments captured in time."
			/>
			<Newsletter />
		</div>
	)
} 