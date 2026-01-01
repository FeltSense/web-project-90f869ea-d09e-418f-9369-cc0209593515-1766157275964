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
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: 'AI-Powered Recipes',
    description: 'Get unlimited personalized recipe suggestions in seconds. Our AI learns your taste, dietary needs, and available ingredients to create recipes you\'ll actually want to cook.'
  },
  {
    icon: <Calendar className="w-6 h-6 text-cyan-400" />,
    title: 'Intelligent Meal Planning',
    description: 'Plan your entire week in minutes with perfectly balanced meals. Save 10+ hours weekly with AI-generated meal plans tailored to your lifestyle and nutrition goals.'
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
    title: 'Smart Shopping Lists',
    description: 'Get organized, optimized shopping lists that reduce food waste and cut grocery costs by up to 35%. Shop smarter, save more.'
  }
];

const trustIndicators: TrustIndicator[] = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Recipes Generated', value: '1M+' },
  { label: 'Meals Planned', value: '5M+' }
];

export default function Hero(): React.ReactElement {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 w-fit">
                <div className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  <span className="text-sm font-medium text-cyan-200">AI-Powered Cooking Revolution</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Personal AI Chef, <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Always Ready</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                Transform your kitchen with AI-powered recipe generation, intelligent meal planning, and smart shopping lists. Save 10+ hours weekly, cut grocery costs by 35%, and discover recipes you'll love—all personalized to your taste and dietary needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transform hover:scale-105">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/features" className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 hover:border-cyan-500 text-cyan-200 hover:text-white font-semibold rounded-lg transition-all duration-200 bg-cyan-500/5 hover:bg-cyan-500/10 transform hover:scale-105">
                  See How It Works
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                {trustIndicators.map((indicator: TrustIndicator) => (
                  <div key={indicator.label} className="flex flex-col group">
                    <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-teal-300 transition-all duration-300">{indicator.value}</p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-700 h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">✨ Key Features That Make a Difference</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Discover the powerful capabilities that help 100K+ users cook smarter, save time, and eat better every single day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: Feature) => (
              <div key={feature.title} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 hover:from-slate-800 hover:to-slate-700/50 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 rounded-lg mb-4 transition-all duration-300">
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
          <div className="relative bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center space-y-6 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">🚀 Join 100K+ Home Cooks Transforming Their Kitchens</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-assisted cooking. Save 10+ hours weekly, cut grocery costs by 35%, and discover recipes you'll love. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transform hover:scale-105">
                <CheckCircle className="mr-2 w-5 h-5" />
                Start Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-200 hover:text-white font-semibold rounded-lg transition-all duration-200 bg-transparent hover:bg-cyan-500/10 transform hover:scale-105">
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