'use client';

import React from 'react';
import { ChefHat, Calendar, ShoppingCart, Heart, DollarSign, Zap } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EnhancedHeroFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'recipe-generation',
      icon: <ChefHat className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description: 'Generate personalized recipes instantly based on ingredients you have and your culinary preferences.',
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description: 'Create weekly meal plans automatically with balanced nutrition and variety in every meal.',
    },
    {
      id: 'shopping',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description: 'Auto-generate organized shopping lists with quantities and estimated costs for efficient grocery shopping.',
    },
    {
      id: 'dietary',
      icon: <Heart className="w-8 h-8" />,
      title: 'Dietary Preferences',
      description: 'Customize meals for vegan, keto, gluten-free, and other dietary requirements with ease.',
    },
    {
      id: 'savings',
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost Savings',
      description: 'Reduce food waste and save money with intelligent meal planning and budget-friendly recipes.',
    },
    {
      id: 'efficiency',
      icon: <Zap className="w-8 h-8" />,
      title: 'Time Efficiency',
      description: 'Save hours on meal planning and cooking with quick recipes and organized preparation guides.',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent"> Smart Cooking</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Everything you need to revolutionize your kitchen and transform how you prepare meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all duration-300 mb-6">
                  <div className="text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-400 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
            Start Your Culinary Journey
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroFeaturesSection;