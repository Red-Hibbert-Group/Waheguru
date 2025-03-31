'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </>
  )
} 