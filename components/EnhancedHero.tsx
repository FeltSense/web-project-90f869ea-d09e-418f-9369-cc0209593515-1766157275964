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
      title: 'Instant Recipe Suggestions',
      description: "Never waste ingredients again. Our AI analyzes what you have and instantly generates personalized recipes that match your taste, dietary restrictions, and cooking skill level.",
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      title: 'Smart Weekly Meal Plans',
      description: 'Save 10+ hours weekly with AI-generated meal plans. Get balanced nutrition, auto-generated shopping lists, prep time estimates, and difficulty levels—all customized to your lifestyle and budget.',
    },
    {
      id: 3,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Save 30% on Groceries',
      description: 'Cut grocery costs by 30% with intelligent substitutions and budget optimization. Get smart recommendations, track spending, find deals, and reduce food waste—all powered by AI.',
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 border border-violet-400/60 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-violet-300 animate-pulse" />
              <span className="text-sm font-semibold text-violet-100">✨ AI-Powered Recipes in Seconds</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="block text-white mb-3">Cook Smarter, Eat Better</span>
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Recipes Tailored Just for You
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-3 font-medium">
              Say goodbye to meal planning stress. Our intelligent AI learns your taste, budget, and dietary needs to deliver personalized recipes in seconds. Join 50K+ home cooks saving time, money, and discovering dishes they genuinely love.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-semibold">
              🚀 50K+ users • ⏱️ Save 10+ hours weekly • 💰 Cut costs by 30% • ⭐ 4.9★ rating
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
              className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-violet-500/60 hover:shadow-2xl hover:shadow-fuchsia-500/80 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
✨ Start Creating Recipes Now
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur text-white font-semibold rounded-xl border-2 border-violet-500/60 hover:border-violet-400 hover:bg-violet-500/20 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 text-lg"
            >
              <CheckCircle className="w-5 h-5" />
              💎 View Pricing
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
                className={`group p-8 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/80 transition-all duration-300 hover:bg-slate-800/80 transform hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/40 ${
                  isAnimated ? `delay-${index * 200}` : ''
                }`}
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 rounded-lg text-white group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-violet-500/60">
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
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-sm text-slate-400 font-medium flex items-center gap-2">
              <Star className="w-4 h-4 text-violet-400" />
              Trusted by home cooks worldwide • Start free today
              <Star className="w-4 h-4 text-violet-400" />
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
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
