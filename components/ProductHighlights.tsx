'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Rocket,
  Users,
  TrendingUp,
} from 'lucide-react';

interface Highlight {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8" />,
    title: 'Instant Recipe Generation',
    description:
      'Get unlimited personalized recipes in seconds. Our AI analyzes your preferences and creates dishes uniquely tailored to you.',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy Protected',
    description:
      'Your dietary data is encrypted and never shared. Enterprise-grade security with HIPAA compliance for peace of mind.',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8" />,
    title: 'Smart Meal Planning',
    description:
      'Create complete weekly meal plans with organized shopping lists and prep instructions in seconds.',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    title: '50+ Dietary Preferences',
    description:
      'Support for keto, vegan, paleo, gluten-free, low-carb, and more. The AI adapts to your lifestyle.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    id: 5,
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Nutrition Intelligence',
    description:
      'Track macros and calories with AI-powered insights. Make informed decisions about your health and nutrition.',
    gradient: 'from-red-400 to-rose-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ProductHighlights(): React.ReactElement {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent mb-6">
            Everything You Need to Cook Smarter
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of home cooks trust our AI-powered platform to transform their kitchen and simplify meal planning.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {highlights.map((highlight: Highlight) => (
            <motion.div
              key={highlight.id}
              variants={cardVariants}
              className="group h-full"
            >
              <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    variants={iconVariants}
                    className={`inline-flex w-16 h-16 rounded-lg bg-gradient-to-br ${highlight.gradient} items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {highlight.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed flex-grow group-hover:text-slate-300 transition-colors duration-300">
                    {highlight.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-slate-600 transition-colors duration-300">
                    <button className="text-sm font-semibold text-slate-300 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
            Get Started Today
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}