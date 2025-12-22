'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Unlimited AI-generated personalized recipes',
  'Smart weekly meal planning & shopping lists',
  'Nutrition tracking & dietary customization',
  'Access to 50+ dietary preferences',
  'Mobile app with offline access',
  'Priority 24/7 customer support',
  'Smart ingredient substitutions',
  'Family meal planning for up to 6 people',
  'Allergy & intolerance management',
  'Budget-friendly meal suggestions',
  'Recipe scaling for any serving size',
  'Export to PDF & print recipes',
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 mb-6">
            <span className="text-sm font-semibold text-emerald-600">💰 Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Affordable Plans for Every Home Cook
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join 100,000+ home cooks saving 10+ hours weekly and $1,200+ annually. 7-day free trial, no credit card required. Cancel anytime, no questions asked.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-semibold mb-4 animate-pulse">
              🔥 Limited Time: 50% Off First Month
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-5xl font-bold text-slate-900">$9.99</span>
              <span className="text-lg text-slate-600 font-semibold">/month</span>
              <span className="text-sm text-slate-500 line-through">$19.99</span>
            </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform active:scale-95"
            >
              🚀 Start Your Free Trial Now
            </button>

            <p className="text-center text-sm text-slate-500 mt-6">
              ✓ No credit card required • ✓ Cancel anytime • ✓ Then $9.99/month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
