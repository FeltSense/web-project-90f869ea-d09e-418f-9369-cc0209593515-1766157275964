'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Activity,
  ShoppingCart,
  Leaf,
  Zap,
  Users,
  Smartphone,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI Recipe Generation',
    description:
      'Generate unlimited personalized recipes using advanced AI technology that understands your taste preferences and dietary needs.',
    benefits: ['Instant recipe creation', 'Personalized suggestions', 'Cuisine variety'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    icon: <Calendar className="w-8 h-8" />,
    title: 'Smart Meal Planning',
    description:
      'Create weekly meal plans automatically with AI-powered recommendations that balance nutrition and variety.',
    benefits: ['Weekly planning', 'Auto-scheduling', 'Variety guaranteed'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: <Activity className="w-8 h-8" />,
    title: 'Nutrition Tracking',
    description:
      'Monitor calories, macros, and micronutrients with detailed nutritional analysis for every meal.',
    benefits: ['Calorie counting', 'Macro tracking', 'Health insights'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Smart Shopping Lists',
    description:
      'Automatically generate organized shopping lists with quantities and price comparisons across stores.',
    benefits: ['Auto-generated lists', 'Price optimization', 'Store integration'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    icon: <Leaf className="w-8 h-8" />,
    title: 'Dietary Customization',
    description:
      'Support for all dietary preferences including vegan, keto, gluten-free, paleo, and more.',
    benefits: ['Multiple diets', 'Allergy filters', 'Preference sync'],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    id: 6,
    icon: <Zap className="w-8 h-8" />,
    title: 'Smart Substitutions',
    description:
      'Intelligent ingredient substitutions based on dietary restrictions, allergies, and pantry availability.',
    benefits: ['Quick swaps', 'Allergy-safe', 'Taste-matched'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 7,
    icon: <Users className="w-8 h-8" />,
    title: 'Community Recipes',
    description:
      'Share and discover recipes from our vibrant community of food enthusiasts and get rated feedback.',
    benefits: ['Recipe sharing', 'Community reviews', 'Trending recipes'],
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 8,
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App',
    description:
      'Full-featured mobile app for iOS and Android with offline access and push notifications.',
    benefits: ['iOS & Android', 'Offline mode', 'Sync across devices'],
    gradient: 'from-indigo-500 to-blue-500',
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
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        <div className="relative p-8 h-full flex flex-col">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {feature.icon}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {feature.title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
            {feature.description}
          </p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Key Benefits
            </p>
            <ul className="space-y-2">
              {feature.benefits.map((benefit: string, benefitIndex: number) => (
                <motion.li
                  key={benefitIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (index * 0.1 + benefitIndex * 0.05),
                  }}
                  viewport={{ once: true }}
                  className="flex items-center text-sm text-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-3`}
                  />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
      </div>
    </motion.div>
  );
};

interface EnhancedProductFeaturesProps {
  showTitle?: boolean;
  showDescription?: boolean;
  columns?: number;
}

export default function EnhancedProductFeatures({
  showTitle = true,
  showDescription = true,
  columns = 4,
}: EnhancedProductFeaturesProps): React.ReactElement {
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

  const gridColsClass =
    columns === 4
      ? 'lg:grid-cols-4'
      : columns === 3
        ? 'lg:grid-cols-3'
        : 'lg:grid-cols-2';

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            {showDescription && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to transform your cooking experience with
                cutting-edge AI technology
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-8`}
        >
          {features.map((feature: Feature, index: number) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore All Features
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}