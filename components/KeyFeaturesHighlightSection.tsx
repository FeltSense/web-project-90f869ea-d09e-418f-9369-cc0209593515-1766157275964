'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Gauge,
  Cpu,
  BarChart3,
  Lock,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const KeyFeaturesHighlightSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Performance',
      description:
        'Experience blazing-fast load times and instant response. Our optimized infrastructure ensures your application performs at peak efficiency, delivering results in milliseconds.',
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption and multi-layer security protocols protect your data. Rest easy knowing your sensitive information is safeguarded by industry-leading security standards.',
    },
    {
      id: 3,
      icon: <Gauge className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description:
        'Monitor every metric that matters with comprehensive real-time dashboards. Make data-driven decisions with instant visibility into your business performance.',
    },
    {
      id: 4,
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Powered Insights',
      description:
        'Leverage cutting-edge machine learning to unlock actionable insights. Our intelligent algorithms work behind the scenes to optimize your operations automatically.',
    },
    {
      id: 5,
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Scalable Infrastructure',
      description:
        'Grow without limits. Our cloud-native architecture scales seamlessly from startup to enterprise, handling millions of transactions with zero downtime.',
    },
    {
      id: 6,
      icon: <Lock className="w-8 h-8" />,
      title: 'Compliance Ready',
      description:
        'Meet regulatory requirements effortlessly. Built with GDPR, HIPAA, and SOC 2 compliance in mind, ensuring your operations stay audit-ready at all times.',
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

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Everything you need to succeed, built with cutting-edge technology
            and designed for maximum impact
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 mb-5">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
            Explore All Features
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
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

export default KeyFeaturesHighlightSection;