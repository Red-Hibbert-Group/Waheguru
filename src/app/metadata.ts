import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waheguru - Empowering Communities Through Seva',
  description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
  keywords: 'Sikh, Gurdwara, Community Service, Seva, Education, Langar, California',
  openGraph: {
    title: 'Waheguru - Empowering Communities Through Seva',
    description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Waheguru Community Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waheguru - Empowering Communities Through Seva',
    description: 'Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.',
    images: ['/images/og-image.jpg'],
  },
} 