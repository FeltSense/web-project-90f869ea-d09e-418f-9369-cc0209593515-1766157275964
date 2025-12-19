'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI-Powered Nutrition Analysis',
    description:
      'Advanced AI algorithms analyze your food intake and provide personalized nutrition insights. Get real-time recommendations tailored to your health goals and dietary preferences.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy & Data Security',
    description:
      'Bank-level encryption and HIPAA compliance. Your health data is protected with industry-leading security protocols and never shared without your consent.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile-First Experience',
    description:
      'Seamlessly track your health on the go. Our intuitive mobile app makes logging meals, workouts, and health metrics effortless and enjoyable.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Progress Tracking & Analytics',
    description:
      'Visualize your health journey with comprehensive analytics. Track weight, energy levels, and wellness metrics with beautiful, actionable insights.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community & Support',
    description:
      'Connect with thousands of health-conscious individuals. Share recipes, tips, and celebrate milestones with our supportive wellness community.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Personalized Meal Plans',
    description:
      'Get custom meal plans based on your preferences, allergies, and health goals. Discover delicious recipes that align with your wellness journey.',
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
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Features(): JSX.Element {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Health & Wellness Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your health journey. Powered by science, designed for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl mb-6 text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}