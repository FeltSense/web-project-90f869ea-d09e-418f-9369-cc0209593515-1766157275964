'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Busy Mom of 3',
    quote: 'I used to spend 5+ hours weekly planning meals. Now I get personalized recipes in 30 seconds. My family loves the meals, and I have my evenings back. The AI understands our preferences perfectly. Worth every penny!',
    avatar: 'https://i.pravatar.cc/150?img=1',
    benefit: '5+ hours saved weekly',
  },
  {
    name: 'David Chen',
    role: 'Home Cook & Food Enthusiast',
    quote: 'The AI nailed my taste preferences immediately. It suggests recipes I would never find myself, but always want to cook. The nutrition tracking is incredible and the shopping lists save me so much time.',
    avatar: 'https://i.pravatar.cc/150?img=2',
    benefit: 'Discovered new favorite recipes',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Fitness Enthusiast',
    quote: 'Finally, an app that makes healthy eating exciting AND easy! The meal plans fit my fitness goals perfectly, recipes are delicious, and I\'ve saved $1,200+ on groceries. The AI understands my dietary needs better than any app I\'ve tried. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?img=3',
    benefit: '$1,200+ saved on groceries',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 mb-8 shadow-lg shadow-emerald-500/10">
            <span className="text-sm font-bold text-emerald-700">⭐ 4.9★ Rating • 25,000+ Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Loved by 100,000+ Home Cooks Worldwide
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Real people, real results. Discover how our AI-powered recipe generator is transforming kitchens, saving families 10+ hours weekly on meal planning, cutting grocery bills by $1,200+ annually, and making cooking exciting again.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="text-2xl font-bold text-emerald-700">10+</p>
              <p className="text-xs text-emerald-600 mt-1">Hours Saved Weekly</p>
            </div>
            <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-200">
              <p className="text-2xl font-bold text-cyan-700">$1,200+</p>
              <p className="text-xs text-cyan-600 mt-1">Saved Yearly</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-2xl font-bold text-blue-700">100K+</p>
              <p className="text-xs text-blue-600 mt-1">Happy Users</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-emerald-400 relative hover:-translate-y-3 transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
              
              {/* Verified User Badge */}
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg">
                ✓ Verified User
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-5 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-6 leading-relaxed text-base font-medium relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Benefit Highlight */}
              <div className="mb-6 p-3 rounded-lg bg-emerald-50 border border-emerald-200 relative z-10">
                <p className="text-sm font-semibold text-emerald-700">✨ {testimonial.benefit}</p>
              </div>

              {/* Person Info with Avatar */}
              <div className="flex items-center gap-4 relative z-10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full ring-2 ring-emerald-400/50 group-hover:ring-emerald-400 transition-all"
                />
                <div>
                  <p className="font-bold text-slate-900 text-base">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 font-medium mb-6">Trusted by home cooks, busy professionals, and fitness enthusiasts</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">🏆 Best Recipe App 2024</p>
            </div>
            <div className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">⭐ Top Rated on App Store</p>
            </div>
            <div className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">🎯 Featured in TechCrunch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
