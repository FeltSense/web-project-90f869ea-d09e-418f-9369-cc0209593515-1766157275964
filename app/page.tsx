'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

import HeroKeyFeaturesHighlight from '@/components/HeroKeyFeaturesHighlight'
import CoreProductFeatures from '@/components/CoreProductFeatures'
import Benefits from '@/components/Benefits'
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection'
import Testimonials from '@/components/Testimonials'
import CustomerSuccessStories from '@/components/CustomerSuccessStories'
import BetaSignup from '@/components/BetaSignup'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navigation />
      
      <Hero />

      
      <HeroKeyFeaturesHighlight />
      
      <CoreProductFeatures />
      
      <Benefits />
      
      <div id="premium-features">
        <PremiumFeaturesSection />
      </div>
      
      <Testimonials />
      <CustomerSuccessStories />
      
      <div id="beta-signup">
        <BetaSignup />
      </div>
      <Pricing />
      
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}