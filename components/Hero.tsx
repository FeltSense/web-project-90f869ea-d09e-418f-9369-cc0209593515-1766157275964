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
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm hover:bg-indigo-500/20 transition-colors">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-indigo-300">🚀 Next-Generation AI Cooking</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 animate-pulse">AI Chef</span> Awaits
            </h1>
            <p className="text-lg text-slate-400 mt-4">Personalized recipes, smart meal planning, and nutritional intelligence</p>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get unlimited personalized recipes in seconds. Our advanced AI analyzes your taste preferences, dietary restrictions, and available ingredients to create meals uniquely tailored to you. Cook smarter, eat healthier, save time—all in one place.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="#contact" 
              className="group px-10 py-5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:via-cyan-600 hover:to-indigo-600 transition-all transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/60 flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">🚀 Get Started Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link 
              href="#features" 
              className="group px-10 py-5 border-2 border-cyan-500/50 text-white rounded-xl font-semibold text-lg hover:bg-cyan-500/15 hover:border-cyan-400 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Users className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold">50,000+ Users</span>
              <span className="text-sm text-slate-400">Trusted worldwide</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span className="font-semibold">Instant Recipes</span>
              <span className="text-sm text-slate-400">Generated in seconds</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Zap className="w-6 h-6 text-indigo-400" />
              <span className="font-semibold">4.9/5 Rating</span>
              <span className="text-sm text-slate-400">Highly rated</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
