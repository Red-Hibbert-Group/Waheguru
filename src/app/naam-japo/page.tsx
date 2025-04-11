'use client'

import { LearnContent } from '@/components/learn/LearnContent'

export default function NaamJapoPage() {
  const practices = [
    {
      title: 'Simran',
      description: 'Meditation and remembrance of the Divine Name through repetition.',
      icon: '🧘'
    },
    {
      title: 'Kirtan',
      description: 'Musical recitation of Gurbani and devotional hymns.',
      icon: '🎵'
    },
    {
      title: 'Nitnem',
      description: 'Daily prayers and recitation of prescribed Sikh prayers.',
      icon: '📿'
    }
  ]

  const quotes = [
    {
      text: 'ਜਪੁ ਤਪੁ ਸੰਜਮੁ ਧਰਮੁ ਨ ਕਮਾਇਆ ॥ ਸੇਵਾ ਸਾਧ ਨ ਜਾਨਿਆ ਹਰਿ ਰਾਇਆ ॥',
      source: 'Guru Arjan Dev Ji, Guru Granth Sahib Ji, Page 12'
    },
    {
      text: 'ਨਾਮੁ ਜਪਤ ਗੋਬਿੰਦ ਨਹ ਅਲਸਾਈਐ ॥ ਭੇਟਤ ਸਾਧੂ ਸੰਗ ਜਮ ਪੁਰਿ ਨਹ ਜਾਈਐ ॥',
      source: 'Guru Arjan Dev Ji, Guru Granth Sahib Ji, Page 456'
    }
  ]

  const modernApplications = [
    {
      title: 'Mindful Living',
      description: 'Practicing mindfulness and meditation in daily life.',
      icon: '🌟'
    },
    {
      title: 'Digital Devotion',
      description: 'Using apps and online platforms for prayer and meditation.',
      icon: '📱'
    },
    {
      title: 'Group Meditation',
      description: 'Participating in virtual and in-person sangat for collective meditation.',
      icon: '👥'
    },
    {
      title: 'Sacred Music',
      description: 'Incorporating devotional music and chants into daily routine.',
      icon: '🎼'
    }
  ]

  return (
    <LearnContent
      title="Naam Japo"
      subtitle="Learn about the Sikh principle of meditation"
      description="Naam Japo, meaning 'Meditate on the Name', is one of the three main pillars of Sikhism. It emphasizes the importance of remembering and connecting with the Divine through meditation and prayer."
      practices={practices}
      quotes={quotes}
      modernApplications={modernApplications}
    />
  )
} 