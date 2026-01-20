'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import EnhancedKeyFeaturesShowcase from '@/components/EnhancedKeyFeaturesShowcase'
import KeyFeaturesHighlightSection from '@/components/KeyFeaturesHighlightSection'
import EnhancedHeroFeaturesSection from '@/components/EnhancedHeroFeaturesSection'
import EnhancedFeaturesShowcase from '@/components/EnhancedFeaturesShowcase'
import AboutUs from '@/components/AboutUs'
import FeaturesShowcaseSection from '@/components/FeaturesShowcaseSection'
import HowItWorks from '@/components/HowItWorks'
import ModernFeaturesSection from '@/components/ModernFeaturesSection'
import KeyFeaturesShowcaseSection from '@/components/KeyFeaturesShowcaseSection'
import NewHeroFeaturesSection from '@/components/NewHeroFeaturesSection'
import HeroKeyFeaturesHighlight from '@/components/HeroKeyFeaturesHighlight'
import CoreProductFeatures from '@/components/CoreProductFeatures'
import OptimizedProductFeaturesSection from '@/components/OptimizedProductFeaturesSection'
import KeyProductFeaturesSection from '@/components/KeyProductFeaturesSection'
import Benefits from '@/components/Benefits'
import SampleRecipes from '@/components/SampleRecipes'
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
    <main className="overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      {/* Hero Section - Main Call to Action */}
      <Hero />
      
      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Our AI Kitchen Assistant?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the future of home cooking with intelligent features designed to save you time, money, and stress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-slate-300">Get personalized recipe suggestions in seconds, not hours. Our AI works instantly to match your preferences.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Save Money</h3>
              <p className="text-slate-300">Smart shopping lists and budget-friendly alternatives help you save up to 30% on groceries every month.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized</h3>
              <p className="text-slate-300">The more you use it, the smarter it gets. Our AI learns your taste and adapts to your lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
      
      <EnhancedKeyFeaturesShowcase />
      <KeyFeaturesHighlightSection />
      <EnhancedFeaturesShowcase />
      <EnhancedHeroFeaturesSection />
      <KeyProductFeaturesSection />
      <AboutUs />
      <FeaturesShowcaseSection />
      <HowItWorks />
      <ModernFeaturesSection />
      <KeyFeaturesShowcaseSection />
      <NewHeroFeaturesSection />
      <HeroKeyFeaturesHighlight />
      <OptimizedProductFeaturesSection />
      <CoreProductFeatures />
      <Benefits />
      <SampleRecipes />
      <div id="premium-features">
        <PremiumFeaturesSection />
      </div>
      {/* Testimonials Section - Showcase Customer Success */}
      <div id="testimonials">
        <Testimonials />
      </div>
      <CustomerSuccessStories />
      <div id="beta-signup">
        <BetaSignup />
      </div>
      <div data-section="pricing">
        <Pricing />
      </div>
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}