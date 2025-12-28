'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Set Preferences',
      description: 'Tell us your dietary preferences, allergies, and favorite cuisines to personalize your experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-emerald-400 to-cyan-400',
    },
    {
      number: 2,
      title: 'Get Recipes',
      description: 'Discover personalized recipes tailored to your preferences and nutritional goals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
        </svg>
      ),
      gradient: 'from-cyan-400 to-blue-400',
    },
    {
      number: 3,
      title: 'Plan Meals',
      description: 'Organize your meals for the week with our intelligent meal planning calendar.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-400',
    },
    {
      number: 4,
      title: 'Shop Smart',
      description: 'Generate optimized shopping lists and find the best deals on ingredients.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      gradient: 'from-indigo-400 to-purple-400',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow four simple steps to transform your meal planning and shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-110`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm font-bold text-slate-700">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8">
                  <div className="w-full h-full flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-gradient-to-r from-emerald-400 to-cyan-400 text-emerald-400" />
                  </div>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="hidden md:block lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent" />
              )}

              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-slate-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;