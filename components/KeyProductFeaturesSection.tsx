'use client';

import React from 'react';
import { Zap, Clock, ShoppingCart, Leaf, DollarSign, Brain } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
}

const KeyProductFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description: 'Get personalized recipes tailored to your taste preferences and dietary needs',
      benefits: ['Instant suggestions', 'Variety guaranteed', 'Smart matching'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Meal Planning',
      description: 'Organize your weekly meals with smart scheduling and easy management',
      benefits: ['Weekly planning', 'Auto-scheduling', 'Flexible adjustments'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'shopping-lists',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description: 'Automatically generate organized shopping lists from your meal plans',
      benefits: ['Auto-generated', 'Organized by aisle', 'Price tracking'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'dietary-preferences',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dietary Preferences',
      description: 'Support for all dietary needs: vegan, keto, gluten-free, and more',
      benefits: ['Multiple diets', 'Allergy alerts', 'Nutrition tracking'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'budget-optimization',
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Budget Optimization',
      description: 'Eat well within your budget with cost-effective meal suggestions',
      benefits: ['Budget control', 'Price comparison', 'Savings tracking'],
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      id: 'time-saving',
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Saving',
      description: 'Quick recipes and prep guides that fit into your busy schedule',
      benefits: ['Quick recipes', 'Prep guides', 'Time estimates'],
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Key Product Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of AI-powered features designed to save you time, reduce costs, improve nutrition, and make cooking enjoyable every single day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="p-8 relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Key Benefits:</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-600 text-sm group/item"
                      >
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 group-hover/item:scale-125 transition-transform`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${feature.gradient} hover:shadow-lg transition-all duration-300 text-sm group-hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Ready to revolutionize your meal planning and achieve your health goals with AI-powered personalization?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

function Calendar({ className }: { className: string }): React.ReactNode {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

export default KeyProductFeaturesSection;