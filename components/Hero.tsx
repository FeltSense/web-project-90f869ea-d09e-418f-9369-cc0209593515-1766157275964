'use client'

import React from 'react'

const Hero: React.FC = () => {
  const handleTryBeta = () => {
    const betaSection = document.getElementById('beta-signup')
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20 pb-20 overflow-hidden">
      {/* Premium animated background with enhanced visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.9),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.6),transparent_70%)]" />
      
      {/* Animated accent orbs with enhanced glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-400/50 rounded-full text-emerald-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-emerald-500/10">
            ✨ AI-Powered Meal Planning & Recipe Generation
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Meet Your <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Culinary Partner</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold animate-fade-in">
          Discover the future of home cooking. AI-powered recipes tailored to your taste, smart meal plans that save you hours, and intelligent shopping that cuts waste by 40%. Enjoy restaurant-quality meals at home—effortlessly.
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Join 100,000+ home cooks who've transformed their kitchens. Get started free—no credit card required. Start cooking smarter in 30 seconds.
        </p>
        
        <div className="mb-12 animate-fade-in">
          <p className="text-lg md:text-xl font-semibold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text mb-4">
            ⚡ AI-Powered Recipes • Smart Meal Plans • Intelligent Shopping Lists
          </p>
          <p className="text-gray-300 text-sm md:text-base">Join 10,000+ home cooks saving time, reducing waste, and eating better every day</p>
        </div>



        {/* Key Features Highlight - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-blue-500/25 to-blue-500/5 border border-blue-400/40 rounded-xl p-8 backdrop-blur-md hover:border-blue-400/70 transition-all duration-300 hover:bg-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 group">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">AI-Powered Recipes</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Unlimited personalized recipes generated in seconds. Our AI learns your taste preferences, dietary needs, allergies, and pantry inventory to create meals you'll actually want to cook.</p>
            <ul className="text-gray-400 text-xs space-y-2">
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Dietary preferences</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Ingredient matching</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Cooking skill level</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/25 to-purple-500/5 border border-purple-400/40 rounded-xl p-8 backdrop-blur-md hover:border-purple-400/70 transition-all duration-300 hover:bg-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 group">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">📋</div>
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors">Smart Meal Plans</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Complete weekly meal plans generated in minutes. Perfectly balanced nutrition, organized by prep time, and customized to your budget, dietary preferences, and lifestyle—all the thinking done for you.</p>
            <ul className="text-gray-400 text-xs space-y-2">
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Weekly planning</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Balanced nutrition</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Budget-friendly</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-500/25 to-pink-500/5 border border-pink-400/40 rounded-xl p-8 backdrop-blur-md hover:border-pink-400/70 transition-all duration-300 hover:bg-pink-500/20 hover:shadow-2xl hover:shadow-pink-500/30 group">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">🛒</div>
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-pink-300 transition-colors">Smart Shopping</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">Intelligent shopping lists organized by store aisle, with price comparisons and pantry tracking. Save time at the store and reduce food waste with smart quantity suggestions.</p>
            <ul className="text-gray-400 text-xs space-y-2">
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Organized by aisle</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Price comparison</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Pantry tracking</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in mb-12">
          <button 
            onClick={handleTryBeta}
            className="group relative px-12 sm:px-16 py-7 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold rounded-xl hover:shadow-3xl hover:shadow-emerald-500/70 transition-all duration-300 transform hover:scale-105 overflow-hidden text-base sm:text-lg cursor-pointer shadow-xl shadow-emerald-500/50 border border-emerald-400/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              🚀 Start Your AI Chef Journey - Free for 30 Days
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-10 sm:px-14 py-6 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/50 transition-all duration-300 backdrop-blur-md hover:border-white/70 transform hover:scale-110 text-base sm:text-lg cursor-pointer shadow-xl shadow-white/30 hover:shadow-white/40">
            <span className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>
        
        {/* Enhanced Call-to-Action Section */}
        <div className="mt-20 pt-16 border-t border-white/10 animate-fade-in">
          <p className="text-white text-xl font-bold mb-10 text-center">🌟 Why 10,000+ home cooks trust our AI Chef</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-4 px-8 py-7 rounded-xl bg-gradient-to-br from-green-500/25 to-green-500/5 backdrop-blur-md border border-green-400/40 hover:border-green-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 group">
              <svg className="w-8 h-8 text-green-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-200 text-base font-bold text-center group-hover:text-green-300 transition-colors">Save 10+ hours/week</span>
              <p className="text-gray-400 text-sm text-center">No more meal planning stress</p>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 py-7 rounded-xl bg-gradient-to-br from-blue-500/25 to-blue-500/5 backdrop-blur-md border border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 group">
              <svg className="w-8 h-8 text-blue-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-200 text-base font-bold text-center group-hover:text-blue-300 transition-colors">Reduce food waste</span>
              <p className="text-gray-400 text-sm text-center">Smart shopping lists</p>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 py-7 rounded-xl bg-gradient-to-br from-purple-500/25 to-purple-500/5 backdrop-blur-md border border-purple-400/40 hover:border-purple-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 group">
              <svg className="w-8 h-8 text-purple-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-200 text-base font-bold text-center group-hover:text-purple-300 transition-colors">Eat healthier meals</span>
              <p className="text-gray-400 text-sm text-center">Personalized nutrition</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 rounded-xl p-8 backdrop-blur-md max-w-3xl mx-auto hover:border-emerald-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30">
            <p className="text-white text-lg font-bold text-center mb-3">🎁 Limited Time Launch Offer</p>
            <p className="text-gray-200 text-center font-semibold mb-2">Get 30 days of premium AI features completely free—no credit card required. Join 10,000+ happy home cooks today!</p>
            <p className="text-gray-400 text-sm text-center">Full access to AI recipes • Smart meal plans • Intelligent shopping lists • Pantry tracking • Cancel anytime</p>
          </div>
        </div>
        
        {/* Enhanced Trust indicators with better styling */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm animate-fade-in">
          <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all hover:bg-white/15 group">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-200 font-semibold">✓ No credit card needed</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all hover:bg-white/15 group">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-200 font-semibold">✓ Start in 30 seconds</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all hover:bg-white/15 group">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-200 font-semibold">✓ 30 days free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
