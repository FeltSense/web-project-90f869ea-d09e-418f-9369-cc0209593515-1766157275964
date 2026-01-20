'use client';

import React, { useState } from 'react';
import {
  Zap,
  Shield,
  Gauge,
  Users,
  TrendingUp,
  Lock,
  Cloud,
  Smartphone,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefit: string;
  gradient: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with millisecond response times',
    benefit: 'Boost productivity by 10x',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards',
    benefit: 'Sleep soundly at night',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    icon: Gauge,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards with live data insights',
    benefit: 'Make informed decisions instantly',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 4,
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless communication and project management tools',
    benefit: 'Work together, achieve more',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Growth Optimization',
    description: 'AI-powered recommendations for business expansion',
    benefit: 'Scale faster than competitors',
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    id: 6,
    icon: Lock,
    title: 'Access Control',
    description: 'Granular permissions and role-based management',
    benefit: 'Control who sees what',
    gradient: 'from-blue-600 to-cyan-700',
  },
  {
    id: 7,
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: '99.99% uptime with automatic scaling',
    benefit: 'Never worry about downtime',
    gradient: 'from-cyan-400 to-blue-600',
  },
  {
    id: 8,
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Native apps and responsive design for all devices',
    benefit: 'Access anywhere, anytime',
    gradient: 'from-blue-400 to-cyan-600',
  },
];

interface FeatureCardProps {
  feature: Feature;
  isHovered: boolean;
  onHover: (id: number) => void;
  onHoverEnd: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  isHovered,
  onHover,
  onHoverEnd,
}) => {
  const Icon = feature.icon;

  return (
    <div
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={onHoverEnd}
      className="group relative h-full"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
      />

      <div
        className={`relative h-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-500 ${
          isHovered
            ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105 -translate-y-2'
            : 'hover:border-slate-600'
        }`}
      >
        <div className="flex flex-col h-full">
          <div
            className={`mb-6 inline-flex w-fit transition-all duration-500 ${
              isHovered ? 'scale-125 -rotate-6' : 'scale-100 rotate-0'
            }`}
          >
            <div
              className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3
            className={`text-xl font-bold text-white mb-3 transition-all duration-500 ${
              isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r' : ''
            }`}
            style={
              isHovered
                ? {
                    backgroundImage: `linear-gradient(to right, #06b6d4, #3b82f6)`,
                  }
                : {}
            }
          >
            {feature.title}
          </h3>

          <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
            {feature.description}
          </p>

          <div
            className={`pt-4 border-t border-slate-700 transition-all duration-500 ${
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2'
            }`}
          >
            <p className="text-cyan-400 font-semibold text-sm">
              ✨ {feature.benefit}
            </p>
          </div>
        </div>

        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 blur-3xl`}
        />
      </div>
    </div>
  );
};

const ProductFeaturesShowcaseNew: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600">
              Powerful Features
            </span>
            <span className="block text-slate-300 text-2xl sm:text-3xl lg:text-4xl mt-3">
              Built for Excellence
            </span>
          </h2>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mt-6">
            Experience cutting-edge capabilities designed to transform your
            business and drive unprecedented growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isHovered={hoveredId === feature.id}
              onHover={setHoveredId}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-medium text-sm">
              All features included in every plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesShowcaseNew;