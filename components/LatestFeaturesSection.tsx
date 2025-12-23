'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Brain,
  Shield,
  Rocket,
  BarChart3,
  Code2,
  Palette,
} from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  benefits: string[];
  useCases: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Advanced AI Analysis',
    description:
      'Leverage cutting-edge machine learning models to analyze complex data patterns and extract actionable insights in seconds.',
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-purple-500 to-indigo-600',
    benefits: ['Real-time analysis', 'Pattern recognition', 'Predictive insights'],
    useCases: ['Market analysis', 'Risk assessment', 'Trend forecasting'],
  },
  {
    id: 2,
    title: 'Smart Automation',
    description:
      'Automate repetitive tasks with intelligent workflows that learn from your patterns and adapt to your needs.',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-yellow-500 to-orange-600',
    benefits: ['90% time savings', 'Error reduction', 'Scalable workflows'],
    useCases: ['Task scheduling', 'Data processing', 'Report generation'],
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description:
      'Understand and generate human-like text with advanced NLP capabilities that support multiple languages.',
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-pink-500 to-rose-600',
    benefits: ['Multi-language support', 'Context awareness', 'High accuracy'],
    useCases: ['Content creation', 'Sentiment analysis', 'Customer support'],
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description:
      'Protect your data with military-grade encryption and comprehensive security protocols built into every layer.',
    icon: <Shield className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-600',
    benefits: ['256-bit encryption', 'Compliance ready', '99.99% uptime'],
    useCases: ['Data protection', 'Compliance audits', 'Risk management'],
  },
  {
    id: 5,
    title: 'Performance Optimization',
    description:
      'Maximize efficiency with AI-driven optimization that continuously improves system performance and resource utilization.',
    icon: <Rocket className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    benefits: ['3x faster processing', 'Lower latency', 'Reduced costs'],
    useCases: ['System tuning', 'Load balancing', 'Cost optimization'],
  },
  {
    id: 6,
    title: 'Advanced Analytics Dashboard',
    description:
      'Visualize complex data with interactive dashboards that provide deep insights into your business metrics.',
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: 'from-teal-500 to-blue-600',
    benefits: ['Real-time updates', 'Custom reports', 'Data visualization'],
    useCases: ['Performance tracking', 'KPI monitoring', 'Decision making'],
  },
  {
    id: 7,
    title: 'API Integration Suite',
    description:
      'Seamlessly connect with your existing tools and platforms through comprehensive API endpoints and webhooks.',
    icon: <Code2 className="w-8 h-8" />,
    gradient: 'from-orange-500 to-red-600',
    benefits: ['100+ integrations', 'REST & GraphQL', 'Webhook support'],
    useCases: ['System integration', 'Data sync', 'Workflow automation'],
  },
  {
    id: 8,
    title: 'Customization Engine',
    description:
      'Tailor every aspect of the platform to match your brand and specific business requirements.',
    icon: <Palette className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-purple-600',
    benefits: ['White-label ready', 'Custom themes', 'Flexible configuration'],
    useCases: ['Brand alignment', 'User experience', 'Custom workflows'],
  },
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="relative z-10">
          <div
            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {feature.icon}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}>
            {feature.title}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
            {feature.description}
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                Key Benefits
              </h4>
              <ul className="space-y-1">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                Use Cases
              </h4>
              <ul className="space-y-1">
                {feature.useCases.map((useCase, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${feature.gradient} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300`}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function LatestFeaturesSection() {
  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Latest AI-Powered{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the newest capabilities powered by advanced artificial
            intelligence to transform your workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Explore all features and unlock the full potential of AI
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all duration-300"
          >
            View All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}