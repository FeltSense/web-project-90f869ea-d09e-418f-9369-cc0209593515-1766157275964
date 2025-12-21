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
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center px-2">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 backdrop-blur-md hover:from-blue-500/30 hover:to-purple-500/30 transition-all shadow-lg shadow-purple-500/10">
              <Sparkles className="w-4 h-4 text-blue-300 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-bold text-blue-100">✨ Trusted by 50,000+ Enterprises Worldwide</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Intelligent Automation</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mt-6 sm:mt-8 px-2 font-medium max-w-4xl mx-auto leading-relaxed">
              Stop wasting time on repetitive tasks. Our AI-powered platform automates your entire workflow, cuts operational costs by 70%, and delivers measurable results in days—not months. Join 50,000+ enterprises already saving millions.
            </p>
          </motion.div>

          {/* Subheading - Key Benefits */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-2">
              <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-100 text-sm sm:text-base font-medium">⚙️ Smart Automation</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-100 text-sm sm:text-base font-medium">📈 Instant Insights</span>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-100 text-sm sm:text-base font-medium">🛡️ Military-Grade Security</span>
              <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-100 text-sm sm:text-base font-medium">🚀 Infinite Scale</span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-100 text-sm sm:text-base font-medium">⚡ Ultra-Fast</span>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-100 text-sm sm:text-base font-medium">🎨 Fully Customizable</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center pt-10 sm:pt-12 px-2">
            <Link 
              href="/pricing" 
              className="group relative px-10 sm:px-16 py-5 sm:py-7 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg sm:text-xl transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-blue-500/80 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                🚀 Start Your Free Trial
                <ArrowRight className="w-6 sm:w-7 h-6 sm:h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="/blog" 
              className="group px-10 sm:px-14 py-5 sm:py-7 border-2 border-purple-400/60 text-white rounded-2xl font-semibold text-lg sm:text-xl hover:bg-purple-500/20 hover:border-purple-300 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-3"
            >
              <span>📹 See It In Action</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Urgency & Value Statement */}
          <motion.div variants={itemVariants} className="pt-6 sm:pt-8 px-2">
            <p className="text-sm sm:text-base text-blue-100 font-semibold tracking-wide max-w-3xl mx-auto">
              ⚡ Deploy in minutes • 🔒 Bank-level security • 📈 70% cost reduction • 🌍 24/7 global support • 💡 AI-powered insights • ✅ No credit card required
            </p>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-16 sm:pt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-slate-200 px-2">
            <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-500/20 transition-all transform hover:scale-105">
              <Users className="w-8 sm:w-9 h-8 sm:h-9 text-blue-400" />
              <span className="font-bold text-base sm:text-lg text-white">50,000+ Enterprises</span>
              <span className="text-sm sm:text-base text-slate-300">Powering global operations</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-500/20 transition-all transform hover:scale-105">
              <Clock className="w-8 sm:w-9 h-8 sm:h-9 text-purple-400" />
              <span className="font-bold text-base sm:text-lg text-white">340% ROI</span>
              <span className="text-sm sm:text-base text-slate-300">Average first year return</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-pink-500/15 to-pink-500/5 border border-pink-500/30 hover:border-pink-400/60 hover:bg-pink-500/20 transition-all transform hover:scale-105">
              <Zap className="w-8 sm:w-9 h-8 sm:h-9 text-pink-400" />
              <span className="font-bold text-base sm:text-lg text-white">4.8★ Rating</span>
              <span className="text-sm sm:text-base text-slate-300">From 10,000+ reviews</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
