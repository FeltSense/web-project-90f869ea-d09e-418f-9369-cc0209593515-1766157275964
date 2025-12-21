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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-24 overflow-hidden">
      {/* Premium animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center px-2">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/50 backdrop-blur-md hover:from-emerald-500/30 hover:to-cyan-500/30 transition-all shadow-lg shadow-emerald-500/10">
              <Sparkles className="w-4 h-4 text-emerald-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-bold text-emerald-100">🔥 Join 100,000+ Home Cooks • 4.9★ Rating • 7-Day Free Trial</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">AI Chef</span> Awaits
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mt-6 sm:mt-8 px-2 font-medium max-w-4xl mx-auto leading-relaxed">
              Stop wasting time deciding what to cook. Get personalized recipes in 30 seconds based on your taste, dietary needs, and pantry. Save 10+ hours weekly, cut grocery bills by $1,200/year, and finally enjoy cooking again.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 px-2">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/50 rounded-full text-xs sm:text-sm text-emerald-200 font-semibold">✨ AI-Powered</span>
              <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-xs sm:text-sm text-cyan-200 font-semibold">🎯 Personalized</span>
              <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-xs sm:text-sm text-blue-200 font-semibold">⚡ Instant</span>
            </div>
          </motion.div>

          {/* Subheading - Key Features Showcase */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6 max-w-5xl mx-auto px-2">
              <p className="text-base sm:text-lg text-slate-300 font-semibold tracking-wide">⚡ Everything You Need to Cook Better</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-400/50 hover:border-blue-300/80 hover:from-blue-500/40 hover:to-blue-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">🍳</span>
                  <p className="text-xs sm:text-sm font-bold text-blue-100">Instant Recipes</p>
                  <p className="text-xs text-blue-200/70 mt-1 hidden sm:block">AI-Generated</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-400/50 hover:border-purple-300/80 hover:from-purple-500/40 hover:to-purple-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">📋</span>
                  <p className="text-xs sm:text-sm font-bold text-purple-100">Meal Plans</p>
                  <p className="text-xs text-purple-200/70 mt-1 hidden sm:block">Auto-Optimized</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-pink-500/30 to-pink-500/10 border border-pink-400/50 hover:border-pink-300/80 hover:from-pink-500/40 hover:to-pink-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">🥗</span>
                  <p className="text-xs sm:text-sm font-bold text-pink-100">Nutrition</p>
                  <p className="text-xs text-pink-200/70 mt-1 hidden sm:block">Tracked</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 border border-emerald-400/50 hover:border-emerald-300/80 hover:from-emerald-500/40 hover:to-emerald-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">🛒</span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-100">Shopping</p>
                  <p className="text-xs text-emerald-200/70 mt-1 hidden sm:block">Lists</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 border border-cyan-400/50 hover:border-cyan-300/80 hover:from-cyan-500/40 hover:to-cyan-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">⚡</span>
                  <p className="text-xs sm:text-sm font-bold text-cyan-100">Smart</p>
                  <p className="text-xs text-cyan-200/70 mt-1 hidden sm:block">Substitutions</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-3 sm:py-3 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-500/10 border border-orange-400/50 hover:border-orange-300/80 hover:from-orange-500/40 hover:to-orange-500/20 transition-all cursor-pointer transform hover:scale-105">
                  <span className="text-xl sm:text-2xl block mb-1">🌱</span>
                  <p className="text-xs sm:text-sm font-bold text-orange-100">50+ Diets</p>
                  <p className="text-xs text-orange-200/70 mt-1 hidden sm:block">Supported</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Premium Enhanced */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center pt-8 sm:pt-12 px-2">
            <Link 
              href="/pricing" 
              className="group relative px-10 sm:px-20 py-6 sm:py-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-lg sm:text-xl transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-emerald-500/80 active:scale-95 flex items-center justify-center gap-3 overflow-hidden border-2 border-emerald-400/50 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
              <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                🚀 Start Your Free Trial
                <ArrowRight className="w-6 sm:w-7 h-6 sm:h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#faq" 
              className="group px-10 sm:px-16 py-6 sm:py-8 border-2 border-cyan-400/60 text-white rounded-2xl font-semibold text-lg sm:text-xl hover:bg-cyan-500/20 hover:border-cyan-300 transition-all backdrop-blur-sm hover:scale-105 transform active:scale-95 flex items-center justify-center gap-3 relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity" />
              <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                📖 Learn More
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Key Benefits Highlight - Premium Enhanced */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 py-8 sm:py-12">
            <div className="group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 border border-emerald-400/60 hover:border-emerald-300/90 hover:from-emerald-500/40 hover:to-emerald-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30">
              <span className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform">⏱️</span>
              <h3 className="font-bold text-white text-base sm:text-lg text-center">Save 10+ Hours Weekly</h3>
              <p className="text-xs sm:text-sm text-slate-300 text-center">No more meal planning stress</p>
            </div>
            <div className="group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-400/60 hover:border-blue-300/90 hover:from-blue-500/40 hover:to-blue-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform">🤖</span>
              <h3 className="font-bold text-white text-base sm:text-lg text-center">AI-Personalized Recipes</h3>
              <p className="text-xs sm:text-sm text-slate-300 text-center">Tailored to your exact taste</p>
            </div>
            <div className="group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-500/10 border border-purple-400/60 hover:border-purple-300/90 hover:from-purple-500/40 hover:to-purple-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              <span className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform">💰</span>
              <h3 className="font-bold text-white text-base sm:text-lg text-center">Save $1,200+ Yearly</h3>
              <p className="text-xs sm:text-sm text-slate-300 text-center">Reduce waste and grocery bills</p>
            </div>
          </motion.div>

          {/* Urgency & Value Statement - Premium Enhanced */}
          <motion.div variants={itemVariants} className="pt-8 sm:pt-12 px-2 space-y-6">
            <div className="inline-block bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/60 rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-2 hover:from-green-500/40 hover:to-emerald-500/40 transition-all shadow-lg shadow-green-500/10 animate-pulse">
              <p className="text-sm sm:text-base text-green-100 font-bold">✅ No Credit Card Required • Cancel Anytime • 🎁 7 Days Free</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border border-slate-600/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-slate-900/50">
              <p className="text-sm sm:text-base text-slate-100 font-semibold tracking-wide max-w-3xl mx-auto leading-relaxed">
                <span className="block mb-3 text-base sm:text-lg">🤖 AI-Powered Recipes • 📱 Mobile App • 🎯 Dietary Preferences</span>
                <span className="block text-base sm:text-lg">🛒 Smart Shopping Lists • 💡 Smart Substitutions • 👥 Community Recipes</span>
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
              <div className="text-center p-3 sm:p-4 rounded-lg bg-emerald-500/10 border border-emerald-400/30">
                <p className="text-lg sm:text-xl font-bold text-emerald-300">10+</p>
                <p className="text-xs sm:text-sm text-slate-300">Hours Saved Weekly</p>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                <p className="text-lg sm:text-xl font-bold text-cyan-300">$1,200+</p>
                <p className="text-xs sm:text-sm text-slate-300">Saved Yearly</p>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg bg-purple-500/10 border border-purple-400/30">
                <p className="text-lg sm:text-xl font-bold text-purple-300">100K+</p>
                <p className="text-xs sm:text-sm text-slate-300">Happy Users</p>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg bg-pink-500/10 border border-pink-400/30">
                <p className="text-lg sm:text-xl font-bold text-pink-300">4.9★</p>
                <p className="text-xs sm:text-sm text-slate-300">Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators with icons - Enhanced */}
          <motion.div variants={itemVariants} className="pt-20 sm:pt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-slate-200 px-2">
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-blue-500/25 to-blue-500/5 border border-blue-500/40 hover:border-blue-400/80 hover:from-blue-500/35 hover:to-blue-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <Users className="w-9 sm:w-10 h-9 sm:h-10 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg text-white text-center">100,000+ Home Cooks</span>
              <span className="text-sm sm:text-base text-slate-300 text-center">Creating delicious meals daily</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-purple-500/25 to-purple-500/5 border border-purple-500/40 hover:border-purple-400/80 hover:from-purple-500/35 hover:to-purple-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <Clock className="w-9 sm:w-10 h-9 sm:h-10 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg text-white text-center">5 Min Setup</span>
              <span className="text-sm sm:text-base text-slate-300 text-center">Start generating recipes instantly</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-pink-500/25 to-pink-500/5 border border-pink-500/40 hover:border-pink-400/80 hover:from-pink-500/35 hover:to-pink-500/15 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
              <Zap className="w-9 sm:w-10 h-9 sm:h-10 text-pink-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg text-white text-center">4.9★ Rating</span>
              <span className="text-sm sm:text-base text-slate-300 text-center">From 25,000+ reviews</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
