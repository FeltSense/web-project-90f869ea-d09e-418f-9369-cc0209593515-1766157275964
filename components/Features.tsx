'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: '⚡ Instant Recipe Generation',
    description:
      'Get personalized recipes in 30 seconds. Our AI analyzes your taste preferences, dietary needs, cooking skill level, and available ingredients to create recipes you\'ll love. No more scrolling through endless options.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: '🛡️ Smart Meal Planning',
    description:
      'Automatically generate balanced weekly meal plans optimized for nutrition, cost, and variety. Our AI ensures you never eat the same meal twice and always have something delicious to cook.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: '📱 Mobile-First Experience',
    description:
      'Access your recipes, meal plans, and shopping lists on any device. Seamless sync across phone, tablet, and desktop. Cook with confidence with step-by-step instructions and ingredient substitutions.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '📊 Nutrition Tracking',
    description:
      'Track calories, macros, and micronutrients automatically. Get insights into your eating patterns and receive personalized recommendations to meet your health goals.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '👥 Community Recipes',
    description:
      'Discover recipes from 100,000+ home cooks. Share your creations, get feedback, and find inspiration from a thriving community of food lovers.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: '🎯 Dietary Flexibility',
    description:
      'Support for 50+ dietary preferences including vegan, keto, paleo, gluten-free, and more. Easily customize recipes with smart ingredient substitutions.',
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

export default function Features(): JSX.Element {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 mb-5">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-emerald-700">✨ Core Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Powerful Features Built for You
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            From AI-powered recipe generation to smart meal planning, nutrition tracking, and a thriving community—everything you need to cook smarter and eat better.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-emerald-400 overflow-hidden transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 rounded-2xl mb-6 text-white group-hover:shadow-xl group-hover:scale-125 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
