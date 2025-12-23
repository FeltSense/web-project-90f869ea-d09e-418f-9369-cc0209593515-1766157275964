'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, Rocket, BarChart3, Sparkles } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  benefits: string[];
  useCases: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Instant Recipe Generation',
    description: 'Get unlimited personalized recipes in seconds. Our advanced AI analyzes your taste preferences, dietary restrictions, and cooking skill level to create perfect recipes just for you.',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-600',
    benefits: ['Instant creation', 'Personalized', 'Unlimited recipes'],
    useCases: ['Weeknight dinners', 'Special diets', 'Ingredient-based cooking'],
  },
  {
    id: 2,
    title: 'Personalized Meal Planning',
    description: 'Create customized weekly meal plans that adapt to your preferences, budget, and lifestyle. Never wonder what to cook again with AI-powered meal planning.',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-600',
    benefits: ['Weekly plans', 'Budget-friendly', 'Preference-based'],
    useCases: ['Family meals', 'Meal prep', 'Dietary goals'],
  },
  {
    id: 3,
    title: 'Smart Grocery Lists',
    description: 'Automatically generate organized shopping lists from your meal plans. Save time at the store and reduce food waste with intelligent list generation.',
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    benefits: ['Auto-organized', 'Waste reduction', 'Cost savings'],
    useCases: ['Smart shopping', 'Budget tracking', 'Pantry management'],
  },
  {
    id: 4,
    title: 'Nutrition Tracking',
    description: 'Monitor calories, macros, and micronutrients for every recipe and meal plan. Stay on top of your health goals with comprehensive nutrition insights.',
    icon: <Shield className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-600',
    benefits: ['Full nutrition data', 'Macro tracking', 'Health insights'],
    useCases: ['Fitness goals', 'Diet management', 'Health monitoring'],
  },
  {
    id: 5,
    title: 'Smart Substitutions',
    description: 'Get intelligent ingredient substitutions based on allergies, preferences, and availability. Cook with confidence knowing you have perfect alternatives.',
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-600',
    benefits: ['Allergy-safe', 'Preference-aware', 'Always available'],
    useCases: ['Dietary restrictions', 'Ingredient swaps', 'Creative cooking'],
  },
  {
    id: 6,
    title: 'Cost Optimization',
    description: 'Reduce your grocery bills by up to $1,200 annually. Our AI finds the most budget-friendly recipes and ingredients without sacrificing taste or nutrition.',
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: 'from-yellow-500 to-orange-600',
    benefits: ['Save $1,200+', 'Budget tracking', 'Price optimization'],
    useCases: ['Budget meals', 'Seasonal cooking', 'Waste reduction'],
  },
  {
    id: 7,
    title: 'Multi-Diet Support',
    description: 'Support for 50+ dietary preferences including vegan, keto, paleo, gluten-free, and more. Find recipes that match your specific dietary needs.',
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-purple-600',
    benefits: ['50+ diets', 'Allergy support', 'Medical diets'],
    useCases: ['Dietary restrictions', 'Health conditions', 'Lifestyle choices'],
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-emerald-400/50"
    >
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
        <div className="text-slate-900">
          {feature.icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        {feature.title}
      </h3>

      <p className="text-slate-400 mb-4">
        {feature.description}
      </p>

      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Benefits:</h4>
          <div className="space-y-1">
            {feature.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
          <div className="space-y-1">
            {feature.useCases.map((useCase: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function LatestFeaturesSection(): React.ReactElement {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Powerful Features for Every Kitchen
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover the complete suite of AI-powered tools designed to revolutionize your cooking and meal planning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: Feature, index: number) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
