'use client';

import React from 'react';
import { Zap, Clock, DollarSign, Leaf, Users } from 'lucide-react';

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  title,
  description,
  gradient,
  delay,
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105"
      style={{
        animation: `slideUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-white/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
          <div className="text-white">{icon}</div>
        </div>
        
        <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-base leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white/95">
          {description}
        </p>
        
        <div className="mt-6 h-1 w-12 bg-gradient-to-r from-white/40 to-transparent transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
};

const KeyHighlights: React.FC = () => {
  const highlights: Array<Omit<HighlightCardProps, 'delay'>> = [
    {
      icon: <Zap size={32} />,
      title: 'AI-Powered Personalization',
      description:
        'Our advanced AI learns your preferences and adapts meal recommendations specifically tailored to your unique taste profile and dietary goals.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Clock size={32} />,
      title: 'Save Hours Every Week',
      description:
        'Eliminate meal planning stress with automated weekly plans. Spend less time deciding what to cook and more time enjoying delicious meals.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Cut Grocery Costs',
      description:
        'Smart algorithms find the best deals and optimize ingredient lists to reduce waste and save up to 40% on your weekly grocery bill.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Leaf size={32} />,
      title: 'Flexible Dietary Options',
      description:
        'Whether vegan, keto, gluten-free, or any other preference, our platform adapts instantly to support your nutritional needs and lifestyle choices.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users size={32} />,
      title: 'Vibrant Community',
      description:
        'Connect with thousands of food enthusiasts, share recipes, tips, and get inspired by real meal experiences from our growing global community.',
      gradient: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why Choose Our Platform?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            We combine cutting-edge AI technology with real-world functionality to transform how you approach meal planning, grocery shopping, and healthy eating.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              {...highlight}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
          <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Ready to Transform Your Meal Planning?
          </h3>
          <p className="mb-8 text-slate-300">
            Join thousands of users who are already saving time, money, and eating better with our platform.
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;