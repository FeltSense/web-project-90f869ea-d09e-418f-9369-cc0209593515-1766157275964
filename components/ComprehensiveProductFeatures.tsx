'use client';

import React from 'react';
import { ChefHat, Clock, DollarSign, Apple, ShoppingCart, BarChart3, Users, Zap } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  gradientFrom: string;
  gradientTo: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: ChefHat,
    title: 'AI Recipe Suggestions',
    description: 'Get personalized recipe recommendations based on your ingredients, preferences, and dietary requirements.',
    benefits: ['Smart ingredient matching', 'Difficulty level filtering', 'Cuisine preferences', 'Prep time optimization'],
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-red-500',
  },
  {
    id: 2,
    icon: Clock,
    title: 'Meal Planning',
    description: 'Create weekly meal plans automatically or customize them to fit your lifestyle and schedule.',
    benefits: ['Weekly auto-generation', 'Seasonal ingredients', 'Variety optimization', 'Family preferences'],
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-cyan-500',
  },
  {
    id: 3,
    icon: DollarSign,
    title: 'Budget Optimization',
    description: 'Maximize your grocery budget with smart recommendations that find the best value for money.',
    benefits: ['Price comparison', 'Seasonal deals', 'Bulk buying tips', 'Cost tracking'],
    gradientFrom: 'from-green-400',
    gradientTo: 'to-emerald-500',
  },
  {
    id: 4,
    icon: Apple,
    title: 'Dietary Preferences',
    description: 'Support for multiple dietary requirements including vegan, keto, gluten-free, and allergen-free options.',
    benefits: ['Multiple diet types', 'Allergen filtering', 'Nutritional balance', 'Custom restrictions'],
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-rose-500',
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: 'Smart Shopping Lists',
    description: 'Automatically generate organized shopping lists grouped by store sections for efficient shopping.',
    benefits: ['Auto-organized lists', 'Store integration', 'Quantity calculation', 'Price tracking'],
    gradientFrom: 'from-purple-400',
    gradientTo: 'to-indigo-500',
  },
  {
    id: 6,
    icon: BarChart3,
    title: 'Nutrition Tracking',
    description: 'Monitor daily caloric intake and macronutrient balance with detailed nutritional analysis.',
    benefits: ['Macro tracking', 'Calorie counting', 'Health insights', 'Goal monitoring'],
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-orange-500',
  },
  {
    id: 7,
    icon: Users,
    title: 'Family Recipes',
    description: 'Share and scale family recipes for different serving sizes while maintaining perfect proportions.',
    benefits: ['Recipe scaling', 'Family sharing', 'Storage system', 'Rating system'],
    gradientFrom: 'from-teal-400',
    gradientTo: 'to-cyan-500',
  },
  {
    id: 8,
    icon: Zap,
    title: 'Quick Cooking Mode',
    description: 'Find delicious recipes that can be prepared in 30 minutes or less for busy weeknights.',
    benefits: ['15-30 min recipes', 'One-pot meals', 'Minimal prep', 'Easy cleanup'],
    gradientFrom: 'from-lime-400',
    gradientTo: 'to-green-500',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" style={{
        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`,
        '--tw-gradient-from': `rgb(var(--color-from))`,
        '--tw-gradient-to': `rgb(var(--color-to))`,
      } as React.CSSProperties}></div>

      <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {feature.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
          {feature.description}
        </p>

        <div className="space-y-2 mb-6">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Key Benefits
          </p>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} flex-shrink-0`}></span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
          <span>Learn more</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </div>
  );
};

export default function ComprehensiveProductFeatures(): React.ReactElement {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Smart Cooking
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of AI-powered features designed to transform your kitchen experience and make meal preparation effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Cooking?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Start using our AI kitchen assistant today and discover a smarter way to plan, cook, and eat.
          </p>
          <button className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Free
          </button>
        </div>
      </div>

      <style>{`
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
}