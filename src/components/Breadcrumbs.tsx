'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname ? pathname.split('/').filter(Boolean) : []

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-4 text-sm">
          <Link
            href="/"
            className="text-neutral-500 hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          {paths.map((path, index) => (
            <div key={path} className="flex items-center">
              <span className="mx-2 text-neutral-400">/</span>
              <Link
                href={`/${paths.slice(0, index + 1).join('/')}`}
                className="text-neutral-500 hover:text-primary-600 transition-colors capitalize"
              >
                {path.replace(/-/g, ' ')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
} 