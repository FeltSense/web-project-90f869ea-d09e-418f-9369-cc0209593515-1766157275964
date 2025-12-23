'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Users, Zap, Target } from 'lucide-react';

interface SuccessStory {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  quote: string;
  author: string;
  role: string;
  gradientFrom: string;
  gradientTo: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    company: 'TechVenture Inc',
    industry: 'SaaS',
    challenge: 'Struggling with customer retention and manual support processes',
    solution: 'Implemented automated workflow system with AI-powered analytics',
    metrics: [
      {
        label: 'Revenue Growth',
        value: '+245%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        label: 'Support Time Reduced',
        value: '70%',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: 'Customer Retention',
        value: '94%',
        icon: <Users className="w-5 h-5" />,
      },
    ],
    quote: 'This platform transformed how we serve our customers. We went from reactive support to proactive success management.',
    author: 'Sarah Chen',
    role: 'VP of Customer Success',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-500',
  },
  {
    id: 2,
    company: 'GrowthScale Marketing',
    industry: 'Digital Marketing',
    challenge: 'Unable to track ROI across multiple campaigns and channels',
    solution: 'Deployed integrated analytics dashboard with real-time reporting',
    metrics: [
      {
        label: 'Campaign Efficiency',
        value: '+156%',
        icon: <Target className="w-5 h-5" />,
      },
      {
        label: 'Data Processing Speed',
        value: '10x Faster',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: 'Client Satisfaction',
        value: '98%',
        icon: <Users className="w-5 h-5" />,
      },
    ],
    quote: 'The insights we gained allowed us to optimize campaigns in real-time and deliver unprecedented results to our clients.',
    author: 'Marcus Rodriguez',
    role: 'Chief Analytics Officer',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-500',
  },
  {
    id: 3,
    company: 'FinanceFlow Solutions',
    industry: 'Financial Services',
    challenge: 'Complex compliance requirements slowing down operations',
    solution: 'Automated compliance workflows with intelligent document processing',
    metrics: [
      {
        label: 'Processing Time Cut',
        value: '85%',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        label: 'Compliance Score',
        value: '100%',
        icon: <Target className="w-5 h-5" />,
      },
      {
        label: 'Cost Savings',
        value: '$2.3M/year',
        icon: <TrendingUp className="w-5 h-5" />,
      },
    ],
    quote: 'We eliminated manual errors and now process transactions faster than ever while maintaining perfect compliance.',
    author: 'James Mitchell',
    role: 'CEO',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-500',
  },
  {
    id: 4,
    company: 'RetailMax Networks',
    industry: 'E-Commerce',
    challenge: 'Inventory management across 500+ stores was chaotic',
    solution: 'Implemented AI-powered inventory optimization system',
    metrics: [
      {
        label: 'Inventory Accuracy',
        value: '99.7%',
        icon: <Target className="w-5 h-5" />,
      },
      {
        label: 'Stockouts Reduced',
        value: '92%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        label: 'Sales Increase',
        value: '+$18M',
        icon: <Users className="w-5 h-5" />,
      },
    ],
    quote: 'Perfect inventory visibility across all stores has been game-changing for our bottom line.',
    author: 'Emma Thompson',
    role: 'COO',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-red-500',
  },
];

const StoryCard: React.FC<{ story: SuccessStory; index: number }> = ({
  story,
  index,
}) => {
  return (
    <div
      className="group h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`bg-gradient-to-br ${story.gradientFrom} ${story.gradientTo} p-8 text-white relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">{story.company}</h3>
              <p className="text-white/80 text-sm">{story.industry}</p>
            </div>
            <ArrowUpRight className="w-8 h-8 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <p className="text-white/90 text-sm font-semibold mb-1">
                Challenge
              </p>
              <p className="text-white/80 text-sm">{story.challenge}</p>
            </div>
            <div>
              <p className="text-white/90 text-sm font-semibold mb-1">
                Solution
              </p>
              <p className="text-white/80 text-sm">{story.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6 pt-6 border-t border-white/20">
            {story.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className="flex justify-center mb-2 text-white/90">
                  {metric.icon}
                </div>
                <p className="text-lg font-bold text-white">{metric.value}</p>
                <p className="text-xs text-white/70 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-4">
            <p className="text-white/90 italic text-sm mb-3">
              "{story.quote}"
            </p>
            <div>
              <p className="font-semibold text-white text-sm">{story.author}</p>
              <p className="text-white/70 text-xs">{story.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerSuccessStories: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Real Results from Real Customers
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how industry leaders transformed their operations and achieved
            remarkable growth with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          {successStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Ready to write your success story?</p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;