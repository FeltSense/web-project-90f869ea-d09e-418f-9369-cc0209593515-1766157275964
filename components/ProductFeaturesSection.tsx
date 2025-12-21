'use client';

import React from 'react';
import { ChefHat, Calendar, Apple, ShoppingCart, Settings, Users } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  delay: number;
}

const features: Feature[] = [
  {
    id: 'ai-recipes',
    title: 'AI Recipe Generation',
    description: 'Get personalized recipe suggestions powered by advanced AI that learns your taste preferences and dietary needs.',
    icon: ChefHat,
    gradient: 'from-orange-400 to-red-500',
    delay: 0,
  },
  {
    id: 'meal-planning',
    title: 'Meal Planning',
    description: 'Plan your entire week of meals with intelligent scheduling that considers your ingredients and time constraints.',
    icon: Calendar,
    gradient: 'from-blue-400 to-cyan-500',
    delay: 100,
  },
  {
    id: 'nutrition-tracking',
    title: 'Nutrition Tracking',
    description: 'Monitor calories, macros, and micronutrients with detailed nutritional analysis for every recipe.',
    icon: Apple,
    gradient: 'from-green-400 to-emerald-500',
    delay: 200,
  },
  {
    id: 'smart-shopping',
    title: 'Smart Shopping',
    description: 'Automatically generate organized shopping lists optimized by store layout and grouped by category.',
    icon: ShoppingCart,
    gradient: 'from-purple-400 to-pink-500',
    delay: 300,
  },
  {
    id: 'dietary-preferences',
    title: 'Dietary Preferences',
    description: 'Support for vegan, keto, gluten-free, dairy-free, and countless other dietary restrictions and preferences.',
    icon: Settings,
    gradient: 'from-indigo-400 to-purple-500',
    delay: 400,
  },
  {
    id: 'community-integration',
    title: 'Community Integration',
    description: 'Share recipes, discover trending dishes, and connect with other food enthusiasts in our vibrant community.',
    icon: Users,
    gradient: 'from-rose-400 to-orange-500',
    delay: 500,
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div
      className="group h-full"
      style={{
        animation: `slideUp 0.6s ease-out ${feature.delay}ms both`,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
        </div>

        <div className="relative z-10">
          <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white transition-transform duration-300 group-hover:scale-110`}>
            <IconComponent className="h-6 w-6" />
          </div>

          <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
            {feature.title}
          </h3>

          <p className="text-gray-600 transition-colors duration-300 group-hover:text-white group-hover:text-opacity-90">
            {feature.description}
          </p>

          <div className="mt-6 flex items-center text-sm font-semibold transition-all duration-300 group-hover:text-white">
            <span>Learn more</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default function ProductFeaturesSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Powerful Features for Every Chef
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the complete suite of tools designed to revolutionize your cooking experience with AI-powered intelligence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Ready to Transform Your Cooking?</h3>
          <p className="mb-8 text-lg text-blue-100">
            Join thousands of home chefs who are already enjoying smarter, faster, and more delicious meals.
          </p>
          <button className="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-105">
            Get Started Free
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}