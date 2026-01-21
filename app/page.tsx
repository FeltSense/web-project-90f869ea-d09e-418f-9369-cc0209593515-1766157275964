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
import CompellingKeyFeaturesSection from '@/components/CompellingKeyFeaturesSection'

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      {/* Hero Section - Main Call to Action */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/60 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-emerald-200">✨ TRUSTED BY 50K+ HOME COOKS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Personalized Recipes Made
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Effortlessly Easy
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our AI instantly learns your taste preferences and creates personalized recipe recommendations tailored just for you. No complicated steps—just delicious, customized meals in seconds. Save time, money, and enjoy cooking again.
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">✓ 2.5M+ recipes generated</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">✓ 4.9★ user rating</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">✓ No credit card needed</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/get-started"
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/60 hover:shadow-emerald-500/100 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎯 Get Your Personalized Recipes
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="group relative px-8 py-5 border-2 border-emerald-400/60 text-white font-semibold rounded-xl hover:bg-emerald-500/20 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  💎 View Pricing
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-white font-semibold mb-2">Instant Personalization</h3>
                <p className="text-slate-300 text-sm">AI learns your taste in seconds, not days</p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white font-semibold mb-2">Perfectly Tailored</h3>
                <p className="text-slate-300 text-sm">Every recipe matches your unique preferences</p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-400/50 transition hover:shadow-lg hover:shadow-blue-500/20 duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-white font-semibold mb-2">Effortlessly Easy</h3>
                <p className="text-slate-300 text-sm">No complexity, just delicious results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Highlight Core Product Benefits */}
      <CompellingKeyFeaturesSection />

      {/* Enhanced Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Powerful Features Built for You
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to revolutionize your cooking experience and save time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Recipe Generator</h3>
              <p className="text-slate-300 mb-4">
                Our advanced AI analyzes your available ingredients, dietary preferences, cooking skill level, and time constraints to generate personalized recipe suggestions you'll actually want to cook.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Instant recipe suggestions</li>
                <li className="flex items-center gap-2">✓ Dietary preference support</li>
                <li className="flex items-center gap-2">✓ Cooking time estimates</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Meal Planning</h3>
              <p className="text-slate-300 mb-4">
                Plan your entire week in minutes with AI-generated meal plans that balance nutrition, variety, and your preferences. Get auto-organized shopping lists and prep time estimates.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Weekly meal plans</li>
                <li className="flex items-center gap-2">✓ Balanced nutrition</li>
                <li className="flex items-center gap-2">✓ Auto-generated shopping lists</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-400/50 transition hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Budget Optimization</h3>
              <p className="text-slate-300 mb-4">
                Cut your grocery bills by up to 30% with smart substitutions, price comparisons, and waste reduction. Our AI finds the best deals and suggests affordable alternatives without compromising taste.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Cost-effective alternatives</li>
                <li className="flex items-center gap-2">✓ Price comparisons</li>
                <li className="flex items-center gap-2">✓ Waste reduction tips</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">Nutrition Tracking</h3>
              <p className="text-slate-300 mb-4">
                Track calories, macros, and micronutrients for every recipe. Get detailed nutritional breakdowns and personalized recommendations based on your health goals.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Calorie tracking</li>
                <li className="flex items-center gap-2">✓ Macro breakdowns</li>
                <li className="flex items-center gap-2">✓ Health goal alignment</li>
              </ul>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center hover:border-emerald-400/50 transition duration-300">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="text-white font-semibold mb-2">Save 10+ Hours Weekly</h4>
              <p className="text-slate-300 text-sm">No more meal planning stress or grocery shopping confusion</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center hover:border-cyan-400/50 transition duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-semibold mb-2">100% Personalized</h4>
              <p className="text-slate-300 text-sm">AI learns your preferences and gets smarter over time</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-center hover:border-blue-400/50 transition duration-300">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-white font-semibold mb-2">Always Free</h4>
              <p className="text-slate-300 text-sm">No credit card required, no hidden fees, forever free</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recipe Generator CTA Section - Premium Highlight */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-950 via-cyan-950 to-blue-950 border-y-2 border-emerald-400/50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/30 border border-emerald-400/80 mb-8 backdrop-blur-sm">
            <span className="text-sm font-bold text-emerald-200">✨ FEATURED FEATURE</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AI Recipe Generator</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-100 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
            Transform your kitchen with AI-powered recipe suggestions tailored to your ingredients, dietary preferences, and cooking time. Get personalized meal ideas in seconds—completely free, no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 text-sm text-emerald-300 font-semibold">
            <span className="flex items-center gap-2">✓ No signup required</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-2">✓ Instant results</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-2">✓ Save favorites</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/get-started"
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/60 hover:shadow-emerald-500/100 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Try AI Recipe Generator Now
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <button className="group relative px-8 py-5 border-2 border-emerald-400/60 text-white font-semibold rounded-xl hover:bg-emerald-500/20 hover:border-emerald-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">
                📺 Watch Demo
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-emerald-500/30">
            <p className="text-sm text-slate-300 mb-6 font-semibold">Trusted by thousands of home cooks worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">50K+</div>
                <p className="text-xs text-slate-400 mt-1">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2.5M+</div>
                <p className="text-xs text-slate-400 mt-1">Recipes Generated</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">4.9★</div>
                <p className="text-xs text-slate-400 mt-1">User Rating</p>
              </div>
            </div>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Kitchen Assistant?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of home cooks who've transformed their kitchen with AI-powered recipe suggestions, smart meal planning, and intelligent grocery optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-slate-300 leading-relaxed">Get personalized recipe suggestions in seconds. Our AI instantly analyzes your ingredients, preferences, and dietary needs to recommend perfect meals.</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Budget Optimization</h3>
              <p className="text-slate-300 leading-relaxed">Intelligent shopping lists and cost-effective alternatives help you save up to 30% on groceries. Track spending and find deals automatically.</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Truly Personalized</h3>
              <p className="text-slate-300 leading-relaxed">The more you use it, the smarter it gets. Our AI learns your taste preferences, dietary restrictions, and cooking skill level to provide tailored recommendations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* Success Metrics Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Proven Results from Our Community
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              See how our AI kitchen assistant is making a real difference in kitchens worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="text-6xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">50K+</div>
              <p className="text-white font-semibold mb-1">Active Users</p>
              <p className="text-sm text-slate-400">Growing daily</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="text-6xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300">2.5M+</div>
              <p className="text-white font-semibold mb-1">Recipes Generated</p>
              <p className="text-sm text-slate-400">This month alone</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-center hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300 hover:scale-105">
              <div className="text-6xl font-bold text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300">30%</div>
              <p className="text-white font-semibold mb-1">Average Savings</p>
              <p className="text-sm text-slate-400">On grocery bills</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-center hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105">
              <div className="text-6xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">4.9★</div>
              <p className="text-white font-semibold mb-1">User Rating</p>
              <p className="text-sm text-slate-400">From 10K+ reviews</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Features Section */}
      <ProductFeaturesShowcaseNew />
      
      {/* Comprehensive Product Features */}
      <ComprehensiveProductFeatures />
      
      {/* Quick Start Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Start creating personalized recipes in minutes, not hours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Tell Us Your Ingredients</h3>
              <p className="text-slate-300 text-center leading-relaxed">
                Simply list the ingredients you have on hand, your dietary preferences, and any allergies. Our AI learns your taste instantly.
              </p>
            </div>
            
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get AI Recommendations</h3>
              <p className="text-slate-300 text-center leading-relaxed">
                Receive personalized recipe suggestions tailored to your ingredients, skill level, and cooking time available.
              </p>
            </div>
            
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Cook & Enjoy</h3>
              <p className="text-slate-300 text-center leading-relaxed">
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