'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Sparkles,
  Calendar,
  Heart,
  ShoppingCart,
  Settings,
  Zap,
} from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'AI Recipe Generation',
    description: 'Get personalized recipes tailored to your taste preferences and dietary needs',
    benefits: ['Instant suggestions', 'Unique combinations', 'Chef-approved recipes'],
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-purple-400 to-pink-400',
    delay: 0,
  },
  {
    id: 2,
    title: 'Meal Planning',
    description: 'Organize your weekly meals with intelligent planning and scheduling',
    benefits: ['Weekly templates', 'Auto-sync shopping', 'Time management'],
    icon: <Calendar className="w-8 h-8" />,
    gradient: 'from-blue-400 to-cyan-400',
    delay: 0.1,
  },
  {
    id: 3,
    title: 'Nutrition Tracking',
    description: 'Monitor calories, macros, and micronutrients in real-time',
    benefits: ['Daily summaries', 'Goal tracking', 'Health insights'],
    icon: <Heart className="w-8 h-8" />,
    gradient: 'from-red-400 to-orange-400',
    delay: 0.2,
  },
  {
    id: 4,
    title: 'Shopping Lists',
    description: 'Smart shopping lists that sync across your devices',
    benefits: ['Auto-generated lists', 'Price comparison', 'Store navigation'],
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: 'from-green-400 to-emerald-400',
    delay: 0.3,
  },
  {
    id: 5,
    title: 'Dietary Customization',
    description: 'Adapt recipes to any diet or restriction instantly',
    benefits: ['Multiple diets', 'Allergy filters', 'Custom preferences'],
    icon: <Settings className="w-8 h-8" />,
    gradient: 'from-yellow-400 to-amber-400',
    delay: 0.4,
  },
  {
    id: 6,
    title: 'Smart Substitutions',
    description: 'Find perfect ingredient swaps for healthier alternatives',
    benefits: ['Instant replacements', 'Nutrition-matched', 'Cost-effective'],
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-indigo-400 to-purple-400',
    delay: 0.5,
  },
];

interface FeatureCardProps {
  feature: Feature;
  inView: boolean;
}

function FeatureCard({ feature, inView }: FeatureCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: feature.delay, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-full p-8 rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-white/40 transition-colors duration-300">
        {/* Icon Container */}
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="w-full h-full text-white flex items-center justify-center">
            {feature.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {feature.description}
        </p>

        {/* Benefits */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
            Key Benefits
          </p>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: feature.delay + 0.1 + index * 0.05 }}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-3 bg-gradient-to-r ${feature.gradient}`}
                />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function KeyProductFeaturesShowcase(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 border border-blue-200/50 dark:border-blue-400/20 text-blue-700 dark:text-blue-300 text-sm font-semibold uppercase tracking-wider">
              Powerful Features
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Eating
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered features designed to transform
            your cooking and eating experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} inView={inView} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Ready to revolutionize your kitchen?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}