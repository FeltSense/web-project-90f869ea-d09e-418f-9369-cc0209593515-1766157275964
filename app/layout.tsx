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
  title: 'Hello My Love - Food & Health Tech Innovation',
  description: 'Transform your health and wellness journey with cutting-edge food and health technology solutions. Trusted by thousands globally.',
  keywords: ['health tech', 'food technology', 'wellness', 'nutrition', 'health innovation'],
  authors: [{ name: 'Hello My Love' }],
  creator: 'Hello My Love',
  publisher: 'Hello My Love',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hellomylove.com',
    siteName: 'Hello My Love',
    title: 'Hello My Love - Food & Health Tech Innovation',
    description: 'Transform your health and wellness journey with cutting-edge food and health technology solutions.',
    images: [
      {
        url: 'https://hellomylove.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hello My Love - Food & Health Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello My Love - Food & Health Tech Innovation',
    description: 'Transform your health and wellness journey with cutting-edge food and health technology solutions.',
    creator: '@hellomylove',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
