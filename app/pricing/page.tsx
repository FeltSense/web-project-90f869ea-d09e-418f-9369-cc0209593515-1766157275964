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
    price: 29,
    description: 'Perfect for getting started',
    features: [
      'Up to 5 projects',
      '2GB storage',
      'Basic analytics',
      'Email support',
      'Community access'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: 79,
    description: 'For growing teams',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'Custom branding',
      'API access'
    ],
    cta: 'Get Started',
    highlighted: true
  },
  {
    name: 'Premium',
    price: 199,
    description: 'For enterprises',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Real-time analytics',
      '24/7 phone support',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'Projects', starter: true, pro: true, premium: true },
  { name: 'Storage', starter: true, pro: true, premium: true },
  { name: 'Team Members', starter: false, pro: true, premium: true },
  { name: 'API Access', starter: false, pro: true, premium: true },
  { name: 'Custom Domain', starter: false, pro: true, premium: true },
  { name: 'Priority Support', starter: false, pro: true, premium: true },
  { name: 'Webhooks', starter: false, pro: false, premium: true },
  { name: 'White Label', starter: false, pro: false, premium: true },
  { name: 'Dedicated Support', starter: false, pro: false, premium: true }
];

const faqItems: FAQItem[] = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans come with a 14-day free trial. No credit card required to get started.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
  },
  {
    question: 'What about data security?',
    answer: 'We use enterprise-grade encryption and comply with GDPR, SOC 2, and other security standards.'
  },
  {
    question: 'Can I get a discount for annual billing?',
    answer: 'Yes! Annual plans include a 20% discount compared to monthly billing.'
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
            ${tier.price}
          </span>
          <span className={`${tier.highlighted ? 'text-white/80' : 'text-gray-400'}`}>/month</span>
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
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Simple,{' '}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                Transparent
              </span>
              <br />
              Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale as you grow.
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
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
              {pricingTiers.map((tier: PricingTier, index: number) => (
                <PricingCard key={index} tier={tier} index={index} />
              ))}
            </div>
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
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-r from-orange-500/10 via-rose-500/10 to-amber-500/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8">
              Join thousands of teams already using our platform to streamline their workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:shadow-lg transition-shadow"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold bg-white/10 border border-white/20 text-white hover:border-white/40 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-6">No credit card required. 14-day free trial.</p>
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