'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import SampleRecipes from '@/components/SampleRecipes'
import BetaSignup from '@/components/BetaSignup'
import KeyFeaturesShowcaseEnhanced from '@/components/KeyFeaturesShowcaseEnhanced'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* ENHANCED HERO SECTION - Modern, Compelling & Conversion-Focused */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium Badge - Enhanced */}
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/70 to-emerald-500/70 border-2 border-cyan-200/95 mb-10 backdrop-blur-xl hover:border-cyan-100 transition-all duration-300 shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-500/80 hover:scale-110 animate-pulse">
              <span className="text-sm font-bold text-white tracking-wide">🤖 AI-POWERED • TRUSTED BY 100K+ COOKS • 4.9★ RATING • 100% FREE • NO CREDIT CARD</span>
            </div>

            {/* Main Headline - Powerful & Benefit-Driven */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              🤖 Your AI-Powered Personal Chef
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mt-3 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-pulse">
                Unlimited AI Recipes • Smart Meal Plans • Save 30% on Groceries
              </span>
            </h1>
            
            {/* New Subheading - Enhanced Value Proposition */}
            <div className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-300/80 backdrop-blur-lg">
              <p className="text-sm font-bold text-emerald-100">✨ 🤖 Advanced AI Recipe Generation • Real-Time Meal Planning • Smart Budget Optimization</p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-100 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              <span className="font-bold text-emerald-300">🚀 Transform your kitchen with advanced AI-powered cooking.</span> RecipeAI's intelligent recipe generator delivers <span className="font-bold text-cyan-300">unlimited personalized recipes in seconds</span> tailored to your ingredients, dietary preferences, and cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-cyan-300">cut grocery bills by 30%</span>, <span className="font-bold text-blue-300">reduce food waste by 40%</span>, and <span className="font-bold text-emerald-300">cook restaurant-quality meals</span> every night. Now with <span className="font-bold text-purple-300">real-time meal planning, AI cooking assistant, and community recipe sharing</span>.
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">⏱️ Save 10+ hours weekly</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">💰 Cut grocery bills by 30%</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">🌱 Reduce food waste by 40%</span>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/50">
                <span className="text-lg">⭐</span>
                <span className="text-emerald-100 font-semibold">4.9★ Rating (50K+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/50">
                <span className="text-lg">👥</span>
                <span className="text-cyan-100 font-semibold">100K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/50">
                <span className="text-lg">✅</span>
                <span className="text-purple-100 font-semibold">No Credit Card Required</span>
              </div>
            </div>

            {/* ENHANCED CTA SECTION - Primary Call-to-Action */}
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                {/* Primary CTA Button - High-Converting */}
                <button
                  onClick={() => {
                    const betaSection = document.getElementById('beta-signup-section');
                    if (betaSection) {
                      betaSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative px-16 py-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-slate-900 font-bold rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/90 hover:shadow-emerald-500/130 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap active:scale-95 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-bounce"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🚀 Start Your Free Trial Now
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Secondary CTA Button - Feature Discovery */}
                <Link
                  href="/features"
                  className="group relative px-12 py-7 border-2 border-cyan-300/95 text-white font-semibold rounded-2xl hover:bg-cyan-500/60 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-lg hover:scale-110 bg-cyan-500/40 active:scale-95 before:absolute before:inset-0 before:bg-cyan-400/40 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/80 md:text-base sm:px-10 sm:py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ✨ See All Features
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* CTA Supporting Text */}
              <p className="text-sm text-slate-300 font-medium">
                🎉 <span className="text-emerald-300 font-bold">100% Free</span> • <span className="text-cyan-300 font-bold">No Credit Card</span> • <span className="text-blue-300 font-bold">Cancel Anytime</span> • <span className="text-purple-300 font-bold">Instant Access</span>
              </p>
            </div>
      


            {/* Enhanced Features Highlight Section */}
            <div className="mt-32 mb-16 p-12 rounded-3xl bg-gradient-to-r from-cyan-600/40 via-emerald-600/40 to-blue-600/40 border-2 border-cyan-300/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/80 relative overflow-hidden group hover:shadow-cyan-500/100 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-blue-400/10 group-hover:from-cyan-400/20 group-hover:via-emerald-400/20 group-hover:to-blue-400/20 transition-all duration-300\"></div>
              <div className=\"relative z-10 text-center mb-12\">\n                <h2 className=\"text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6\">Why 100K+ Home Cooks Choose RecipeAI - The #1 AI Cooking Assistant</h2>\n                <p className=\"text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed\">Experience the complete AI-powered cooking solution that combines intelligent recipe generation, smart meal planning, and budget optimization—all in one platform.</p>\n              </div>\n              <div className=\"grid md:grid-cols-3 gap-6 relative z-10\">\n                <div className=\"p-6 rounded-xl bg-slate-900/60 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40\">\n                  <div className=\"text-5xl mb-4\">⚡</div>\n                  <h3 className=\"text-xl font-bold text-white mb-2\">⚡ Instant Recipe Ideas</h3>\n                  <p className=\"text-slate-200 text-sm\">Get personalized recipes in seconds, not hours. Our AI learns your taste and generates dishes you'll love cooking.</p>\n                </div>\n                <div className=\"p-6 rounded-xl bg-slate-900/60 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40\">\n                  <div className=\"text-5xl mb-4\">💰</div>\n                  <h3 className=\"text-xl font-bold text-white mb-2\">💰 Save 30% on Groceries</h3>\n                  <p className=\"text-slate-200 text-sm\">Smart budget optimization finds the best deals and suggests ingredient swaps automatically. Save $1,200+ yearly.</p>\n                </div>\n                <div className=\"p-6 rounded-xl bg-slate-900/60 border border-blue-400/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40\">\n                  <div className=\"text-5xl mb-4\">🌱</div>\n                  <h3 className=\"text-xl font-bold text-white mb-2\">🌱 Reduce Food Waste by 40%</h3>\n                  <p className=\"text-slate-200 text-sm\">AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook sustainably.</p>\n                </div>\n              </div>\n            </div>\n\n            {/* Key Benefits Section - Enhanced */}
            <div className="mt-32 mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg animate-pulse">✨ Transform Your Kitchen with Three Game-Changing Benefits</h2>
              <p className="text-center text-slate-100 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">Discover why 100K+ home cooks trust RecipeAI. Each feature is engineered to save you time, cut costs, and reduce waste while making cooking more enjoyable. From instant recipe generation to smart budget optimization, RecipeAI handles the complexity so you can focus on what matters—delicious meals and quality time with family.</p>
              
              {/* Key Benefits Highlight */}
              <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-blue-500/40 border-2 border-emerald-400/90 backdrop-blur-lg shadow-2xl shadow-emerald-500/50">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-5xl font-bold text-emerald-300 mb-2">10+ Hours</p>
                    <p className="text-white font-semibold text-lg">Saved Weekly</p>
                    <p className="text-slate-200 text-sm mt-2">Automate meal planning and reclaim your time</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-cyan-300 mb-2">30% Less</p>
                    <p className="text-white font-semibold text-lg">Spent on Groceries</p>
                    <p className="text-slate-200 text-sm mt-2">Smart budget optimization saves $1,200+ yearly</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-blue-300 mb-2">40% Reduction</p>
                    <p className="text-white font-semibold text-lg">in Food Waste</p>
                    <p className="text-slate-200 text-sm mt-2">Eco-friendly recipes use what you already have</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-500/35 border-2 border-cyan-400/80 hover:border-cyan-200 transition hover:shadow-2xl hover:shadow-cyan-500/80 duration-300 hover:scale-105 transition-all duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/45 hover:to-blue-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Save 10+ Hours Weekly</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-cyan-300">Reclaim your time.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                    <div className="pt-6 border-t border-cyan-400/40 text-cyan-300 text-sm font-semibold">✓ Instant recipe generation</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/35 to-teal-500/35 border-2 border-emerald-400/80 hover:border-emerald-200 transition hover:shadow-2xl hover:shadow-emerald-500/80 duration-300 hover:scale-105 transition-all duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/45 hover:to-teal-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💰</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Cut Grocery Bills by 30%</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                    <div className="pt-6 border-t border-emerald-400/40 text-emerald-300 text-sm font-semibold">✓ Smart budget optimization</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/35 to-pink-500/35 border-2 border-purple-400/80 hover:border-purple-200 transition hover:shadow-2xl hover:shadow-purple-500/80 duration-300 hover:scale-105 transition-all duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/45 hover:to-pink-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">🌱</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">🌱 Reduce Food Waste by 40%</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-purple-300">Cook sustainably.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and protecting the environment.</p>
                    <div className="pt-6 border-t border-purple-400/40 text-purple-300 text-sm font-semibold">✓ Eco-friendly cooking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Section - High-Converting Offer */}
            <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-cyan-600/70 via-emerald-600/70 to-blue-600/70 border-2 border-cyan-200/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/80 hover:shadow-cyan-500/100 transition-all duration-300 relative overflow-hidden group hover:scale-102">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-emerald-400/15 to-blue-400/15 group-hover:from-cyan-400/25 group-hover:via-emerald-400/25 group-hover:to-blue-400/25 transition-all duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900 font-bold text-sm mb-6">
                  ✨ 100% FREE • NO CREDIT CARD • CANCEL ANYTIME
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">🍽️ Transform Your Kitchen Today</h3>
                <p className="text-xl text-slate-50 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join 100K+ home cooks saving 10+ hours weekly, cutting grocery bills by 30%, and reducing food waste by 40%. Get unlimited personalized recipes powered by advanced AI. Start completely free—no credit card required.
                </p>
                <button
                  onClick={() => {
                    const betaSection = document.getElementById('beta-signup-section');
                    if (betaSection) {
                      betaSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-white to-slate-100 text-cyan-600 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/70 transition-all duration-300 hover:scale-110 active:scale-95 text-lg hover:from-slate-50 hover:to-white"
                >
                  🚀 Get Started Free Now
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Additional Product Features Details */}
            <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Why 100K+ Home Cooks Choose RecipeAI - The #1 AI Cooking Assistant</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Personalized to Your Taste</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Our advanced AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you'll actually love cooking. The more you use it, the smarter it gets.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Lightning-Fast Generation</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Get unlimited recipe ideas in seconds, not hours. Perfect for last-minute meal planning or when inspiration strikes. No waiting, no delays.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">🛒</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Smart Shopping Integration</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Auto-generated shopping lists with budget-friendly alternatives, organized by store section for faster checkout. Save time and money every shopping trip.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">📊</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Nutrition Insights</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Automatic macro tracking and nutritional analysis for every recipe to help you hit your health goals. Know exactly what you're eating.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">👨‍👩‍👧‍👦</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Family-Friendly Meals</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Plan meals for the whole family with personalized preferences for each member, accommodating all dietary needs. Keep everyone happy at the table.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">🌱</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Eco-Conscious Cooking</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Reduce food waste by 40% with recipes that use ingredients you already have, protecting the environment and your wallet. Cook sustainably.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* Visual Comparison Section - Why RecipeAI Stands Out */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why 100K+ Home Cooks Choose RecipeAI</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">See how RecipeAI compares to traditional meal planning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Way */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-700/40 to-slate-600/40 border border-slate-500/50">
              <h3 className="text-2xl font-bold text-slate-300 mb-6">❌ Traditional Meal Planning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-slate-200">Hours spent planning meals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-slate-200\">Wasted ingredients & food spoilage</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-red-400 text-xl flex-shrink-0\">✗</span>
                  <span className=\"text-slate-200\">High grocery bills</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-red-400 text-xl flex-shrink-0\">✗</span>
                  <span className=\"text-slate-200\">Repetitive meals & boredom</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-red-400 text-xl flex-shrink-0\">✗</span>
                  <span className=\"text-slate-200\">No nutrition tracking</span>
                </li>
              </ul>
            </div>

            {/* RecipeAI Way */}
            <div className=\"p-8 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 border-2 border-emerald-400/80 shadow-2xl shadow-emerald-500/50\">
              <h3 className=\"text-2xl font-bold text-white mb-6\">✅ RecipeAI Way</h3>
              <ul className=\"space-y-4\">
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-emerald-400 text-xl flex-shrink-0\">✓</span>
                  <span className=\"text-slate-100\"><span className=\"font-bold text-emerald-300\">Instant recipes</span> in seconds</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-emerald-400 text-xl flex-shrink-0\">✓</span>
                  <span className=\"text-slate-100\"><span className=\"font-bold text-emerald-300\">40% less waste</span> with smart recipes</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-emerald-400 text-xl flex-shrink-0\">✓</span>
                  <span className=\"text-slate-100\"><span className=\"font-bold text-emerald-300\">Save 30%</span> on groceries</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-emerald-400 text-xl flex-shrink-0\">✓</span>
                  <span className=\"text-slate-100\"><span className=\"font-bold text-emerald-300\">Unlimited variety</span> every day</span>
                </li>
                <li className=\"flex items-start gap-3\">
                  <span className=\"text-emerald-400 text-xl flex-shrink-0\">✓</span>
                  <span className=\"text-slate-100\"><span className=\"font-bold text-emerald-300\">Auto nutrition tracking</span> included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Overview Section - NEW COMPREHENSIVE SECTION */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">✨ CORE FEATURES • EVERYTHING YOU NEED</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">🚀 Powerful Features Built for Every Home Cook</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              RecipeAI brings together six essential features that work seamlessly together to transform your cooking experience. From AI-powered recipe generation to intelligent meal planning, every feature is designed to save you time, money, and stress.
            </p>
          </div>

          {/* Main Features Grid - 6 Core Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1: AI Recipe Generation */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-600/35 to-blue-600/35 border-2 border-cyan-400/80 hover:border-cyan-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Recipe Generation</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get unlimited personalized recipes in seconds. Our advanced AI learns your taste preferences, dietary restrictions, and cooking skill level to suggest dishes you'll actually love cooking.</p>
                <div className="space-y-2 text-xs text-cyan-300 font-semibold">
                  <div>✓ 10,000+ recipes in database</div>
                  <div>✓ Instant personalization</div>
                  <div>✓ Taste preference learning</div>
                  <div>✓ Works with any ingredients</div>
                </div>
              </div>
            </div>

            {/* Feature 2: Smart Meal Planning */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600/35 to-teal-600/35 border-2 border-emerald-400/80 hover:border-emerald-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">📅</div>
                <h3 className="text-2xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Plan entire weeks in minutes. Our AI generates balanced meal plans that consider nutrition, taste, variety, allergies, and budget constraints automatically.</p>
                <div className="space-y-2 text-xs text-emerald-300 font-semibold">
                  <div>✓ Weekly meal planning</div>
                  <div>✓ Balanced nutrition</div>
                  <div>✓ Allergy-aware</div>
                  <div>✓ Budget-conscious</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Smart Shopping Lists */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/35 to-pink-600/35 border-2 border-purple-400/80 hover:border-purple-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">🛒</div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Shopping Lists</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Our AI finds the best deals and organizes items by store section.</p>
                <div className="space-y-2 text-xs text-purple-300 font-semibold">
                  <div>✓ Budget optimization</div>
                  <div>✓ Smart ingredient swaps</div>
                  <div>✓ Save 30% on groceries</div>
                  <div>✓ Store-organized lists</div>
                </div>
              </div>
            </div>

            {/* Feature 4: Nutrition Tracking */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-600/35 to-red-600/35 border-2 border-orange-400/80 hover:border-orange-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl group-hover:bg-orange-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">📊</div>
                <h3 className="text-2xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Automatic nutrition analysis for every recipe with detailed breakdowns of calories, protein, carbs, fats, and micronutrients. Hit your health goals effortlessly.</p>
                <div className="space-y-2 text-xs text-orange-300 font-semibold">
                  <div>✓ Macro tracking</div>
                  <div>✓ Health goal alignment</div>
                  <div>✓ Fitness app sync</div>
                  <div>✓ Instant analysis</div>
                </div>
              </div>
            </div>

            {/* Feature 5: Family-Friendly Planning */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-600/35 to-purple-600/35 border-2 border-indigo-400/80 hover:border-indigo-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl group-hover:bg-indigo-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-white mb-3">Family-Friendly Planning</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Plan meals for your entire family with personalized preferences for each member. Accommodate different dietary needs and allergies while keeping everyone happy.</p>
                <div className="space-y-2 text-xs text-indigo-300 font-semibold">
                  <div>✓ Multi-profile support</div>
                  <div>✓ Dietary preferences</div>
                  <div>✓ Allergy-safe</div>
                  <div>✓ Picky-eater friendly</div>
                </div>
              </div>
            </div>

            {/* Feature 6: Chef-Curated Recipes */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600/35 to-cyan-600/35 border-2 border-blue-400/80 hover:border-blue-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with video tutorials and pro tips.</p>
                <div className="space-y-2 text-xs text-blue-300 font-semibold">
                  <div>✓ 10,000+ expert recipes</div>
                  <div>✓ Professional techniques</div>
                  <div>✓ Video tutorials</div>
                  <div>✓ Chef tips & tricks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Benefits Summary */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why These Features Matter</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">⚡</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Lightning-Fast Results</h4>
                  <p className="text-slate-200">Get unlimited recipe ideas in seconds, not hours. Perfect for last-minute meal planning or when inspiration strikes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Personalized to Your Taste</h4>
                  <p className="text-slate-200">Our AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you'll actually love.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">💰</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Save Money Automatically</h4>
                  <p className="text-slate-200">Smart budget optimization finds the best deals and suggests ingredient swaps automatically. Save $1,200+ yearly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🌱</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Eco-Conscious Cooking</h4>
                  <p className="text-slate-200">Reduce food waste by 40% with recipes that use ingredients you already have, protecting the environment and your wallet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Works Everywhere</h4>
                  <p className="text-slate-200">Access RecipeAI on any device—desktop, tablet, or mobile. Sync seamlessly across all your devices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🔒</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Privacy & Security</h4>
                  <p className="text-slate-200">Your data is encrypted and secure. We never sell your information. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins Section - Highlight Key Product Benefits */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">⭐ TOP FEATURES • PROVEN RESULTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why 100K+ Home Cooks Choose RecipeAI - The #1 AI Cooking Assistant Over Everything Else</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">Experience the power of AI-driven cooking that adapts to your lifestyle, saves you money, and makes every meal delicious</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400/70 hover:border-cyan-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/60 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/30 rounded-full blur-2xl group-hover:bg-cyan-400/50 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">⚡ Instant Recipe Ideas</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Get personalized recipe suggestions in seconds, not hours. Our AI learns your taste and generates dishes you'll love cooking.</p>
                <div className="mt-4 text-xs text-cyan-300 font-semibold">✓ 10,000+ recipes • Instant personalization</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border-2 border-emerald-400/70 hover:border-emerald-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/60 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl group-hover:bg-emerald-400/50 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300">💰</div>
                <h3 className="text-2xl font-bold text-white mb-3">💰 Save 30% on Groceries</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Smart budget optimization finds the best deals and suggests ingredient swaps automatically. Save $1,200+ yearly.</p>
                <div className="mt-4 text-xs text-emerald-300 font-semibold">✓ Budget-friendly • Smart swaps</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-400/70 hover:border-purple-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/60 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl group-hover:bg-purple-400/50 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-all duration-300">🌱</div>
                <h3 className="text-2xl font-bold text-white mb-3">🌱 Reduce Food Waste by 40%</h3>
                <p className="text-slate-100 text-sm leading-relaxed">AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook sustainably.</p>
                <div className="mt-4 text-xs text-purple-300 font-semibold">✓ Eco-friendly • Zero waste</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FEATURES SECTION - Latest Additions */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-purple-100">🎉 BRAND NEW • JUST RELEASED • GAME-CHANGING FEATURES</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">🚀 Latest Features - Now Available</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              We&apos;ve just launched powerful new features to make your cooking experience even better. Discover what&apos;s new and how it can transform your kitchen.
            </p>
          </div>

          {/* New Features Grid - 3 Latest Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1: Real-Time Meal Planning */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/35 to-pink-600/35 border-2 border-purple-400/80 hover:border-purple-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/70 group cursor-pointer hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-300"></div>
              <div className="absolute -top-2 -right-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">NEW</div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">Real-Time Meal Planning</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Plan your entire week in real-time with our new interactive meal planner. Drag-and-drop recipes, swap meals instantly, and get automatic shopping lists updated on the fly.</p>
                <div className="space-y-2 text-xs text-purple-300 font-semibold">
                  <div>✓ Drag-and-drop interface</div>
                  <div>✓ Instant meal swaps</div>
                  <div>✓ Live shopping list updates</div>
                  <div>✓ Collaborative planning</div>
                </div>
              </div>
            </div>

            {/* Feature 2: AI Cooking Assistant */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-pink-600/25 to-red-600/25 border-2 border-pink-400/60 hover:border-pink-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 group cursor-pointer hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl group-hover:bg-pink-400/40 transition-all duration-300"></div>
              <div className="absolute -top-2 -right-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold">NEW</div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Cooking Assistant</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get real-time cooking guidance with our new AI assistant. Ask questions while cooking, get step-by-step help, and receive pro tips from professional chefs instantly.</p>
                <div className="space-y-2 text-xs text-pink-300 font-semibold">
                  <div>✓ Real-time chat support</div>
                  <div>✓ Step-by-step guidance</div>
                  <div>✓ Chef pro tips</div>
                  <div>✓ Ingredient substitutions</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Social Recipe Sharing */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-600/25 to-orange-600/25 border-2 border-red-400/60 hover:border-red-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 group cursor-pointer hover:scale-105 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl group-hover:bg-red-400/40 transition-all duration-300"></div>
              <div className="absolute -top-2 -right-2 px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold">NEW</div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300">👥</div>
                <h3 className="text-2xl font-bold text-white mb-3">Social Recipe Sharing</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Share your favorite recipes with friends and family. Build your personal recipe collection, rate recipes, and discover trending dishes from the RecipeAI community.</p>
                <div className="space-y-2 text-xs text-red-300 font-semibold">
                  <div>✓ Share with friends</div>
                  <div>✓ Community recipes</div>
                  <div>✓ Recipe ratings</div>
                  <div>✓ Trending dishes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Benefits Summary */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why These New Features Matter</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">⏱️</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Save Even More Time</h4>
                  <p className="text-slate-200">Real-time planning and AI assistance eliminate the guesswork. Cook with confidence and speed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Better Cooking Experience</h4>
                  <p className="text-slate-200">Get expert guidance while cooking. Learn from professionals and improve your skills instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">👥</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Connect with Community</h4>
                  <p className="text-slate-200">Share discoveries, learn from others, and be part of a thriving community of home cooks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA for New Features */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                const betaSection = document.getElementById('beta-signup-section');
                if (betaSection) {
                  betaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/70 transition-all duration-300 hover:scale-110 active:scale-95 text-lg"
            >
              🎉 Try New Features Free
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-slate-300 mt-4 text-sm">All new features included in your free trial</p>
          </div>
        </div>
      </section>

      {/* Key Features Showcase - New Enhanced Section */}
      <KeyFeaturesShowcaseEnhanced />

      {/* Product Features Deep Dive Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">🎯 COMPLETE FEATURE SET • EVERYTHING YOU NEED</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">Complete AI-Powered Cooking Solution</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              RecipeAI combines advanced artificial intelligence with culinary expertise to provide everything you need for smarter, faster, and more delicious home cooking. From recipe generation to meal planning, shopping lists to nutrition tracking—we've got you covered.
            </p>
          </div>

          {/* Feature Grid - 6 Core Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1: AI Recipe Generation */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-600/35 to-blue-600/35 border-2 border-cyan-400/80 hover:border-cyan-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Recipe Generation</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get unlimited personalized recipes in seconds. Our advanced AI learns your taste preferences, dietary restrictions, and cooking skill level to suggest dishes you'll actually love cooking.</p>
                <div className="space-y-2 text-xs text-cyan-300 font-semibold">
                  <div>✓ 10,000+ recipes in database</div>
                  <div>✓ Instant personalization</div>
                  <div>✓ Taste preference learning</div>
                  <div>✓ Works with any ingredients</div>
                </div>
              </div>
            </div>

            {/* Feature 2: Smart Meal Planning */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600/35 to-teal-600/35 border-2 border-emerald-400/80 hover:border-emerald-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">📅</div>
                <h3 className="text-2xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Plan entire weeks in minutes. Our AI generates balanced meal plans that consider nutrition, taste, variety, allergies, and budget constraints automatically.</p>
                <div className="space-y-2 text-xs text-emerald-300 font-semibold">
                  <div>✓ Weekly meal planning</div>
                  <div>✓ Balanced nutrition</div>
                  <div>✓ Allergy-aware</div>
                  <div>✓ Budget-conscious</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Smart Shopping Lists */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/35 to-pink-600/35 border-2 border-purple-400/80 hover:border-purple-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">🛒</div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Shopping Lists</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Our AI finds the best deals and organizes items by store section.</p>
                <div className="space-y-2 text-xs text-purple-300 font-semibold">
                  <div>✓ Budget optimization</div>
                  <div>✓ Smart ingredient swaps</div>
                  <div>✓ Save 30% on groceries</div>
                  <div>✓ Store-organized lists</div>
                </div>
              </div>
            </div>

            {/* Feature 4: Nutrition Tracking */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-600/35 to-red-600/35 border-2 border-orange-400/80 hover:border-orange-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl group-hover:bg-orange-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">📊</div>
                <h3 className="text-2xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Automatic nutrition analysis for every recipe with detailed breakdowns of calories, protein, carbs, fats, and micronutrients. Hit your health goals effortlessly.</p>
                <div className="space-y-2 text-xs text-orange-300 font-semibold">
                  <div>✓ Macro tracking</div>
                  <div>✓ Health goal alignment</div>
                  <div>✓ Fitness app sync</div>
                  <div>✓ Instant analysis</div>
                </div>
              </div>
            </div>

            {/* Feature 5: Family-Friendly Planning */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-600/35 to-purple-600/35 border-2 border-indigo-400/80 hover:border-indigo-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl group-hover:bg-indigo-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-white mb-3">Family-Friendly Planning</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Plan meals for your entire family with personalized preferences for each member. Accommodate different dietary needs and allergies while keeping everyone happy.</p>
                <div className="space-y-2 text-xs text-indigo-300 font-semibold">
                  <div>✓ Multi-profile support</div>
                  <div>✓ Dietary preferences</div>
                  <div>✓ Allergy-safe</div>
                  <div>✓ Picky-eater friendly</div>
                </div>
              </div>
            </div>

            {/* Feature 6: Chef-Curated Recipes */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600/35 to-cyan-600/35 border-2 border-blue-400/80 hover:border-blue-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with video tutorials and pro tips.</p>
                <div className="space-y-2 text-xs text-blue-300 font-semibold">
                  <div>✓ 10,000+ expert recipes</div>
                  <div>✓ Professional techniques</div>
                  <div>✓ Video tutorials</div>
                  <div>✓ Chef tips & tricks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits Section */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why RecipeAI Stands Out</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">⚡</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Lightning-Fast Generation</h4>
                  <p className="text-slate-200">Get unlimited recipe ideas in seconds, not hours. Perfect for last-minute meal planning or when inspiration strikes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Personalized to Your Taste</h4>
                  <p className="text-slate-200">Our AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you'll actually love.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">💰</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Save Money Automatically</h4>
                  <p className="text-slate-200">Smart budget optimization finds the best deals and suggests ingredient swaps automatically. Save $1,200+ yearly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🌱</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Eco-Conscious Cooking</h4>
                  <p className="text-slate-200">Reduce food waste by 40% with recipes that use ingredients you already have, protecting the environment and your wallet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Works Everywhere</h4>
                  <p className="text-slate-200">Access RecipeAI on any device—desktop, tablet, or mobile. Sync seamlessly across all your devices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🔒</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Privacy & Security</h4>
                  <p className="text-slate-200">Your data is encrypted and secure. We never sell your information. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">⚡ POWERFUL FEATURES • UNLOCK YOUR CULINARY POTENTIAL</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">Six Powerful Features That Make Cooking Effortless</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              Discover the complete toolkit that empowers 100K+ home cooks to save time, cut costs, and reduce food waste. Each feature is engineered to make cooking smarter, faster, and more enjoyable. From AI recipe generation to intelligent meal planning, RecipeAI handles the complexity so you can focus on what matters—delicious meals and quality time with family.
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              <span className="text-emerald-300 font-bold">🎯 AI-Powered • Personalized • Effortless</span>
            </p>
          </div>

          {/* Top 3 Featured Highlights */}
          <div className="mb-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/40 border border-cyan-300/80 mb-4">
                  <span className="text-xs font-bold text-cyan-100">⭐ TOP FEATURE</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">🤖 AI Recipe Magic</h4>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Get unlimited personalized recipes in seconds. Our AI learns your taste and generates dishes you&apos;ll love.</p>
                <div className="text-xs text-cyan-300 font-semibold">✓ 10,000+ recipes • Instant personalization • Taste learning</div>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border-2 border-emerald-400/80 shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 rounded-lg bg-emerald-500/40 border border-emerald-300/80 mb-4">
                  <span className="text-xs font-bold text-emerald-100">⭐ TOP FEATURE</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">💰 💰 Save 30% on Groceries</h4>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">Smart budget optimization finds the best deals and suggests ingredient swaps automatically.</p>
                <div className="text-xs text-emerald-300 font-semibold">✓ Budget-friendly • Smart swaps • Save $1,200+ yearly</div>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-400/80 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 rounded-lg bg-purple-500/40 border border-purple-300/80 mb-4">
                  <span className="text-xs font-bold text-purple-100">⭐ TOP FEATURE</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">🌱 Reduce Waste by 40%</h4>
                <p className="text-slate-100 text-sm leading-relaxed mb-4">AI-powered recipes use ingredients you already have, preventing spoilage and saving money.</p>
                <div className="text-xs text-purple-300 font-semibold">✓ Eco-friendly • Sustainable • Zero waste</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 group cursor-pointer hover:scale-102 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-102 transition-all duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Recipe Generation</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-cyan-300">🎯 Never ask what&apos;s for dinner again.</span> Get unlimited personalized recipes in seconds based on your ingredients, dietary preferences, and cooking skill level. Our advanced AI learns your taste preferences and suggests delicious dishes you&apos;ll love. Works with any ingredients you have on hand—from pantry staples to fresh produce.</p>
                <div className="text-xs text-cyan-300 font-semibold">✓ Instant personalization • Taste learning • 10,000+ recipes • Works offline</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 group cursor-pointer hover:scale-102 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-emerald-300">📅 Plan entire weeks in minutes.</span> Get AI-generated meal plans that balance nutrition, taste, and variety perfectly. Our AI considers allergies, dietary restrictions, and budget constraints automatically. Perfectly balanced meals tailored to your family&apos;s preferences—no more guessing or stress.</p>
              <div className="text-xs text-emerald-300 font-semibold">✓ Weekly planning • Balanced nutrition • Allergy-aware • Budget-conscious</div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer hover:scale-102 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Shopping Lists</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-purple-300">💳 Save 30% on groceries automatically.</span> Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Our AI finds the best deals, suggests smart ingredient swaps, and organizes items by store section for faster checkout. Shop efficiently and stay within budget every time.</p>
              <div className="text-xs text-purple-300 font-semibold">✓ Budget optimization • Smart swaps • Save 30% • Store-organized</div>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70 group cursor-pointer hover:scale-102 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-orange-300">💪 Hit your health goals without sacrifice.</span> Automatic nutrition analysis for every recipe with detailed breakdowns of calories, protein, carbs, fats, and micronutrients. Track macros effortlessly and achieve your fitness goals while enjoying delicious meals. Sync with your favorite fitness apps seamlessly.</p>
              <div className="text-xs text-orange-300 font-semibold">✓ Macro tracking • Health goals • Fitness sync • Instant analysis</div>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/70 group cursor-pointer hover:scale-102 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-white mb-3">Family-Friendly Planning</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-indigo-300">❤️ Keep everyone happy at the table.</span> Plan meals for your entire family with personalized preferences for each member. Accommodate different dietary needs, allergies, and restrictions while keeping picky eaters satisfied. Create meals everyone loves without cooking multiple dinners.</p>
              <div className="text-xs text-indigo-300 font-semibold">✓ Multi-profile • Dietary preferences • Allergy-safe • Picky-eater friendly</div>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/70 group cursor-pointer hover:scale-102 transition-all duration-300">
              <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-blue-300">👨‍🍳 Cook restaurant-quality meals at home.</span> Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with 10,000+ recipes and video tutorials. Elevate your cooking skills and impress your family every night.</p>
              <div className="text-xs text-blue-300 font-semibold">✓ 10,000+ recipes • Expert tips • Pro techniques • Video tutorials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join 100K+ Home Cooks Transforming Their Kitchens</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">Discover how families worldwide are cooking smarter, saving money, and reducing food waste with RecipeAI. Real results from real home cooks like you.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70">
              <div className="text-5xl font-bold text-emerald-400 mb-3">100K+</div>
              <p className="text-slate-200 font-semibold">Active Home Cooks</p>
              <p className="text-sm text-slate-300 mt-2">Using RecipeAI daily</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="text-5xl font-bold text-cyan-400 mb-3">4.9★</div>
              <p className="text-slate-200 font-semibold">Average Rating</p>
              <p className="text-sm text-slate-300 mt-2">From 50K+ reviews</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="text-5xl font-bold text-purple-400 mb-3">10+</div>
              <p className="text-slate-200 font-semibold">Hours Saved Weekly</p>
              <p className="text-sm text-slate-300 mt-2">On average per user</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70">
              <div className="text-5xl font-bold text-orange-400 mb-3">30%</div>
              <p className="text-slate-200 font-semibold">Grocery Savings</p>
              <p className="text-sm text-slate-300 mt-2">Average reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <div id="beta-signup-section">
        <BetaSignup />
      </div>

      {/* Sample Recipes Section */}
      <SampleRecipes />

      {/* Success Stories Section - New */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-emerald-100">⭐ REAL RESULTS • REAL PEOPLE • REAL IMPACT</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">⭐ Success Stories from Our Community</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              See how 100K+ home cooks are transforming their kitchens and lives with RecipeAI. Real results from real people.
            </p>
          </div>

          {/* Success stories grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Story 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-2 border-cyan-400/60 hover:border-cyan-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 group cursor-pointer hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-2xl">👩‍🍳</div>
                <div>
                  <h4 className="font-bold text-white text-lg">Sarah M.</h4>
                  <p className="text-sm text-slate-300">Busy Mom of 3</p>
                </div>
              </div>
              <p className="text-slate-100 mb-6 leading-relaxed">"RecipeAI saved me 15 hours a week! No more stressing about what to cook. My kids actually eat the meals now because they're personalized to their tastes."</p>
              <div className="space-y-3 border-t border-cyan-400/30 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-slate-200"><span className="font-bold text-cyan-300">15 hours</span> saved weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-slate-200"><span className="font-bold text-cyan-300">$200/month</span> saved on groceries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">😊</span>
                  <span className="text-slate-200">Family meals <span className="font-bold text-cyan-300">5x per week</span></span>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-2 border-emerald-400/60 hover:border-emerald-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 group cursor-pointer hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-2xl">🏃‍♂️</div>
                <div>
                  <h4 className="font-bold text-white text-lg">James T.</h4>
                  <p className="text-sm text-slate-300">Fitness Enthusiast</p>
                </div>
              </div>
              <p className="text-slate-100 mb-6 leading-relaxed">"As someone tracking macros, RecipeAI is a game-changer. I get recipes that fit my fitness goals perfectly. Hit my targets every single day now."</p>
              <div className="space-y-3 border-t border-emerald-400/30 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💪</span>
                  <span className="text-slate-200">Macro goals <span className="font-bold text-emerald-300">100% achieved</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-slate-200"><span className="font-bold text-emerald-300">30+ recipes</span> per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-slate-200">Meal prep <span className="font-bold text-emerald-300">stress-free</span></span>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-400/60 hover:border-purple-300/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group cursor-pointer hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl">🌱</div>
                <div>
                  <h4 className="font-bold text-white text-lg">Emma L.</h4>
                  <p className="text-sm text-slate-300">Sustainability Advocate</p>
                </div>
              </div>
              <p className="text-slate-100 mb-6 leading-relaxed">"I've reduced my food waste by 45% and my carbon footprint significantly. RecipeAI helps me cook sustainably without sacrificing taste or variety."</p>
              <div className="space-y-3 border-t border-purple-400/30 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  <span className="text-slate-200">Food waste <span className="font-bold text-purple-300">45% reduced</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥬</span>
                  <span className="text-slate-200">Seasonal recipes <span className="font-bold text-purple-300">prioritized</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💚</span>
                  <span className="text-slate-200">Eco-friendly <span className="font-bold text-purple-300">every meal</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact metrics */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Community Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-emerald-400 mb-2">100K+</p>
                <p className="text-slate-200 font-semibold">Active Users</p>
                <p className="text-sm text-slate-300 mt-2">Growing daily</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-cyan-400 mb-2">50M+</p>
                <p className="text-slate-200 font-semibold">Recipes Generated</p>
                <p className="text-sm text-slate-300 mt-2">This month alone</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-purple-400 mb-2">1.2M</p>
                <p className="text-slate-200 font-semibold">Hours Saved</p>
                <p className="text-sm text-slate-300 mt-2">Weekly by our users</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400 mb-2">$30M+</p>
                <p className="text-slate-200 font-semibold">Saved on Groceries</p>
                <p className="text-sm text-slate-300 mt-2">Collectively by users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* About Section - Enhanced & Optimized */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-emerald-100">💡 OUR MISSION • EMPOWERING HOME COOKS EVERYWHERE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">RecipeAI</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing home cooking with AI-powered meal planning that saves you time, money, and reduces food waste. Our mission is to empower every home cook to create restaurant-quality meals, save money, and cook sustainably—every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 hover:scale-102 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-102 transition-all duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Innovation</h3>
              <p className="text-slate-200 leading-relaxed">Advanced machine learning algorithms that understand your preferences and generate personalized recipes in seconds. Our AI learns from your feedback to improve recommendations over time.</p>
            </div>

            <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-102 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-102 transition-all duration-300">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Time-Saving Solutions</h3>
              <p className="text-slate-200 leading-relaxed">Spend less time planning meals and more time enjoying them. Get dinner ideas in seconds, not hours. Automate your meal planning and reclaim 10+ hours every week.</p>
            </div>

            <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-102 transition-all duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-102 transition-all duration-300">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Impact</h3>
              <p className="text-slate-200 leading-relaxed">Reduce food waste by 40% with smart recipes that use ingredients you already have. Cook sustainably while saving money and protecting the environment.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-16 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-100 leading-relaxed mb-6">
                  <span className="font-bold text-emerald-300 text-xl">RecipeAI</span> combines cutting-edge artificial intelligence with culinary expertise to transform how you approach cooking. Whether you&apos;re a beginner looking for simple recipes or an experienced cook seeking inspiration, our platform adapts to your skill level and preferences.
                </p>
                <p className="text-lg text-slate-100 leading-relaxed mb-6">
                  Join over <span className="font-bold text-cyan-300">100,000+ home cooks</span> who are already saving time, cutting grocery costs, and discovering delicious meals every day. Start your culinary journey today—<span className="font-bold text-emerald-300">completely free, no credit card required.</span>
                </p>
                <button
                  onClick={() => {
                    const betaSection = document.getElementById('beta-signup-section');
                    if (betaSection) {
                      betaSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Key Value Propositions */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-emerald-400 mb-2">10+ Hours</p>
                  <p className="text-slate-200 font-semibold">Saved Weekly on Meal Planning</p>
                  <p className="text-sm text-slate-300 mt-2">Automate your meal planning process</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">30% Less</p>
                  <p className="text-slate-200 font-semibold">Spent on Groceries Annually</p>
                  <p className="text-sm text-slate-300 mt-2">Smart budget optimization</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-purple-400 mb-2">40% Reduction</p>
                  <p className="text-slate-200 font-semibold">in Food Waste</p>
                  <p className="text-sm text-slate-300 mt-2">Eco-friendly cooking solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">🚀 SIMPLE PROCESS • GET STARTED IN MINUTES</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">🎯 How RecipeAI Works - 4 Simple Steps</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              Getting started is simple. In just 4 easy steps, you'll be generating personalized recipes and saving hours on meal planning.
            </p>
          </div>

          {/* Step-by-step process */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/35 to-blue-600/35 border-2 border-cyan-400/80 hover:border-cyan-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/70 group cursor-pointer hover:scale-105 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300 mt-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Sign Up Free</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Create your account in seconds. No credit card required. Start exploring immediately.</p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600/35 to-teal-600/35 border-2 border-emerald-400/80 hover:border-emerald-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 group cursor-pointer hover:scale-105 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300 mt-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Set Your Preferences</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Tell us your dietary preferences, allergies, and cooking skill level. Personalize your experience.</p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/35 to-pink-600/35 border-2 border-purple-400/80 hover:border-purple-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/70 group cursor-pointer hover:scale-105 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300 mt-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">Get AI Recipes</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Instantly generate personalized recipes based on your ingredients and preferences. Unlimited ideas.</p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-600/35 to-red-600/35 border-2 border-orange-400/80 hover:border-orange-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70 group cursor-pointer hover:scale-105 h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
                <div className="text-5xl mb-4 group-hover:scale-102 transition-all duration-300 mt-4">🍽️</div>
                <h3 className="text-xl font-bold text-white mb-3">Cook & Enjoy</h3>
                <p className="text-slate-100 text-sm leading-relaxed">Follow step-by-step instructions and enjoy restaurant-quality meals at home. Save time and money.</p>
              </div>
            </div>
          </div>

          {/* Additional benefits of the process */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📱</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Access Anywhere</h4>
                  <p className="text-slate-200">Use RecipeAI on your phone, tablet, or computer. Sync seamlessly across all devices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🧠</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">AI Learns Your Taste</h4>
                  <p className="text-slate-200">The more you use it, the smarter it gets. Personalized recommendations improve over time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">💬</div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">24/7 Support</h4>
                  <p className="text-slate-200">Get help anytime. Our support team is always ready to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  )
}
