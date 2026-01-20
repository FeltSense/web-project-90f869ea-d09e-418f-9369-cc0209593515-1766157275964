'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import EnhancedHero from '@/components/EnhancedHero'
import ProductFeaturesShowcaseNew from '@/components/ProductFeaturesShowcaseNew'
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
import ComprehensiveProductFeatures from '@/components/ComprehensiveProductFeatures'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      {/* Hero Section - Main Call to Action */}
      <EnhancedHero />
      
      {/* Key Benefits Section - Immediately after hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Our AI Kitchen Assistant?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your cooking experience with intelligent features designed to save you time, reduce food waste, and make meal planning effortless.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Suggestions</h3>
              <p className="text-slate-300">Get personalized recipe suggestions in seconds. Our AI instantly analyzes your ingredients, preferences, and dietary needs to recommend perfect meals.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Budget Optimization</h3>
              <p className="text-slate-300">Intelligent shopping lists and cost-effective alternatives help you save up to 30% on groceries. Track spending and find deals automatically.</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Truly Personalized</h3>
              <p className="text-slate-300">The more you use it, the smarter it gets. Our AI learns your taste preferences, dietary restrictions, and cooking skill level to provide tailored recommendations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* Product Features Section */}
      <ProductFeaturesShowcaseNew />
      
      {/* Comprehensive Product Features */}
      <ComprehensiveProductFeatures />
      
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