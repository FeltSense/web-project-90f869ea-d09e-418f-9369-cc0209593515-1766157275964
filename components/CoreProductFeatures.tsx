'use client';

import React from 'react';
import { ChefHat, Sparkles, Clock, Leaf, Users, Zap, BookOpen, TrendingUp } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const CoreProductFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <ChefHat className="w-8 h-8" />,
      title: 'AI-Powered Recipe Generation',
      description: 'Our advanced AI learns your taste preferences, dietary needs, and kitchen inventory to generate unlimited unique recipes in seconds. Never run out of meal ideas again.',
      benefits: ['Unlimited recipe creation', 'Flavor profile matching', 'Ingredient optimization']
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Smart Ingredient Substitutions',
      description: 'Reduce food waste and save money with intelligent substitutions. Get creative alternatives that work perfectly with what you already have at home.',
      benefits: ['Minimize food waste', 'Budget-friendly options', 'Dietary accommodations']
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      title: 'Intelligent Meal Planning',
      description: 'Plan your entire week in minutes with perfectly balanced meals. Organized by prep time, difficulty, and nutritional goals for maximum convenience.',
      benefits: ['Save 10+ hours weekly', 'Balanced nutrition', 'Difficulty filters']
    },
    {
      id: 4,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Comprehensive Dietary Support',
      description: 'Support for 50+ diets including vegan, keto, paleo, gluten-free, low-carb, and more. Every dietary need is perfectly accommodated with smart alternatives.',
      benefits: ['50+ diet types', 'Allergy filtering', 'Macro tracking']
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Vibrant Community & Sharing',
      description: 'Connect with 100K+ food lovers worldwide. Share your culinary wins, discover trending recipes, get inspired, and build your food community.',
      benefits: ['Social sharing', 'Recipe ratings', 'Trending discoveries']
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: 'Complete Nutritional Analysis',
      description: 'Every recipe includes comprehensive nutrition data. Track calories, macros, and nutrients automatically—no manual entry needed. Stay on top of your health goals.',
      benefits: ['Complete nutrition data', 'Calorie tracking', 'Macro insights']
    },
    {
      id: 7,
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Interactive Cooking Guides',
      description: 'Follow easy step-by-step guides with pro tips, timing assistance, and visual cues. Cook restaurant-quality meals at home with confidence, every time.',
      benefits: ['Visual guides', 'Expert tips', 'Timing assistance']
    },
    {
      id: 8,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Adaptive AI Learning',
      description: 'The more you use it, the smarter it gets. Our AI continuously learns your taste preferences and improves recommendations with every recipe you create.',
      benefits: ['Improved accuracy', 'Personal taste profile', 'Smart evolution']
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-300 shadow-lg shadow-emerald-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">✨ Advanced Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            🚀 Advanced AI Features That Transform Your Cooking
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the complete suite of intelligent features designed to revolutionize how you plan, cook, and enjoy meals. From AI-powered recipe generation to smart nutrition tracking, we've got everything covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-slate-100 group-hover:border-emerald-200">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-600 group-hover:text-cyan-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex-shrink-0" />
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 sm:p-12 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 rounded-3xl shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <p className="text-5xl font-bold">10M+</p>
              <p className="text-emerald-100 font-semibold">Recipes Generated</p>
              <p className="text-xs text-emerald-200">Every month</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl font-bold">100K+</p>
              <p className="text-emerald-100 font-semibold">Happy Users</p>
              <p className="text-xs text-emerald-200">Worldwide</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl font-bold">4.9★</p>
              <p className="text-emerald-100 font-semibold">Average Rating</p>
              <p className="text-xs text-emerald-200">Highly trusted</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl font-bold">$1.2K+</p>
              <p className="text-emerald-100 font-semibold">Saved Annually</p>
              <p className="text-xs text-emerald-200">Per user</p>
            </div>
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

export default CoreProductFeatures;