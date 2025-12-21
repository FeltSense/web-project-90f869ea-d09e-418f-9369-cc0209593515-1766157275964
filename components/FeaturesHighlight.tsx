'use client';

import { useState } from 'react';
import { Check, Zap, Shield, Rocket, BarChart3, Users } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeaturesHighlight: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-millisecond response times for seamless user experience.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8" />,
      title: 'Easy Integration',
      description: 'Simple API and pre-built integrations with popular platforms and services.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      id: 4,
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive dashboards to track performance metrics.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock to assist with any issues.',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 6,
      icon: <Check className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and continuous monitoring ensure 99.99% uptime guarantee.',
      gradient: 'from-red-400 to-rose-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to succeed, built with performance and reliability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-full"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              />

              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:shadow-xl group-hover:border-slate-300 dark:group-hover:border-slate-600 group-hover:-translate-y-2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent" style={hoveredId === feature.id ? {
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                } : {}}>
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {feature.description}
                </p>

                <div className="flex items-center text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-2`} />
                  <span className="text-sm font-medium">Learn more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            Get Started Today
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;