'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Users, Gift } from 'lucide-react'

export default function BetaSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-400/80 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/30">
            <span className="text-sm font-bold text-emerald-100">⚡ LIMITED TIME OFFER • BETA ACCESS</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Kitchen?
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-3 font-bold">
              Join 100K+ Home Cooks Today
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            Get instant access to unlimited AI-powered recipes, smart meal planning, and budget optimization. <span className="font-bold text-emerald-300">Start free today</span>—no credit card required. Join our beta and unlock exclusive early-bird benefits.
          </p>

          {/* Benefits Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm">
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-100 font-semibold">Instant Recipe Generation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm">
              <Users className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-100 font-semibold">Join 100K+ Users</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-purple-500/20 border border-purple-400/50 backdrop-blur-sm">
              <Gift className="w-5 h-5 text-purple-300" />
              <span className="text-purple-100 font-semibold">Exclusive Beta Perks</span>
            </div>
          </div>
          
          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition-all duration-300 backdrop-blur-sm text-lg"
              required
            />
            <button 
              type="submit"
              className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap text-lg overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            >
              <span className="relative z-10 flex items-center gap-2">
                Sign Up Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

          {submitted && (
            <div className="text-center p-4 rounded-lg bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-sm">
              <p className="text-emerald-300 font-semibold text-lg">✅ Success! Check your email for your beta access link.</p>
              <p className="text-emerald-200 text-sm mt-2">Welcome to the RecipeAI community!</p>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm font-medium mb-6">Trusted by leading home cooks and food enthusiasts</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
              <div>
                <p className="text-3xl font-bold text-emerald-400">100K+</p>
                <p className="text-slate-300 text-sm mt-1">Active Users</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">4.9★</p>
                <p className="text-slate-300 text-sm mt-1">Average Rating</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
              <div>
                <p className="text-3xl font-bold text-purple-400">10+ Hours</p>
                <p className="text-slate-300 text-sm mt-1">Saved Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}