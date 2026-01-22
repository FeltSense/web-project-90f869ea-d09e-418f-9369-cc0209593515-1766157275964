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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/60 mb-8 backdrop-blur-sm animate-pulse">
              <span className="text-sm font-bold text-cyan-200">✨ TRUSTED BY 50K+ HOME COOKS • 4.9★ RATED</span>
            </div>

            {/* Main Headline - More Compelling */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Stressing About What to Cook
              <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Your AI Kitchen Assistant Solves It in Seconds
              </span>
            </h1>

            {/* Subheading - Stronger Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Tired of the daily "what's for dinner?" struggle? Overwhelmed by grocery shopping? Worried about wasting food? Our AI instantly generates personalized recipes based on what you have, your dietary needs, and your cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly on meal planning</span>, <span className="font-bold text-cyan-300">cut grocery bills by 30%</span>, <span className="font-bold text-blue-300">reduce food waste by 40%</span>, and cook restaurant-quality meals every night—completely free, no credit card required.
            </p>

            {/* Key Stats - Focus on Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">⏱️ Save 10+ hours weekly on meal planning</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">💰 Cut grocery bills by 30%</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">🗑️ Reduce food waste by 40%</span>
            </div>

            {/* CTA Buttons - Enhanced with Better Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/get-started"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-500/100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Get Your First Recipe Free
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/features"
                className="group relative px-8 py-5 border-2 border-cyan-400/60 text-white font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ See How It Works
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Feature Highlights - Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="text-white font-semibold mb-2">Solve the "What's for Dinner?" Problem</h3>
                <p className="text-slate-300 text-sm"><span className="font-bold text-cyan-300">No more daily stress.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-white font-semibold mb-2">Stop Wasting Money on Groceries</h3>
                <p className="text-slate-300 text-sm"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs by 30% while maintaining quality and taste.</p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">🗑️</div>
                <h3 className="text-white font-semibold mb-2">Eliminate Food Waste</h3>
                <p className="text-slate-300 text-sm"><span className="font-bold text-purple-300">Reduce waste by 40%.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and helping the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Overview Section - NEW */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/60 mb-6 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-200\">✨ KEY BENEFITS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The Benefits That Transform Your Kitchen
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover how our AI recipe generator saves you time, money, and stress while helping you cook restaurant-quality meals every single night. All completely free, no credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Feature Card 1 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3\">AI Recipe Generator</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Instant personalized recipe suggestions based on your ingredients, dietary preferences, cooking skill, and available time.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-cyan-400 mt-1\">✓</span> <span>Instant suggestions in seconds</span></li>
                <li className="flex items-start gap-2\"><span className="text-cyan-400 mt-1\">✓</span> <span>All dietary preferences supported</span></li>
                <li className="flex items-start gap-2\"><span className="text-cyan-400 mt-1\">✓</span> <span>Accurate cooking time estimates</span></li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📋</div>
              <h3 className="text-xl font-bold text-white mb-3\">Smart Meal Planning</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Plan entire weeks of balanced, nutritious meals in minutes with automatically organized shopping lists.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-emerald-400 mt-1\">✓</span> <span>Full week plans in minutes</span></li>
                <li className="flex items-start gap-2\"><span className="text-emerald-400 mt-1\">✓</span> <span>Nutritionally balanced meals</span></li>
                <li className="flex items-start gap-2\"><span className="text-emerald-400 mt-1\">✓</span> <span>Smart shopping lists</span></li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">💰</div>
              <h3 className="text-xl font-bold text-white mb-3\">Budget Optimization</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Save $1,200+ yearly with intelligent ingredient substitutions and budget-friendly meal suggestions.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-purple-400 mt-1\">✓</span> <span>Smart budget-friendly swaps</span></li>
                <li className="flex items-start gap-2\"><span className="text-purple-400 mt-1\">✓</span> <span>Automatic price optimization</span></li>
                <li className="flex items-start gap-2\"><span className="text-purple-400 mt-1\">✓</span> <span>Reduce food waste by 40%</span></li>
              </ul>
            </div>

            {/* Feature Card 4 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold text-white mb-3\">Nutrition Tracking</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Complete nutritional information for every recipe with detailed calorie and macro tracking.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-amber-400 mt-1\">✓</span> <span>Complete calorie & macro tracking</span></li>
                <li className="flex items-start gap-2\"><span className="text-amber-400 mt-1\">✓</span> <span>Detailed nutritional breakdowns</span></li>
                <li className="flex items-start gap-2\"><span className="text-amber-400 mt-1\">✓</span> <span>Health recommendations</span></li>
              </ul>
            </div>

            {/* Feature Card 5 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 hover:border-blue-400/50 transition hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3\">Cooking Guidance</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Step-by-step instructions with cooking tips, technique explanations, and ingredient substitution suggestions.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-blue-400 mt-1\">✓</span> <span>Detailed step-by-step guides</span></li>
                <li className="flex items-start gap-2\"><span className="text-blue-400 mt-1\">✓</span> <span>Pro cooking tips included</span></li>
                <li className="flex items-start gap-2\"><span className="text-blue-400 mt-1\">✓</span> <span>Ingredient substitutions</span></li>
              </ul>
            </div>

            {/* Feature Card 6 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/30 hover:border-rose-400/50 transition hover:shadow-lg hover:shadow-rose-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3\">Favorites & Collections</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4\">
                Save your favorite recipes, create custom collections, and access them instantly whenever you need inspiration.
              </p>
              <ul className="space-y-2 text-slate-400 text-xs\">
                <li className="flex items-start gap-2\"><span className="text-rose-400 mt-1\">✓</span> <span>Save unlimited favorites</span></li>
                <li className="flex items-start gap-2\"><span className="text-rose-400 mt-1\">✓</span> <span>Create custom collections</span></li>
                <li className="flex items-start gap-2\"><span className="text-rose-400 mt-1\">✓</span> <span>Quick access anytime</span></li>
              </ul>
            </div>
          </div>

          {/* Feature Highlights Summary */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4\">All Features, Forever Free</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto\">
              No credit card required. No hidden fees. No premium tiers. Every feature is available to every user, completely free. Start creating personalized recipes today.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Showcase Section - NEW */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/60 mb-6 backdrop-blur-sm">
              <span className="text-sm font-bold text-blue-200">⭐ PREMIUM FEATURES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Advanced Capabilities That Set Us Apart
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the advanced features that make our AI kitchen assistant the most powerful recipe and meal planning tool available today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Advanced Feature 1 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Adaptive AI Learning</h3>
              <p className="text-slate-300 mb-4">
                Our AI learns from every interaction. The more you use it, the better it understands your preferences, dietary needs, and cooking style. Personalization that actually works.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Learns your taste preferences</li>
                <li className="flex items-center gap-2">✓ Remembers dietary restrictions</li>
                <li className="flex items-center gap-2">✓ Adapts to skill level improvements</li>
              </ul>
            </div>

            {/* Advanced Feature 2 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🛒</div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Shopping Integration</h3>
              <p className="text-slate-300 mb-4">
                Automatically organized shopping lists sorted by store layout. Get price comparisons, find deals, and discover budget-friendly alternatives for every ingredient.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Store-layout organized lists</li>
                <li className="flex items-center gap-2">✓ Real-time price comparisons</li>
                <li className="flex items-center gap-2">✓ Budget-friendly alternatives</li>
              </ul>
            </div>

            {/* Advanced Feature 3 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Multi-Device Sync</h3>
              <p className="text-slate-300 mb-4">
                Access your recipes, meal plans, and shopping lists from any device. Start planning on your phone, continue on your tablet, and cook from your laptop—seamlessly synchronized.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Sync across all devices</li>
                <li className="flex items-center gap-2">✓ Offline access available</li>
                <li className="flex items-center gap-2">✓ Real-time updates</li>
              </ul>
            </div>

            {/* Advanced Feature 4 */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-white mb-3">Family Meal Planning</h3>
              <p className="text-slate-300 mb-4">
                Plan meals that satisfy everyone's preferences. Handle multiple dietary needs, allergies, and taste preferences in one unified meal plan. No more cooking separate meals.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Multiple dietary preferences</li>
                <li className="flex items-center gap-2">✓ Allergy management</li>
                <li className="flex items-center gap-2">✓ Family-friendly recipes</li>
              </ul>
            </div>
          </div>

          {/* Feature Summary CTA */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Experience the Difference</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              These advanced features work together to create the most intelligent, personalized cooking experience available. Start using them today—completely free.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section - Highlight Core Product Benefits */}
      <CompellingKeyFeaturesSection />


      {/* Detailed Product Features Section - Deep Dive */}
      <section className=\"py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"text-center mb-20\">
            <div className=\"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/60 mb-6 backdrop-blur-sm\">
              <span className=\"text-sm font-bold text-purple-200\">🎯 DETAILED FEATURES</span>
            </div>
            <h2 className=\"text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight\">
              Comprehensive Product Features Explained
            </h2>
            <p className=\"text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed\">
              Explore the complete set of features that make our AI kitchen assistant the most powerful recipe and meal planning solution available. Each feature is designed to solve real cooking challenges.
            </p>
          </div>

          <div className=\"grid md:grid-cols-2 gap-8 mb-12\">
            {/* Feature Deep Dive 1 */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">🤖</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Advanced AI Recipe Generation</h3>
              <p className=\"text-slate-300 mb-4\">
                Our proprietary AI engine analyzes thousands of recipes and cooking patterns to generate personalized suggestions in real-time. It considers your ingredients, dietary restrictions, cooking skill level, available time, and even your past preferences.
              </p>
              <div className=\"space-y-3\">
                <div className=\"p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-cyan-300\">Smart Ingredient Matching:</span> Automatically identifies recipes that use ingredients you already have, minimizing waste and shopping needs.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-cyan-300\">Skill-Level Adaptation:</span> Recipes adjust complexity based on your cooking experience, from beginner-friendly to advanced techniques.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-cyan-300\">Time-Based Filtering:</span> Get recipes that fit your schedule, whether you have 15 minutes or 2 hours to cook.</p>
                </div>
              </div>
            </div>

            {/* Feature Deep Dive 2 */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">📋</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Intelligent Meal Planning System</h3>
              <p className=\"text-slate-300 mb-4\">
                Plan entire weeks of balanced, nutritious meals in minutes. Our system ensures variety, nutritional balance, and respects all dietary preferences while minimizing repetition and maximizing ingredient efficiency.
              </p>
              <div className=\"space-y-3\">
                <div className=\"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-emerald-300\">Nutritional Balance:</span> Every meal plan is automatically balanced for calories, macros, and micronutrients to support your health goals.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-emerald-300\">Ingredient Efficiency:</span> Smart planning reuses ingredients across multiple meals to reduce shopping and waste.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-emerald-300\">Family Preferences:</span> Handle multiple dietary needs and taste preferences in a single unified meal plan.</p>
                </div>
              </div>
            </div>

            {/* Feature Deep Dive 3 */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">💰</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Smart Budget Optimization Engine</h3>
              <p className=\"text-slate-300 mb-4\">
                Save $1,200+ yearly with our intelligent budget optimization system. It analyzes prices, finds deals, suggests affordable alternatives, and ensures you get maximum nutrition for minimum cost.
              </p>
              <div className=\"space-y-3\">
                <div className=\"p-3 rounded-lg bg-purple-500/10 border border-purple-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-purple-300\">Price Comparison:</span> Real-time price data across stores helps you find the best deals on every ingredient.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-purple-500/10 border border-purple-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-purple-300\">Smart Substitutions:</span> AI suggests budget-friendly ingredient swaps that maintain taste and nutrition quality.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-purple-500/10 border border-purple-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-purple-300\">Waste Reduction:</span> Recipes prioritize using ingredients you already have, preventing spoilage and unnecessary purchases.</p>
                </div>
              </div>
            </div>

            {/* Feature Deep Dive 4 */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">📊</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Comprehensive Nutrition Tracking</h3>
              <p className=\"text-slate-300 mb-4\">
                Complete nutritional information for every recipe with detailed breakdowns. Track calories, macros, micronutrients, and align your meals with your specific health and fitness goals.
              </p>
              <div className=\"space-y-3\">
                <div className=\"p-3 rounded-lg bg-amber-500/10 border border-amber-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-amber-300\">Detailed Breakdowns:</span> See complete nutritional information including vitamins, minerals, fiber, and allergen information.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-amber-500/10 border border-amber-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-amber-300\">Goal Alignment:</span> Filter recipes by your specific health goals—weight loss, muscle gain, heart health, or general wellness.</p>
                </div>
                <div className=\"p-3 rounded-lg bg-amber-500/10 border border-amber-500/20\">
                  <p className=\"text-sm text-slate-200\"><span className=\"font-semibold text-amber-300\">Macro Tracking:</span> Monitor protein, carbs, and fats to ensure your meals support your fitness objectives.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why These Features Matter */}
          <div className=\"mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 border border-cyan-500/30\">
            <h3 className=\"text-2xl font-bold text-white mb-4 text-center\">Why These Features Matter</h3>
            <div className=\"grid md:grid-cols-3 gap-6\">
              <div className=\"text-center\">
                <p className=\"text-slate-300 leading-relaxed\"><span className=\"font-semibold text-cyan-300\">Save Time:</span> Stop spending hours planning meals and shopping. Our AI does the heavy lifting in seconds.</p>
              </div>
              <div className=\"text-center\">
                <p className=\"text-slate-300 leading-relaxed\"><span className=\"font-semibold text-emerald-300\">Save Money:</span> Intelligent budget optimization and waste reduction cut your grocery bills significantly.</p>
              </div>
              <div className=\"text-center\">
                <p className=\"text-slate-300 leading-relaxed\"><span className=\"font-semibold text-purple-300\">Eat Better:</span> Nutritionally balanced meals tailored to your health goals and dietary preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Powerful Features That Transform Your Kitchen
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover the AI-powered tools that make meal planning effortless, save you money, and help you cook with confidence every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Recipe Generator</h3>
              <p className="text-slate-300 mb-4">
                Get personalized recipe suggestions in seconds. Our AI analyzes your ingredients, dietary needs, cooking skill, and available time to recommend meals you'll love—no more "what's for dinner?" stress.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Instant personalized suggestions</li>
                <li className="flex items-center gap-2">✓ Supports all dietary preferences</li>
                <li className="flex items-center gap-2">✓ Accurate cooking time estimates</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Meal Planning</h3>
              <p className="text-slate-300 mb-4">
                Plan your entire week in minutes instead of hours. Get balanced, nutritious meal plans tailored to your family's preferences, with automatically organized shopping lists and prep time estimates.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Full week meal plans in minutes</li>
                <li className="flex items-center gap-2">✓ Nutritionally balanced meals</li>
                <li className="flex items-center gap-2">✓ Smart, organized shopping lists</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-400/50 transition hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Budget Optimization</h3>
              <p className="text-slate-300 mb-4">
                Save $1,200+ yearly with intelligent ingredient substitutions and budget-friendly meal suggestions. Our AI finds the best deals and recommends affordable alternatives that taste just as good.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Smart budget-friendly swaps</li>
                <li className="flex items-center gap-2">✓ Automatic price optimization</li>
                <li className="flex items-center gap-2">✓ Reduce food waste by 40%</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">Nutrition Tracking</h3>
              <p className="text-slate-300 mb-4">
                Stay on top of your health goals with detailed nutritional information for every recipe. Track calories, macros, and micronutrients to ensure your meals align with your wellness objectives.
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">✓ Complete calorie & macro tracking</li>
                <li className="flex items-center gap-2">✓ Detailed nutritional breakdowns</li>
                <li className="flex items-center gap-2">✓ Personalized health recommendations</li>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-950 via-blue-950 to-purple-950 border-y-2 border-cyan-400/50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
            <span className="text-sm font-bold text-cyan-200">✨ FEATURED FEATURE</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI Recipe Generator</span>
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
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-500/100 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Try AI Recipe Generator Now
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <button className="group relative px-8 py-5 border-2 border-cyan-400/60 text-white font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">
                📺 Watch Demo
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-cyan-500/30">
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
              Why 50K+ Home Cooks Trust Us
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience the difference that AI-powered recipe generation, intelligent meal planning, and smart budget optimization can make in your daily cooking life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">End Meal Planning Stress</h3>
              <p className="text-slate-300 leading-relaxed">No more staring at your fridge wondering what to cook. Get personalized recipe suggestions in seconds based on your ingredients, dietary needs, and cooking skill. Dinner decisions made easy.</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Save $1,200+ Yearly</h3>
              <p className="text-slate-300 leading-relaxed">Stop overspending on groceries. Smart ingredient substitutions and budget-friendly meal suggestions cut your grocery bills by 30%. Our AI finds deals and recommends affordable alternatives automatically.</p>
            </div>
            
            <div className="group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 duration-300">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🗑️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Reduce Food Waste by 40%</h3>
              <p className="text-slate-300 leading-relaxed">Stop throwing away spoiled food. AI-powered recipes use ingredients you already have, preventing waste and helping you cook smarter while saving money and protecting the environment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />


      {/* Real-World Benefits & Use Cases Section */}
      <section className=\"py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"text-center mb-20\">
            <div className=\"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/60 mb-6 backdrop-blur-sm\">
              <span className=\"text-sm font-bold text-emerald-200\">💡 REAL-WORLD BENEFITS</span>
            </div>
            <h2 className=\"text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight\">
              How Different Users Benefit
            </h2>
            <p className=\"text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed\">
              Whether you're a busy parent, health-conscious professional, budget-conscious family, or cooking enthusiast, our AI kitchen assistant adapts to your unique needs and lifestyle.
            </p>\n          </div>

          <div className=\"grid md:grid-cols-2 gap-8 mb-12\">
            {/* Use Case 1: Busy Parents */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">👨‍👩‍👧‍👦</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Busy Parents</h3>
              <p className=\"text-slate-300 mb-4\">
                Juggling work, kids, and household responsibilities? Our AI saves you 10+ hours weekly on meal planning and grocery shopping, giving you more time with family.
              </p>\n              <ul className=\"space-y-2 text-slate-300 text-sm\">
                <li className=\"flex items-center gap-2\">✓ Quick meal decisions in seconds</li>
                <li className=\"flex items-center gap-2\">✓ Family-friendly recipes everyone enjoys</li>
                <li className=\"flex items-center gap-2\">✓ Handle multiple dietary preferences</li>
                <li className=\"flex items-center gap-2\">✓ Organized shopping lists save trips</li>
              </ul>
            </div>

            {/* Use Case 2: Health-Conscious Professionals */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">💪</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Health-Conscious Professionals</h3>
              <p className=\"text-slate-300 mb-4\">
                Maintain your fitness goals without spending hours meal prepping. Get nutritionally optimized recipes with complete macro tracking aligned to your health objectives.
              </p>\n              <ul className=\"space-y-2 text-slate-300 text-sm\">
                <li className=\"flex items-center gap-2\">✓ Detailed nutrition information</li>
                <li className=\"flex items-center gap-2\">✓ Macro tracking for fitness goals</li>
                <li className=\"flex items-center gap-2\">✓ Quick, healthy meal options</li>
                <li className=\"flex items-center gap-2\">✓ Supports all dietary preferences</li>
              </ul>
            </div>

            {/* Use Case 3: Budget-Conscious Families */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-400/50 transition hover:shadow-lg hover:shadow-purple-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">💰</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Budget-Conscious Families</h3>
              <p className=\"text-slate-300 mb-4\">
                Stretch your grocery budget further without sacrificing quality or taste. Save $1,200+ yearly with smart substitutions and intelligent budget optimization.
              </p>\n              <ul className=\"space-y-2 text-slate-300 text-sm\">
                <li className=\"flex items-center gap-2\">✓ Smart budget-friendly suggestions</li>
                <li className=\"flex items-center gap-2\">✓ Price comparison across stores</li>
                <li className=\"flex items-center gap-2\">✓ Reduce food waste by 40%</li>
                <li className=\"flex items-center gap-2\">✓ Affordable ingredient alternatives</li>
              </ul>
            </div>

            {/* Use Case 4: Cooking Enthusiasts */}
            <div className=\"group p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300\">
              <div className=\"text-5xl mb-4 group-hover:scale-125 transition-transform duration-300\">👨‍🍳</div>
              <h3 className=\"text-2xl font-bold text-white mb-3\">Cooking Enthusiasts</h3>
              <p className=\"text-slate-300 mb-4\">
                Discover new recipes and cooking techniques. Get inspired with personalized suggestions that match your skill level and help you expand your culinary repertoire.
              </p>\n              <ul className=\"space-y-2 text-slate-300 text-sm\">
                <li className=\"flex items-center gap-2\">✓ Discover new recipes daily</li>
                <li className=\"flex items-center gap-2\">✓ Pro cooking tips and techniques</li>
                <li className=\"flex items-center gap-2\">✓ Ingredient substitution ideas</li>
                <li className=\"flex items-center gap-2\">✓ Save and organize favorites</li>
              </ul>
            </div>
          </div>

          {/* Key Benefits Summary */}
          <div className=\"mt-16 grid md:grid-cols-4 gap-6\">
            <div className=\"p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center hover:border-cyan-400/50 transition duration-300\">
              <div className=\"text-4xl mb-3\">⏱️</div>\n              <h4 className=\"text-white font-semibold mb-2\">Save 10+ Hours</h4>\n              <p className=\"text-slate-300 text-sm\">Weekly on meal planning and shopping</p>\n            </div>\n\n            <div className=\"p-6 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center hover:border-emerald-400/50 transition duration-300\">\n              <div className=\"text-4xl mb-3\">💰</div>\n              <h4 className=\"text-white font-semibold mb-2\">Save $1,200+</h4>\n              <p className=\"text-slate-300 text-sm\">Yearly on grocery bills</p>\n            </div>\n\n            <div className=\"p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-center hover:border-purple-400/50 transition duration-300\">\n              <div className=\"text-4xl mb-3\">🗑️</div>\n              <h4 className=\"text-white font-semibold mb-2\">Reduce Waste</h4>\n              <p className=\"text-slate-300 text-sm\">By 40% with smart recipes</p>\n            </div>\n\n            <div className=\"p-6 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-center hover:border-amber-400/50 transition duration-300\">\n              <div className=\"text-4xl mb-3\">🎯</div>\n              <h4 className=\"text-white font-semibold mb-2\">100% Free</h4>\n              <p className=\"text-slate-300 text-sm\">No credit card required</p>\n            </div>\n          </div>\n        </div>\n      </section>
      
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
              Start Creating Personalized Recipes in 3 Steps
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From zero to delicious dinner in minutes. No cooking experience required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">List Your Ingredients</h3>
              <p className="text-slate-300 text-center leading-relaxed">
                Tell us what you have in your kitchen, your dietary preferences, and any allergies. Takes less than 30 seconds.
              </p>
            </div>
            
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition hover:shadow-lg hover:shadow-emerald-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Get Instant Recipes</h3>
              <p className="text-slate-300 text-center leading-relaxed">
                Our AI generates personalized recipe suggestions in seconds, tailored to your ingredients, skill level, and available time.
              </p>
            </div>
            
            <div className="group relative p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 hover:border-amber-400/50 transition hover:shadow-lg hover:shadow-amber-500/20 duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-3xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Cook & Save Favorites</h3>
              <p className="text-slate-300 text-center leading-relaxed">
                Follow easy step-by-step instructions, get organized shopping lists, and save your favorite recipes for quick access later.
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