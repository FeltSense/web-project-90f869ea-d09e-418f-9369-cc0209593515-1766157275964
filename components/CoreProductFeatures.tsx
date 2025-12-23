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
      description: 'Leverage advanced machine learning to generate unique, personalized recipes tailored to your taste preferences and dietary needs.',
      benefits: ['Custom recipe creation', 'Flavor profile matching', 'Ingredient optimization']
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Smart Ingredient Suggestions',
      description: 'Get intelligent recommendations for substitutions and alternatives based on what you have available in your kitchen.',
      benefits: ['Reduce food waste', 'Budget-friendly options', 'Dietary accommodations']
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Meal Planning',
      description: 'Create complete meal plans in minutes with recipes organized by prep time, cooking difficulty, and nutritional balance.',
      benefits: ['Save planning time', 'Balanced nutrition', 'Difficulty filters']
    },
    {
      id: 4,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dietary Preference Support',
      description: 'Support for vegan, keto, gluten-free, paleo, and countless other dietary preferences and restrictions.',
      benefits: ['Multiple diet types', 'Allergy filtering', 'Macro tracking']
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Community & Sharing',
      description: 'Share your favorite generated recipes with friends, rate recipes, and discover trending creations from the community.',
      benefits: ['Social sharing', 'Recipe ratings', 'Trending discoveries']
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Nutritional Analysis',
      description: 'Get detailed nutritional information, calorie counts, and macro breakdowns for every generated recipe automatically.',
      benefits: ['Complete nutrition data', 'Calorie tracking', 'Macro insights']
    },
    {
      id: 7,
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Interactive Cooking Guides',
      description: 'Step-by-step instructions with tips, timing guides, and techniques to help you cook like a professional chef.',
      benefits: ['Visual guides', 'Expert tips', 'Timing assistance']
    },
    {
      id: 8,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Personalized Learning',
      description: 'Machine learning algorithms learn your preferences over time and improve recipe suggestions with every use.',
      benefits: ['Improved accuracy', 'Personal taste profile', 'Smart evolution']
    }
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Core Features That Transform Your Kitchen
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful capabilities that make our AI recipe generator the ultimate kitchen companion for home cooks and culinary enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold">10M+</p>
              <p className="text-blue-100">Recipes Generated</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">500K+</p>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-blue-100">User Satisfaction</p>
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