'use client';

import React from 'react';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Lock 
} from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized load times and seamless interactions across all devices.',
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    accentColor: 'hover:shadow-yellow-500/50',
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and advanced security protocols ensure your data remains protected at all times.',
    gradient: 'from-blue-400 via-blue-500 to-cyan-500',
    accentColor: 'hover:shadow-blue-500/50',
  },
  {
    id: 3,
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Fully Responsive',
    description: 'Perfect experience on any device with adaptive layouts that automatically adjust to screen sizes.',
    gradient: 'from-purple-400 via-purple-500 to-pink-500',
    accentColor: 'hover:shadow-purple-500/50',
  },
  {
    id: 4,
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Growth Analytics',
    description: 'Comprehensive insights and real-time analytics to track performance and optimize your strategies.',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    accentColor: 'hover:shadow-green-500/50',
  },
  {
    id: 5,
    icon: <Users className="w-8 h-8" />,
    title: 'User Collaboration',
    description: 'Seamless teamwork features that enable real-time collaboration and communication between team members.',
    gradient: 'from-red-400 via-rose-500 to-pink-500',
    accentColor: 'hover:shadow-rose-500/50',
  },
  {
    id: 6,
    icon: <Lock className="w-8 h-8" />,
    title: 'Privacy First',
    description: 'Your privacy is our priority with granular controls and transparent data handling practices.',
    gradient: 'from-indigo-400 via-indigo-500 to-purple-500',
    accentColor: 'hover:shadow-indigo-500/50',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${feature.accentColor}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
          {feature.icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600">
          {feature.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
          {feature.description}
        </p>

        <div className="mt-6 flex items-center text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Learn more
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className={`absolute inset-0 border border-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

const OptimizedFeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Powerful Features
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Built for Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and scale your applications with confidence and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Explore All Features
            <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default OptimizedFeaturesSection;