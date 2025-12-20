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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
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
              <span className="text-xs sm:text-sm font-bold text-blue-100">🚀 Next Generation AI Platform</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Unlock Your Business Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Next-Gen AI Intelligence</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-100 mt-3 sm:mt-4 px-2 font-medium">Empower your team with AI that learns, adapts, and delivers results. Automate complex workflows, gain actionable insights in real-time, and make smarter decisions faster. Our enterprise-grade platform integrates seamlessly with your existing tools, delivering measurable ROI within weeks. Join 50,000+ companies transforming their operations.</p>
          </motion.div>

          {/* Subheading - Key Benefits */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed px-2 font-medium">
              🤖 Advanced Automation • 📊 Real-Time Analytics • 🔒 Enterprise Security • 🌐 Global Scale • ⚡ Lightning-Fast Performance • 🎯 Custom Solutions
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-8 sm:pt-10 px-2">
            <Link 
              href="/pricing" 
              className="group relative px-8 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-purple-500/80 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                🚀 Get Started Free - No Credit Card
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#contact" 
              className="group px-8 sm:px-12 py-4 sm:py-6 border-2 border-blue-400/60 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-500/20 hover:border-blue-300 transition-all backdrop-blur-sm hover:scale-105 transform flex items-center justify-center gap-2"
            >
              <span>📅 Schedule a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Urgency & Value Statement */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6 px-2">
            <p className="text-xs sm:text-sm text-blue-200 font-semibold tracking-wide">
              ⭐ Trusted by 50,000+ enterprises. Average ROI: 340% in year one. Increase productivity by 40%, reduce costs by 30%. Start free for 14 days—full access, no credit card, cancel anytime. Join companies like Stripe, Figma, and Notion.
            </p>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div variants={itemVariants} className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-200 px-2">
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15 transition-all">
              <Users className="w-6 sm:w-7 h-6 sm:h-7 text-blue-400" />
              <span className="font-bold text-sm sm:text-base text-white">50,000+ Enterprises</span>
              <span className="text-xs sm:text-sm text-slate-400">Powering global operations</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/15 transition-all">
              <Clock className="w-6 sm:w-7 h-6 sm:h-7 text-purple-400" />
              <span className="font-bold text-sm sm:text-base text-white">40% Faster</span>
              <span className="text-xs sm:text-sm text-slate-400">Average productivity gain</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-400/40 hover:bg-pink-500/15 transition-all">
              <Zap className="w-6 sm:w-7 h-6 sm:h-7 text-pink-400" />
              <span className="font-bold text-sm sm:text-base text-white">4.8★ Rating</span>
              <span className="text-xs sm:text-sm text-slate-400">From 10,000+ reviews</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
