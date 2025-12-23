import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const headingFont = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'Hello My Love - AI Recipe Generator & Meal Planning App',
  description: 'Transform your kitchen with AI-powered personalized recipes, meal plans, and nutrition tracking. Save 10+ hours weekly, cut food waste by 40%, and enjoy restaurant-quality meals at home. Join 100,000+ users with our 7-day free trial.',
  keywords: ['AI recipe generator', 'meal planning app', 'personalized recipes', 'nutrition tracking', 'smart shopping lists', 'food technology', 'health tech', 'wellness', 'diet planning', 'cooking app'],
  authors: [{ name: 'Hello My Love' }],
  creator: 'Hello My Love',
  publisher: 'Hello My Love',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hellomylove.com',
    siteName: 'Hello My Love',
    title: 'Hello My Love - AI Recipe Generator & Meal Planning',
    description: 'AI-powered personalized recipes, meal plans, and nutrition tracking. Save 10+ hours weekly and cut food waste by 40%. Join 100,000+ users. 7-day free trial.',
    images: [
      {
        url: 'https://hellomylove.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hello My Love - AI Recipe Generator & Meal Planning App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello My Love - AI Recipe Generator & Meal Planning',
    description: 'Transform your kitchen with AI-powered personalized recipes. Save time, money, and reduce food waste. 7-day free trial.',
    creator: '@hellomylove',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'Hello My Love',
  'description': 'AI-powered personalized recipes, meal plans, and nutrition tracking',
  'url': 'https://hellomylove.com',
  'applicationCategory': 'UtilitiesApplication',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
    'description': '7-day free trial'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'ratingCount': '2500'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
