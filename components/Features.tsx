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
    title: '⭐ Lightning-Fast Automation (NEW)',
    description:
      'Automate complex workflows in minutes, not months. Our AI-powered platform learns your processes and executes them flawlessly at scale. Reduce manual work by up to 80% and free your team to focus on strategic initiatives that drive real business value.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise-Grade Security',
    description:
      'Bank-level encryption, SOC 2 compliance, and zero-trust architecture protect your most sensitive data. Your security is our top priority—we never compromise on protection, privacy, or compliance standards.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Seamless Integration',
    description:
      'Connect with 500+ tools and platforms in minutes. Our API-first architecture integrates with your existing tech stack without disruption. Deploy faster, scale easier, and maintain complete control over your data flow.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '✨ Real-Time Intelligence (NEW)',
    description:
      'Get actionable insights instantly with advanced analytics and predictive modeling. Make data-driven decisions with confidence. Our AI continuously learns and adapts to deliver increasingly accurate recommendations and forecasts.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Dedicated Support',
    description:
      'Expert support available 24/7 with dedicated account managers for enterprise clients. We don\'t just provide software—we partner with you for success. Your growth is our mission, and we\'re invested in your outcomes.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Customizable Intelligence',
    description:
      'Tailor the AI to your unique business needs with no-code customization and advanced configuration options. Build workflows that match your exact requirements. Scale from startup to enterprise without changing platforms.',
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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-blue-700">✨ Core Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful automation, real-time intelligence, and enterprise security—all designed to maximize your ROI and accelerate business growth.
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
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-2xl mb-6 text-white group-hover:shadow-2xl group-hover:scale-125 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
