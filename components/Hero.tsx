'use client'

import React from 'react'

const Hero: React.FC = () => {
  const handleTryBeta = () => {
    const betaSection = document.getElementById('beta-signup')
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePricingClick = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-32 pb-20 overflow-hidden">
      {/* Premium animated background with enhanced visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.9),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.6),transparent_70%)]" />
      
      {/* Animated accent orbs with enhanced glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
      
      {/* Additional animated elements for depth */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-400/50 rounded-full text-emerald-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-emerald-500/10">
            ✨ AI-Powered Meal Planning & Recipe Generation
          </span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight animate-fade-in tracking-tight">
          Cook Like a Pro, <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">Eat Like a Dream</span>
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-10 max-w-5xl mx-auto leading-relaxed font-bold animate-fade-in">
          Your AI-powered kitchen companion generates personalized recipes, plans your meals, and creates smart shopping lists—all in seconds. Say goodbye to meal planning stress and hello to delicious, healthy dinners every night.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⏱️</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Save 10+ Hours/Week</p>
              <p className="text-gray-400 text-sm">No more meal planning stress</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">♻️</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Reduce Food Waste 40%</p>
              <p className="text-gray-400 text-sm">Smart shopping lists</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Eat Healthier Meals</p>
              <p className="text-gray-400 text-sm">Personalized nutrition</p>
            </div>
          </div>
        </div>




        {/* Key Features Highlight - Enhanced */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center">✨ Key Features That Transform Your Cooking</h2>
          <p className="text-gray-300 text-center text-xl mb-14 font-semibold">Everything you need to cook smarter, eat better, and save time</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/5 border border-blue-400/50 rounded-2xl p-10 backdrop-blur-md hover:border-blue-400/80 transition-all duration-300 hover:bg-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/40 group transform hover:-translate-y-3">
            <div className="text-7xl mb-6 group-hover:scale-130 transition-transform duration-300">🎯</div>
            <h3 className="text-white font-black text-2xl mb-4 group-hover:text-blue-200 transition-colors">AI-Powered Recipes</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-5">Unlimited personalized recipes generated in seconds. Our AI learns your taste preferences, dietary needs, allergies, and pantry inventory to create meals you'll actually want to cook.</p>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Dietary preferences</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Ingredient matching</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Cooking skill level</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/5 border border-purple-400/50 rounded-2xl p-10 backdrop-blur-md hover:border-purple-400/80 transition-all duration-300 hover:bg-purple-500/25 hover:shadow-3xl hover:shadow-purple-500/40 group transform hover:-translate-y-3">
            <div className="text-7xl mb-6 group-hover:scale-130 transition-transform duration-300">📋</div>
            <h3 className="text-white font-black text-2xl mb-4 group-hover:text-purple-200 transition-colors">Smart Meal Plans</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-5">Complete weekly meal plans generated in minutes. Perfectly balanced nutrition, organized by prep time, and customized to your budget, dietary preferences, and lifestyle—all the thinking done for you.</p>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Weekly planning</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Balanced nutrition</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Budget-friendly</span></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-500/30 to-pink-500/5 border border-pink-400/50 rounded-2xl p-10 backdrop-blur-md hover:border-pink-400/80 transition-all duration-300 hover:bg-pink-500/25 hover:shadow-3xl hover:shadow-pink-500/40 group transform hover:-translate-y-3">
            <div className="text-7xl mb-6 group-hover:scale-130 transition-transform duration-300">🛒</div>
            <h3 className="text-white font-black text-2xl mb-4 group-hover:text-pink-200 transition-colors">Smart Shopping</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-5">Intelligent shopping lists organized by store aisle, with price comparisons and pantry tracking. Save time at the store and reduce food waste with smart quantity suggestions.</p>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Organized by aisle</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Price comparison</span></li>
              <li className="flex items-center gap-3"><span className="text-emerald-400 text-lg">✓</span> <span>Pantry tracking</span></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-16">
          <button 
            onClick={handleTryBeta}
            className="group relative px-14 sm:px-20 py-8 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-white font-black rounded-2xl hover:shadow-4xl hover:shadow-emerald-500/80 transition-all duration-300 transform hover:scale-110 overflow-hidden text-lg sm:text-xl cursor-pointer shadow-2xl shadow-emerald-500/60 border border-emerald-300/60 hover:border-emerald-200"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              🎉 Get Started Free Today
              <svg className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button 
            onClick={handlePricingClick}
            className="group px-12 sm:px-16 py-7 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl border border-white/60 transition-all duration-300 backdrop-blur-md hover:border-white/80 transform hover:scale-110 text-lg sm:text-xl cursor-pointer shadow-2xl shadow-white/40 hover:shadow-white/50"
          >
            <span className="flex items-center justify-center gap-3">
              💰 View Pricing
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Enhanced Call-to-Action Section */}
        <div className="mt-24 pt-20 border-t border-white/15 animate-fade-in">
          <p className="text-white text-4xl md:text-5xl font-black mb-14 text-center">🌟 Why Home Cooks Love Our AI Chef</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="flex flex-col items-center gap-5 px-10 py-10 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-500/5 backdrop-blur-md border border-green-400/50 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 group transform hover:-translate-y-2">
              <svg className="w-10 h-10 text-green-400 flex-shrink-0 group-hover:scale-130 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-100 text-lg font-black text-center group-hover:text-green-200 transition-colors">Save 10+ hours/week</span>
              <p className="text-gray-400 text-base text-center">No more meal planning stress</p>
            </div>
            <div className="flex flex-col items-center gap-5 px-10 py-10 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 backdrop-blur-md border border-blue-400/50 hover:border-blue-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 group transform hover:-translate-y-2">
              <svg className="w-10 h-10 text-blue-400 flex-shrink-0 group-hover:scale-130 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-100 text-lg font-black text-center group-hover:text-blue-200 transition-colors">Reduce food waste 40%</span>
              <p className="text-gray-400 text-base text-center">Smart shopping lists</p>
            </div>
            <div className="flex flex-col items-center gap-5 px-10 py-10 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-500/5 backdrop-blur-md border border-purple-400/50 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 group transform hover:-translate-y-2">
              <svg className="w-10 h-10 text-purple-400 flex-shrink-0 group-hover:scale-130 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-100 text-lg font-black text-center group-hover:text-purple-200 transition-colors">Eat healthier meals</span>
              <p className="text-gray-400 text-base text-center">Personalized nutrition</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-400/70 rounded-3xl p-14 backdrop-blur-md max-w-4xl mx-auto hover:border-emerald-400/100 transition-all duration-300 hover:shadow-3xl hover:shadow-emerald-500/50 transform hover:scale-105">
            <p className="text-white text-3xl md:text-4xl font-black text-center mb-6">🎁 Start Your Free Trial Today</p>
            <p className="text-gray-100 text-center font-bold mb-4 text-xl">Get 30 days of premium AI features completely free. No credit card required, cancel anytime.</p>
            <p className="text-gray-300 text-lg text-center mb-8">Full access to AI recipes • Smart meal plans • Intelligent shopping lists • Pantry tracking • Cancel anytime</p>
            <div className="flex justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-black rounded-xl hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-110 text-lg">
                Claim Your Free Trial Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Trust indicators with better styling */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-base animate-fade-in">
          <div className="flex items-center gap-4 px-8 py-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all hover:bg-white/20 group">
            <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 group-hover:scale-130 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-100 font-bold">✓ No credit card needed</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all hover:bg-white/20 group">
            <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 group-hover:scale-130 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-100 font-bold">✓ Start in 30 seconds</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all hover:bg-white/20 group">
            <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 group-hover:scale-130 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-100 font-bold">✓ 30 days free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
