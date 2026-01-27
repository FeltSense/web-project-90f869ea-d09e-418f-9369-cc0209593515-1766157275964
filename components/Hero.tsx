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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/60 to-emerald-500/60 border border-cyan-300/95 mb-10 backdrop-blur-lg hover:border-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold text-white">⭐ TRUSTED BY 100K+ COOKS • 4.9★ RATING • 100% FREE • NO CREDIT CARD</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Your AI-Powered Personal Chef
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mt-3 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Unlimited Recipes • Smart Meal Plans • Save 30% on Groceries
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-100 mb-8 leading-relaxed font-medium">
              <span className="font-bold text-emerald-300">Transform your kitchen with AI-powered cooking.</span> RecipeAI delivers <span className="font-bold text-cyan-300">unlimited personalized recipes in seconds</span> tailored to your ingredients, dietary preferences, and cooking skill level. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal planning, <span className="font-bold text-cyan-300">cut grocery bills by 30%</span>, <span className="font-bold text-blue-300">reduce food waste by 40%</span>, and <span className="font-bold text-emerald-300">cook restaurant-quality meals</span> every night.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto">
              <motion.button
                className="group relative px-16 py-8 sm:py-5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-slate-900 font-bold rounded-2xl sm:rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/90 hover:shadow-emerald-500/130 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg sm:text-base whitespace-nowrap active:scale-95 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Start Free Trial
                  <ArrowRight className="w-5 sm:w-4 h-5 sm:h-4 group-hover:translate-x-2 transition" />
                </span>
              </motion.button>
              <motion.button
                className="group relative px-12 py-7 sm:py-5 border-2 border-cyan-300/95 text-white font-semibold rounded-2xl sm:rounded-xl hover:bg-cyan-500/60 hover:border-cyan-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg sm:text-base backdrop-blur-lg hover:scale-110 bg-cyan-500/40 active:scale-95 before:absolute before:inset-0 before:bg-cyan-400/40 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-cyan-500/60 hover:shadow-cyan-500/80"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🎯 Explore All Features
                  <ArrowRight className="w-5 sm:w-4 h-5 sm:h-4 group-hover:translate-x-1 transition" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right features grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-3 sm:p-4 rounded-lg bg-slate-900/60 border border-slate-700 hover:border-cyan-400/80 transition group cursor-pointer hover:bg-slate-900/90 hover:shadow-lg hover:shadow-cyan-400/40"
                whileHover={{ y: -5 }}
              >
                <div className="mb-2 sm:mb-3 text-cyan-400 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-3">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
