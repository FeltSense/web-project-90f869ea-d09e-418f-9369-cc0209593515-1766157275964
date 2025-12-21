'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Calendar, ShoppingCart, TrendingUp, Settings } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const PremiumKeyFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Wand2 className="w-8 h-8" />,
      title: 'AI Recipes',
      description: 'Generate personalized recipes tailored to your taste preferences and dietary needs instantly.',
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'purple',
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Meal Planning',
      description: 'Smart weekly meal plans that adapt to your schedule and nutritional goals seamlessly.',
      gradient: 'from-blue-500 to-cyan-500',
      accentColor: 'blue',
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Shopping Lists',
      description: 'Auto-generated grocery lists with price comparisons from local stores nearby.',
      gradient: 'from-green-500 to-emerald-500',
      accentColor: 'green',
    },
    {
      id: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description: 'Comprehensive nutrition analytics with detailed macro and micronutrient breakdowns.',
      gradient: 'from-orange-500 to-red-500',
      accentColor: 'orange',
    },
    {
      id: 5,
      icon: <Settings className="w-8 h-8" />,
      title: 'Dietary Preferences',
      description: 'Fully customizable dietary filters for any lifestyle or health requirement.',
      gradient: 'from-indigo-500 to-violet-500',
      accentColor: 'indigo',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    initial: { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful Features{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Built for Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your nutrition journey with cutting-edge AI technology and intuitive design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="initial"
              variants={cardHoverVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden bg-white/5 p-8 flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`} />
                </div>

                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="relative z-10 text-slate-300 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileHover={{ opacity: 1, width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`relative z-10 h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}
                />
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 text-lg font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-blue-700 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-xl transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Explore Premium Features
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumKeyFeatures;