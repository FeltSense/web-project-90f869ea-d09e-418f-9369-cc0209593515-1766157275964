'use client'

import {
  Zap,
  Calendar,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  Sparkles,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/60 mb-6 shadow-lg shadow-cyan-400/30"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-200">✨ AI-Powered Culinary Intelligence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cook Smarter, Save More, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-300">Waste Less Every Day</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-medium">
              Stop wasting time on meal planning and money on groceries. RecipeAI generates unlimited personalized recipes in seconds, tailored to your ingredients, budget, and dietary needs. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span> on meal prep, <span className="font-bold text-cyan-300">cut grocery bills by 30%</span>, <span className="font-bold text-blue-300">reduce food waste by 40%</span>, and <span className="font-bold text-emerald-300">cook restaurant-quality meals</span> every night. <span className="font-bold text-emerald-300">Join 100K+ home cooks—start free today, no credit card required.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.button
                className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 text-slate-950 font-bold rounded-lg sm:rounded-xl hover:from-cyan-300 hover:via-emerald-300 hover:to-blue-300 transition shadow-lg shadow-cyan-400/60 hover:shadow-cyan-400/90 flex items-center justify-center gap-2 group text-base sm:text-lg hover:scale-105 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-pulse hover:animate-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Get Started Free - No Credit Card
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" />
                </span>
              </motion.button>
              <motion.button
                className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-emerald-400/80 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-emerald-500/30 hover:border-emerald-300 transition flex items-center justify-center gap-2 text-base sm:text-lg hover:scale-105 backdrop-blur-sm bg-emerald-500/10 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-emerald-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Learn More About Features
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" />
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
