'use client'

import { useState } from 'react'

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
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join Our Beta</h2>
          <p className="text-xl text-slate-200 mb-8">Get early access and exclusive features</p>
          
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition"
            >
              Join
            </button>
          </form>

          {submitted && <p className="text-center text-emerald-400 mt-4">Thanks for joining! Check your email.</p>}
        </div>
      </div>
    </section>
  )
}
