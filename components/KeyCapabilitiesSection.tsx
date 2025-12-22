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
    id: 'performance',
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning-Fast Performance',
    description:
      'Optimized for speed with sub-second response times and minimal latency across all operations.',
    benefits: [
      'Saves 40% time on data processing',
      'Reduces infrastructure costs',
      'Improves user satisfaction',
    ],
    useCases: [
      'Real-time analytics dashboards',
      'High-frequency transactions',
      'Streaming data processing',
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    gradient2: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'security',
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise-Grade Security',
    description:
      'Military-grade encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
    benefits: [
      'Eliminates security breaches',
      'Ensures regulatory compliance',
      'Builds customer trust',
    ],
    useCases: [
      'Healthcare data management',
      'Financial transactions',
      'Personal information handling',
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
    gradient2: 'from-blue-500 to-purple-500',
  },
  {
    id: 'analytics',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Advanced Analytics',
    description:
      'Comprehensive insights with AI-powered predictions and real-time reporting capabilities.',
    benefits: [
      'Increases revenue by 30%',
      'Enables data-driven decisions',
      'Reduces guesswork',
    ],
    useCases: [
      'Business intelligence',
      'Market trend analysis',
      'Performance tracking',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    gradient2: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'collaboration',
    icon: <Users className="w-8 h-8" />,
    title: 'Seamless Collaboration',
    description:
      'Connect teams instantly with real-time collaboration tools and unified communication.',
    benefits: [
      'Boosts team productivity by 35%',
      'Reduces communication friction',
      'Improves project outcomes',
    ],
    useCases: [
      'Remote team management',
      'Project coordination',
      'Cross-department workflows',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    gradient2: 'from-purple-500 to-pink-500',
  },
  {
    id: 'automation',
    icon: <Clock className="w-8 h-8" />,
    title: 'Intelligent Automation',
    description:
      'Automate repetitive tasks and workflows to free up your team for strategic work.',
    benefits: [
      'Saves 20 hours per week',
      'Eliminates human error',
      'Accelerates time-to-market',
    ],
    useCases: [
      'Workflow automation',
      'Task scheduling',
      'Routine process handling',
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    gradient2: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'scalability',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Unlimited Scalability',
    description:
      'Grow without limits with infrastructure that scales automatically with your needs.',
    benefits: [
      'Handles 10x growth seamlessly',
      'No downtime during scaling',
      'Cost-efficient expansion',
    ],
    useCases: [
      'Seasonal traffic spikes',
      'Business expansion',
      'Global market reach',
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    gradient2: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'integration',
    icon: <Workflow className="w-8 h-8" />,
    title: 'Universal Integration',
    description:
      'Connect with 500+ tools and services through powerful APIs and pre-built integrations.',
    benefits: [
      'Reduces integration time by 60%',
      'Eliminates data silos',
      'Simplifies tech stack',
    ],
    useCases: [
      'CRM integration',
      'Payment processing',
      'Third-party APIs',
    ],
    gradient: 'from-pink-500/20 to-purple-500/20',
    gradient2: 'from-pink-500 to-purple-500',
  },
  {
    id: 'compliance',
    icon: <Lock className="w-8 h-8" />,
    title: 'Compliance & Governance',
    description:
      'Stay compliant with automated audit trails, role-based access, and policy enforcement.',
    benefits: [
      'Reduces compliance risk',
      'Simplifies audits',
      'Prevents violations',
    ],
    useCases: [
      'Regulatory reporting',
      'Access control',
      'Audit documentation',
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
            Key Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to transform your business and drive measurable results
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to save time, reduce costs,
              and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="px-6 py-3 bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border border-emerald-600/20 hover:border-emerald-600/50"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}