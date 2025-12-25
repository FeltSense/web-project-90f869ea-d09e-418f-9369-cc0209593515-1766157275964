'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-32 pb-32 overflow-hidden">
      {/* Enhanced animated background elements with improved visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
            AI-Powered Meal Planning
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Discover Your Next <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Favorite Recipe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Personalized AI-generated recipes tailored to your taste, dietary preferences, and available ingredients
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
