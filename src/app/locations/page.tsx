import Image from 'next/image'
import Link from 'next/link'

const locations = [
  {
    name: "Waheguru Sikh Center Fremont",
    address: "180 Vineyard Drive, Fremont, CA 94536",
    phoneNumbers: ["+1 (510) 579-4679"],
    schedule: "Daily, 5:00 AM - 9:00 PM",
    coordinates: {
      lat: 37.560087,
      lng: -121.994900
    },
    description: "Our main center offering daily prayers, langar services, and community programs.",
    facilities: ["Prayer Hall", "Langar Hall", "Library", "Community Center"],
    programs: ["Daily Prayers", "Sunday School", "Youth Activities", "Community Service"],
    image: "/images/667e08c8024626a0fdf13e63_fremont-5.png"
  },
  {
    name: "Waheguru Sikh Center Tracy",
    address: "29707 S Manthey Rd, Tracy, CA 95337",
    phoneNumbers: ["+1 (510) 579-4679"],
    schedule: "Daily, 5:00 AM - 9:00 PM",
    coordinates: {
      lat: 37.735968,
      lng: -121.352483
    },
    description: "A vibrant center serving the Tracy community with spiritual and social services.",
    facilities: ["Prayer Hall", "Langar Hall", "Meeting Rooms", "Parking"],
    programs: ["Daily Prayers", "Community Outreach", "Cultural Events", "Education Programs"],
    image: "/images/667e0685d321a59a71c14292_IMG_1792-Large.jpg"
  },
  {
    name: "Waheguru Sikh Center Manteca",
    address: "1201 S Airport Way, Manteca, CA 95336",
    phoneNumbers: ["+1 (510) 579-4679", "+1 (209) 275-1408"],
    schedule: "Daily, 5:00 AM - 9:00 PM", 
    coordinates: {
      lat: 37.784772,
      lng: -121.217711
    },
    description: "A growing center dedicated to serving the Manteca community with love and compassion.",
    facilities: ["Prayer Hall", "Langar Hall", "Youth Center", "Sports Facilities"],
    programs: ["Daily Prayers", "Sports Activities", "Youth Programs", "Community Service"],
    image: "/images/667c8ef5919336892cfe67e2_Main.jpg"
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Locations</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden">
              <Image
                src={location.image}
                alt={location.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
                <p className="text-neutral-700 mb-4">{location.description}</p>
                <div className="flex flex-col mb-4">
                  <h4 className="font-semibold text-neutral-900">Address</h4>
                  <p className="text-neutral-600">{location.address}</p>
                </div>
                <div className="flex flex-col mb-4">
                  <h4 className="font-semibold text-neutral-900">Contact</h4>
                  {location.phoneNumbers.map((phone, idx) => (
                    <p key={idx} className="text-neutral-600">
                      <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary-600">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
                <div className="flex flex-col mb-4">
                  <h4 className="font-semibold text-neutral-900">Hours</h4>
                  <p className="text-neutral-600">{location.schedule}</p>
                </div>
                <Link
                  href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  View on Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 