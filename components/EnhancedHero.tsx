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
      description: "Get personalized recipes in seconds. Our AI analyzes your ingredients, dietary preferences, and cooking skill to suggest dishes you'll love. Never run out of meal ideas again.",
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      title: 'Smart Meal Planning',
      description: 'Plan your entire week in minutes. AI-generated meal plans with balanced nutrition, auto-organized shopping lists, and prep time estimates tailored to your schedule.',
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Budget Optimization',
      description: 'Cut grocery costs by 30%. Smart substitutions, price comparisons, and waste reduction. Our AI finds the best deals and suggests affordable alternatives without compromising taste.',
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-32 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Main heading section */}
          <div
            className={`text-center mb-10 sm:mb-16 transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/60 mb-6 sm:mb-8 text-xs sm:text-sm backdrop-blur-sm">
              <Star className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-100">⚡ Join 50K+ Home Cooks Saving Time & Money</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
              <span className="block text-white mb-3">AI-Powered Recipe Generation</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Personalized Recipes, Smart Meal Plans & Budget Optimization
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed mb-4 font-medium">
              Stop wasting time deciding what to cook. Our advanced AI learns your preferences, analyzes your ingredients, and generates personalized recipes tailored to your dietary needs and budget. Get smart meal plans, organized shopping lists, and nutrition tracking—all in one intelligent platform. Cook with confidence, save time and money, and discover dishes you'll love.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-emerald-300 max-w-2xl mx-auto font-bold">
              ✨ 50K+ users • ⏱️ Save 10+ hours weekly • 💰 Cut costs by 30% • ⭐ 4.9★ rating
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-20 px-2 transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              href="/get-started"
              className="group relative px-6 sm:px-12 py-3 sm:py-6 bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/70 hover:shadow-3xl hover:shadow-cyan-500/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
🚀 Try AI Recipe Generator - Free Forever
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/pricing"
              className="px-6 sm:px-10 py-3 sm:py-5 bg-slate-800/50 backdrop-blur text-white font-semibold rounded-xl border-2 border-emerald-500/60 hover:border-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <CheckCircle className="w-5 h-5" />
              💎 View Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Highlights Section */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto transition-all duration-1000 transform ${
              isAnimated
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {highlights.map((highlight: Highlight, index: number) => (
              <div
                key={highlight.id}
                className={`group p-5 sm:p-8 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/50 backdrop-blur-sm border border-slate-700/60 hover:border-emerald-400/80 transition-all duration-300 hover:bg-slate-800/90 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 ${
                  isAnimated ? `delay-${index * 200}` : ''
                }`}
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-emerald-600 via-cyan-500 to-blue-500 rounded-lg text-white group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-emerald-500/60">
                  {highlight.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="mt-12 sm:mt-24 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 px-2">
            <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="text-sm text-slate-300 font-medium flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-400" />
              Trusted by home cooks worldwide • Start free today
              <Star className="w-4 h-4 text-emerald-400" />
            </span>
            <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-emerald-500" />
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
