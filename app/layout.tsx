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
  title: 'RecipeAI - AI-Powered Recipe Generator & Meal Planning | 100K+ Users',
  description: 'Transform your kitchen with AI-powered personalized recipes, meal plans, and nutrition tracking. Save 10+ hours weekly, cut grocery bills by 30%, reduce food waste by 40%, and enjoy restaurant-quality meals at home. Join 100,000+ home cooks. 100% free, no credit card required.',
  keywords: ['AI recipe generator', 'meal planning app', 'personalized recipes', 'nutrition tracking', 'smart shopping lists', 'food technology', 'health tech', 'wellness', 'diet planning', 'cooking app', 'RecipeAI', 'AI cooking assistant'],
  authors: [{ name: 'RecipeAI' }],
  creator: 'RecipeAI',
  publisher: 'RecipeAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://recipeai.com',
    siteName: 'RecipeAI',
    title: 'RecipeAI - AI-Powered Recipe Generator & Meal Planning',
    description: 'Transform your kitchen with AI-powered personalized recipes, meal plans, and nutrition tracking. Save 10+ hours weekly, cut grocery bills by 30%, and reduce food waste by 40%. Join 100,000+ home cooks. 100% free.',
    images: [
      {
        url: 'https://recipeai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RecipeAI - AI-Powered Recipe Generator & Meal Planning App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RecipeAI - AI Recipe Generator & Meal Planning',
    description: 'Transform your kitchen with AI-powered personalized recipes. Save time, money, and reduce food waste. 100% free, no credit card required.',
    creator: '@recipeai',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'RecipeAI',
  'description': 'AI-powered personalized recipes, meal plans, and nutrition tracking. Save 10+ hours weekly on meal planning, cut grocery bills by 30%, and reduce food waste by 40%. Join 100,000+ home cooks.',
  'url': 'https://recipeai.com',
  'image': 'https://recipeai.com/og-image.jpg',
  'applicationCategory': 'UtilitiesApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
    'description': '100% free with full access, no credit card required',
    'availability': 'https://schema.org/InStock',
    'url': 'https://recipeai.com'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'ratingCount': '50000',
    'bestRating': '5',
    'worstRating': '1'
  },
  'author': {
    '@type': 'Organization',
    'name': 'RecipeAI',
    'url': 'https://recipeai.com'
  },
  'potentialAction': {
    '@type': 'UseAction',
    'target': 'https://recipeai.com'
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
