'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ServiceButtons() {
  const pathname = usePathname()

  const serviceButtons = [
    { name: 'Prayer Services', href: '/services/prayer' },
    { name: 'Education Programs', href: '/services/education' },
    { name: 'Community Support', href: '/services/community-support' },
    { name: 'Youth Activities', href: '/services/youth-activities' },
    { name: 'Cultural Events', href: '/services/cultural-events' },
    { name: 'Langar', href: '/services/langar' },
  ]

  return (
    <div className="w-full bg-amber-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {serviceButtons.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 whitespace-nowrap ${
                pathname === item.href
                  ? 'bg-orange-600 text-white shadow-md transform scale-105'
                  : 'bg-white border-2 border-orange-300 text-orange-700 hover:bg-orange-100 hover:shadow-md hover:scale-105'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 