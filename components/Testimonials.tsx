'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Chen',
    role: 'Nutritionist & Health Coach',
    quote: 'Hello My Love transformed how I track my clients\' nutrition. The meal planning features are intuitive, and my clients love the personalized recommendations.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'James Rodriguez',
    role: 'Fitness Trainer',
    quote: 'I recommend Hello My Love to all my clients. The food database is comprehensive, and the integration with fitness tracking is seamless. Results speak for themselves.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Sophie Williams',
    role: 'Wellness Enthusiast',
    quote: 'Finally, an app that understands health holistically. The meal suggestions actually taste good, and I\'ve never felt more in control of my nutrition journey.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Loved by health professionals
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of nutritionists, trainers, and wellness enthusiasts transforming their health with Hello My Love.
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
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Verified User Badge */}
              <div className="absolute -top-3 left-8 bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Verified User
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
