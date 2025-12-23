'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Brain,
  Shield,
  Rocket,
  BarChart3,
  Code2,
  Palette,
} from 'lucide-react';

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
    title: 'AI Recipe Generation',
    description:
      'Get unlimited personalized recipes in seconds. Our advanced AI learns your taste preferences, dietary restrictions, and available ingredients to create restaurant-quality recipes tailored just for you.',
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-orange-500 to-red-600',
    benefits: ['Instant recipes', 'Taste-matched', 'Dietary-friendly'],
    useCases: ['Weeknight dinners', 'Special diets', 'Ingredient-based cooking'],
  },
  {\n    id: 2,\n    title: 'Personalized Meal Planning',\n    description:\n      'Create customized weekly meal plans that adapt to your preferences, budget, and lifestyle. Never wonder what to cook again with AI-powered meal planning.',\n    icon: <Zap className="w-8 h-8" />,\n    gradient: 'from-emerald-500 to-teal-600',\n    benefits: ['Weekly plans', 'Budget-friendly', 'Preference-based'],\n    useCases: ['Family meals', 'Meal prep', 'Dietary goals'],\n  },\n  {\n    id: 3,\n    title: 'Smart Grocery Lists',\n    description:\n      'Automatically generate organized shopping lists from your meal plans. Save time at the store and reduce food waste with intelligent list generation.',\n    icon: <Brain className="w-8 h-8" />,\n    gradient: 'from-green-500 to-emerald-600',\n    benefits: ['Auto-organized', 'Waste reduction', 'Cost savings'],\n    useCases: ['Smart shopping', 'Budget tracking', 'Pantry management'],\n  },\n  {\n    id: 4,\n    title: 'Nutrition Tracking',\n    description:\n      'Monitor calories, macros, and micronutrients for every recipe and meal plan. Stay on top of your health goals with comprehensive nutrition insights.',\n    icon: <Shield className="w-8 h-8" />,\n    gradient: 'from-blue-500 to-cyan-600',\n    benefits: ['Full nutrition data', 'Macro tracking', 'Health insights'],\n    useCases: ['Fitness goals', 'Diet management', 'Health monitoring'],\n  },\n  {\n    id: 5,\n    title: 'Smart Substitutions',\n    description:\n      'Get intelligent ingredient substitutions based on allergies, preferences, and availability. Cook with confidence knowing you have perfect alternatives.',\n    icon: <Rocket className="w-8 h-8" />,\n    gradient: 'from-purple-500 to-pink-600',\n    benefits: ['Allergy-safe', 'Preference-aware', 'Always available'],\n    useCases: ['Dietary restrictions', 'Ingredient swaps', 'Creative cooking'],\n  },\n  {\n    id: 6,\n    title: 'Cost Optimization',\n    description:\n      'Reduce your grocery bills by up to $1,200 annually. Our AI finds the most budget-friendly recipes and ingredients without sacrificing taste or nutrition.',\n    icon: <BarChart3 className="w-8 h-8" />,\n    gradient: 'from-yellow-500 to-orange-600',\n    benefits: ['Save $1,200+', 'Budget tracking', 'Price optimization'],\n    useCases: ['Budget meals', 'Seasonal cooking', 'Waste reduction'],\n  },\n  {\n    id: 7,\n    title: 'Multi-Diet Support',\n    description:\n      'Support for 50+ dietary preferences including keto, vegan, gluten-free, paleo, and more. Find recipes that match your lifestyle perfectly.',\n    icon: <Code2 className="w-8 h-8" />,\n    gradient: 'from-pink-500 to-rose-600',\n    benefits: ['50+ diets', 'Flexible options', 'Lifestyle-aligned'],\n    useCases: ['Special diets', 'Family preferences', 'Health conditions'],\n  },\n  {\n    id: 8,\n    title: 'Mobile App Access',\n    description:\n      'Access your recipes, meal plans, and shopping lists on the go. Seamless sync across all your devices for cooking anywhere, anytime.',\n    icon: <Palette className="w-8 h-8" />,\n    gradient: 'from-indigo-500 to-purple-600',\n    benefits: ['Mobile-first', 'Cloud sync', 'Offline access'],\n    useCases: ['In-store shopping', 'Recipe browsing', 'Meal planning'],\n  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="relative z-10">
          <div
            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {feature.icon}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}>
            {feature.title}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
            {feature.description}
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                Key Benefits
              </h4>
              <ul className="space-y-1">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                Use Cases
              </h4>
              <ul className="space-y-1">
                {feature.useCases.map((useCase, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${feature.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300`}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function LatestFeaturesSection() {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            AI Recipe Generator{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover powerful AI capabilities designed to revolutionize your meal planning, 
            recipe discovery, and grocery shopping experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Explore all features and unlock the full potential of AI
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all duration-300"
          >
            View All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}