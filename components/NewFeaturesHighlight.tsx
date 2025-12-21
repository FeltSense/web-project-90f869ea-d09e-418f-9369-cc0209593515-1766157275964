'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Sparkles, BarChart3, Shield } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
}

const NewFeaturesHighlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Analytics',
      description: 'Get instant insights with our advanced AI engine that analyzes your data in real-time.',
      benefit: '10x faster insights than traditional methods',
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and focus on what matters most with intelligent workflows.',
      benefit: 'Save up to 20 hours per week',
    },
    {
      id: 3,
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Reporting',
      description: 'Create stunning, customizable reports that tell your data story with precision.',
      benefit: 'Generate reports in seconds',
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance features to keep your data safe and secure.',
      benefit: 'SOC2, GDPR & HIPAA compliant',
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Limited Time Offer
              </span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Powerful New Features
            </span>
            <br />
            <span className="text-gray-100">Arriving Today</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of productivity tools designed to transform how you work and unlock unprecedented growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card Content */}
              <div className="relative h-full p-8 border border-gray-800 group-hover:border-gray-700 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-xl transition-all duration-300">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${hoveredFeature === feature.id ? 'bg-gradient-to-br from-blue-500 to-purple-500 scale-110 shadow-lg shadow-purple-500/50' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'}`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefit Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-4">
                  {feature.benefit}
                </div>

                {/* Arrow Icon */}
                <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />

            {/* Button */}
            <Link
              href="/signup"
              className="relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="relative flex items-center gap-2">
                Get Early Access Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Secondary Text */}
          <p className="mt-6 text-gray-400 text-sm">
            Limited to first 500 users • No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewFeaturesHighlight;