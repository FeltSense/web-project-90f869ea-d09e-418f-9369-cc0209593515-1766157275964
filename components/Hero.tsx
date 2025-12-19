'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.15),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm hover:bg-indigo-500/20 transition-colors">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-indigo-300">Transforming Ideas Into Reality</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">Recipe Generation</span> for Your Health
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover personalized recipes tailored to your dietary preferences, health goals, and nutritional needs. Our advanced AI analyzes thousands of ingredients and recipes to create delicious, nutritious meal plans just for you. Say goodbye to meal planning stress and hello to effortless, healthy eating.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
            >
              Start Your Wellness Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="px-8 py-4 border-2 border-emerald-500/50 text-white rounded-xl font-semibold hover:bg-emerald-500/10 hover:border-emerald-400 transition-all backdrop-blur-sm hover:scale-105 transition-transform"
            >
              Explore Our Features
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Trusted by 50,000+ health enthusiasts</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>Personalized health insights</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span>Science-backed recommendations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
