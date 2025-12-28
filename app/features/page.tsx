'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Calendar, Apple, ShoppingCart, Leaf, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Feature {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  icon: React.ReactNode;
  gradient: string;
}

interface FeatureCategory {
  id: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'ai-recipes',
    title: 'AI-Powered Recipe Generation',
    subtitle: 'Intelligent recipe creation tailored to your preferences',
    features: [
      {
        id: 'instant-recipes',
        title: 'Instant Recipe Generation',
        description: 'Get personalized recipes in seconds',
        longDescription: 'Our advanced AI generates unlimited unique recipes based on your dietary preferences, available ingredients, cooking skill level, and cuisine preferences. Never run out of meal ideas again.',
        benefits: [
          'Generate recipes from your pantry',
          'Filter by cooking time and difficulty',
          'Cuisine-specific recommendations',
          'Dietary restriction support'
        ],
        icon: <Zap className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-cyan-400'
      },
      {
        id: 'smart-substitutions',
        title: 'Smart Ingredient Substitutions',
        description: 'Adapt recipes with intelligent alternatives',
        longDescription: 'AI-powered ingredient swaps that maintain flavor profiles and nutritional value. Perfect for accommodating allergies, dietary restrictions, or using what you have on hand.',
        benefits: [
          'Allergy-aware substitutions',
          'Flavor profile matching',
          'Nutritional balance preservation',
          'Cost-effective alternatives'
        ],
        icon: <Leaf className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-blue-400'
      },
      {
        id: 'cooking-guidance',
        title: 'Step-by-Step Cooking Guidance',
        description: 'Detailed instructions with AI tips',
        longDescription: 'Receive comprehensive cooking instructions with AI-generated tips, techniques, and troubleshooting advice. Learn proper cooking methods and improve your culinary skills.',
        benefits: [
          'Detailed cooking steps',
          'Technique explanations',
          'Timing optimization',
          'Professional cooking tips'
        ],
        icon: <Zap className="w-8 h-8" />,
        gradient: 'from-blue-400 to-emerald-400'
      }
    ]
  },
  {
    id: 'meal-planning',
    title: 'Smart Meal Planning',
    subtitle: 'Organized weekly meal planning with AI assistance',
    features: [
      {
        id: 'weekly-plans',
        title: 'Weekly Meal Plans',
        description: 'Automatically generated meal schedules',
        longDescription: 'AI creates balanced, diverse weekly meal plans that accommodate your preferences, budget, and dietary needs. Plans are automatically adjusted based on feedback.',
        benefits: [
          'Variety across the week',
          'Nutritional balance',
          'Budget optimization',
          'Grocery efficiency'
        ],
        icon: <Calendar className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-blue-400'
      },
      {
        id: 'family-planning',
        title: 'Family Meal Planning',
        description: 'Coordinate meals for different preferences',
        longDescription: 'Create meal plans that satisfy different family members with varying dietary needs and preferences. One meal, multiple variations made simple.',
        benefits: [
          'Multiple dietary preferences',
          'Kids and adult meals',
          'Allergy management',
          'Time-saving preparation'
        ],
        icon: <Users className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-emerald-400'
      },
      {
        id: 'seasonal-planning',
        title: 'Seasonal Recipe Rotation',
        description: 'Fresh ideas based on seasonal ingredients',
        longDescription: 'Leverage seasonal produce for fresher, more affordable meals. Our AI recommends recipes based on what is currently in season in your region.',
        benefits: [
          'Cost-effective shopping',
          'Maximum freshness',
          'Local produce support',
          'Environmental benefits'
        ],
        icon: <Leaf className="w-8 h-8" />,
        gradient: 'from-blue-400 to-cyan-400'
      }
    ]
  },
  {
    id: 'nutrition-tracking',
    title: 'Nutrition & Health Tracking',
    subtitle: 'Comprehensive nutritional analysis and health monitoring',
    features: [
      {
        id: 'macro-tracking',
        title: 'Macro & Micronutrient Tracking',
        description: 'Detailed nutritional breakdown',
        longDescription: 'Track proteins, carbs, fats, vitamins, and minerals. Our AI ensures your meals meet your nutritional goals and dietary requirements.',
        benefits: [
          'Complete nutrient breakdown',
          'Daily goal tracking',
          'Macro customization',
          'Micronutrient optimization'
        ],
        icon: <Apple className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-cyan-400'
      },
      {
        id: 'calorie-management',
        title: 'Smart Calorie Management',
        description: 'Intelligent calorie optimization',
        longDescription: 'Meet your caloric goals with personalized meal suggestions. AI adjusts portion sizes and recipes to match your fitness and wellness objectives.',
        benefits: [
          'Goal-based calorie targeting',
          'Portion optimization',
          'Flexible meal swaps',
          'Progress tracking'
        ],
        icon: <Zap className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-blue-400'
      },
      {
        id: 'health-insights',
        title: 'Health Insights & Analytics',
        description: 'Data-driven health recommendations',
        longDescription: 'Receive personalized insights about your eating patterns and health metrics. AI provides recommendations for improving your nutritional habits.',
        benefits: [
          'Eating pattern analysis',
          'Personalized recommendations',
          'Trend identification',
          'Health goal alignment'
        ],
        icon: <Apple className="w-8 h-8" />,
        gradient: 'from-blue-400 to-emerald-400'
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Smart Shopping Integration',
    subtitle: 'Seamless grocery shopping and list management',
    features: [
      {
        id: 'smart-lists',
        title: 'Intelligent Shopping Lists',
        description: 'Auto-generated organized lists',
        longDescription: 'Automatically create organized shopping lists from your meal plans. Lists are grouped by store section for efficient shopping and include quantity optimization.',
        benefits: [
          'Automatic list generation',
          'Store layout organization',
          'Quantity optimization',
          'Price comparison'
        ],
        icon: <ShoppingCart className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-blue-400'
      },
      {
        id: 'price-optimization',
        title: 'Price Optimization',
        description: 'Find the best deals and discounts',
        longDescription: 'Our AI analyzes prices across local stores and suggests cost-effective ingredient swaps. Never overpay for groceries again.',
        benefits: [
          'Real-time price tracking',
          'Deal notifications',
          'Store comparisons',
          'Budget optimization'
        ],
        icon: <ShoppingCart className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-emerald-400'
      },
      {
        id: 'inventory-management',
        title: 'Pantry Inventory Management',
        description: 'Track what you have at home',
        longDescription: 'Keep track of your pantry, fridge, and freezer contents. AI suggests recipes based on available ingredients and alerts you when items are running low.',
        benefits: [
          'Inventory tracking',
          'Expiration alerts',
          'Recipe matching',
          'Food waste reduction'
        ],
        icon: <ShoppingCart className="w-8 h-8" />,
        gradient: 'from-blue-400 to-cyan-400'
      }
    ]
  },
  {
    id: 'dietary-support',
    title: 'Comprehensive Dietary Support',
    subtitle: 'Specialized support for various dietary needs',
    features: [
      {
        id: 'allergies',
        title: 'Allergy Management',
        description: 'Safe recipe filtering for allergies',
        longDescription: 'Define your allergies and intolerances. AI automatically filters recipes and provides substitutions that keep you safe while enjoying delicious meals.',
        benefits: [
          'Comprehensive allergy filtering',
          'Cross-contamination alerts',
          'Safe substitutions',
          'Restaurant recommendations'
        ],
        icon: <Leaf className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-cyan-400'
      },
      {
        id: 'diets',
        title: 'Diet-Specific Recipes',
        description: 'Support for all major diets',
        longDescription: 'Whether vegan, keto, paleo, gluten-free, or any other diet, our AI generates recipes specifically tailored to your dietary framework.',
        benefits: [
          'Vegan & vegetarian options',
          'Keto & low-carb recipes',
          'Paleo & whole30 support',
          'Mediterranean & more'
        ],
        icon: <Leaf className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-blue-400'
      },
      {
        id: 'medical-needs',
        title: 'Medical Dietary Support',
        description: 'Recipes for health conditions',
        longDescription: 'Get recipes designed for specific medical needs like diabetes, heart disease, kidney disease, and other health conditions with professional nutritional guidance.',
        benefits: [
          'Condition-specific recipes',
          'Medical nutrition therapy',
          'Healthcare professional integration',
          'Compliant meal planning'
        ],
        icon: <Apple className="w-8 h-8" />,
        gradient: 'from-blue-400 to-emerald-400'
      }
    ]
  },
  {
    id: 'community',
    title: 'Community & Social Features',
    subtitle: 'Connect with other food enthusiasts',
    features: [
      {
        id: 'recipe-sharing',
        title: 'Recipe Sharing & Collections',
        description: 'Share and discover recipes',
        longDescription: 'Share your favorite recipes with the community and discover creations from other users. Build personalized recipe collections and get inspiration.',
        benefits: [
          'User-generated recipes',
          'Community collections',
          'Recipe ratings & reviews',
          'Trending recipes discovery'
        ],
        icon: <Users className="w-8 h-8" />,
        gradient: 'from-emerald-400 to-blue-400'
      },
      {
        id: 'ratings-reviews',
        title: 'Community Ratings & Reviews',
        description: 'Learn from other home cooks',
        longDescription: 'Read authentic reviews and ratings from real users. See photos, tips, and variations that help you decide which recipes to try.',
        benefits: [
          'Authentic user reviews',
          'Photo galleries',
          'Variation suggestions',
          'Difficulty verification'
        ],
        icon: <Users className="w-8 h-8" />,
        gradient: 'from-cyan-400 to-emerald-400'
      },
      {
        id: 'challenges',
        title: 'Cooking Challenges & Events',
        description: 'Participate in community challenges',
        longDescription: 'Join themed cooking challenges, seasonal events, and community competitions. Win badges, unlock achievements, and connect with fellow food lovers.',
        benefits: [
          'Monthly challenges',
          'Seasonal events',
          'Achievement badges',
          'Leaderboards & prizes'
        ],
        icon: <Users className="w-8 h-8" />,
        gradient: 'from-blue-400 to-cyan-400'
      }
    ]
  }
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-emerald-400/50">
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
      
      <p className="text-sm text-slate-300 mb-4">
        {feature.longDescription}
      </p>
      
      <div className="space-y-2 mb-4">
        {feature.benefits.map((benefit: string, index: number) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
            <span className="text-sm text-slate-300">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CategorySectionProps {
  category: FeatureCategory;
  index: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className="py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
            {category.title}
          </h2>
          <p className="text-lg text-slate-400">
            {category.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.features.map((feature: Feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function FeaturesPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/50 rounded-full">
              <span className="text-emerald-300 text-sm font-semibold">✨ Complete Feature Suite</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Everything You Need to Cook Smarter
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              Explore our comprehensive suite of AI-powered tools designed to revolutionize your cooking experience. From intelligent recipe generation to advanced nutrition tracking, we've got you covered.
            </p>
            
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              Save time, reduce waste, eat healthier, and enjoy restaurant-quality meals at home—all powered by cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:border-emerald-400 hover:bg-emerald-400/5 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category: FeatureCategory, index: number) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}

        {/* CTA Section */}
        <section className="py-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Cooking?
            </h2>
            
            <p className="text-lg text-slate-300 mb-4">
              Join 100,000+ home cooks who are already enjoying smarter meal planning, AI-generated recipes, and stress-free cooking.
            </p>
            
            <p className="text-slate-400 mb-8">
              Get 30 days of premium features free—no credit card required. Start cooking smarter today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:border-emerald-400 hover:bg-emerald-400/5 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Our AI Chef?
              </h2>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                We combine cutting-edge AI technology with nutritional science to deliver the ultimate cooking companion. Here's what sets us apart:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <Zap className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-slate-400">Advanced algorithms that learn your preferences and adapt over time.</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Community-Driven</h3>
                <p className="text-slate-400">Access thousands of user reviews, photos, and recipe variations.</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <Apple className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Health-Focused</h3>
                <p className="text-slate-400">Complete nutrition tracking aligned with your health goals.</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <ShoppingCart className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Smart Shopping</h3>
                <p className="text-slate-400">Optimized shopping lists with price tracking and deals.</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <Leaf className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Dietary Support</h3>
                <p className="text-slate-400">Comprehensive support for allergies, diets, and medical needs.</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700">
                <Calendar className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Meal Planning</h3>
                <p className="text-slate-400">Intelligent weekly planning that adapts to your preferences.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}