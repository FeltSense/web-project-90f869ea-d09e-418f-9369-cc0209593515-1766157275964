'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-black border-t border-emerald-500/20">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">✦</span>
                </div>
                <span className="text-xl font-bold text-white">RecipeAI</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Transform your kitchen with AI-powered personalized recipes and meal planning.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/updates" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                &copy; {currentYear} RecipeAI. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-slate-500 hover:text-white text-sm transition-colors duration-300">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}