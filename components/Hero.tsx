'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-32 pb-32 overflow-hidden">
      {/* Enhanced animated background elements with improved visual depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.6),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.5),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_70%)]" />
      
      {/* Animated accent lines with enhanced visibility */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/6 rounded-full blur-3xl animate-pulse" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-blue-500/10">
            ✨ AI-Powered Meal Planning
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in">
          Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Cooking Experience</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Discover recipes that match your style, dietary needs, and pantry. Let AI be your personal chef and unlock a world of delicious possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-8">
          <button className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 overflow-hidden text-base sm:text-lg">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Cooking Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/40 transition-all duration-300 backdrop-blur-sm hover:border-white/60 transform hover:scale-105 text-base sm:text-lg">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>
        
        {/* Enhanced Trust indicators with better styling */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm animate-fade-in">
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Get started in seconds</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% free to try</span>
          </div>
        </div>
      </div>
    </section>
  )
}
