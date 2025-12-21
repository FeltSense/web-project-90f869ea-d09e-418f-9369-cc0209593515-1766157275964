'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Busy Mom of 3',
    quote: 'I used to spend 5+ hours weekly planning meals. Now I get personalized recipes in 30 seconds. My family loves the meals, and I have my evenings back. Worth every penny!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'David Chen',
    role: 'Home Cook & Food Enthusiast',
    quote: 'The AI nailed my taste preferences immediately. It suggests recipes I would never find myself, but always want to cook. The nutrition tracking is incredible.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Fitness Enthusiast',
    quote: 'Finally, an app that makes healthy eating exciting AND easy! The meal plans fit my goals perfectly, recipes are delicious, and I\'ve saved $1,200+ on groceries. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 mb-6">
            <span className="text-sm font-semibold text-emerald-600">⭐ 4.9★ Rating • 25,000+ Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Loved by 100,000+ Home Cooks
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real people, real results. See how our AI recipe generator is saving families 10+ hours weekly and cutting grocery bills by $1,200+ annually.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 relative hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Verified User Badge */}
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                ✓ Verified User
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Person Info with Avatar */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
