'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { LearnContent } from '@/components/learn/LearnContent'

export default function VandChhakoPage() {
  const practices = [
    {
      title: 'Langar',
      description: 'The community kitchen where food is served to all, regardless of caste, religion, or social status.',
      icon: '🍲'
    },
    {
      title: 'Dasvandh',
      description: 'The practice of donating one-tenth of your earnings to support the community and those in need.',
      icon: '💝'
    },
    {
      title: 'Seva',
      description: 'Selfless service performed without expectation of reward or recognition.',
      icon: '🤲'
    }
  ]

  const quotes = [
    {
      text: 'ਘਾਲਿ ਖਾਇ ਕਿਛੁ ਹਥਹੁ ਦੇਇ ॥ ਨਾਨਕ ਰਾਹੁ ਪਛਾਣਹਿ ਸੇਇ ॥',
      source: 'Guru Nanak Dev Ji, Guru Granth Sahib Ji, Page 1245'
    },
    {
      text: 'ਵਿਚਿ ਦੁਨੀਆ ਸੇਵ ਕਮਾਈਐ ॥ ਤਾ ਦਰਗਹ ਬੈਸਣੁ ਪਾਈਐ ॥',
      source: 'Guru Nanak Dev Ji, Guru Granth Sahib Ji, Page 26'
    }
  ]

  const modernApplications = [
    {
      title: 'Community Support',
      description: 'Organizing food drives, supporting local charities, and participating in community development projects.',
      icon: '🏘️'
    },
    {
      title: 'Environmental Stewardship',
      description: 'Sharing resources sustainably and supporting eco-friendly initiatives.',
      icon: '🌱'
    },
    {
      title: 'Digital Sharing',
      description: 'Using technology to share knowledge, skills, and resources with a global community.',
      icon: '💻'
    },
    {
      title: 'Educational Support',
      description: 'Contributing to educational initiatives and mentoring programs.',
      icon: '📚'
    }
  ]

  return (
    <LearnContent
      title="Vand Chhako"
      subtitle="Learn about the Sikh principle of sharing"
      description="Vand Chhako, meaning 'Share and Consume', is one of the three main pillars of Sikhism. It emphasizes the importance of sharing one's wealth, time, and resources with others, promoting equality and community welfare."
      practices={practices}
      quotes={quotes}
      modernApplications={modernApplications}
    />
  )
} 