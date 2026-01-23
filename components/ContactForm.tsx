'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden border-t border-slate-700/50">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-200">We&apos;d love to hear from you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500" placeholder="Your name" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500" placeholder="your@email.com" required />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500" placeholder="Your message" required></textarea>
          </div>

          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition">
            Send Message
          </button>

          {submitted && <p className="text-center text-emerald-400">Thank you for your message!</p>}
        </form>
      </div>
    </section>
  )
}
