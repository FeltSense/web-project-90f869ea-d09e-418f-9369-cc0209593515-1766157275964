'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import EnhancedHero from '@/components/EnhancedHero'
import ProductFeaturesShowcaseNew from '@/components/ProductFeaturesShowcaseNew'
import EnhancedKeyFeaturesShowcase from '@/components/EnhancedKeyFeaturesShowcase'
import KeyFeaturesHighlightSection from '@/components/KeyFeaturesHighlightSection'
import KeyFeaturesHighlight from '@/components/KeyFeaturesHighlight'
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
import KeyProductFeaturesHighlight from '@/components/KeyProductFeaturesHighlight'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      {/* Hero Section - Main Call to Action */}
      <EnhancedHero />

      {/* AI Recipe Generator CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-950/50 via-cyan-950/50 to-blue-950/50 border-y border-emerald-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/60 mb-6">
            <span className="text-sm font-semibold text-emerald-300">✨ Featured Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience Our AI Recipe Generator
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Simply tell our AI what ingredients you have, your dietary preferences, and cooking time available. Get personalized recipe suggestions in seconds—completely free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-started"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/75 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                🎯 Try It Now - Free
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-slate-400">
              No signup required • Instant results • Save your favorites
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Highlight Section */}
      <KeyFeaturesHighlight />

      {/* Key Product Features Section */}
      <KeyProductFeaturesHighlight />
      
      {/* User Success Stories Section - Showcase Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See How Our AI Recipe Generator Transforms Kitchens
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real results from real users. Discover the key benefits that are changing how people cook.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10+</div>
              <p className="text-white font-semibold mb-2">Hours Saved Weekly</p>
              <p className="text-slate-300 text-sm">Busy parents and professionals save 10+ hours every week on meal planning and grocery shopping.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300">
              <div className="text-5xl font-bold text-emerald-400 mb-2">$1,200+</div>
              <p className="text-white font-semibold mb-2">Saved Yearly on Groceries</p>
              <p className="text-slate-300 text-sm">Smart substitutions and budget optimization help users cut grocery costs by 30-35% annually.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300">
              <div className="text-5xl font-bold text-amber-400 mb-2">40%</div>
              <p className="text-white font-semibold mb-2">Less Food Waste</p>
              <p className="text-slate-300 text-sm">AI-powered recipe suggestions based on available ingredients reduce food waste significantly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section - Immediately after hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Our AI Kitchen Assistant?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of home cooks who've transformed their kitchen with AI-powered recipe suggestions, smart meal planning, and intelligent grocery optimization.
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
      
      {/* Success Metrics Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Proven Results from Our Community
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how our AI kitchen assistant is making a real difference in kitchens worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">50K+</div>
              <p className="text-slate-300">Active Users</p>
              <p className="text-sm text-slate-400 mt-2">Growing daily</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">2.5M+</div>
              <p className="text-slate-300">Recipes Generated</p>
              <p className="text-sm text-slate-400 mt-2">This month alone</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">30%</div>
              <p className="text-slate-300">Average Savings</p>
              <p className="text-sm text-slate-400 mt-2">On grocery bills</p>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">4.9★</div>
              <p className="text-slate-300">User Rating</p>
              <p className="text-sm text-slate-400 mt-2">From 10K+ reviews</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Features Section */}
      <ProductFeaturesShowcaseNew />
      
      {/* Comprehensive Product Features */}
      <ComprehensiveProductFeatures />
      
      {/* Quick Start Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Start creating personalized recipes in minutes, not hours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-2xl mb-6 mx-auto">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Tell Us Your Ingredients</h3>
              <p className="text-slate-300 text-center">
                Simply list the ingredients you have on hand, your dietary preferences, and any allergies. Our AI learns your taste instantly.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-2xl mb-6 mx-auto">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Get AI Recommendations</h3>
              <p className="text-slate-300 text-center">
                Receive personalized recipe suggestions tailored to your ingredients, skill level, and cooking time available.
              </p>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-2xl mb-6 mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Cook & Enjoy</h3>
              <p className="text-slate-300 text-center">
                Follow step-by-step instructions, get shopping lists, and track your cooking journey. Save your favorites for later.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <AboutUs />
      
      <EnhancedKeyFeaturesShowcase />
      <KeyFeaturesHighlightSection />
      <EnhancedFeaturesShowcase />
      <EnhancedHeroFeaturesSection />
      <KeyProductFeaturesSection />
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