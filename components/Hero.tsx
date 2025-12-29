'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Calendar, ShoppingCart, Star, CheckCircle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustIndicator {
  label: string;
  value: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: 'AI Recipes',
    description: 'Personalized recipe suggestions powered by advanced AI algorithms'
  },
  {
    icon: <Calendar className="w-6 h-6 text-amber-500" />,
    title: 'Smart Meal Plans',
    description: 'Intelligent meal planning that adapts to your preferences and dietary needs'
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-amber-500" />,
    title: 'Smart Shopping',
    description: 'Automated shopping lists generated from your meal plans'
  }
];

const trustIndicators: TrustIndicator[] = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Recipes Generated', value: '1M+' },
  { label: 'Meals Planned', value: '5M+' }
];

export default function Hero(): React.ReactElement {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 w-fit">
                <div className="flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium text-amber-200">AI-Powered Cooking Revolution</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your AI Chef Awaits, Transform Your Kitchen Today
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                Experience the future of cooking with AI-powered recipes, intelligent meal planning, and smart shopping lists tailored to your taste preferences and lifestyle.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-200">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border border-amber-500/50 hover:border-amber-500 text-amber-200 hover:text-white font-semibold rounded-lg transition-colors duration-200 bg-amber-500/5 hover:bg-amber-500/10">
                  View Pricing
                </Link>
                <Link href="/features" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200 bg-slate-800/50 hover:bg-slate-700/50">
                  Explore Features
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                {trustIndicators.map((indicator: TrustIndicator) => (
                  <div key={indicator.label} className="flex flex-col">
                    <p className="text-2xl sm:text-3xl font-bold text-amber-400">{indicator.value}</p>
                    <p className="text-sm text-slate-400">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-700 h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Zap className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI Chef Ready</h3>
                  <p className="text-slate-300">Start cooking smarter today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-700/50">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: Feature) => (
              <div key={feature.title} className="group p-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-lg mb-4 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Kitchen?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join thousands of home cooks using AI to revolutionize their culinary experience. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-200">
                <CheckCircle className="mr-2 w-5 h-5" />
                Start Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-amber-500/50 text-amber-200 hover:text-white font-semibold rounded-lg transition-colors duration-200 bg-transparent hover:bg-amber-500/10">
                Contact Us
              </Link>
            </div>
          </div>
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
      `}</style>
    </section>
  );
}