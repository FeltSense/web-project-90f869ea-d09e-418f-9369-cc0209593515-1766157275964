'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  gradient: string;
  benefits: string[];
}

const featureCards: FeatureCard[] = [
  {
    id: 1,
    title: 'AI Recipe Generation',
    description: 'Discover personalized recipes tailored to your dietary preferences and available ingredients.',
    icon: '🍳',
    image: '/images/recipe-generation.jpg',
    gradient: 'from-orange-400 to-red-500',
    benefits: ['Instant Recipe Creation', 'Ingredient Matching', 'Dietary Customization'],
  },
  {
    id: 2,
    title: 'Smart Meal Planning',
    description: 'Create weekly meal plans automatically organized for convenience and nutritional balance.',
    icon: '📅',
    image: '/images/meal-planning.jpg',
    gradient: 'from-green-400 to-emerald-500',
    benefits: ['Weekly Planning', 'Shopping Lists', 'Budget Optimization'],
  },
  {
    id: 3,
    title: 'Nutrition Tracking',
    description: 'Monitor your nutritional intake with detailed analytics and health insights.',
    icon: '📊',
    image: '/images/nutrition-tracking.jpg',
    gradient: 'from-blue-400 to-cyan-500',
    benefits: ['Calorie Counting', 'Macro Tracking', 'Health Analytics'],
  },
];

const HomepageShowcase: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4">
            Discover Your Culinary Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Harness the power of AI to transform your cooking experience with intelligent recipe generation, smart meal planning, and comprehensive nutrition tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" />

              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl drop-shadow-lg group-hover:scale-125 transition-transform duration-500">
                      {card.icon}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {card.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`} />
                        <span className="text-sm text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/features/${card.id}`}
                    className={`inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${card.gradient} hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300 transform group-hover:scale-105`}
                  >
                    Learn More
                  </Link>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to revolutionize your kitchen?
          </p>
          <Link
            href="/get-started"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </Link>
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

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HomepageShowcase;