import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import Locations from '@/components/Locations'

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
			<Hero />
			<Pillars />
			<Services />
			<Locations />
		</div>
	)
} 