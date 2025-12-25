'use client';

import React from 'react';
import { ChefHat, Calendar, Leaf, ShoppingCart, Settings, Users } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
}

const HeroKeyFeaturesHighlight: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <ChefHat className="w-8 h-8" />,
      title: 'AI-Powered Recipes',
      description: 'Get unlimited unique recipes in seconds, perfectly matched to your taste, dietary needs, and available ingredients. Our AI learns your preferences to deliver increasingly personalized suggestions.',
      gradient: 'from-orange-400 to-red-500',
      iconBg: 'bg-orange-100',
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Personalized Meal Plans',
      description: 'Enjoy weekly meal plans that fit your lifestyle, budget, and health goals. Save 10+ hours of planning every week with intelligent meal sequencing.',
      gradient: 'from-blue-400 to-cyan-500',
      iconBg: 'bg-blue-100',
    },
    {
      id: 3,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description: 'Complete nutrition data for every recipe. Track calories, macros, and nutrients automatically—no manual entry needed. Stay on top of your health goals effortlessly.',
      gradient: 'from-green-400 to-emerald-500',
      iconBg: 'bg-green-100',
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description: 'Get organized shopping lists with exact quantities and price optimization. Shop smarter, reduce waste, and save $1,200+ annually on groceries.',
      gradient: 'from-purple-400 to-pink-500',
      iconBg: 'bg-purple-100',
    },
    {
      id: 5,
      icon: <Settings className="w-8 h-8" />,
      title: 'Dietary Customization',
      description: 'Support for 50+ diets and dietary restrictions. Vegan, keto, paleo, gluten-free, low-carb, and more—all perfectly accommodated with smart substitutions.',
      gradient: 'from-yellow-400 to-orange-500',
      iconBg: 'bg-yellow-100',
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8" />,
      title: 'Community Recipes',
      description: 'Connect with 100K+ food lovers worldwide. Share your wins, discover trending recipes, get inspired daily, and build your culinary network.',
      gradient: 'from-rose-400 to-pink-500',
      iconBg: 'bg-rose-100',
    },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 shadow-lg shadow-emerald-200/50 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">✨ Key Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features That Transform Your Cooking
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the AI-powered tools that make meal planning effortless, save you thousands yearly, and help you cook like a professional chef every single day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />

              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="relative px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative text-white group-hover:brightness-110 transition-all duration-300">
              Explore All Features
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroKeyFeaturesHighlight;