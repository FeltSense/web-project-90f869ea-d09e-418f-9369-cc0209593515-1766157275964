'use client';

import React from 'react';
import { ChefHat, Calendar, Activity, ShoppingCart, Utensils, Leaf, Users, Sparkles } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const ProductFeaturesShowcase: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description: 'Generate personalized recipes instantly using advanced AI technology. Get creative suggestions based on your preferences and available ingredients.',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description: 'Create weekly meal plans effortlessly. Our AI organizes recipes into balanced, practical schedules tailored to your lifestyle and goals.',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
    },
    {
      id: 3,
      icon: <Activity className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description: 'Monitor calories, macros, and micronutrients in real-time. Get detailed nutritional insights for every meal and recipe you prepare.',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description: 'Automatically generate organized shopping lists from your meal plans. Save money with smart categorization and quantity calculations.',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
    },
    {
      id: 5,
      icon: <Utensils className="w-8 h-8" />,
      title: 'Dietary Customization',
      description: 'Support for all dietary preferences: vegan, keto, gluten-free, paleo, and more. Customize recipes to match your exact dietary requirements.',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-600',
    },
    {
      id: 6,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Smart Substitutions',
      description: 'Get intelligent ingredient alternatives instantly. Perfect for allergies, preferences, or when ingredients are unavailable.',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-600',
    },
    {
      id: 7,
      icon: <Users className="w-8 h-8" />,
      title: 'Community Support',
      description: 'Connect with millions of users. Share recipes, get cooking tips, and find inspiration from our active community.',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-600',
    },
    {
      id: 8,
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Professional Recipes',
      description: 'Access thousands of curated recipes from professional chefs. Learn techniques and master new cuisines with step-by-step guidance.',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-600',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Powerful Features for Every Cook
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to master meal planning, nutrition tracking, and culinary creativity in one intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group relative h-full p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${feature.bgColor} ${feature.borderColor}`}
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} ${feature.textColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>

              <div className={`absolute inset-x-0 bottom-0 h-1 ${feature.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to transform your cooking experience?
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesShowcase;