'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Personalized meal plans tailored to your health goals',
  'Real-time nutrition tracking and food logging',
  'AI-powered recipe recommendations',
  'Weekly progress analytics and insights',
  'Priority customer support 24/7',
  'Community access with 50,000+ members',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands transforming their nutrition with Hello My Love. Everything you need to eat smarter, feel better, and love your health.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-baseline justify-center gap-2 mb-8">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-lg text-emerald-400 font-semibold">Early Access</span>
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
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - $29
          </button>

          <p className="text-center text-sm text-slate-500 mt-6">
            Limited-time pre-order pricing. Regular price $49/month after launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
