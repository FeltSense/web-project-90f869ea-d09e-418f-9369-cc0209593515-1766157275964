'use client';

import React from 'react';
import { ChefHat, Calendar, ShoppingCart, Leaf, Package, BarChart3 } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 'ai-recipes',
    icon: <ChefHat className="w-8 h-8" />,
    title: 'AI Recipes',
    description: 'Get personalized recipe recommendations powered by advanced AI algorithms.',
    benefits: ['Endless recipe ideas', 'Tailored to your taste', 'New suggestions daily'],
  },
  {
    id: 'meal-planning',
    icon: <Calendar className="w-8 h-8" />,
    title: 'Meal Planning',
    description: 'Create and organize weekly meal plans with automatic grocery lists.',
    benefits: ['Weekly planning', 'Time-saving prep', 'Family-friendly options'],
  },
  {
    id: 'smart-shopping',
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Smart Shopping',
    description: 'Intelligent shopping lists that sync across all your devices seamlessly.',
    benefits: ['Synchronized lists', 'Price comparisons', 'Store locator'],
  },
  {
    id: 'dietary-preferences',
    icon: <Leaf className="w-8 h-8" />,
    title: 'Dietary Preferences',
    description: 'Support for multiple dietary preferences including vegan, keto, and gluten-free.',
    benefits: ['Multiple diets', 'Custom filters', 'Allergen alerts'],
  },
  {
    id: 'pantry-tracking',
    icon: <Package className="w-8 h-8" />,
    title: 'Pantry Tracking',
    description: 'Keep track of your ingredients and expiration dates automatically.',
    benefits: ['Inventory management', 'Expiry notifications', 'Waste reduction'],
  },
  {
    id: 'nutrition-insights',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Nutrition Insights',
    description: 'Detailed nutritional analysis and health tracking for all your meals.',
    benefits: ['Calorie tracking', 'Macro analysis', 'Health reports'],
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {feature.description}
        </p>
        <div className="space-y-2">
          {feature.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mt-1.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-400">
                {benefit}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
      </div>
    </div>
  );
};

const FeaturesShowcaseSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Smarter
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Cooking & Meal Planning
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to simplify meal planning, reduce food waste, and eat healthier with intelligent recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to transform your cooking experience?
          </p>
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturesShowcaseSection;