'use client'

import {
  Zap,
  Calendar,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: 'AI-Powered Recipes',
    description: "Never ask 'what's for dinner?' again. Get personalized recipe suggestions in seconds that match your taste, dietary needs, and available ingredients. Our AI learns what you love and keeps surprising you with dishes you'll actually want to cook.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-cyan-400" />,
    title: 'Smart Meal Planning',
    description: 'Plan your entire week in minutes, not hours. AI-generated meal plans that balance nutrition, taste, and variety—with automatic shopping lists tailored to your budget and preferences.',
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
    title: 'Intelligent Grocery Lists',
    description: 'Shop smarter and save money. Organized lists sorted by store layout, smart substitutions, and budget-friendly alternatives based on your pantry and current recipes.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    title: 'Nutrition Tracking',
    description: 'Hit your health goals without sacrificing taste. Automatic macro tracking and personalized recommendations that keep you on track while enjoying delicious meals.',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-16 sm:pt-24 pb-8 sm:pb-12 border-b border-cyan-500/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-cyan-400/35 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.6, 0.4], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/35 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/80 to-emerald-500/80 border border-cyan-300/95 mb-10 backdrop-blur-lg hover:border-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/80 hover:scale-105"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold text-white">⭐ TRUSTED BY 100K+ COOKS • 4.9★ RATING • 100% FREE • NO CREDIT CARD</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              🍽️ Your Personal AI Chef, Ready to Cook
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mt-3 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Unlimited Recipes • Personalized to Your Taste • 100% Free Forever
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-100 mb-8 leading-relaxed font-medium">
              <span className="font-bold text-emerald-300">Transform your kitchen with AI intelligence.</span> Get <span className="font-bold text-cyan-300">unlimited personalized recipes in seconds</span> tailored to your ingredients, dietary preferences, and cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-cyan-300">cut grocery bills by 30%</span>, <span className="font-bold text-blue-300">reduce food waste by 40%</span>, and <span className="font-bold text-emerald-300">impress everyone with restaurant-quality meals</span> every night. <span className="font-bold text-yellow-300">100% free forever—no credit card required.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto">
              <motion.button
                className="group relative px-16 py-8 sm:py-5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-slate-900 font-bold rounded-2xl sm:rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/90 hover:shadow-emerald-500/130 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg sm:text-base whitespace-nowrap active:scale-95 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-bounce"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Start Cooking Now - 100% Free
                  <ArrowRight className="w-5 sm:w-4 h-5 sm:h-4 group-hover:translate-x-2 transition" />
                </span>
              </motion.button>
              <motion.button
                className="group relative px-12 py-7 sm:py-5 border-2 border-cyan-300/95 text-white font-semibold rounded-2xl sm:rounded-xl hover:bg-cyan-500/60 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg sm:text-base backdrop-blur-lg hover:scale-105 bg-cyan-500/40 active:scale-95 before:absolute before:inset-0 before:bg-cyan-400/40 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/80"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Explore Features
                  <ArrowRight className="w-5 sm:w-4 h-5 sm:h-4 group-hover:translate-x-1 transition" />
                </span>
              </motion.button>
            </div>

            {/* New: Premium CTA Section - High-Converting Offer */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-600/50 via-emerald-600/50 to-blue-600/50 border-2 border-cyan-300/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/80 hover:shadow-cyan-500/100 transition-all duration-300 relative overflow-hidden group hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-emerald-400/15 to-blue-400/15 group-hover:from-cyan-400/25 group-hover:via-emerald-400/25 group-hover:to-blue-400/25 transition-all duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-900 font-bold text-sm mb-4">
                  ⚡ 100% FREE FOREVER • NO CREDIT CARD • INSTANT ACCESS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">🌟 Transform Your Kitchen Today</h3>
                <p className="text-base sm:text-lg text-slate-50 mb-6 leading-relaxed font-medium">
                  <span className="font-bold text-emerald-200">Join 100K+ smart cooks</span> who've revolutionized their kitchens with AI. Get <span className="font-bold text-cyan-200">unlimited personalized recipes in seconds</span> tailored to your taste and ingredients. <span className="font-bold text-emerald-200">Save 10+ hours weekly</span>, <span className="font-bold text-cyan-200">cut grocery bills by 30%</span>, and <span className="font-bold text-blue-200">reduce food waste by 40%</span>. <span className="font-bold text-yellow-200">100% free forever—no credit card, no commitment, instant access.</span>
                </p>
                <motion.button
                  className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-white to-slate-100 text-emerald-600 font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/70 transition-all duration-300 hover:scale-110 active:scale-95 text-lg hover:from-slate-50 hover:to-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 Get Started Now - Completely Free
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right hero image and features */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Hero Image Container - Premium Visual */}
            <div className="relative w-full h-96 sm:h-[500px] mb-8 rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 group">
              {/* Gradient background with premium feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/40 to-emerald-900/40 backdrop-blur-sm"></div>
              
              {/* Premium content showcase */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Main visual element */}
                  <div className="mb-6 relative">
                    <motion.div
                      className="text-7xl sm:text-8xl"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👨‍🍳
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 -right-4 text-5xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, linear: true }}
                    >
                      ✨
                    </motion.div>
                  </div>
                  
                  {/* Headline */}
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Meet Your AI Chef
                  </p>
                  
                  {/* Subheading */}
                  <p className="text-base sm:text-lg text-cyan-200 mb-6 max-w-xs">
                    Unlimited recipes, personalized just for you
                  </p>
                  
                  {/* Quick stats */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-semibold">
                    <div className="px-4 py-2 rounded-lg bg-emerald-500/30 border border-emerald-400/60 text-emerald-200">
                      ⚡ Instant Recipes
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-cyan-500/30 border border-cyan-400/60 text-cyan-200">
                      🎯 Personalized
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-blue-500/30 border border-blue-400/60 text-blue-200">
                      👨‍🍳 Pro Techniques
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Animated background elements */}
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl"
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl"
                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Features grid below image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg bg-slate-900/60 border border-slate-700 hover:border-cyan-400/80 transition group cursor-pointer hover:bg-slate-900/90 hover:shadow-lg hover:shadow-cyan-400/40"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-2 sm:mb-3 text-cyan-400 group-hover:scale-105 transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-3">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
