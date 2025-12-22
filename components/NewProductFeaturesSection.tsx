'use client';

import React from 'react';
import { Sparkles, Calendar, Apple, ShoppingCart, Leaf, Zap, Users, Smartphone } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  benefits: string[];
}

const NewProductFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      title: 'AI Recipe Generation',
      description: 'Instantly generate personalized recipes based on your ingredients and preferences',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      benefits: ['Smart suggestions', 'Instant results', 'Endless variety']
    },
    {
      id: 'meal-planning',
      title: 'Meal Planning',
      description: 'Create week-long meal plans that fit your lifestyle and dietary needs',
      icon: <Calendar className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      benefits: ['Weekly plans', 'Balanced nutrition', 'Time-saving']
    },
    {
      id: 'nutrition-tracking',
      title: 'Nutrition Tracking',
      description: 'Monitor calories, macros, and micronutrients with detailed nutritional analysis',
      icon: <Apple className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      benefits: ['Real-time stats', 'Health goals', 'Detailed insights']
    },
    {
      id: 'shopping-lists',
      title: 'Smart Shopping Lists',
      description: 'Auto-generated shopping lists organized by store section and budget',
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      benefits: ['Auto-organized', 'Budget control', 'Time efficient']
    },
    {
      id: 'dietary-customization',
      title: 'Dietary Customization',
      description: 'Support for vegan, keto, gluten-free, paleo, and 20+ other diet types',
      icon: <Leaf className="w-8 h-8" />,
      gradient: 'from-teal-500 to-green-500',
      benefits: ['20+ diets', 'Full flexibility', 'Personalized']
    },
    {
      id: 'substitutions',
      title: 'Ingredient Substitutions',
      description: 'Smart suggestions for ingredient swaps based on allergies and preferences',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500',
      benefits: ['Allergy-safe', 'Smart swaps', 'Cost-effective']
    },
    {
      id: 'community',
      title: 'Community Sharing',
      description: 'Share recipes, get inspired by others, and build your culinary network',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      benefits: ['Social sharing', 'Discovery', 'Connection']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description: 'Access all features on-the-go with our native iOS and Android apps',
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-rose-500 to-pink-500',
      benefits: ['Offline access', 'Push notifications', 'Sync everywhere']
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"> Modern Cooking</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to revolutionize your meal preparation and nutrition journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-700 group-hover:border-slate-500 transition-colors duration-300 h-full flex flex-col">
                <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-600">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-xs">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">
            All features available with free and premium plans
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProductFeaturesSection;