'use client';

import React from 'react';
import {
  Sparkles,
  Calendar,
  DollarSign,
  Heart,
  ShoppingCart,
  Zap,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
}

const features: Feature[] = [
  {
    id: 'ai-generation',
    icon: Sparkles,
    title: 'AI-Powered Recipe Generation',
    description:
      'Instantly generate personalized recipes based on your ingredients, dietary preferences, and cooking skill level.',
    gradient: 'from-emerald-50 to-cyan-50',
    iconGradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'meal-planning',
    icon: Calendar,
    title: 'Smart Meal Planning',
    description:
      'Create balanced weekly meal plans that align with your lifestyle and nutritional goals effortlessly.',
    gradient: 'from-cyan-50 to-emerald-50',
    iconGradient: 'from-cyan-500 to-emerald-500',
  },
  {
    id: 'budget-optimization',
    icon: DollarSign,
    title: 'Budget Optimization',
    description:
      'Maximize savings by generating recipes that fit your budget while maintaining nutritional quality.',
    gradient: 'from-emerald-50 to-cyan-50',
    iconGradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'nutrition-tracking',
    icon: Heart,
    title: 'Nutrition Tracking',
    description:
      'Monitor calories, macros, and micronutrients in real-time for optimal health and wellness.',
    gradient: 'from-cyan-50 to-emerald-50',
    iconGradient: 'from-cyan-500 to-emerald-500',
  },
  {
    id: 'grocery-management',
    icon: ShoppingCart,
    title: 'Grocery List Management',
    description:
      'Automatically generate organized shopping lists with quantities and store locations.',
    gradient: 'from-emerald-50 to-cyan-50',
    iconGradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'personalization',
    icon: Zap,
    title: 'Smart Personalization',
    description:
      'Learn from your preferences and adapt recommendations to match your unique taste and lifestyle.',
    gradient: 'from-cyan-50 to-emerald-50',
    iconGradient: 'from-cyan-500 to-emerald-500',
  },
];

const KeyProductFeaturesHighlight: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Smarter Cooking
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to revolutionize your meal planning and cooking
            experience with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.iconGradient} mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-600 text-lg mb-8">
            Ready to transform your cooking experience?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started Free
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyProductFeaturesHighlight;
