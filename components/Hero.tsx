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
              <span className="text-sm font-semibold text-indigo-300">AI-Powered Culinary Intelligence</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">AI-Powered Personal Chef</span> Awaits
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Say goodbye to meal planning stress. Get unlimited AI-generated recipes personalized to your taste, dietary preferences, and ingredients on hand. From quick weeknight dinners to impressive dinner party dishes—create restaurant-quality meals at home in minutes, not hours.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="#contact" 
              className="group px-10 py-5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:via-cyan-600 hover:to-indigo-600 transition-all transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/60 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Start Creating Recipes Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link 
              href="#features" 
              className="px-10 py-5 border-2 border-cyan-500/50 text-white rounded-xl font-semibold text-lg hover:bg-cyan-500/15 hover:border-cyan-400 transition-all backdrop-blur-sm hover:scale-105 transform"
            >
              Explore Features
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="pt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-3 hover:text-emerald-300 transition-colors cursor-pointer">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span>⭐ 4.9/5 from 50,000+ happy users</span>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors cursor-pointer">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span>⚡ Recipes generated in seconds</span>
            </div>
            <div className="flex items-center gap-3 hover:text-indigo-300 transition-colors cursor-pointer">
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
              <span>✅ Nutritionist-verified recipes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
