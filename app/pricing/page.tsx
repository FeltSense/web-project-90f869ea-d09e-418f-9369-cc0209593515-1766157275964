'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface ComparisonFeature {
  name: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for exploring',
    features: [
      'Unlimited AI recipes',
      'Basic meal planning',
      'Dietary preferences',
      'Shopping lists',
      'Mobile app access',
      'Community recipes'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: 9.99,
    description: 'Most popular choice',
    features: [
      'Everything in Starter',
      'Advanced meal planning',
      'Nutrition tracking',
      'Smart substitutions',
      'Recipe customization',
      'Priority support',
      'Ad-free experience',
      'Offline access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Premium',
    price: 19.99,
    description: 'For serious home chefs',
    features: [
      'Everything in Pro',
      'Personal nutrition coach',
      'Meal prep guides',
      'Restaurant recommendations',
      'Family meal planning',
      '24/7 priority support',
      'Custom recipe creation',
      'Exclusive chef recipes'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  }
];

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'AI Recipe Generation', starter: true, pro: true, premium: true },
  { name: 'Meal Planning', starter: true, pro: true, premium: true },
  { name: 'Nutrition Tracking', starter: false, pro: true, premium: true },
  { name: 'Smart Shopping Lists', starter: false, pro: true, premium: true },
  { name: 'Recipe Customization', starter: false, pro: true, premium: true },
  { name: 'Priority Support', starter: false, pro: true, premium: true },
  { name: 'Personal Nutrition Coach', starter: false, pro: false, premium: true },
  { name: 'Meal Prep Guides', starter: false, pro: false, premium: true },
  { name: 'Exclusive Chef Recipes', starter: false, pro: false, premium: true }
];

const faqItems: FAQItem[] = [
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes! You can cancel your subscription at any time with no penalties. Your access continues until the end of your billing period.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
  },
  {
    question: 'How long is the free trial?',
    answer: 'All plans come with a 7-day free trial with full access to premium features. No credit card required to start.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
  },
  {
    question: 'How does the AI personalization work?',
    answer: 'Our AI learns your taste preferences, dietary restrictions, and available ingredients to create recipes tailored just for you. The more you use it, the better it gets!'
  },
  {
    question: 'Can I get a discount for annual billing?',
    answer: 'Yes! Annual plans include a 20% discount compared to monthly billing, saving you money while you enjoy unlimited recipes.'
  }
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl backdrop-blur-sm transition-all duration-300 ${
        tier.highlighted
          ? 'bg-gradient-to-br from-orange-500 via-rose-500 to-amber-500 p-8 ring-2 ring-orange-400 shadow-2xl scale-105 lg:scale-110'
          : 'bg-white/10 border border-white/20 p-8 hover:border-white/40'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-400 to-rose-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-white'}`}>
          {tier.name}
        </h3>
        <p className={`text-sm mb-4 ${tier.highlighted ? 'text-white/90' : 'text-gray-300'}`}>
          {tier.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300'}`}>
            {tier.price === 0 ? 'Free' : `${tier.price}`}
          </span>
          <span className={`${tier.highlighted ? 'text-white/80' : 'text-gray-400'}`}>{tier.price > 0 ? '/month' : ''}</span>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
          tier.highlighted
            ? 'bg-white text-orange-600 hover:bg-gray-100 shadow-lg'
            : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
        }`}
      >
        {tier.cta}
      </button>

      <div className="space-y-4">
        {tier.features.map((feature: string, featureIndex: number) => (
          <motion.div
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Check
              className={`w-5 h-5 flex-shrink-0 ${
                tier.highlighted ? 'text-white' : 'text-amber-300'
              }`}
            />
            <span className={tier.highlighted ? 'text-white' : 'text-gray-300'}>
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ComparisonTable(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Feature</th>
              <th className="px-6 py-4 text-center text-gray-300 font-semibold">Starter</th>
              <th className="px-6 py-4 text-center bg-gradient-to-b from-orange-500/10 to-transparent text-amber-300 font-semibold">
                Pro
              </th>
              <th className="px-6 py-4 text-center text-gray-300 font-semibold">Premium</th>
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((feature: ComparisonFeature, index: number) => (
              <tr
                key={index}
                className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/2' : ''}`}
              >
                <td className="px-6 py-4 text-gray-300">{feature.name}</td>
                <td className="px-6 py-4 text-center">
                  {feature.starter ? (
                    <Check className="w-5 h-5 text-amber-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  )}
                </td>
                <td className="px-6 py-4 text-center bg-gradient-to-b from-orange-500/5 to-transparent">
                  {feature.pro ? (
                    <Check className="w-5 h-5 text-amber-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {feature.premium ? (
                    <Check className="w-5 h-5 text-amber-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function FAQAccordion(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item: FAQItem, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="text-left text-white font-semibold">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-4 text-gray-300 border-t border-white/10"
            >
              {item.answer}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function PricingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Choose the perfect plan for your cooking journey. All plans include a 7-day free trial with full access to premium features.
            </p>
            <p className="text-lg text-amber-300 font-semibold">
              🎁 7-Day Free Trial • 💰 Save 20% with Annual Billing • 🔄 Cancel Anytime • ✅ No Credit Card Required
            </p>

            {/* Toggle for billing period */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-400">Monthly</span>
              <div className="bg-white/10 border border-white/20 rounded-full p-1 flex">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold">
                  Monthly
                </button>
                <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white transition-colors">
                  Annual
                </button>
              </div>
              <span className="text-amber-300 font-semibold">Save 20%</span>
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
              {pricingTiers.map((tier: PricingTier, index: number) => (
                <PricingCard key={index} tier={tier} index={index} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-300 text-lg mb-4">💡 All plans include a 7-day free trial with full access to premium features</p>
              <p className="text-amber-300 font-semibold text-base">Save 20% when you switch to annual billing</p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Compare Plans</h2>
              <p className="text-gray-400">See what features are included in each plan</p>
            </motion.div>
            <ComparisonTable />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Find answers to common questions about our pricing and plans</p>
            </motion.div>
            <FAQAccordion />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 border border-emerald-400/50 rounded-3xl p-12 sm:p-16 backdrop-blur-sm shadow-2xl shadow-emerald-500/20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Transform Your Kitchen?</h2>
            <p className="text-lg text-gray-200 mb-10">
              Start your free trial today. No credit card required. Get instant access to all features and start creating personalized meals in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white hover:shadow-2xl hover:shadow-emerald-500/50 transition-all transform"
              >
                🚀 Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl font-bold text-lg bg-white/15 border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 transition-all"
              >
                📧 Contact Sales
              </motion.button>
            </div>
            <p className="text-base text-emerald-200 font-semibold">✅ 7-day free trial • 💳 No credit card • 🔄 Cancel anytime • 🎯 Full feature access</p>
          </motion.div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">Have questions? We're here to help.</p>
            <Link
              href="/contact"
              className="inline-block text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Contact our sales team →
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}