'use client';

import { FC, ReactNode } from 'react';
import {
  Sparkles,
  Calendar,
  ShoppingCart,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const OptimizedProductFeaturesSection: FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Recipes',
      description:
        'Get personalized recipe suggestions powered by advanced AI that learns your taste preferences',
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'purple',
    },
    {
      id: 'meal-plans',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Plans',
      description:
        'Automated weekly meal planning that adapts to your schedule and dietary goals',
      gradient: 'from-blue-500 to-cyan-500',
      accentColor: 'blue',
    },
    {
      id: 'shopping-lists',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Shopping Lists',
      description:
        'Organized shopping lists with price comparisons and smart ingredient organization',
      gradient: 'from-green-500 to-emerald-500',
      accentColor: 'green',
    },
    {
      id: 'dietary-preferences',
      icon: <Settings className="w-8 h-8" />,
      title: 'Dietary Preferences',
      description:
        'Support for any diet: vegan, keto, gluten-free, and more with instant filtering',
      gradient: 'from-orange-500 to-red-500',
      accentColor: 'orange',
    },
    {
      id: 'nutrition-tracking',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description:
        'Real-time tracking of calories, macros, and micronutrients with detailed insights',
      gradient: 'from-indigo-500 to-purple-500',
      accentColor: 'indigo',
    },
    {
      id: 'community-sharing',
      icon: <Users className="w-8 h-8" />,
      title: 'Community Sharing',
      description:
        'Share your favorite recipes and meal plans with a thriving community of food enthusiasts',
      gradient: 'from-pink-500 to-rose-500',
      accentColor: 'pink',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Meal Planning
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to revolutionize your cooking and nutrition
            journey in one intuitive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div
                  className={`absolute -inset-full blur-3xl bg-gradient-to-br ${feature.gradient}`}
                />
              </div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center text-gray-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore All Features
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptimizedProductFeaturesSection;