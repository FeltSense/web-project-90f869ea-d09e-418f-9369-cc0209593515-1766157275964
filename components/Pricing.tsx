'use client'

export default function Pricing() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50">
            <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
            <p className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-400">/month</span></p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li>✓ Basic recipes</li>
              <li>✓ Weekly meal plans</li>
              <li>✓ Shopping lists</li>
            </ul>
            <button className="w-full px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">Get Started</button>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/80 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</div>
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <p className="text-4xl font-bold text-white mb-6">$9.99<span className="text-lg text-slate-400">/month</span></p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li>✓ All Free features</li>
              <li>✓ Advanced recipes</li>
              <li>✓ Nutrition tracking</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition">Start Free Trial</button>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50">
            <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
            <p className="text-4xl font-bold text-white mb-6">$19.99<span className="text-lg text-slate-400">/month</span></p>
            <ul className="space-y-4 mb-8 text-slate-300">
              <li>✓ All Pro features</li>
              <li>✓ Chef-curated recipes</li>
              <li>✓ Family profiles</li>
              <li>✓ Premium support</li>
            </ul>
            <button className="w-full px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">Upgrade</button>
          </div>
        </div>
      </div>
    </section>
  )
}
