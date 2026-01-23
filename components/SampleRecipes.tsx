'use client'

export default function SampleRecipes() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden border-t border-slate-700/50">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">Discover Delicious Recipes</h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">Explore a selection of AI-generated recipes tailored to your taste</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 hover:border-emerald-400/80 transition">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Grilled Salmon</h3>
              <p className="text-slate-300 text-sm mb-4">Perfectly cooked with lemon and herbs</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition">View Recipe →</button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 hover:border-emerald-400/80 transition">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Buddha Bowl</h3>
              <p className="text-slate-300 text-sm mb-4">Nutritious and delicious vegetarian</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition">View Recipe →</button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 hover:border-emerald-400/80 transition">
            <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Pasta Primavera</h3>
              <p className="text-slate-300 text-sm mb-4">Light and fresh Italian classic</p>
              <button className="text-emerald-400 hover:text-emerald-300 transition">View Recipe →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
