'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg shadow-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-cyan-300 group-hover:to-blue-300 transition-all duration-300">
              RecipeAI
            </div>
            <span className="text-xs font-semibold text-emerald-300 hidden sm:inline">✨ AI Chef</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-300 hover:text-emerald-300 transition duration-300 font-medium">
              Home
            </Link>
            <Link href="/features" className="text-slate-300 hover:text-emerald-300 transition duration-300 font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-emerald-300 transition duration-300 font-medium">
              Pricing
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-cyan-400 transition duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-emerald-500/20">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition font-medium">
                Home
              </Link>
              <Link href="/features" className="text-slate-300 hover:text-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition font-medium">
                Pricing
              </Link>
              <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-cyan-400 transition text-center">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}