'use client';

import React from 'react';
import {
  Zap,
  Shield,
  TrendingUp,
  Lightbulb,
  Rocket,
  Target,
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast Performance',
    description:
      'Experience blazing-fast load times and seamless interactions. Our optimized infrastructure ensures your users get instant results every time.',
    gradient: 'from-emerald-50 to-cyan-50',
    iconBg: 'from-emerald-400 to-cyan-400',
    accentColor: 'emerald',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and advanced security protocols protect your data. Rest assured with 99.99% uptime and comprehensive compliance standards.',
    gradient: 'from-cyan-50 to-blue-50',
    iconBg: 'from-cyan-400 to-blue-400',
    accentColor: 'cyan',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Real-Time Analytics',
    description:
      'Gain actionable insights with powerful analytics dashboards. Track metrics that matter and make data-driven decisions instantly.',
    gradient: 'from-blue-50 to-purple-50',
    iconBg: 'from-blue-400 to-purple-400',
    accentColor: 'blue',
  },
  {
    id: 4,
    icon: Lightbulb,
    title: 'AI-Powered Intelligence',
    description:
      'Leverage cutting-edge AI technology to automate workflows and unlock new possibilities. Smart features that learn and adapt to your needs.',
    gradient: 'from-purple-50 to-pink-50',
    iconBg: 'from-purple-400 to-pink-400',
    accentColor: 'purple',
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Scalable Infrastructure',
    description:
      'Grow without limits. Our elastic architecture scales seamlessly with your business, handling millions of requests without breaking a sweat.',
    gradient: 'from-pink-50 to-orange-50',
    iconBg: 'from-pink-400 to-orange-400',
    accentColor: 'pink',
  },
  {
    id: 6,
    icon: Target,
    title: 'Precision Targeting',
    description:
      'Reach the right audience with advanced targeting capabilities. Maximize ROI with intelligent segmentation and personalization features.',
    gradient: 'from-orange-50 to-emerald-50',
    iconBg: 'from-orange-400 to-emerald-400',
    accentColor: 'orange',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-br from-white to-black" />

      <div className="relative z-10">
        <div
          className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${feature.iconBg} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700">
          {feature.title}
        </h3>

        <p className="mb-4 text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
          {feature.description}
        </p>

        <div className="flex items-center text-sm font-semibold text-gray-600 transition-all duration-300 group-hover:text-gray-900 group-hover:gap-2">
          <span>Learn more</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-tl from-white opacity-0 transition-opacity duration-300 group-hover:opacity-5 rounded-full -mr-16 -mb-16" />
    </div>
  );
};

export default function KeyFeaturesSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-b from-emerald-100 to-transparent opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-gradient-to-t from-purple-100 to-transparent opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-cyan-100 px-4 py-2">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </div>

          <h2 className="mb-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Everything You Need to
            <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Unlock your potential with our comprehensive suite of cutting-edge
            features designed to drive growth, improve efficiency, and deliver
            exceptional results for your business.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 p-12 text-center shadow-2xl">
          <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-8 text-emerald-50 text-lg">
            Join thousands of companies already enjoying the benefits of our
            platform.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-emerald-600 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            Get Started Free
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}