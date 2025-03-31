import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import ImageGallery from '@/components/ImageGallery'
import Newsletter from '@/components/Newsletter'
import Stats from '@/components/Stats'
import FeaturedStory from '@/components/FeaturedStory'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import UpcomingEvents from '@/components/UpcomingEvents'

// Images for gallery section
const galleryImages = [
	'/images/667c8ef5919336892cfe67e2_Main.jpg',
	'/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg',
	'/images/667e08b15ad4a78219a7e41b_1b39eccb-5ba0-425a-aa11-1d0023ff8e3b.jpg',
	'/images/6688458a164260a6abdb0087_IMG_6764-scaled.jpg',
	'/images/667e08c8024626a0fdf13e63_fremont-5.png',
	'/images/mahal.jpg',
]

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
			{/* Hero Section with Enhanced Visuals */}
			<Hero />
			
			{/* Stats Counter Section */}
			<Stats />
			
			{/* Core Pillars */}
			<Pillars />
			
			{/* Featured Story */}
			<FeaturedStory 
				title="Seva in Action" 
				description="Experience the transformative power of community service through our recent initiatives."
				image="/images/667c8ef5919336892cfe67e2_Main.jpg"
			/>
			
			{/* Services Offered */}
			<Services />
			
			{/* New Testimonials Section */}
			<Testimonials />
			
			{/* Upcoming Events Section */}
			<UpcomingEvents />
			
			{/* Call to Action Section */}
			<CallToAction />
			
			{/* Gurdwara Locations */}
			<Locations />
			
			{/* Community Gallery with Enhanced Layout */}
			<ImageGallery
				images={galleryImages}
				title="Community Gallery"
				description="Explore our community activities, events, and initiatives through these moments captured in time."
			/>
			
			{/* Enhanced Newsletter Section */}
			<Newsletter />
		</div>
	)
} 