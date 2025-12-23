'use client';

import { ReactNode } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Leaf, 
  ShoppingCart, 
  Utensils, 
  Zap 
} from 'lucide-react';

interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface ProductFeatureProps {
  feature: Feature
}

const ProductFeatureCard = ({ feature }: ProductFeatureProps): JSX.Element => {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 p-4 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-400 group-hover:text-white">
          {feature.icon}
        </div>
        
        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {feature.title}
        </h3>
        
        <p className="mb-6 text-gray-600 leading-relaxed">
          {feature.description}
        </p>
        
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Key Benefits
          </p>
          <ul className="space-y-2">
            {feature.benefits.map((benefit: string, index: number) => (
              <li key={`${feature.id}-benefit-${index}`} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ProductFeaturesHighlight = (): JSX.Element => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      icon: <Sparkles className="h-8 w-8" />,
      title: 'AI Recipe Generation',
      description: 'Generate personalized recipes instantly using advanced AI that understands your preferences, dietary restrictions, and available ingredients.',
      benefits: [
        'Intelligent recipe suggestions based on your taste profile',
        'Instant recipe generation with step-by-step instructions',
        'Nutritional information automatically calculated',
        'Recipe variations and alternatives provided'
      ]
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="h-8 w-8" />,
      title: 'Smart Meal Planning',
      description: 'Create comprehensive weekly meal plans that balance nutrition, variety, and your lifestyle with intelligent scheduling.',
      benefits: [
        'Automated weekly meal plan generation',
        'Balanced nutrition across all meals',
        'Easy meal swapping and customization',
        'Seasonal ingredient recommendations'
      ]
    },
    {
      id: 'nutrition-tracking',
      icon: <Leaf className="h-8 w-8" />,
      title: 'Nutrition Tracking',
      description: 'Monitor your daily intake with detailed nutritional analysis including macros, micros, and health metrics.',
      benefits: [
        'Real-time macro and micronutrient tracking',
        'Health goal monitoring and insights',
        'Personalized nutritional recommendations',
        'Detailed nutritional breakdown per meal'
      ]
    },
    {
      id: 'shopping-lists',
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'Smart Shopping Lists',
      description: 'Automatically generate optimized shopping lists from your meal plans with price comparisons and store organization.',
      benefits: [
        'Auto-generated shopping lists from meal plans',
        'Price comparison across local stores',
        'Organized by store sections for efficiency',
        'Ingredient quantity optimization'
      ]
    },
    {
      id: 'dietary-customization',
      icon: <Utensils className="h-8 w-8" />,
      title: 'Dietary Customization',
      description: 'Support for every dietary preference and requirement including vegan, keto, gluten-free, allergen-free, and more.',
      benefits: [
        'Multiple dietary preference support',
        'Allergen and intolerance management',
        'Cultural cuisine preferences',
        'Religious dietary requirement support'
      ]
    },
    {
      id: 'ingredient-substitutions',
      icon: <Zap className="h-8 w-8" />,
      title: 'Ingredient Substitutions',
      description: 'Intelligent suggestions for ingredient swaps based on availability, budget, and dietary needs without compromising taste.',
      benefits: [
        'Smart alternative ingredient suggestions',
        'Budget-friendly substitution options',
        'Allergy-safe alternatives recommended',
        'Taste-matched replacement suggestions'
      ]
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-50 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 border border-blue-200">
            <span className="text-sm font-bold text-blue-700">⭐ POWERFUL FEATURES</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            🎯 Everything You Need to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Eat Better & Save Time</span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Our <strong>AI-powered platform</strong> transforms how you plan, shop, and cook meals. From personalized recipe generation to comprehensive nutrition tracking, we make healthy eating effortless, enjoyable, and budget-friendly. <strong>Save 10+ hours weekly</strong> while eating better than ever.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: Feature) => (
            <ProductFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 p-8 sm:p-12 text-center text-white shadow-2xl shadow-emerald-600/40">
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
            🚀 Ready to Transform Your Eating Habits & Save 10+ Hours Weekly?
          </h3>
          <p className="mb-8 text-lg text-emerald-50">
            Join <strong>100,000+ users</strong> who are eating healthier, saving time, cutting food waste by 40%, and enjoying delicious food every day. <strong>7 days free</strong> • No credit card • Full premium access.
          </p>
          <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-emerald-600 transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg hover:scale-105 text-lg">
            ✨ Start Your Free Trial Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductFeaturesHighlight