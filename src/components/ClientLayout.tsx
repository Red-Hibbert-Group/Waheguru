'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false)

  // Effect to handle dark/light mode on initial render
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Returning a minimal layout to avoid hydration mismatch
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="h-16 bg-white dark:bg-neutral-800 shadow-sm" />
        <main>{children}</main>
        <div className="h-64 bg-primary-500 dark:bg-primary-800" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
} 