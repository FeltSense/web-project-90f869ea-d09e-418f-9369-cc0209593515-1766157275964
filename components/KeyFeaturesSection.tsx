'use client';

import React from 'react';
import { Zap, Shield, Smartphone, TrendingUp, Users, Workflow } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const KeyFeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: Zap,
      title: 'Lightning Fast Performance',
      description:
        'Experience blazing-fast load times and seamless interactions. Our optimized infrastructure ensures your users get instant results every time.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level encryption and multi-layer security protocols keep your data safe and protected at all times.',
      gradient: 'from-blue-400 to-indigo-600',
    },
    {
      id: 3,
      icon: Smartphone,
      title: 'Mobile Optimized',
      description:
        'Fully responsive design that works flawlessly on all devices, from smartphones to desktop computers.',
      gradient: 'from-purple-400 to-pink-600',
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description:
        'Track performance metrics in real-time with comprehensive dashboards and detailed insights.',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      id: 5,
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Seamless collaboration tools that help your team work together more efficiently and productively.',
      gradient: 'from-pink-400 to-rose-600',
    },
    {
      id: 6,
      icon: Workflow,
      title: 'Smart Automation',
      description:
        'Automate repetitive tasks and streamline your workflow with intelligent automation features.',
      gradient: 'from-cyan-400 to-blue-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br ${feature.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
