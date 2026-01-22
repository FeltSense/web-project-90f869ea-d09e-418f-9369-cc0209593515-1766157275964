'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'Forever',
    description: 'Perfect for exploring AI-powered cooking',
    features: [
      { name: 'Up to 10 AI recipes/month', included: true },
      { name: 'Basic meal planning', included: true },
      { name: 'Dietary preferences support', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Basic nutrition tracking', included: true },
      { name: 'Shopping lists', included: false },
      { name: 'Priority support', included: false },
      { name: 'Family meal planning', included: false },
    ],
    cta: 'Get Started Free',
    ctaLink: 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'Most popular - Everything you need to master meal planning',
    features: [
      { name: 'Unlimited AI recipes', included: true },
      { name: 'Smart weekly meal planning', included: true },
      { name: '100+ dietary preferences & allergies', included: true },
      { name: 'Mobile app with offline access', included: true },
      { name: 'Complete nutrition tracking & macros', included: true },
      { name: 'Smart shopping lists by store', included: true },
      { name: '24/7 priority customer support', included: true },
      { name: 'Family meal planning (up to 6 people)', included: true },
    ],
    cta: '🚀 Start 7-Day Free Trial',
    ctaLink: 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00',
    highlighted: true,
    badge: '🔥 Save $1,200+ Yearly',
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: '/month',
    description: 'For serious home chefs who want personalized coaching',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Advanced recipe customization & tweaks', included: true },
      { name: 'Personal nutrition coaching', included: true },
      { name: 'Priority recipe generation (instant)', included: true },
      { name: 'Exclusive chef-curated recipes', included: true },
      { name: 'Advanced analytics & meal insights', included: true },
      { name: 'VIP community & chef network', included: true },
      { name: 'Monthly personalized meal reviews', included: true },
    ],
    cta: 'Start Premium Trial',
    ctaLink: 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 mb-6">
            <span className="text-sm font-semibold text-emerald-600">💰 Transparent Pricing • No Hidden Fees</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free forever or upgrade to unlock unlimited recipes, meal planning, and personalized coaching. Cancel anytime—no questions asked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-400 shadow-2xl'
                  : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs px-4 py-1 rounded-full font-semibold animate-pulse">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 font-semibold">{plan.period}</span>}
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = plan.ctaLink}
                  className={`w-full font-semibold rounded-xl px-6 py-3 transition-all duration-300 transform hover:scale-105 active:scale-95 mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">
            ✓ 7-day free trial on Pro plan • ✓ No credit card required • ✓ Cancel anytime
          </p>
          <p className="text-sm text-slate-500">
            All plans include access to our community, recipe database, and regular updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
