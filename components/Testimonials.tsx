'use client'

export default function Testimonials() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">What Our Users Say</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">Join thousands of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500"></div>
              <div>
                <h4 className="text-white font-semibold">Sarah</h4>
                <p className="text-slate-400 text-sm">Food Blogger</p>
              </div>
            </div>
            <p className="text-slate-300">&quot;RecipeAI has completely transformed how I plan meals. I save hours every week!&quot;</p>
            <div className="mt-4 text-emerald-400">★★★★★</div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <div>
                <h4 className="text-white font-semibold">John</h4>
                <p className="text-slate-400 text-sm">Busy Professional</p>
              </div>
            </div>
            <p className="text-slate-300">&quot;The AI suggestions are spot on. I&apos;ve never eaten better while spending less.&quot;</p>
            <div className="mt-4 text-emerald-400">★★★★★</div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
              <div>
                <h4 className="text-white font-semibold">Emma</h4>
                <p className="text-slate-400 text-sm">Home Cook</p>
              </div>
            </div>
            <p className="text-slate-300">&quot;Finally, no more &apos;what&apos;s for dinner&apos; stress. Highly recommended!&quot;</p>
            <div className="mt-4 text-emerald-400">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  )
}
