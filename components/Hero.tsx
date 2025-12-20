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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center px-2">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/50 backdrop-blur-md hover:from-purple-500/30 hover:to-blue-500/30 transition-all shadow-lg shadow-purple-500/10">
              <Sparkles className="w-4 h-4 text-purple-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-bold text-purple-200">✨ AI-Powered Cooking Assistant</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Cook Smarter, Eat Better, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Live Healthier</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-3 sm:mt-4 px-2">Your personal AI chef creates custom recipes tailored to your taste, dietary needs, and available ingredients—instantly.</p>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
              Say goodbye to meal planning stress. Get unlimited personalized recipes, AI-powered meal plans, real-time nutrition tracking, and smart grocery lists—all powered by advanced AI technology.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-8 sm:pt-10 px-2">
            <Link 
              href="#contact" 
              className="group relative px-8 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-purple-500/80 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                🚀 Start Cooking Free
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#features" 
              className="group px-8 sm:px-12 py-4 sm:py-6 border-2 border-purple-400/60 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-purple-500/20 hover:border-purple-300 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-300 px-2">
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/15 transition-all">
              <Users className="w-6 sm:w-7 h-6 sm:h-7 text-purple-400" />
              <span className="font-bold text-sm sm:text-base text-white">100,000+ Meals</span>
              <span className="text-xs sm:text-sm text-slate-400">Created daily</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/15 transition-all">
              <Clock className="w-6 sm:w-7 h-6 sm:h-7 text-pink-400" />
              <span className="font-bold text-sm sm:text-base text-white">30 Seconds</span>
              <span className="text-xs sm:text-sm text-slate-400">Average recipe time</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15 transition-all">
              <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-blue-400" />
              <span className="font-bold text-sm sm:text-base text-white">98% Satisfaction</span>
              <span className="text-xs sm:text-sm text-slate-400">User approved</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
