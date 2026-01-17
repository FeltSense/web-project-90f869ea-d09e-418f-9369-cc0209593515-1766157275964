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
    description: 'Unlock endless culinary possibilities with AI that learns your preferences. Get personalized recipe suggestions in seconds, tailored to your dietary needs, available ingredients, and cooking skill level., dietary needs, and available ingredients to create recipes you\'ll actually want to cook.'
  },
  {
    icon: <Calendar className="w-6 h-6 text-cyan-400" />,
    title: 'Intelligent Meal Planning',
    description: 'Plan your entire week in minutes with perfectly balanced, nutritious meals. Our AI creates customized meal plans that fit your lifestyle, budget, and health goals—saving you 10+ hours weekly.'
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
    title: 'Smart Shopping Lists',
    description: 'Get intelligent shopping lists that organize by store layout and reduce food waste. Cut grocery costs by up to 35% with smart price comparisons and seasonal ingredient suggestions.'
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{animationDelay: '4s'}} />
      </div>

      <div className="relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 w-fit">
                <div className="flex items-center space-x-3 px-6 py-3 bg-cyan-500/15 border border-cyan-400/40 rounded-full hover:border-cyan-400/70 transition-all duration-300 backdrop-blur-sm">
                  <Star className="w-5 h-5 text-cyan-400 fill-cyan-400 animate-pulse" />
                  <span className="text-sm font-semibold text-cyan-200">✨ AI-Powered Cooking Revolution</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                Transform Your <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Kitchen with AI</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed max-w-2xl font-light">
                Discover recipes tailored to you, plan meals in minutes, and shop smarter. Your personal AI chef is ready to transform how you cook—saving you time, money, and stress every single day.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/get-started" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transform hover:scale-110 text-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                <Link href="/features" className="inline-flex items-center justify-center px-10 py-5 border-2 border-cyan-400/60 hover:border-cyan-400 text-cyan-200 hover:text-cyan-100 font-bold rounded-xl transition-all duration-300 bg-cyan-500/10 hover:bg-cyan-500/20 transform hover:scale-110 text-lg">
                  See How It Works
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-700/50">
                {trustIndicators.map((indicator: TrustIndicator) => (
                  <div key={indicator.label} className="flex flex-col group text-center">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-teal-300 group-hover:to-cyan-300 transition-all duration-300">{indicator.value}</p>
                    <p className="text-base text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium mt-2">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30 h-full flex items-center justify-center hover:border-cyan-500/60 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="relative w-40 h-40 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-spin" style={{animationDuration: '20s'}}>
                      <Zap className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Chef Ready</h3>
                  <p className="text-slate-200 text-lg">Start cooking smarter today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-700/50">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">✨ Powerful Features Built for You</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Discover the intelligent capabilities that help thousands of users cook smarter, save time, and eat better every single day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: Feature) => (
              <div key={feature.title} className="group p-10 bg-gradient-to-br from-slate-800/60 to-slate-700/40 hover:from-slate-800/80 hover:to-slate-700/60 border border-slate-700 hover:border-cyan-400/60 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 group-hover:from-cyan-500/50 group-hover:to-teal-500/50 rounded-xl mb-6 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/40 rounded-3xl p-16 text-center space-y-8 hover:border-cyan-400/70 hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">🚀 Ready to Transform Your Kitchen?</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Join thousands of home cooks who've revolutionized their cooking with AI. Save 10+ hours weekly, cut grocery costs by 35%, discover recipes you'll love, and never stress about meal planning again. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link href="/get-started" className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transform hover:scale-110 text-lg">
                <CheckCircle className="mr-3 w-6 h-6" />
                Start Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 border-2 border-cyan-400/60 hover:border-cyan-400 text-cyan-200 hover:text-cyan-100 font-bold rounded-xl transition-all duration-300 bg-cyan-500/10 hover:bg-cyan-500/20 transform hover:scale-110 text-lg">
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