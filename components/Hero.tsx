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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-orange-950 to-rose-950 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.2),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center px-2">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/50 backdrop-blur-md hover:from-amber-500/30 hover:to-orange-500/30 transition-all shadow-lg shadow-orange-500/10">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-bold text-amber-100">🤖 AI Recipe Generator</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Transform Your Kitchen with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">AI-Powered Culinary Magic</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-100 mt-3 sm:mt-4 px-2 font-medium">Discover endless recipe possibilities tailored to your taste, dietary needs, and available ingredients. Get personalized meal plans, nutrition insights, and smart shopping lists—all powered by cutting-edge AI. Cook with confidence, eat with joy.</p>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
              AI-Generated Recipes • Taste Learning • Dietary Customization • Ingredient Matching • Nutrition Analysis • Smart Shopping Lists
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-8 sm:pt-10 px-2">
            <Link 
              href="#contact" 
              className="group relative px-8 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-orange-500/80 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                ✨ Start Cooking Smarter Today
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#features" 
              className="group px-8 sm:px-12 py-4 sm:py-6 border-2 border-amber-400/60 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-amber-500/20 hover:border-amber-300 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <span>🎯 Explore Key Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Urgency & Value Statement */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6 px-2">
            <p className="text-xs sm:text-sm text-amber-200 font-semibold tracking-wide">
              🎁 Join 100,000+ home cooks: Unlimited AI recipes + 7 days free trial + personalized meal plans + nutrition tracking + smart shopping lists. No credit card required.
            </p>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-200 px-2">
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 hover:border-amber-400/40 hover:bg-amber-500/15 transition-all">
              <Users className="w-6 sm:w-7 h-6 sm:h-7 text-amber-400" />
              <span className="font-bold text-sm sm:text-base text-white">100,000+ Users</span>
              <span className="text-xs sm:text-sm text-slate-400">Using AI recipes daily</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-400/40 hover:bg-orange-500/15 transition-all">
              <Clock className="w-6 sm:w-7 h-6 sm:h-7 text-orange-400" />
              <span className="font-bold text-sm sm:text-base text-white">5 Minutes</span>
              <span className="text-xs sm:text-sm text-slate-400">Recipe to table</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/20 hover:border-rose-400/40 hover:bg-rose-500/15 transition-all">
              <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-rose-400" />
              <span className="font-bold text-sm sm:text-base text-white">4.9★ Rating</span>
              <span className="text-xs sm:text-sm text-slate-400">From 50,000+ reviews</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
