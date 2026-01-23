'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  accentColor: string;
}

const KeyFeaturesShowcaseEnhanced: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with optimized algorithms and edge computing.',
      benefits: ['99.9% uptime', 'Sub-100ms response', 'Global CDN'],
      gradient: 'from-yellow-500 to-orange-500',
      accentColor: 'text-yellow-400',
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols keep your data safe and private.',
      benefits: ['End-to-end encryption', 'ISO 27001 certified', 'GDPR compliant'],
      gradient: 'from-blue-500 to-indigo-500',
      accentColor: 'text-blue-400',
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Seamless experience across all devices with native mobile optimization.',
      benefits: ['iOS & Android', 'Offline mode', 'Auto sync'],
      gradient: 'from-green-500 to-teal-500',
      accentColor: 'text-green-400',
    },
    {
      id: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Analytics',
      description: 'Real-time insights and comprehensive reporting to track your success.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data export'],
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'text-purple-400',
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Work together seamlessly with built-in collaboration and team management.',
      benefits: ['Real-time updates', 'Team permissions', 'Comments & mentions'],
      gradient: 'from-cyan-500 to-blue-500',
      accentColor: 'text-cyan-400',
    },
    {
      id: 6,
      icon: <Workflow className="w-8 h-8" />,
      title: 'Automation',
      description: 'Automate repetitive tasks and streamline your workflow with smart rules.',
      benefits: ['Smart rules', 'Webhooks', 'API access'],
      gradient: 'from-red-500 to-orange-500',
      accentColor: 'text-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden border-y border-slate-700/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
            <span className="text-sm font-bold text-cyan-100">✨ INTELLIGENT FEATURES • BUILT FOR EXCELLENCE</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Features Built for Success
            </span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform delivers the tools you need to succeed. From lightning-fast performance to enterprise security, every feature is designed with excellence in mind.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 hover:border-slate-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-slate-50 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className={`text-lg ${feature.accentColor} flex-shrink-0 mt-1`}>✓</span>
                      <span className="text-sm text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-300 mb-8">
            Ready to transform your experience with cutting-edge features?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started Free
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeaturesShowcaseEnhanced;
