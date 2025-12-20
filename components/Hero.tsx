'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Users, Clock } from 'lucide-react';

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
          <motion.div variants={itemVariants} className="flex justify-center px-2">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/50 backdrop-blur-md hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all shadow-lg shadow-emerald-500/10">
              <Sparkles className="w-4 h-4 text-emerald-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-bold text-emerald-200">✨ AI-Powered Cooking Assistant</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Your AI Chef for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">Every Meal</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 sm:mt-4 px-2">Get personalized recipes, AI-powered meal plans, and nutrition tracking. Transform your kitchen in seconds.</p>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
              Get unlimited personalized recipes, AI-powered meal plans, and nutrition tracking. Everything you need to eat healthier and save time in the kitchen.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-8 sm:pt-10 px-2">
            <Link 
              href="#contact" 
              className="group relative px-8 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-emerald-500/80 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                🚀 Start Free Today
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#features" 
              className="group px-8 sm:px-12 py-4 sm:py-6 border-2 border-cyan-400/60 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-cyan-500/20 hover:border-cyan-300 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-300 px-2">
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/15 transition-all">
              <Users className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-400" />
              <span className="font-bold text-sm sm:text-base text-white">50,000+ Users</span>
              <span className="text-xs sm:text-sm text-slate-400">Trusted worldwide</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/15 transition-all">
              <Clock className="w-6 sm:w-7 h-6 sm:h-7 text-cyan-400" />
              <span className="font-bold text-sm sm:text-base text-white">Instant Recipes</span>
              <span className="text-xs sm:text-sm text-slate-400">Generated in seconds</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 hover:border-indigo-400/40 hover:bg-indigo-500/15 transition-all">
              <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-indigo-400" />
              <span className="font-bold text-sm sm:text-base text-white">4.9/5 Rating</span>
              <span className="text-xs sm:text-sm text-slate-400">Highly rated</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
