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
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-10 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
              <span className="text-sm font-bold text-cyan-100">⭐ TRUSTED BY 100K+ HOME COOKS • 4.9★ RATED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Your AI-Powered Kitchen Companion
              <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mt-3">
                Never Wonder What's for Dinner Again
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-100 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Discover personalized recipes in seconds based on your ingredients, dietary preferences, and cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-cyan-300">cut grocery costs by 30%</span> with smart suggestions, and <span className="font-bold text-blue-300">reduce food waste by 40%</span> with intelligent recommendations. Cook restaurant-quality meals every night with complete confidence. <span className="font-bold text-purple-300">Start free—no credit card required.</span>
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
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link
                href="/get-started"
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/60 hover:shadow-emerald-500/100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg whitespace-nowrap hover:shadow-2xl hover:shadow-cyan-500/80 active:scale-95 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Start Cooking Smarter Today
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/features"
                className="group relative px-10 py-6 border-2 border-emerald-400/80 text-white font-semibold rounded-xl hover:bg-emerald-500/30 hover:border-emerald-200 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:scale-105 bg-emerald-500/10 active:scale-95 before:absolute before:inset-0 before:bg-emerald-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎯 See How It Works
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Benefits Section - Enhanced */}
            <div className="mt-32 mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">Why 100K+ Home Cooks Trust Us</h2>
              <p className="text-center text-slate-200 mb-16 max-w-3xl mx-auto text-lg">Experience the power of AI-driven meal planning that transforms your kitchen, saves you time and money, and eliminates food waste. Join thousands of families already cooking smarter every day.</p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-500/60 hover:border-cyan-300/80 transition hover:shadow-2xl hover:shadow-cyan-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/35 hover:to-blue-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Save 10+ Hours Weekly</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-cyan-300">Reclaim your time.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                    <div className="pt-6 border-t border-cyan-400/40 text-cyan-300 text-sm font-semibold">✓ Instant recipe generation</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 border border-emerald-500/60 hover:border-emerald-300/80 transition hover:shadow-2xl hover:shadow-emerald-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/35 hover:to-teal-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💰</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Cut Grocery Bills by 30%</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                    <div className="pt-6 border-t border-emerald-400/40 text-emerald-300 text-sm font-semibold">✓ Smart budget optimization</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/25 to-pink-500/25 border border-purple-500/60 hover:border-purple-300/80 transition hover:shadow-2xl hover:shadow-purple-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/35 hover:to-pink-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">🌱</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Reduce Food Waste by 40%</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-purple-300">Cook sustainably.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and protecting the environment.</p>
                    <div className="pt-6 border-t border-purple-400/40 text-purple-300 text-sm font-semibold">✓ Eco-friendly cooking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">RecipeAI</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing home cooking with AI-powered meal planning that saves you time, money, and reduces food waste. Our mission is to make restaurant-quality cooking accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-slate-200">Advanced machine learning algorithms that understand your preferences and generate personalized recipes in seconds.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Time-Saving</h3>
              <p className="text-slate-200">Spend less time planning meals and more time enjoying them. Get dinner ideas in seconds, not hours.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Sustainable</h3>
              <p className="text-slate-200">Reduce food waste by 40% with smart recipes that use ingredients you already have at home.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <p className="text-lg text-slate-100 leading-relaxed mb-6">
              <span className="font-bold text-emerald-300">RecipeAI</span> combines cutting-edge artificial intelligence with culinary expertise to transform how you approach cooking. Whether you're a beginner looking for simple recipes or an experienced cook seeking inspiration, our platform adapts to your skill level and preferences.
            </p>
            <p className="text-lg text-slate-100 leading-relaxed">
              Join over <span className="font-bold text-cyan-300">100,000+ home cooks</span> who are already saving time, cutting grocery costs, and discovering delicious meals every day. Start your culinary journey today—<span className="font-bold text-emerald-300">completely free, no credit card required.</span>
            </p>
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
