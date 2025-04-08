import { Metadata } from 'next'
import LearnContent from '../../../components/learn/LearnContent'

export const metadata: Metadata = {
  title: 'Understanding Naam Japo - Waheguru',
  description: 'Learn about Naam Japo, one of the Three Pillars of Sikhism that guides daily living and spiritual practice.',
}

export default function LearnPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Test Page</h1>
    </div>
  )
} 