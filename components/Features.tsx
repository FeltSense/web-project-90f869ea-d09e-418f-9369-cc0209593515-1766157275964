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
    title: 'Instant Recipe Generation',
    description:
      'Generate unlimited personalized recipes in seconds using advanced AI. Our system analyzes your taste preferences, dietary restrictions, available ingredients, and cooking skill level to create recipes uniquely tailored to you. Every recipe is optimized for flavor, nutrition, and ease of preparation.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy & Security First',
    description:
      'Your data is protected with enterprise-grade encryption and HIPAA compliance. We never sell or share your information. Your privacy and security are non-negotiable—trust is everything.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Smart Meal Planning',
    description:
      'Create complete weekly meal plans in seconds with organized shopping lists, prep instructions, and time-saving tips. Get detailed nutritional breakdowns for every meal. Eliminate meal planning stress and save hours each week.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Nutrition Intelligence',
    description:
      'Track macros, micros, and calories with AI-powered insights and real-time analytics. Understand exactly how each recipe supports your health goals. Make informed decisions with detailed breakdowns and personalized recommendations based on your objectives.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Dietary Flexibility',
    description:
      'Support for 50+ dietary preferences including keto, vegan, paleo, gluten-free, low-carb, and more. The AI intelligently adapts to your lifestyle and preferences. Enjoy delicious, satisfying meals that perfectly align with your dietary choices.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Ingredient Intelligence',
    description:
      'Missing an ingredient? Get smart alternatives that maintain nutritional value and authentic taste. Never let ingredient availability stop you from cooking. Our AI always has the perfect solution at your fingertips.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-amber-700">✨ Product Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Intelligent Features That Adapt to You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with one goal: make cooking easier, faster, and more enjoyable. From AI-powered recipe generation to smart meal planning and nutrition tracking, we've built the complete kitchen companion you've been waiting for.
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
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-2xl mb-6 text-white group-hover:shadow-2xl group-hover:scale-125 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
