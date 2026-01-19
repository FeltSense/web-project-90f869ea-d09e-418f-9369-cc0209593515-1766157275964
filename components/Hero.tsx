'use client'

import { Zap, Calendar, ShoppingCart, TrendingUp } from 'lucide-react'
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
    description: "Unlock endless culinary possibilities with AI that learns your preferences. Get personalized recipe suggestions in seconds, tailored to your dietary needs, available ingredients, and cooking skill level. Discover dishes you'll absolutely love and you'll actually want to cook.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-cyan-400" />,
    title: 'Smart Meal Planning',
    description: 'Plan your entire week effortlessly with AI-generated meal plans that balance nutrition, taste, and variety. Automatically generates shopping lists tailored to your budget and dietary preferences.',
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
    title: 'Intelligent Grocery Lists',
    description: 'Get organized shopping lists sorted by store layout and location. Save time and money with smart suggestions based on your pantry inventory and current recipes.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    title: 'Nutrition Tracking',
    description: 'Track macros and nutrients automatically. Get personalized recommendations to meet your health goals while enjoying delicious food.',
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
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Cook Smarter, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Not Harder</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              An intelligent AI-powered platform that learns your taste preferences and creates personalized recipes, meal plans, and shopping lists designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition">
                Get Started Free
              </button>
              <button className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition">
                Watch Demo
              </button>
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
