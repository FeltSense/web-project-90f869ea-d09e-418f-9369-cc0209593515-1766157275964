'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Main Call to Action */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20">
              <span className="text-sm font-bold text-cyan-100">⭐ TRUSTED BY 100K+ HOME COOKS • 4.9★ RATED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Never Stress About Dinner Again
              <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mt-2">
                AI Creates Perfect Meals in Seconds
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Tired of the daily "what's for dinner?" dilemma? Our AI instantly generates personalized recipes based on your ingredients, dietary preferences, and cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-cyan-300">cut grocery costs by 30%</span>, <span className="font-bold text-blue-300">eliminate food waste</span>, and impress your family with restaurant-quality meals every night. <span className="font-bold text-purple-300">Start free—no credit card needed.</span>
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">⏱️ Save 10+ hours weekly on meal planning</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">💰 Cut grocery bills by 30%</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">🗑️ Reduce food waste by 40%</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/get-started"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-500/100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg whitespace-nowrap hover:shadow-2xl hover:shadow-emerald-500/80"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Start Creating Recipes Free
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/features"
                className="group relative px-8 py-5 border-2 border-cyan-400/80 text-white font-semibold rounded-xl hover:bg-cyan-500/30 hover:border-cyan-200 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:scale-105 bg-cyan-500/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ See How It Works
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Benefits Section - Enhanced */}
            <div className="mt-20 mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Why 100K+ Home Cooks Love Us</h2>
              <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">Transform your kitchen with AI-powered meal planning that saves time, money, and reduces waste</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-500/60 hover:border-cyan-300/80 transition hover:shadow-2xl hover:shadow-cyan-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/35 hover:to-blue-500/35">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                  <h3 className="text-white font-bold mb-3 text-xl">Save 10+ Hours Weekly</h3>
                  <p className="text-slate-200 text-sm leading-relaxed"><span className="font-bold text-cyan-300">No more daily stress.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                  <div className="mt-4 pt-4 border-t border-cyan-400/40 text-cyan-300 text-xs font-semibold">✓ Instant recipe generation</div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 border border-emerald-500/60 hover:border-emerald-300/80 transition hover:shadow-2xl hover:shadow-emerald-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/35 hover:to-teal-500/35">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">💰</div>
                  <h3 className="text-white font-bold mb-3 text-xl">Cut Grocery Bills by 30%</h3>
                  <p className="text-slate-200 text-sm leading-relaxed"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                  <div className="mt-4 pt-4 border-t border-emerald-400/40 text-emerald-300 text-xs font-semibold">✓ Smart budget optimization</div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/25 to-pink-500/25 border border-purple-500/60 hover:border-purple-300/80 transition hover:shadow-2xl hover:shadow-purple-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/35 hover:to-pink-500/35">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🌱</div>
                  <h3 className="text-white font-bold mb-3 text-xl">Eliminate Food Waste</h3>
                  <p className="text-slate-200 text-sm leading-relaxed"><span className="font-bold text-purple-300">Reduce waste by 40%.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and helping the environment.</p>
                  <div className="mt-4 pt-4 border-t border-purple-400/40 text-purple-300 text-xs font-semibold">✓ Eco-friendly cooking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  )
}
