'use client';

import React from 'react';
import { 
  Zap, 
  Shield, 
  Gauge, 
  Layers, 
  Sparkles, 
  Cpu 
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  borderColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized algorithms and edge computing.',
    benefits: ['99.9% uptime', 'Sub-100ms response', 'Global CDN'],
    gradient: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-400',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    benefits: ['ISO 27001 certified', 'AES-256 encryption', '24/7 monitoring'],
    gradient: 'from-emerald-500 to-cyan-500',
    borderColor: 'border-emerald-400',
  },
  {
    id: 3,
    icon: Gauge,
    title: 'Smart Analytics',
    description: 'Real-time insights with advanced metrics and predictive analytics dashboard.',
    benefits: ['Real-time data', 'AI predictions', 'Custom reports'],
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-400',
  },
  {
    id: 4,
    icon: Layers,
    title: 'Seamless Integration',
    description: 'Connect with 500+ apps and services through our powerful API ecosystem.',
    benefits: ['Pre-built connectors', 'REST & GraphQL', 'Webhook support'],
    gradient: 'from-cyan-500 to-emerald-500',
    borderColor: 'border-cyan-400',
  },
  {
    id: 5,
    icon: Sparkles,
    title: 'AI-Powered Features',
    description: 'Leverage machine learning for intelligent automation and smart recommendations.',
    benefits: ['Auto-optimization', 'ML models', 'Pattern detection'],
    gradient: 'from-emerald-500 to-blue-500',
    borderColor: 'border-emerald-400',
  },
  {
    id: 6,
    icon: Cpu,
    title: 'Infinite Scalability',
    description: 'Auto-scaling infrastructure that grows with your business without limits.',
    benefits: ['Auto-scaling', 'Load balancing', 'Zero downtime'],
    gradient: 'from-blue-500 to-emerald-500',
    borderColor: 'border-blue-400',
  },
];

const KeyFeaturesShowcaseEnhanced: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">POWERFUL FEATURES</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-300">
            Everything You Need to Succeed
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of features designed to empower your business with cutting-edge technology and unmatched performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative h-full"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300" />
                
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`} />

                <div className="relative p-8 h-full flex flex-col">
                  <div className={`mb-6 inline-flex w-fit p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                    <button className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${feature.gradient} text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}>
                      Learn More
                    </button>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Ready to experience the power of our platform?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Get Started Now
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default KeyFeaturesShowcaseEnhanced;