'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  BarChart3,
  ShoppingCart,
  Zap,
  Brain,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const EnhancedKeyFeaturesShowcase: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-recipes',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Recipe Generation',
      description:
        'Get personalized recipe suggestions powered by advanced AI that learns your taste preferences and dietary restrictions.',
      benefits: [
        'Instant recipe suggestions',
        'Dietary customization',
        'Flavor profile matching',
      ],
    },
    {
      id: 'meal-planning',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Meal Planning',
      description:
        'Automated weekly meal plans that balance nutrition, variety, and your schedule with intelligent optimization.',
      benefits: [
        'Weekly schedules',
        'Prep time estimates',
        'Shopping integration',
      ],
    },
    {
      id: 'nutrition-tracking',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Nutrition Tracking',
      description:
        'Real-time monitoring of calories, macros, and micronutrients with detailed nutritional breakdowns for every meal.',
      benefits: [
        'Daily summaries',
        'Goal tracking',
        'Health insights',
      ],
    },
    {
      id: 'grocery-lists',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Smart Grocery Lists',
      description:
        'Automatically generated shopping lists organized by store layout with price comparisons and smart substitutions.',
      benefits: [
        'Organized by aisle',
        'Price optimization',
        'Bulk suggestions',
      ],
    },
    {
      id: 'personalization',
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Personalization',
      description:
        'Machine learning algorithms that continuously improve recommendations based on your preferences and feedback.',
      benefits: [
        'Preference learning',
        'Behavior analysis',
        'Custom profiles',
      ],
    },
    {
      id: 'performance',
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description:
        'Optimized performance delivering instant results, quick meal planning, and seamless app experience.',
      benefits: [
        'Sub-second responses',
        'Offline mode',
        'Cloud sync',
      ],
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Smart Eating
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover how our AI-powered platform revolutionizes meal planning with intelligent features that save you time, reduce food waste, and help you achieve your health goals—all while enjoying delicious, personalized meals.
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
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-slate-800/50 rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-700 hover:border-cyan-400"
              >
                <motion.div
                  variants={iconVariants}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-300 mb-5 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-300">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 mb-6">
            Ready to transform your meal planning experience?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedKeyFeaturesShowcase;