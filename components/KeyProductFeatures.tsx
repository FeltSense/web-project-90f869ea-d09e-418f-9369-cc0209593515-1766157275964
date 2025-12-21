'use client';

import { motion } from 'framer-motion';
import { ChefHat, Calendar, ShoppingCart, Apple, Settings, Users } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: 'AI-Powered Recipes',
    description: 'Get personalized recipe suggestions powered by advanced AI that learns your taste preferences and cooking style.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Smart Meal Planning',
    description: 'Automatically plan your weekly meals with intelligent scheduling that considers your dietary goals and preferences.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Auto-Generated Shopping Lists',
    description: 'Get organized shopping lists with ingredient quantities automatically calculated from your meal plan.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Apple className="w-8 h-8" />,
    title: 'Nutrition Tracking',
    description: 'Monitor calories, macros, and micronutrients with detailed nutritional analysis for every recipe and meal plan.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Dietary Preferences',
    description: 'Customize recipes for vegan, keto, gluten-free, and dozens of other dietary restrictions and preferences.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Sharing',
    description: 'Share your favorite recipes with a vibrant community and discover trending dishes from other food enthusiasts.',
    gradient: 'from-rose-500 to-pink-500',
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }): JSX.Element => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl" style={{ backgroundImage: `linear-gradient(to right, var(--color-stop), var(--color-end))` }} />
    <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </div>
  </motion.div>
);

const KeyProductFeatures = (): JSX.Element => {
  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features Built for Food Lovers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of cooking with our AI-powered recipe generator. From personalized meal planning to nutritional tracking, we've got everything you need to transform your kitchen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            All features are powered by state-of-the-art artificial intelligence to provide you with the most relevant, delicious, and personalized recipes tailored to your unique taste and dietary needs.
          </p>
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
};

export default KeyProductFeatures;