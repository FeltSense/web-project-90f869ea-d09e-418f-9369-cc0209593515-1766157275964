'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Busy Mom of 3',
      avatar: 'from-emerald-500 to-cyan-500',
      quote: 'RecipeAI saved me 10+ hours every week on meal planning. My family loves the variety, and I\'m actually enjoying cooking again instead of stressing about what to make.',
      benefit: 'Saves 10+ hours weekly',
      rating: 5,
    },
    {
      name: 'John Chen',
      role: 'Finance Professional',
      avatar: 'from-purple-500 to-pink-500',
      quote: 'I cut my grocery bills by 30% in the first month. The smart substitutions and budget optimization are incredible. I\'ve never eaten better while spending less.',
      benefit: 'Saves $1,200+ yearly',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Home Cook',
      avatar: 'from-orange-500 to-red-500',
      quote: 'No more "what\'s for dinner" stress! The personalized recipes match my taste perfectly. It\'s like having a personal chef who knows exactly what I love.',
      benefit: 'Unlimited recipe ideas',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'Health-Conscious Professional',
      avatar: 'from-blue-500 to-cyan-500',
      quote: 'The nutrition tracking is a game-changer. I hit my fitness goals while enjoying delicious meals. RecipeAI makes healthy eating effortless and enjoyable.',
      benefit: 'Nutrition tracking included',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'Sustainability Advocate',
      avatar: 'from-green-500 to-emerald-500',
      quote: 'I reduced food waste by 40% using RecipeAI. The AI suggests recipes using ingredients I already have. It\'s good for my wallet and the planet.',
      benefit: 'Reduces waste by 40%',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Culinary Enthusiast',
      avatar: 'from-pink-500 to-rose-500',
      quote: 'The chef-curated recipes and video tutorials helped me master new cuisines. I\'m cooking restaurant-quality meals at home. Absolutely worth it!',
      benefit: 'Professional guidance included',
      rating: 5,
    },
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/80 mb-6 backdrop-blur-sm">
            <span className="text-sm font-bold text-emerald-100">⭐ REAL STORIES FROM REAL USERS • 100K+ HAPPY COOKS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">What Our Users Say</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-emerald-300">Join 100K+ satisfied home cooks</span> who are saving time, money, and stress with RecipeAI. Here's what real users are experiencing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/60 border border-slate-600/80 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 group hover:scale-105"
            >
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-emerald-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-100 text-base leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Benefit badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 mb-6">
                <span className="text-xs font-bold text-emerald-300">✓ {testimonial.benefit}</span>
              </div>

              {/* User info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-600/50">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar} flex-shrink-0`}></div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-emerald-600/30 via-cyan-600/30 to-blue-600/30 border-2 border-emerald-400/80 backdrop-blur-lg shadow-2xl shadow-emerald-500/50">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-300 mb-2">100K+</div>
              <p className="text-white font-semibold">Active Users</p>
              <p className="text-slate-200 text-sm mt-1">Growing daily</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-300 mb-2">4.9★</div>
              <p className="text-white font-semibold">Average Rating</p>
              <p className="text-slate-200 text-sm mt-1">50K+ reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">10+</div>
              <p className="text-white font-semibold">Hours Saved Weekly</p>
              <p className="text-slate-200 text-sm mt-1">Per user average</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">30%</div>
              <p className="text-white font-semibold">Savings on Groceries</p>
              <p className="text-slate-200 text-sm mt-1">First month average</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
