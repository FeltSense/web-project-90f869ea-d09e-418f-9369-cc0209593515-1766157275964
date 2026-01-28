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
import MissionAndValues from '@/components/MissionAndValues'

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
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 border-2 border-cyan-100/95 mb-10 backdrop-blur-xl hover:border-white transition-all duration-300 shadow-2xl shadow-cyan-500/80 hover:shadow-cyan-500/100 hover:scale-105 animate-pulse">
              <span className="text-sm font-bold text-white tracking-widest">⭐ TRUSTED BY 100K+ HOME COOKS • 4.9★ HIGHEST RATED • 100% FREE FOREVER • INSTANT ACCESS</span>
            </div>

            {/* Main Headline - Powerful & Benefit-Driven */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl animate-fade-in">
              🤖 Your AI-Powered Personal Chef
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mt-3 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-pulse">
                Restaurant-Quality Meals in Minutes
              </span>
            </h1>

            {/* Hero Subheading with Strong Value Proposition */}
            <div className="mt-8 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 border-2 border-emerald-300/80 backdrop-blur-lg shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-105">
              <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                <span className="text-emerald-200">✨ Unlimited AI-powered recipes</span> personalized to your taste in seconds. <span className="text-cyan-200">Join 100K+ home cooks</span> exploring global cuisines, learning professional cooking techniques, and impressing family with gourmet meals. <span className="text-blue-200">100% free forever—no credit card, no commitment, instant access.</span>
              </p>
            </div>



            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-50 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Get unlimited personalized recipes in seconds. Our advanced AI learns your taste preferences and generates delicious meals that fit your budget, dietary needs, and cooking skill level. <span className="font-bold text-cyan-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-emerald-300">cut grocery bills by 30%</span>, and <span className="font-bold text-blue-300">reduce food waste by 40%</span>. <span className="font-bold text-yellow-300">100% free forever.</span>
            </p>

            {/* Key Stats - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/50">⏱️ Save 10+ hours weekly</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/50">💰 Cut grocery bills by 30%</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/50">🌱 Reduce food waste by 40%</span>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-sm">
              <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500/20 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30">
                <span className="text-lg">⭐</span>
                <span className="text-emerald-100 font-semibold">4.9★ Rating (50K+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="text-lg">👥</span>
                <span className="text-cyan-100 font-semibold">100K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500/20 border border-purple-400/50 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
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
                  className="group relative px-16 py-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-slate-900 font-bold rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/100 hover:shadow-emerald-500/150 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap active:scale-95 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-bounce hover:animate-none hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🚀 Unlock Unlimited Recipes Now - 100% Free, No Credit Card
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Secondary CTA Button - Feature Discovery */}
                <Link
                  href="/features"
                  className="group relative px-12 py-7 border-2 border-cyan-300/95 text-white font-semibold rounded-2xl hover:bg-cyan-500/60 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-lg hover:scale-110 bg-cyan-500/40 active:scale-95 before:absolute before:inset-0 before:bg-cyan-400/40 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/100 md:text-base sm:px-10 sm:py-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ✨ Explore 10,000+ Recipes - Find Your Favorites
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* CTA Supporting Text - Enhanced */}
              <p className="text-sm text-slate-300 font-medium">
                ✨ <span className="text-emerald-300 font-bold">100% Free Forever</span> • <span className="text-cyan-300 font-bold">No Credit Card</span> • <span className="text-blue-300 font-bold">Instant Access</span> • <span className="text-purple-300 font-bold">100K+ Users</span> • <span className="text-orange-300 font-bold">4.9★ Rated</span>
              </p>



              {/* New: Trust Badges Section */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/60 backdrop-blur-sm">
                  <span className="text-lg">✅</span>
                  <span className="text-sm font-semibold text-emerald-200">No Credit Card Required</span>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/60 backdrop-blur-sm">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm font-semibold text-cyan-200">Instant Access</span>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-500/20 border border-blue-400/60 backdrop-blur-sm">
                  <span className="text-lg">🔒</span>
                  <span className="text-sm font-semibold text-blue-200">100% Secure &amp; Private</span>
                </div>
              </div>




            </div>
      


            {/* Enhanced Features Highlight Section */}
            <div className="mt-32 mb-16 p-12 rounded-3xl bg-gradient-to-r from-cyan-600/50 via-emerald-600/50 to-blue-600/50 border-2 border-cyan-300/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/90 relative overflow-hidden group hover:shadow-cyan-500/110 transition-all duration-300 hover:scale-102">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-blue-400/10 group-hover:from-cyan-400/20 group-hover:via-emerald-400/20 group-hover:to-blue-400/20 transition-all duration-300"></div>
              <div className="relative z-10 text-center mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">🎯 Why 100K+ Home Cooks Love RecipeAI - The Complete AI-Powered Cooking Solution</h2>
                <p className="text-xl text-slate-50 max-w-3xl mx-auto leading-relaxed">The complete AI-powered cooking solution that saves time, cuts costs, and reduces waste. Intelligent recipe generation, smart meal planning, budget optimization, and professional cooking techniques—all in one powerful platform designed for modern home cooks.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="p-6 rounded-xl bg-slate-900/60 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-2">🎯 Personalized to Your Taste</h3>
                  <p className="text-slate-200 text-sm">Our AI learns your flavor preferences and cooking style to suggest recipes you&apos;ll genuinely love. The more you cook, the smarter it gets.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/60 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40">
                  <div className="text-5xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-2">🌍 Explore Global Cuisines</h3>
                  <p className="text-slate-200 text-sm">Discover recipes from around the world. Master Italian, Thai, Mexican, Indian, and more cuisines with step-by-step guidance.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/60 border border-blue-400/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40">
                  <div className="text-5xl mb-4">👨‍🍳</div>
                  <h3 className="text-xl font-bold text-white mb-2">👨‍🍳 Cook Like a Professional</h3>
                  <p className="text-slate-200 text-sm">Learn professional cooking techniques, plating tips, and chef secrets. Create restaurant-quality meals in your own kitchen.</p>
                </div>
              </div>
            </div>

            {/* Key Benefits Section - Enhanced */}
            <div className="mt-32 mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg">💎 Three Game-Changing Benefits That Transform Your Kitchen, Your Budget & Your Life</h2>
              <p className="text-center text-slate-50 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">RecipeAI is engineered to save you time, cut costs, and reduce waste while making cooking more enjoyable and sustainable. From instant recipe generation to smart budget optimization and eco-friendly meal planning, RecipeAI handles the complexity so you can focus on what matters—delicious meals, quality time with family, and a healthier planet.</p>
              
              {/* Key Benefits Highlight */}
              <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-blue-500/40 border-2 border-emerald-400/90 backdrop-blur-lg shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 hover:scale-102">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300">
                    <p className="text-5xl font-bold text-emerald-300 mb-2">10+ Hours</p>
                    <p className="text-white font-semibold text-lg">Saved Weekly</p>
                    <p className="text-slate-200 text-sm mt-2">Automate meal planning and reclaim your time</p>
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300">
                    <p className="text-5xl font-bold text-cyan-300 mb-2">30% Less</p>
                    <p className="text-white font-semibold text-lg">Spent on Groceries</p>
                    <p className="text-slate-200 text-sm mt-2">Smart budget optimization saves $1,200+ yearly</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/50 hover:border-blue-300 transition-all duration-300">
                    <p className="text-5xl font-bold text-blue-300 mb-2">40% Reduction</p>
                    <p className="text-white font-semibold text-lg">in Food Waste</p>
                    <p className="text-slate-200 text-sm mt-2">Eco-friendly recipes use what you already have</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-500/35 border-2 border-cyan-400/80 hover:border-cyan-200 transition hover:shadow-2xl hover:shadow-cyan-500/100 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/45 hover:to-blue-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⏱️</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Save 10+ Hours Weekly</h3>
                    <p className="text-slate-50 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-cyan-300">Reclaim your time.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                    <div className="pt-6 border-t border-cyan-400/40 text-cyan-300 text-sm font-semibold">✓ Instant recipe generation</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/35 to-teal-500/35 border-2 border-emerald-400/80 hover:border-emerald-200 transition hover:shadow-2xl hover:shadow-emerald-500/80 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/45 hover:to-teal-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Cut Grocery Bills by 30%</h3>
                    <p className="text-slate-50 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                    <div className="pt-6 border-t border-emerald-400/40 text-emerald-300 text-sm font-semibold">✓ Smart budget optimization</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/35 to-pink-500/35 border-2 border-purple-400/80 hover:border-purple-200 transition hover:shadow-2xl hover:shadow-purple-500/80 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/45 hover:to-pink-500/45 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌱</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">🌱 Reduce Food Waste by 40%</h3>
                    <p className="text-slate-50 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-purple-300">Cook sustainably.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and protecting the environment.</p>
                    <div className="pt-6 border-t border-purple-400/40 text-purple-300 text-sm font-semibold">✓ Eco-friendly cooking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Section - High-Converting Offer */}
            <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-cyan-600/70 via-emerald-600/70 to-blue-600/70 border-2 border-cyan-200/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/80 hover:shadow-cyan-500/100 transition-all duration-300 relative overflow-hidden group hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-emerald-400/15 to-blue-400/15 group-hover:from-cyan-400/25 group-hover:via-emerald-400/25 group-hover:to-blue-400/25 transition-all duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900 font-bold text-sm mb-6">
                  ⚡ 100% FREE • NO CREDIT CARD • INSTANT ACCESS • UNLIMITED RECIPES
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">🚀 Transform Your Kitchen Today - Join 100K+ Home Cooks Cooking Smarter, Saving More</h3>
                <p className="text-xl text-slate-50 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
                  Get unlimited AI-powered recipes personalized to your taste and skill level. <span className="font-bold text-emerald-200">Discover new cuisines</span> from around the world, <span className="font-bold text-cyan-200">learn professional cooking techniques</span>, and <span className="font-bold text-blue-200">create restaurant-quality meals</span> at home. <span className="font-bold text-yellow-200">100% free forever—no credit card required, no commitment, instant access, completely risk-free.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button
                    onClick={() => {
                      const betaSection = document.getElementById('beta-signup-section');
                      if (betaSection) {
                        betaSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-white to-slate-100 text-cyan-600 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/70 transition-all duration-300 hover:scale-110 active:scale-95 text-lg hover:from-slate-50 hover:to-white"
                  >
                    🚀 Start Your Free Cooking Revolution - Instant Access to 10,000+ Recipes
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/40 hover:border-white/60"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* New: Quick Stats Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm font-semibold text-white">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                    <span>⭐</span>
                    <span>4.9★ Rating (50K+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                    <span>👥</span>
                    <span>100K+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                    <span>✅</span>
                    <span>No Credit Card</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Product Features Details */}
            <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">What Makes RecipeAI Different - Six Powerful Advantages</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="text-4xl flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Personalized to Your Taste</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">Our advanced AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you&apos;ll actually love cooking. The more you use it, the smarter it gets.</p>
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
                    <p className="text-slate-200 text-sm leading-relaxed">Automatic macro tracking and nutritional analysis for every recipe to help you hit your health goals. Know exactly what you&apos;re eating.</p>
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

      {/* MISSION AND VALUES SECTION */}
      <MissionAndValues />

      {/* IMMEDIATE BENEFITS SECTION - What You Get Right Now */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">⚡ What You Get Instantly - Start Cooking Smarter Today (No Waiting, No Setup)</h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">Start using RecipeAI today and experience these benefits immediately</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 border-2 border-emerald-400/70 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/60 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-all duration-300">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Recipes</h3>
              <p className="text-slate-50 text-sm leading-relaxed">Get personalized recipe ideas in seconds, not hours. Powered by advanced AI that learns your taste.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 border-2 border-cyan-400/70 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/60 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-all duration-300">📅</div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Planning</h3>
              <p className="text-slate-50 text-sm leading-relaxed">Plan entire weeks in minutes with AI-generated meal plans that balance nutrition and taste.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/25 to-pink-500/25 border-2 border-purple-400/70 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/60 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-all duration-300">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Save Money</h3>
              <p className="text-slate-50 text-sm leading-relaxed">Cut grocery bills by 30% with smart budget optimization and ingredient swaps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PRODUCT FEATURES SECTION - NEW COMPREHENSIVE OVERVIEW */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">✨ CORE FEATURES • EVERYTHING YOU NEED TO COOK SMARTER</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">🎯 Six Powerful Features Built for Modern Home Cooks - Everything You Need to Cook Smarter</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              Six essential features working seamlessly together. From AI-powered recipe generation to intelligent meal planning, every feature is designed to save you time, money, and stress while making cooking more enjoyable, sustainable, and rewarding. Experience the future of home cooking today.
            </p>
          </div>

          {/* Main Features Grid - 6 Core Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1: AI Recipe Generation */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-600/35 to-blue-600/35 border-2 border-cyan-400/80 hover:border-cyan-300/90 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/70 group cursor-pointer hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/40 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Recipe Generation</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Get unlimited personalized recipes in seconds. Our advanced AI learns your taste preferences, dietary restrictions, and cooking skill level to suggest dishes you&apos;ll actually love cooking.</p>
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
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">📅</div>
                <h3 className="text-2xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Plan entire weeks in minutes. Our AI generates balanced meal plans that consider nutrition, taste, variety, allergies, and budget constraints automatically. Say goodbye to meal planning stress.</p>
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
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">🛒</div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Shopping Lists</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Our AI finds the best deals and organizes items by store section for faster, smarter shopping.</p>
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
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">📊</div>
                <h3 className="text-2xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Automatic nutrition analysis for every recipe with detailed breakdowns of calories, protein, carbs, fats, and micronutrients. Hit your health goals effortlessly while enjoying delicious meals.</p>
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
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-white mb-3">Family-Friendly Planning</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Plan meals for your entire family with personalized preferences for each member. Accommodate different dietary needs and allergies while keeping everyone happy.</p>
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
                <div className="text-6xl mb-4 group-hover:scale-105 transition-all duration-300">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
                <p className="text-slate-50 text-sm leading-relaxed mb-4">Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with video tutorials and pro tips.</p>
                <div className="space-y-2 text-xs text-blue-300 font-semibold">
                  <div>✓ 10,000+ expert recipes</div>
                  <div>✓ Professional techniques</div>
                  <div>✓ Video tutorials</div>
                  <div>✓ Chef tips &amp; tricks</div>
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
                  <p className="text-slate-200">Our AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you&apos;ll actually love.</p>
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
                  <h4 className="font-bold text-white mb-2 text-lg">Privacy &amp; Security</h4>
                  <p className="text-slate-200">Your data is encrypted and secure. We never sell your information. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* NEW: COMPREHENSIVE PRODUCT FEATURES SHOWCASE */}
      <section className=\"relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden border-t border-slate-700/50\">
        {/* Background elements */}
        <div className=\"absolute inset-0 overflow-hidden pointer-events-none\">
          <div className=\"absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl\"></div>\n          <div className=\"absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl\"></div>
        </div>

        <div className=\"relative z-10 max-w-6xl mx-auto\">
          <div className=\"text-center mb-20\">
            <div className=\"inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/80 mb-8 backdrop-blur-sm\">
              <span className=\"text-sm font-bold text-blue-100\">🚀 COMPLETE FEATURE SET • EVERYTHING FOR MODERN HOME COOKS</span>
            </div>
            <h2 className=\"text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg\">
              <span className=\"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">Powerful Features That Transform Your Cooking</span>
            </h2>
            <p className=\"text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed\">
              Every feature is engineered to save you time, reduce costs, and make cooking more enjoyable. From AI-powered recipe generation to intelligent meal planning and nutrition tracking, RecipeAI is your complete cooking companion.
            </p>
          </div>

          {/* Feature Cards Grid - 8 Comprehensive Features */}
          <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16\">
            {/* Feature 1 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/60 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">🤖</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">AI Recipe Generation</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Unlimited personalized recipes in seconds based on your taste and ingredients.</p>
            </div>

            {/* Feature 2 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-400/60 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">📅</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Smart Meal Planning</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Plan entire weeks in minutes with balanced, personalized meal plans.</p>
            </div>

            {/* Feature 3 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border border-emerald-400/60 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">🛒</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Smart Shopping Lists</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Auto-generated lists with budget optimization and smart substitutions.</p>
            </div>

            {/* Feature 4 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-orange-600/30 to-red-600/30 border border-orange-400/60 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">📊</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Nutrition Tracking</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Automatic macro analysis and health goal alignment for every recipe.</p>
            </div>

            {/* Feature 5 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-indigo-600/30 to-blue-600/30 border border-indigo-400/60 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">👨‍👩‍👧‍👦</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Family Profiles</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Multi-profile support with personalized preferences for each family member.</p>
            </div>

            {/* Feature 6 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-400/60 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">👨‍🍳</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Chef Techniques</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Learn professional cooking techniques with video tutorials and pro tips.</p>
            </div>

            {/* Feature 7 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-pink-600/30 to-rose-600/30 border border-pink-400/60 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">🌍</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Global Cuisines</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">Explore recipes from around the world with authentic techniques.</p>
            </div>

            {/* Feature 8 */}
            <div className=\"relative p-6 rounded-xl bg-gradient-to-br from-yellow-600/30 to-amber-600/30 border border-yellow-400/60 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group cursor-pointer hover:scale-105\">
              <div className=\"text-4xl mb-3 group-hover:scale-110 transition-all duration-300\">⚡</div>
              <h3 className=\"text-lg font-bold text-white mb-2\">Instant Access</h3>
              <p className=\"text-slate-200 text-sm leading-relaxed\">100% free forever with no credit card required. Start cooking today.</p>
            </div>
          </div>

          {/* Feature Highlights Section */}
          <div className=\"bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm\">
            <h3 className=\"text-3xl font-bold text-white mb-8 text-center\">Why These Features Matter</h3>
            <div className=\"grid md:grid-cols-3 gap-8\">\n              <div className=\"flex gap-4\">\n                <div className=\"text-4xl flex-shrink-0\">⏱️</div>\n                <div>\n                  <h4 className=\"font-bold text-white mb-2 text-lg\">Save 10+ Hours Weekly</h4>\n                  <p className=\"text-slate-200\">Automate meal planning and reclaim your time for what matters most.</p>\n                </div>\n              </div>\n              <div className=\"flex gap-4\">\n                <div className=\"text-4xl flex-shrink-0\">💰</div>\n                <div>\n                  <h4 className=\"font-bold text-white mb-2 text-lg\">Cut Grocery Bills by 30%</h4>\n                  <p className=\"text-slate-200\">Smart optimization saves $1,200+ yearly on groceries.</p>\n                </div>\n              </div>\n              <div className=\"flex gap-4\">\n                <div className=\"text-4xl flex-shrink-0\">🌱</div>\n                <div>\n                  <h4 className=\"font-bold text-white mb-2 text-lg\">Reduce Food Waste by 40%</h4>\n                  <p className=\"text-slate-200\">Eco-friendly recipes use what you already have.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>

      {/* Visual Comparison Section - Why RecipeAI Stands Out */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why 100K+ Home Cooks Choose RecipeAI - The Smart Choice for Modern Kitchens</h2>
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
                  <span className="text-slate-200">Wasted ingredients &amp; food spoilage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-slate-200">High grocery bills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-slate-200">Repetitive meals &amp; boredom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-slate-200">No nutrition tracking</span>
                </li>
              </ul>
            </div>

            {/* RecipeAI Way */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 border-2 border-emerald-400/80 shadow-2xl shadow-emerald-500/50">
              <h3 className="text-2xl font-bold text-white mb-6">✅ RecipeAI Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-50"><span className="font-bold text-emerald-300">Instant recipes</span> in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-50"><span className="font-bold text-emerald-300">40% less waste</span> with smart recipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-50"><span className="font-bold text-emerald-300">Save 30%</span> on groceries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-50"><span className="font-bold text-emerald-300">Unlimited variety</span> every day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
