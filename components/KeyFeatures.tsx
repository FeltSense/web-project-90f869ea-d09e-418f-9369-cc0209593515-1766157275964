'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Apple,
  Leaf,
  Lightbulb,
  ShoppingCart,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const KeyFeatures = (): React.ReactElement => {
  const features: Feature[] = [
    {
      id: 'ai-generation',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description:
        'Instantly generate creative, personalized recipes tailored to your preferences and available ingredients using advanced AI technology.',
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description:
        'Create weekly meal plans automatically organized by your schedule, dietary goals, and shopping convenience.',
    },
    {
      id: 'nutrition-tracking',
      icon: <Apple className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description:
        'Monitor calories, macros, and micronutrients with detailed nutritional breakdowns for every meal you plan.',
    },
    {
      id: 'dietary-flexibility',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dietary Flexibility',
      description:
        'Support for vegan, keto, gluten-free, paleo, and countless other dietary preferences and restrictions.',
    },
    {
      id: 'ingredient-intelligence',
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Ingredient Intelligence',
      description:
        'Smart ingredient substitutions and alternatives based on availability, allergies, and taste preferences.',
    },
    {
      id: 'shopping-lists',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Shopping Lists',
      description:
        'Auto-generated organized shopping lists with quantities, organized by store sections for efficient shopping.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your cooking and meal planning with
            intelligent AI assistance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={hoverVariants}
                className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-12 transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to revolutionize your cooking experience?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;