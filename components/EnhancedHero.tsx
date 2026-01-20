'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Rocket, Star, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface Highlight {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EnhancedHero: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const highlights: Highlight[] = [
    {
      id: 1,
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Recipe Generation',
      description: 'Get personalized recipes in seconds based on your ingredients, taste preferences, and dietary restrictions. Our AI learns what you love and keeps surprising you with dishes you\\'ll actually want to cook.',
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      title: 'Smart Meal Planning & Prep',
      description: 'Plan your entire week in minutes with balanced, nutritious meal plans. Auto-generated shopping lists organized by store layout, with prep time estimates and difficulty levels.',
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Save 30% on Groceries',
      description: 'Intelligent budget optimization with smart substitutions and cost-effective alternatives. Track spending, find deals automatically, and reduce food waste by up to 40%.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${
            isAnimated ? 'animate-pulse' : ''
          }`}
        />
        <div
          className={`absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${
            isAnimated ? 'animate-pulse' : ''
          }`}
        />
        <div
          className={`absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${
            isAnimated ? 'animate-pulse' : ''
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Main heading section */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-200">AI-Powered Culinary Intelligence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="block text-white mb-3">Your AI-Powered</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Personal Chef Awaits
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-2">
              Never ask "what's for dinner?" again. Get personalized recipes in seconds based on what you have, smart meal plans that balance nutrition and taste, and intelligent shopping lists that save you up to 30% on groceries. Our AI learns your preferences and cooking style to deliver recipes you'll love.
            </p>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              ✨ Join 100K+ home cooks saving 10+ hours weekly • 🎯 Reduce food waste by 40% • 💰 Save $1,200+ yearly on groceries
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              href="/get-started"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Creating Recipes Free
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur text-white font-semibold rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              <CheckCircle className="w-5 h-5" />
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Highlights Section */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {highlights.map((highlight: Highlight, index: number) => (
              <div
                key={highlight.id}
                className={`group p-8 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/80 transition-all duration-300 hover:bg-slate-800/80 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 ${
                  isAnimated ? `delay-${index * 200}` : ''
                }`}
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-24 flex justify-center items-center gap-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-sm text-slate-400 font-medium flex items-center gap-2">
              <Star className="w-4 h-4 text-cyan-400" />
              Join thousands of home cooks transforming their kitchen
              <Star className="w-4 h-4 text-cyan-400" />
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </div>
      </div>

      {/* Animated blobs in CSS */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
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

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default EnhancedHero;