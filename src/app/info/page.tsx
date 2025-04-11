import Image from 'next/image'
import Link from 'next/link'

export default function Info() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Introduction Section */}
				<div className="grid md:grid-cols-2 gap-8 items-center mb-16">
					<div className="prose lg:prose-lg">
						<p className="text-gray-700">
							WaheGuru is a non-profit based out of California. Our goals are to improve gurdwara facilities
							throughout the world, inform the public about Sikh ideals, and eventually to build a{' '}
							<span className="font-semibold">$1.1 billion gurdwara</span> as the pinnacle of Sikhism.
							We are fortunate to have the biggest gurdwara in the USA, the{' '}
							<span className="font-semibold">Sikh Gurdwara San Jose</span>, as our primary inspiration.
						</p>
					</div>
					<div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/images/mahal.jpg"
							alt="Kartarpur Sahib Gurdwara"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* Community Section */}
				<div className="grid md:grid-cols-2 gap-8 items-center mb-16">
					<div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/images/6688458a164260a6abdb0087_IMG_6764-scaled.jpg"
							alt="Community Service"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="prose lg:prose-lg">
						<p className="text-gray-700">
							Our primary duty right now is helping channel in donations for the gurdwaras we partnered
							with. Gurdwaras are all about <span className="font-semibold">community outreach</span>, so a donation for us advances our
							neighborhoods more than you can imagine. We provide services like{' '}
							<span className="font-semibold">free food and education for all</span> and a constant stream of donations helps us to further prolong these
							activities. <span className="font-semibold">People of all religions are welcome</span> inside our gurdwaras and we provide{' '}
							<span className="font-semibold">rumāls</span> (ਹ) so everyone can participate in our prayers while obeying the{' '}
							<span className="font-semibold">Sikh Rehat Maryada</span> (Sikh code of conduct).
						</p>
					</div>
				</div>

				{/* Cleanliness Section */}
				<div className="grid md:grid-cols-2 gap-8 items-center mb-16">
					<div className="prose lg:prose-lg">
						<p className="text-gray-700">
							When you visit any of our gurdwaras, you can always expect a{' '}
							<span className="font-semibold">high state of cleanliness</span>. Sikhs are{' '}
							<span className="font-semibold">extremely dedicated people</span> and strictly adhere to the ideals of Sikhism. This is
							shown by their dedication to not cut any of their hair, to always carry a comb, and to be always
							accepting of all people. As such, when you enter any gurdwara, be assured that you will meet the{' '}
							<span className="font-semibold">nicest of people</span>, no questions asked as to why you're here, and an overall{' '}
							<span className="font-semibold">pleasant experience</span>, aimed at gaining your trust to come visit again.
						</p>
					</div>
					<div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg"
							alt="Gurdwara Interior"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				{/* Education Section */}
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
						<Image
							src="/images/667e08c8024626a0fdf13e63_fremont-5.png"
							alt="Khalsa School"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="prose lg:prose-lg">
						<p className="text-gray-700">
							Our gurdwaras offer a <span className="font-semibold">wide range of educational programs</span> that operate year-round to our
							local communities. Our primary method of educating children is through{' '}
							<span className="font-semibold">Khalsa schools</span>. These schools aim to provide a{' '}
							<span className="font-semibold">balanced education</span> that fosters both intellectual
							development and spiritual growth, preparing students to be well-rounded individuals
							grounded in Sikh values. Take a look at some of our offerings at these sites:{' '}
							<Link href="#" className="text-primary-600 hover:text-primary-700">Fremont Khalsa</Link>,{' '}
							<Link href="#" className="text-primary-600 hover:text-primary-700">San Jose Khalsa</Link>,{' '}
							<Link href="#" className="text-primary-600 hover:text-primary-700">Tri-Valley Khalsa</Link>.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
} 