'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  benefit: string;
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless user experience',
    benefit: 'Load times under 1 second',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards',
    benefit: 'ISO 27001 & SOC 2 certified',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 3,
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Real-time insights and comprehensive reporting',
    benefit: 'Track all metrics that matter',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Seamless teamwork with real-time synchronization',
    benefit: 'Work together effortlessly',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    id: 5,
    icon: '🌍',
    title: 'Global Scale',
    description: 'Reliable infrastructure across 6 continents',
    benefit: '99.99% uptime guarantee',
    gradient: 'from-indigo-400 to-blue-500'
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Easy Integration',
    description: 'Connect with 500+ apps and services',
    benefit: 'Setup in minutes, not hours',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 7,
    icon: '💡',
    title: 'AI-Powered',
    description: 'Machine learning algorithms for smart automation',
    benefit: 'Save 20+ hours per week',
    gradient: 'from-rose-400 to-pink-500'
  },
  {
    id: 8,
    icon: '📱',
    title: 'Mobile First',
    description: 'Native apps for iOS and Android',
    benefit: 'Access anywhere, anytime',
    gradient: 'from-cyan-400 to-blue-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const hoverVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

export default function KeyFeaturesShowcase(): React.ReactElement {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to succeed, designed for maximum impact and ease of use
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div variants={hoverVariants} className="h-full">
                {/* Card background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-xl"></div>
                </div>

                {/* Card content */}
                <div className="relative h-full p-8 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-300 backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4 inline-block"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {feature.description}
                  </p>

                  {/* Benefit badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                    <p className="text-xs font-semibold text-gray-300">
                      {feature.benefit}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to experience these features firsthand?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>

      <style>{`
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