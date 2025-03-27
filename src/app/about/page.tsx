export default function About() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold text-primary mb-4">About Waheguru</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					We are dedicated to making a positive impact in communities through
					selfless service and charitable initiatives.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-12">
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
					<p className="text-gray-600">
						To empower communities through seva (selfless service) and create
						sustainable positive change in the lives of those we serve.
					</p>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
					<p className="text-gray-600">
						A world where every community has access to resources, education, and
						opportunities for growth and development.
					</p>
				</div>
			</div>

			<div className="mt-16 text-center">
				<h2 className="text-3xl font-bold text-primary mb-8">Our Values</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">Seva</h3>
						<p className="text-gray-600">
							Selfless service to others without expectation of reward
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">Integrity</h3>
						<p className="text-gray-600">
							Operating with honesty, transparency, and ethical principles
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold text-primary mb-3">Impact</h3>
						<p className="text-gray-600">
							Creating measurable and sustainable positive change
						</p>
					</div>
				</div>
			</div>
		</div>
	)
} 