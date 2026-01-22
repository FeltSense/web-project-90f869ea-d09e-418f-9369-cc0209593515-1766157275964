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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden pt-24 pb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">AI-Powered Culinary Intelligence</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              Never Ask "What's for Dinner?" Again with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI-Powered Recipes</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get personalized recipe suggestions in seconds based on your ingredients, dietary needs, and cooking skill. Save 10+ hours weekly on meal planning, cut grocery bills by 30%, and cook with confidence every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 flex items-center justify-center gap-2 group text-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Start Creating Recipes Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-cyan-500/50 text-white font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition flex items-center justify-center gap-2 text-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📺 See It In Action
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right features grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="mb-3 text-cyan-400 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
