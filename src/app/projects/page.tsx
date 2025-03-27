export default function Projects() {
	const projects = [
		{
			title: 'Education Initiative',
			description:
				'Providing educational resources and support to underprivileged children in rural communities.',
			impact: 'Over 500 children supported with educational materials and tutoring.',
		},
		{
			title: 'Food Security Program',
			description:
				'Establishing sustainable food gardens and providing nutrition education to communities.',
			impact: 'Created 20 community gardens serving over 1000 families.',
		},
		{
			title: 'Healthcare Access',
			description:
				'Organizing medical camps and providing essential healthcare services to remote areas.',
			impact: 'Served over 2000 patients through medical camps and health check-ups.',
		},
		{
			title: 'Skill Development',
			description:
				'Offering vocational training and skill development programs to empower youth.',
			impact: 'Trained 300+ individuals in various vocational skills.',
		},
	]

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Explore our ongoing initiatives and the impact we're making in communities
					around the world.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-lg overflow-hidden
						transform hover:scale-105 transition-transform duration-300"
					>
						<div className="p-6">
							<h2 className="text-2xl font-semibold text-primary mb-4">
								{project.title}
							</h2>
							<p className="text-gray-600 mb-4">{project.description}</p>
							<div className="bg-primary/10 p-4 rounded-md">
								<h3 className="text-lg font-medium text-primary mb-2">
									Impact
								</h3>
								<p className="text-gray-700">{project.impact}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="text-center mt-16">
				<h2 className="text-3xl font-bold text-primary mb-8">
					Support Our Projects
				</h2>
				<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
					Your contribution can help us expand our reach and create more positive
					impact in communities.
				</p>
				<a
					href="/donate"
					className="inline-block bg-primary text-white px-8 py-3 rounded-full
					font-semibold hover:bg-primary-dark transform hover:scale-105
					transition-all duration-300 shadow-lg hover:shadow-xl"
				>
					Donate Now
				</a>
			</div>
		</div>
	)
} 