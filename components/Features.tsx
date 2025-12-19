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
    title: 'Lightning Fast Performance',
    description:
      'Sub-millisecond response times with globally distributed infrastructure. Experience blazing-fast performance that keeps your users engaged and coming back.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description:
      'Bank-level encryption, compliance certifications, and 99.99% uptime SLA. Your data is protected by industry-leading security protocols.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile-First Design',
    description:
      'Perfectly optimized for every device. Responsive, fast, and intuitive experiences that delight users on phones, tablets, and desktops.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Unlimited Scalability',
    description:
      'Grow from startup to enterprise without infrastructure headaches. Auto-scaling handles traffic spikes effortlessly.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Seamless Collaboration',
    description:
      'Real-time collaboration tools that bring teams together. Share, comment, and iterate faster than ever before.',
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Intelligent Automation',
    description:
      'AI-powered workflows that learn and adapt. Automate repetitive tasks and focus on what truly matters for your business.',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features Built for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed. Designed with your success in mind.
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl mb-6 text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 group-hover:w-full transition-all duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}