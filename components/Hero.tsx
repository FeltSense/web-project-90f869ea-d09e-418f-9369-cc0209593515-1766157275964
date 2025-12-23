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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 pb-20 overflow-hidden">
      {/* Optimized animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.25),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      
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
              <span className="text-xs sm:text-sm font-bold text-emerald-100">✨ AI Recipe Generator • 100,000+ Users • 4.9★ Rating • 7-Day Free</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              <span className="block mb-3">Your Personal AI Chef Awaits</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400">Unlimited Recipes • Smart Meal Plans • Personalized Nutrition</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mt-8 sm:mt-10 px-2 font-semibold max-w-4xl mx-auto leading-relaxed">
              Experience the revolution in home cooking. Get unlimited AI-generated recipes tailored to your taste, budget, and dietary preferences in seconds. Our intelligent system learns your preferences and creates personalized meal plans, smart shopping lists, and detailed nutrition insights—all in one powerful platform. Join 100,000+ home cooks who've transformed their kitchens and saved thousands on groceries.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 px-2">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/50 rounded-full text-xs sm:text-sm text-emerald-200 font-semibold">✨ AI-Powered</span>
              <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-xs sm:text-sm text-cyan-200 font-semibold">🎯 Personalized</span>
              <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-xs sm:text-sm text-blue-200 font-semibold">⚡ Instant</span>
            </div>
          </motion.div>

          {/* Subheading - Key Features Showcase */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8 max-w-5xl mx-auto px-2">
              <p className="text-base sm:text-lg text-emerald-300 font-black tracking-widest uppercase">✨ Powerful Features That Transform Your Cooking</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-500/15 border border-blue-400/70 hover:border-blue-300/90 hover:from-blue-500/50 hover:to-blue-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">🍳</span>
                  <p className="text-xs sm:text-sm font-bold text-blue-100">Instant Recipes</p>
                  <p className="text-xs text-blue-200/80 mt-1 hidden sm:block font-medium">AI-Generated</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-purple-500/40 to-purple-500/15 border border-purple-400/70 hover:border-purple-300/90 hover:from-purple-500/50 hover:to-purple-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">📋</span>
                  <p className="text-xs sm:text-sm font-bold text-purple-100">Meal Plans</p>
                  <p className="text-xs text-purple-200/80 mt-1 hidden sm:block font-medium">Auto-Optimized</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-pink-500/40 to-pink-500/15 border border-pink-400/70 hover:border-pink-300/90 hover:from-pink-500/50 hover:to-pink-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">🥗</span>
                  <p className="text-xs sm:text-sm font-bold text-pink-100">Nutrition</p>
                  <p className="text-xs text-pink-200/80 mt-1 hidden sm:block font-medium">Tracked</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-emerald-500/40 to-emerald-500/15 border border-emerald-400/70 hover:border-emerald-300/90 hover:from-emerald-500/50 hover:to-emerald-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">🛒</span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-100">Shopping</p>
                  <p className="text-xs text-emerald-200/80 mt-1 hidden sm:block font-medium">Lists</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-cyan-500/40 to-cyan-500/15 border border-cyan-400/70 hover:border-cyan-300/90 hover:from-cyan-500/50 hover:to-cyan-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-xs sm:text-sm font-bold text-cyan-100">Smart</p>
                  <p className="text-xs text-cyan-200/80 mt-1 hidden sm:block font-medium">Substitutions</p>
                </div>
                <div className="group relative px-3 sm:px-4 py-4 sm:py-4 rounded-xl bg-gradient-to-br from-orange-500/40 to-orange-500/15 border border-orange-400/70 hover:border-orange-300/90 hover:from-orange-500/50 hover:to-orange-500/25 transition-all cursor-pointer transform hover:scale-110 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20">
                  <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-125 transition-transform">🌱</span>
                  <p className="text-xs sm:text-sm font-bold text-orange-100">50+ Diets</p>
                  <p className="text-xs text-orange-200/80 mt-1 hidden sm:block font-medium">Supported</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Enhanced & More Compelling */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-10 sm:pt-14 px-2">
            <Link 
              href="/pricing" 
              className="group relative px-8 sm:px-48 py-8 sm:py-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white rounded-2xl font-black text-lg sm:text-3xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/90 active:scale-95 flex items-center justify-center gap-2 overflow-hidden border border-emerald-300/70 animate-pulse hover:animate-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex flex-col items-center gap-2 whitespace-nowrap">
                <span className="text-base sm:text-3xl font-black">🚀 Start Cooking with AI Today</span>
                <span className="text-xs sm:text-sm font-bold opacity-95">7 Days Free • Full Premium Access • No Credit Card • Cancel Anytime</span>
              </span>
            </Link>
            <Link 
              href="#pricing" 
              className="group relative px-8 sm:px-32 py-6 sm:py-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-base sm:text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-500/60 active:scale-95 flex items-center justify-center gap-2 overflow-hidden border border-blue-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                💡 Learn More
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Key Benefits Highlight - Enhanced & More Compelling */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto px-2 py-10 sm:py-12">
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/40 to-emerald-500/15 border border-emerald-400/80 hover:border-emerald-300/90 hover:from-emerald-500/50 hover:to-emerald-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/40 shadow-lg shadow-emerald-500/15">
              <span className="text-5xl sm:text-6xl group-hover:scale-125 transition-transform">⏱️</span>
              <h3 className="font-black text-white text-base sm:text-lg text-center">Save 10+ Hours Weekly</h3>
              <p className="text-xs sm:text-sm text-slate-200 text-center font-semibold">No more meal planning stress—done in seconds</p>
            </div>
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/40 to-blue-500/15 border border-blue-400/80 hover:border-blue-300/90 hover:from-blue-500/50 hover:to-blue-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 shadow-lg shadow-blue-500/15">
              <span className="text-5xl sm:text-6xl group-hover:scale-125 transition-transform">🤖</span>
              <h3 className="font-black text-white text-base sm:text-lg text-center">Truly Personalized</h3>
              <p className="text-xs sm:text-sm text-slate-200 text-center font-semibold">Learns your taste, allergies & dietary needs</p>
            </div>
            <div className="group flex flex-col items-center gap-4 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/40 to-purple-500/15 border border-purple-400/80 hover:border-purple-300/90 hover:from-purple-500/50 hover:to-purple-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 shadow-lg shadow-purple-500/15">
              <span className="text-5xl sm:text-6xl group-hover:scale-125 transition-transform">💰</span>
              <h3 className="font-black text-white text-base sm:text-lg text-center">Save $1,200+ Yearly</h3>
              <p className="text-xs sm:text-sm text-slate-200 text-center font-semibold">Cut food waste & optimize every grocery trip</p>
            </div>
          </motion.div>

          {/* Urgency & Value Statement - Enhanced */}
          <motion.div variants={itemVariants} className="pt-10 sm:pt-12 px-2 space-y-6">
            <div className="inline-block bg-gradient-to-r from-red-500/40 to-pink-500/40 border border-red-400/80 rounded-full px-6 sm:px-10 py-4 sm:py-5 hover:from-red-500/50 hover:to-pink-500/50 transition-all shadow-lg shadow-red-500/30 animate-pulse hover:animate-none">
              <p className="text-xs sm:text-sm text-red-50 font-black tracking-wide">⚡ EXCLUSIVE OFFER: 7 Days Free • Full Premium Access • No Credit Card • Join 100K+ Happy Cooks Today</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-lg shadow-slate-900/40">
              <p className="text-xs sm:text-sm text-slate-100 font-semibold tracking-wide max-w-3xl mx-auto leading-relaxed">
                <span className="block mb-4 text-sm sm:text-base font-black text-emerald-300">✨ Everything You Need to Cook Like a Pro:</span>
                <span className="block text-xs sm:text-sm leading-relaxed font-medium">🤖 Unlimited AI Recipes • 📱 Mobile App • 🎯 Dietary Customization • 🛒 Smart Shopping Lists • 💡 Smart Substitutions • 👥 Community • 📊 Nutrition Tracking • 🍳 Meal Plans</span>
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto px-2">
              <div className="text-center p-4 sm:p-5 rounded-xl bg-emerald-500/20 border border-emerald-400/50 hover:border-emerald-300/80 hover:bg-emerald-500/30 transition-all">
                <p className="text-lg sm:text-2xl font-black text-emerald-300">10+</p>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Hours Saved Weekly</p>
              </div>
              <div className="text-center p-4 sm:p-5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 hover:border-cyan-300/80 hover:bg-cyan-500/30 transition-all">
                <p className="text-lg sm:text-2xl font-black text-cyan-300">$1,200+</p>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Saved Yearly</p>
              </div>
              <div className="text-center p-4 sm:p-5 rounded-xl bg-purple-500/20 border border-purple-400/50 hover:border-purple-300/80 hover:bg-purple-500/30 transition-all">
                <p className="text-lg sm:text-2xl font-black text-purple-300">100K+</p>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Happy Users</p>
              </div>
              <div className="text-center p-4 sm:p-5 rounded-xl bg-pink-500/20 border border-pink-400/50 hover:border-pink-300/80 hover:bg-pink-500/30 transition-all">
                <p className="text-lg sm:text-2xl font-black text-pink-300">4.9★</p>
                <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators with icons - Enhanced */}
          <motion.div variants={itemVariants} className="pt-18 sm:pt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 text-slate-200 px-2">
            <div className="group flex flex-col items-center gap-4 p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-blue-500/40 to-blue-500/15 border border-blue-500/60 hover:border-blue-400/90 hover:from-blue-500/50 hover:to-blue-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/35 shadow-lg shadow-blue-500/20">
              <Users className="w-12 sm:w-14 h-12 sm:h-14 text-blue-300 group-hover:scale-125 transition-transform" />
              <span className="font-black text-base sm:text-lg text-white text-center">100K+ Happy Users</span>
              <span className="text-xs sm:text-sm text-slate-200 text-center font-semibold">Transforming their kitchens daily</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-purple-500/40 to-purple-500/15 border border-purple-500/60 hover:border-purple-400/90 hover:from-purple-500/50 hover:to-purple-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/35 shadow-lg shadow-purple-500/20">
              <Clock className="w-12 sm:w-14 h-12 sm:h-14 text-purple-300 group-hover:scale-125 transition-transform" />
              <span className="font-black text-base sm:text-lg text-white text-center">5 Min Setup</span>
              <span className="text-xs sm:text-sm text-slate-200 text-center font-semibold">Start cooking in minutes, not hours</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-pink-500/40 to-pink-500/15 border border-pink-500/60 hover:border-pink-400/90 hover:from-pink-500/50 hover:to-pink-500/20 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/35 shadow-lg shadow-pink-500/20">
              <Zap className="w-12 sm:w-14 h-12 sm:h-14 text-pink-300 group-hover:scale-125 transition-transform" />
              <span className="font-black text-base sm:text-lg text-white text-center">4.9★ Rating</span>
              <span className="text-xs sm:text-sm text-slate-200 text-center font-semibold">25K+ verified reviews from real users</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
