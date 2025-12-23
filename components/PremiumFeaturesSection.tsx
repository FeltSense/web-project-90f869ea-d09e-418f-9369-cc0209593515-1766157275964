'use client';

import React from 'react';
import { ChefHat, Sparkles, Clock, Leaf, Users, TrendingUp, Zap, BookOpen } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: ChefHat,
    title: 'AI-Powered Recipes',
    description: 'Get personalized recipe suggestions using advanced AI that understands your preferences and dietary needs.',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Creative Combinations',
    description: 'Discover unique ingredient pairings and flavor profiles you never thought possible.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    icon: Clock,
    title: 'Quick Meal Solutions',
    description: 'Find recipes that fit your schedule with filtering by cooking time and complexity.',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Dietary Customization',
    description: 'Adapt recipes for any diet - vegan, keto, gluten-free, and many more options.',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 5,
    icon: Users,
    title: 'Community Favorites',
    description: 'Access trending recipes from our community and share your creations with others.',
    gradient: 'from-indigo-400 to-blue-500'
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Smart Nutrition',
    description: 'Get detailed nutritional information and health insights for every recipe.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 7,
    icon: Zap,
    title: 'Instant Search',
    description: 'Lightning-fast recipe search powered by intelligent algorithms and filters.',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    id: 8,
    icon: BookOpen,
    title: 'Recipe Organization',
    description: 'Save, organize, and manage your favorite recipes in personalized collections.',
    gradient: 'from-teal-400 to-blue-500'
  }
];

export default function PremiumFeaturesSection(): React.ReactElement {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Premium Features
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mt-2">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of cooking with our advanced AI recipe generator featuring intelligent personalization, real-time nutritional insights, and community-driven recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Background with gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`}></div>

                {/* Card Content */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 group-hover:border-slate-600/80 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Cooking?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of food enthusiasts who are already discovering amazing recipes with our AI-powered generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:bg-slate-600/50">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}