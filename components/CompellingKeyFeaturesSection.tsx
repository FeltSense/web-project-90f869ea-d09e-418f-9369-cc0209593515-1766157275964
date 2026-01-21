'use client';

import React from 'react';
import { CheckCircle2, Zap, DollarSign, Activity, Microscope, Clock } from 'lucide-react';

interface Feature {
  id: string
  icon: React.ComponentType<{ className: string }>
  title: string
  description: string
  gradient: string
}

const CompellingKeyFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipe',
      icon: CheckCircle2,
      title: 'AI Recipe Generation',
      description: 'Instantly generate personalized recipes tailored to your dietary preferences, available ingredients, and cooking skill level. Our AI learns your tastes and suggests dishes you\'ll actually want to cook.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'meal-planning',
      icon: Zap,
      title: 'Smart Meal Planning',
      description: 'Create week-long meal plans in seconds with intelligent algorithm that balances nutrition, variety, and your schedule. Never waste time deciding what to cook again.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'budget',
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Shop smarter and spend less. Our system finds the best prices, suggests seasonal alternatives, and generates shopping lists that maximize your grocery budget without compromising quality.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'nutrition',
      icon: Activity,
      title: 'Nutrition Tracking',
      description: 'Monitor calories, macros, vitamins, and minerals with precision. Get real-time insights into your nutritional intake and personalized recommendations to meet your health goals.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'analysis',
      icon: Microscope,
      title: 'Ingredient Analysis',
      description: 'Understand exactly what you\'re eating. Detailed breakdowns of ingredient origins, allergens, nutritional value, and health impacts help you make informed choices.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'time-saving',
      icon: Clock,
      title: 'Time Saving',
      description: 'Save hours every week on meal planning and shopping. Automated workflows, one-click meal selections, and optimized prep suggestions give you more time for what matters.',
      gradient: 'from-rose-500 to-pink-500'
    }
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Powerful Features That
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Kitchen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of meal planning with AI-powered intelligence that understands your tastes, budget, and lifestyle. Cook smarter, eat better, save more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br group-hover:from-blue-600/20 group-hover:to-pink-600/20 rounded-2xl transition-all duration-300`} />
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Free Trial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CompellingKeyFeaturesSection