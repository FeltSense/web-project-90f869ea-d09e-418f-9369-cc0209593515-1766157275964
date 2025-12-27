'use client'

import React, { ReactNode } from 'react'

interface Feature {
  id: string
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

const features: Feature[] = [
  {
    id: '1',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'AI Recipe Generation',
    description: 'Instantly generate personalized recipes based on your ingredients and preferences using advanced AI technology.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: '2',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Meal Planning',
    description: 'Plan your weekly meals intelligently with automated scheduling and preparation time estimates.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: '3',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Dietary Preferences',
    description: 'Set and manage your dietary restrictions, allergies, and preferences for tailored meal suggestions.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: '4',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m0 0L4 7m8 4v10l8-4v-10L12 11z" />
      </svg>
    ),
    title: 'Pantry Integration',
    description: 'Keep track of your pantry inventory and receive smart suggestions based on available ingredients.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: '5',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Nutrition Tracking',
    description: 'Monitor calories, macros, and micronutrients with detailed nutritional analysis for every meal.',
    gradient: 'from-red-500 to-red-600'
  },
  {
    id: '6',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Shopping Lists',
    description: 'Auto-generated shopping lists with optimized organization and price comparisons.',
    gradient: 'from-pink-500 to-pink-600'
  }
]

interface FeatureCardProps {
  feature: Feature
}

const FeatureCard = ({ feature }: FeatureCardProps): ReactNode => {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
      <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default function NewHeroFeaturesSection(): ReactNode {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Smart Eating
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to plan meals, track nutrition, and cook delicious food with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-shadow duration-300">
            Explore All Features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}