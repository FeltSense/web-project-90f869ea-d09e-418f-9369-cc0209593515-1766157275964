'use client';

import React from 'react';
import { ChefHat, Calendar, Leaf, ShoppingCart, Settings, Users } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const HeroKeyFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      icon: <ChefHat className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description: 'Get personalized recipes instantly using advanced AI. Discover creative dishes tailored to your taste preferences and available ingredients.',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description: 'Plan your entire week with ease. Our intelligent system suggests balanced meals and manages your grocery needs automatically.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      id: 'nutrition-tracking',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description: 'Monitor calories, macros, and micronutrients in real-time. Stay on top of your health goals with detailed nutritional insights.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 'shopping-lists',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description: 'Auto-generated shopping lists organized by store sections. Never forget an ingredient and save time at the grocery store.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      id: 'dietary-customization',
      icon: <Settings className="w-8 h-8" />,
      title: 'Dietary Customization',
      description: 'Support for any dietary preference or restriction. From vegan to keto, gluten-free to allergen-free—we have you covered.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      id: 'community-support',
      icon: <Users className="w-8 h-8" />,
      title: 'Community Support',
      description: 'Connect with thousands of food enthusiasts. Share recipes, tips, and inspiration with a vibrant, supportive community.',
      gradient: 'from-indigo-400 to-blue-500',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Master Your Kitchen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform how you cook, eat, and live healthier. Our AI-powered platform combines intelligent meal planning with community inspiration to make cooking effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-all duration-300`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join thousands of food lovers who've already revolutionized their cooking
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            Start Your Free Trial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroKeyFeaturesSection;