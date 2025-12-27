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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-32 pb-32 overflow-hidden">
      {/* Enhanced animated background elements with improved visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.8),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.7),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.4),transparent_70%)]" />
      
      {/* Animated accent lines with enhanced visibility */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-blue-500/10">
            ✨ Intelligent Meal Planning Powered by AI
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in">
          Your Personal AI <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Chef & Meal Planner</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Tired of the daily "What's for dinner?" struggle? Our AI chef generates personalized recipes in seconds, creates weekly meal plans tailored to your preferences, and builds smart shopping lists that save you time and money. Cook restaurant-quality meals at home—effortlessly.
        </p>
        
        <div className="mb-12 animate-fade-in">
          <p className="text-xl md:text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text mb-4">
            ✨ From "What's for dinner?" to "Wow, I made this?" in minutes.
          </p>
          <p className="text-sm md:text-base text-gray-400 mt-3">
            Join thousands of home cooks who are already saving time and eating better with AI-powered meal planning.
          </p>
        </div>



        {/* Key Features Highlight - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-blue-400/60 transition-all hover:bg-blue-500/15 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-white font-bold text-base mb-3">AI-Powered Recipes</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">Get instant personalized recipes that match your taste, dietary needs, and what's in your pantry</p>
            <ul className="text-gray-500 text-xs space-y-1">
              <li>✓ Dietary preferences</li>
              <li>✓ Ingredient matching</li>
              <li>✓ Cooking skill level</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-purple-400/60 transition-all hover:bg-purple-500/15 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-white font-bold text-base mb-3">Smart Meal Plans</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">Never wonder what to cook again with AI-generated weekly meal plans customized just for you</p>
            <ul className="text-gray-500 text-xs space-y-1">
              <li>✓ Weekly planning</li>
              <li>✓ Balanced nutrition</li>
              <li>✓ Budget-friendly</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-pink-400/60 transition-all hover:bg-pink-500/15 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-white font-bold text-base mb-3">Smart Shopping</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">Auto-generated shopping lists organized by store section, saving you time and money</p>
            <ul className="text-gray-500 text-xs space-y-1">
              <li>✓ Organized by aisle</li>
              <li>✓ Price comparison</li>
              <li>✓ Pantry tracking</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-8">
          <button 
            onClick={handleTryBeta}
            className="group relative px-8 sm:px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 overflow-hidden text-base sm:text-lg cursor-pointer shadow-lg shadow-blue-500/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              🚀 Get Started Free (No Credit Card)
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 sm:px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/40 transition-all duration-300 backdrop-blur-sm hover:border-white/60 transform hover:scale-105 text-base sm:text-lg cursor-pointer shadow-lg shadow-white/20">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See It In Action (2 min)
            </span>
          </button>
        </div>
        
        {/* Enhanced Call-to-Action Section */}
        <div className="mt-16 pt-12 border-t border-white/10 animate-fade-in">
          <p className="text-gray-300 text-lg font-semibold mb-8">🌟 Why thousands of home cooks love our AI Chef</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm border border-green-400/30 hover:border-green-400/60 transition-all hover:shadow-lg hover:shadow-green-500/20">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm font-semibold text-center">Save 10+ hours/week</span>
              <p className="text-gray-500 text-xs text-center">No more meal planning stress</p>
            </div>
            <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/60 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm font-semibold text-center">Reduce food waste</span>
              <p className="text-gray-500 text-xs text-center">Smart shopping lists</p>
            </div>
            <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <svg className="w-6 h-6 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 text-sm font-semibold text-center">Eat healthier meals</span>
              <p className="text-gray-500 text-xs text-center">Personalized nutrition</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm text-center font-semibold mb-4">🎁 Limited Time Offer</p>
          <p className="text-gray-400 text-sm text-center">Get 30 days free access to all premium features. No credit card required. Cancel anytime.</p>
        </div>
        
        {/* Enhanced Trust indicators with better styling */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm animate-fade-in">
          <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">No credit card needed</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">Start in 30 seconds</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">30 days free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
