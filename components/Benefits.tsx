'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Utensils, Calendar, Leaf, Zap } from 'lucide-react';

interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 1,
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Generation',
      description: 'Advanced machine learning algorithms create unlimited unique recipes tailored to your taste preferences, cooking skill level, dietary needs, and available ingredients.',
      gradient: 'from-emerald-400 to-cyan-400'
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Personalized Recommendations',
      description: 'Smart suggestions based on your dietary history, favorite ingredients, cooking preferences, and health goals. Every recommendation is uniquely tailored to you.',
      gradient: 'from-cyan-400 to-indigo-400'
    },
    {
      id: 3,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dietary Customization',
      description: 'Easily filter recipes by dietary requirements including vegan, gluten-free, keto, paleo, and 45+ other dietary preferences and restrictions.',
      gradient: 'from-indigo-400 to-emerald-400'
    },
    {
      id: 4,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description: 'Automatically generate complete weekly meal plans with balanced nutrition, organized shopping lists, time-saving prep guidance, and cost optimization.',
      gradient: 'from-emerald-500 to-indigo-500'
    },
    {
      id: 5,
      icon: <Utensils className="w-8 h-8" />,
      title: 'Ingredient Matching',
      description: 'Use what you have in your pantry and fridge. The AI intelligently finds delicious recipes using your available ingredients and suggests smart substitutions.',
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Optimization',
      description: 'Real-time recipe adjustments for serving sizes, cooking times, nutritional content, and dietary restrictions with a single click.',
      gradient: 'from-indigo-500 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-emerald-600">✨ Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Why 100,000+ Home Cooks Trust Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stop wasting time on meal planning. Our AI learns what you love, what you can eat, and what's in your kitchen—then generates recipes you'll actually want to cook. Save 10+ hours weekly, cut grocery waste by 40%, and enjoy delicious meals every single night.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-amber-500 to-orange-500 group-hover:h-full transition-all duration-500 rounded-r-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 mb-6 text-lg font-semibold">
            Join thousands of home cooks saving 10+ hours weekly
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            🚀 Start Your Free Trial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Benefits;