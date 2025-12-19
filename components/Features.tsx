'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description:
      'Experience blazing-fast performance with optimized infrastructure and cutting-edge technology.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Optimized',
    description:
      'Seamless experience across all devices with responsive design and touch-friendly interface.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Scalable Growth',
    description:
      'Grow without limits with our flexible infrastructure that scales with your business needs.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaboration',
    description:
      'Empower your team with real-time collaboration tools and seamless communication features.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Smart Automation',
    description:
      'Streamline workflows with intelligent automation that saves time and reduces manual work.',
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed, built with excellence and designed
            for performance.
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
              className="group relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-indigo-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-lg mb-6 text-white group-hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 group-hover:w-full transition-all duration-300 rounded-b-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}