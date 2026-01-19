'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized code and efficient rendering.',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Stunning visual design with modern aesthetics and smooth animations.',
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Secure',
    description: 'Enterprise-grade security features to keep your data safe and protected.',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Responsive',
    description: 'Perfectly optimized for all devices, from mobile to desktop screens.',
  },
  {
    id: 5,
    icon: '🚀',
    title: 'Scalable',
    description: 'Built to scale effortlessly as your business grows and evolves.',
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Collaborative',
    description: 'Seamless collaboration tools to enhance team productivity and communication.',
  },
];

interface CardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

function FeatureCard({ feature, index, isVisible }: CardProps): React.ReactElement {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/20 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="relative p-8 h-full flex flex-col">
        <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
          {feature.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-grow leading-relaxed">
          {feature.description}
        </p>
        
        <div className="mt-6 pt-6 border-t border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
            <span className="text-sm font-semibold">Learn more</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedFeaturesShowcase(): React.ReactElement {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(features.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target;
            const cards = container.querySelectorAll('[data-card]');
            const newVisibleCards = new Array(features.length).fill(false);
            
            cards.forEach((card, index) => {
              const cardElement = card as HTMLElement;
              const rect = cardElement.getBoundingClientRect();
              if (rect.top < window.innerHeight * 0.8) {
                newVisibleCards[index] = true;
              }
            });
            
            setVisibleCards(newVisibleCards);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">
              Our Capabilities
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enhanced Features
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover powerful features designed to elevate your experience and deliver exceptional results
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-card
              className="h-full"
            >
              <FeatureCard
                feature={feature}
                index={index}
                isVisible={visibleCards[index] || false}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100 group-hover:opacity-110 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center">
              Explore All Features
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}