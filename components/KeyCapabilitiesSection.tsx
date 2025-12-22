'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Lock,
  BarChart3,
  Workflow,
} from 'lucide-react';

interface Capability {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
  gradient: string;
  gradient2: string;
}

const capabilities: Capability[] = [
  {
    id: 'ai-recipes',
    icon: <Zap className="w-8 h-8" />,
    title: 'AI-Powered Recipe Generation',
    description:
      'Get personalized recipes in 30 seconds based on your preferences, dietary needs, and available ingredients.',
    benefits: [
      'Instant recipe creation',
      'Tailored to your taste',
      'Dietary restrictions respected',
    ],
    useCases: [
      'Quick weeknight dinners',
      'Special dietary needs',
      'Ingredient-based cooking',
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    gradient2: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'meal-planning',
    icon: <Shield className="w-8 h-8" />,
    title: 'Smart Meal Planning',
    description:
      'Auto-generate weekly meal plans optimized for nutrition, budget, and your schedule.',
    benefits: [
      'Saves 5+ hours weekly',
      'Balanced nutrition',
      'Budget-friendly options',
    ],
    useCases: [
      'Weekly meal prep',
      'Family planning',
      'Dietary goals',
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
    gradient2: 'from-blue-500 to-purple-500',
  },
  {
    id: 'shopping-lists',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Intelligent Shopping Lists',
    description:
      'Get organized, categorized shopping lists with price comparisons and smart substitutions.',
    benefits: [
      'Saves $1,200+ yearly',
      'Organized by store layout',
      'Smart substitutions',
    ],
    useCases: [
      'Budget optimization',
      'Grocery shopping',
      'Pantry management',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    gradient2: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'nutrition-tracking',
    icon: <Users className="w-8 h-8" />,
    title: 'Nutrition Tracking & Analytics',
    description:
      'Monitor calories, macros, and micronutrients with detailed health insights and recommendations.',
    benefits: [
      'Accurate macro tracking',
      'Health goal alignment',
      'Personalized insights',
    ],
    useCases: [
      'Fitness goals',
      'Health management',
      'Dietary compliance',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    gradient2: 'from-purple-500 to-pink-500',
  },
  {
    id: 'personalization',
    icon: <Clock className="w-8 h-8" />,
    title: 'Deep Personalization',
    description:
      'AI learns your preferences, cooking style, and dietary needs to improve recommendations over time.',
    benefits: [
      'Gets smarter daily',
      'Learns your taste',
      'Adapts to lifestyle',
    ],
    useCases: [
      'Preference learning',
      'Taste customization',
      'Lifestyle adaptation',
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    gradient2: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'dietary-support',
    icon: <BarChart3 className="w-8 h-8" />,
    title: '50+ Dietary Preferences',
    description:
      'Support for keto, vegan, gluten-free, paleo, Mediterranean, and 45+ other dietary approaches.',
    benefits: [
      'All diets supported',
      'Flexible options',
      'Easy customization',
    ],
    useCases: [
      'Special diets',
      'Allergies',
      'Lifestyle choices',
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    gradient2: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobile-app',
    icon: <Workflow className="w-8 h-8" />,
    title: 'Mobile App & Sync',
    description:
      'Access recipes, meal plans, and shopping lists on the go with seamless cross-device sync.',
    benefits: [
      'Works offline',
      'Cloud sync',
      'Mobile optimized',
    ],
    useCases: [
      'Shopping on the go',
      'Recipe browsing',
      'Meal prep planning',
    ],
    gradient: 'from-pink-500/20 to-purple-500/20',
    gradient2: 'from-pink-500 to-purple-500',
  },
  {
    id: 'community',
    icon: <Lock className="w-8 h-8" />,
    title: 'Community & Support',
    description:
      'Connect with 100,000+ users, share recipes, get cooking tips, and access expert support.',
    benefits: [
      'Active community',
      'Expert guidance',
      '24/7 support',
    ],
    useCases: [
      'Recipe sharing',
      'Cooking tips',
      'Community support',
    ],
    gradient: 'from-teal-500/20 to-emerald-500/20',
    gradient2: 'from-teal-500 to-emerald-500',
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
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function KeyCapabilitiesSection(): JSX.Element {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features Built for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform your kitchen, save time, and eat healthier with AI-powered meal planning and personalized recipes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.id}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
              />

              <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 h-full flex flex-col hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/50">
                <div
                  className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${capability.gradient2} text-white mb-4 items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {capability.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {capability.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed flex-grow">
                  {capability.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {capability.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Use Cases
                    </h4>
                    <ul className="space-y-1">
                      {capability.useCases.map((useCase, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/get-started"
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Start Your Free Trial</span>
          </Link>

          <Link
            href="/features"
            className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Explore All Features
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 dark:border-emerald-500/10"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Transform Your Kitchen?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 100,000+ home cooks already saving 10+ hours weekly and cutting grocery costs by $1,200+ annually with our AI-powered meal planning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="px-6 py-3 bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border border-emerald-600/20 hover:border-emerald-600/50"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="#testimonials"
                className="px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                See What Users Say
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}