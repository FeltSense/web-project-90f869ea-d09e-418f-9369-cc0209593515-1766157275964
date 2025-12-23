'use client';

import React from 'react';
import { ChefHat, Clock, DollarSign, Leaf, Sparkles, Users, Zap, BookOpen } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-Powered Recipes',
      description: 'Get personalized recipe suggestions powered by advanced AI that learns your preferences and dietary needs.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      icon: <Clock className="w-8 h-8" />,
      title: 'Save Time',
      description: 'Generate complete meal plans in seconds instead of spending hours searching through cookbooks and websites.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Reduce Costs',
      description: 'Smart ingredient matching helps you use what you have on hand and find budget-friendly alternatives.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dietary Flexibility',
      description: 'Support for vegan, keto, gluten-free, paleo, and dozens of other dietary preferences and restrictions.',
      gradient: 'from-lime-500 to-green-500',
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Family-Friendly',
      description: 'Create meals that everyone will love with options for different tastes and nutritional needs.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Adjustments',
      description: 'Modify portion sizes, cooking time, and ingredients with one click using intelligent scaling.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Expert Guidance',
      description: 'Step-by-step cooking instructions, pro tips, and techniques to help you cook like a professional chef.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 8,
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Extensive Database',
      description: 'Access thousands of recipes from cuisines around the world, constantly updated with new options.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Culinary Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of home cooks trust our AI recipe generator to transform their kitchen experience with intelligent meal planning and personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-900">85%</h3>
              <div className="text-4xl">⏱️</div>
            </div>
            <p className="text-blue-800 font-semibold mb-2">Faster Meal Planning</p>
            <p className="text-blue-700 text-sm">Users save an average of 85% of their weekly meal planning time.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-900">40%</h3>
              <div className="text-4xl">💰</div>
            </div>
            <p className="text-green-800 font-semibold mb-2">Budget Savings</p>
            <p className="text-green-700 text-sm">Reduce your grocery bill with smart ingredient optimization and cost tracking.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-purple-900">10K+</h3>
              <div className="text-4xl">📚</div>
            </div>
            <p className="text-purple-800 font-semibold mb-2">Recipe Collection</p>
            <p className="text-purple-700 text-sm">Access our ever-growing database of delicious recipes from around the world.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;