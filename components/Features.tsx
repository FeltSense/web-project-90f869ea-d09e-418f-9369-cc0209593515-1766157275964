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
    title: 'Intelligent Recipe Generation',
    description:
      'Unlimited personalized recipes created by advanced AI. Our machine learning engine analyzes your preferences, dietary restrictions, and health goals to generate recipes that are uniquely tailored to you. Every recipe is optimized for taste, nutrition, and ease of preparation.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy & Security First',
    description:
      'Enterprise-grade encryption and HIPAA compliance protect your health data. We never share your information without explicit consent. Your privacy and security are fundamental to everything we do.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Automated Meal Planning',
    description:
      'Generate complete weekly meal plans in seconds. Get organized shopping lists, step-by-step prep instructions, and detailed nutritional breakdowns. Meal planning has never been easier or more efficient.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Advanced Nutrition Tracking',
    description:
      'Monitor macronutrients, micronutrients, and calories with AI-powered analytics. Understand exactly how each recipe supports your health goals. Make data-driven decisions about your nutrition.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Flexible Dietary Support',
    description:
      'Support for 50+ dietary preferences including keto, vegan, paleo, gluten-free, and more. The AI adapts to your restrictions and preferences. Enjoy delicious meals that fit your lifestyle perfectly.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Smart Ingredient Swaps',
    description:
      'Missing an ingredient? Get intelligent alternatives that preserve nutritional value and taste. Never let ingredient availability limit your cooking. Always have a perfect solution ready.',
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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-600">Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features Built for Your Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the full power of AI-driven recipe generation. Our intelligent platform combines advanced machine learning with nutritional science to deliver personalized recipes, automated meal planning, and comprehensive health insights—all designed to make healthy eating effortless and enjoyable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500 rounded-xl mb-6 text-white group-hover:shadow-xl group-hover:scale-125 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}