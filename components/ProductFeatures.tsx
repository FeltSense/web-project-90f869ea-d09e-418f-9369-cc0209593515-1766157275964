'use client';

import React from 'react'
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Plug, 
  Rocket, 
  Headphones 
} from 'lucide-react'

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const ProductFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'ai-automation',
      icon: <Zap className="w-8 h-8" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks with intelligent workflows powered by advanced machine learning algorithms.'
    },
    {
      id: 'real-time-analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights with live dashboards and comprehensive data visualization tools.'
    },
    {
      id: 'security',
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards to protect your data.'
    },
    {
      id: 'integration',
      icon: <Plug className="w-8 h-8" />,
      title: 'Seamless Integration',
      description: 'Connect with 500+ popular applications and services through our robust API.'
    },
    {
      id: 'scalability',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Unlimited Scalability',
      description: 'Grow without limits with our cloud-native infrastructure supporting millions of users.'
    },
    {
      id: 'support',
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support team ready to help you succeed.'
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Core Capabilities
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powerful Features Built for <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Modern Teams</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to streamline operations, boost productivity, and drive growth with our comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative h-full p-8 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex w-fit p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:border-blue-500/60 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 text-blue-400 group-hover:text-blue-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures