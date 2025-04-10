import Logo from '@/components/Logo'
import { motion } from 'framer-motion'

export default function LearnNaamJapoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 py-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Naam Japo</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">Learn about this spiritual practice</p>
          
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <p className="text-gray-600">
              Please visit our main Naam Japo page to learn more about this practice.
              <br/><br/>
              <a href="/naam-japo" className="text-orange-600 font-medium">
                Go to Naam Japo
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 