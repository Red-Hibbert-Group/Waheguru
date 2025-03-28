'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-700 mb-4">
            SERVICES
          </h2>
          <p className="text-xl text-neutral-700 mb-12">
            WHAT DO WE OFFER INSIDE OUR GURDWARAS?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Educational Programs */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg"
                alt="Educational Programs at Gurdwara"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                EDUCATIONAL PROGRAMS
              </h3>
              <p className="text-neutral-700 mb-6">
                Our gurdwaras offer a variety of educational programs designed to enrich the spiritual, cultural, and intellectual lives of the Sikh community. These programs include classes on Sikh scriptures, history, and philosophy, providing a deeper understanding of the faith. Additionally, Gurdwaras host workshops, seminars, and discourses by scholars and spiritual leaders, fostering continuous learning and personal growth. These educational initiatives promote the values of knowledge, reflection, and community engagement. We also offer summer camps to further educate the young.
              </p>
              <Link 
                href="/services/education"
                className="inline-block bg-primary-500 text-white px-6 py-2 rounded-full
                font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all
                duration-300 shadow-md hover:shadow-lg"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Community Food */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64 w-full">
              <Image
                src="/images/667e08b15ad4a78219a7e41b_1b39eccb-5ba0-425a-aa11-1d0023ff8e3b.jpg"
                alt="Langar Service at Gurdwara"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-700 mb-4">
                COMMUNITY FOOD
              </h3>
              <p className="text-neutral-700 mb-6">
                Our gurdwaras provide free food through a community kitchen known as Langar, where meals are served to everyone without discrimination. This service, established by Guru Nanak Dev Ji, promotes equality and community spirit, ensuring that no one goes hungry regardless of their background. Volunteers prepare and serve simple, vegetarian meals in a communal dining hall, where all visitors sit together to eat, symbolizing the Sikh values of sharing and unity. Langar not only addresses hunger but also fosters social harmony and compassion.
              </p>
              <Link 
                href="/services/langar"
                className="inline-block bg-primary-500 text-white px-6 py-2 rounded-full
                font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all
                duration-300 shadow-md hover:shadow-lg"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 