'use client';

import {
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Workflow,
  Lock,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    id: 'ai-recipes',
    icon: Zap,
    title: 'AI-Powered Recipe Generation',
    description:
      'Get personalized recipe suggestions in seconds. Our AI analyzes your ingredients, dietary preferences, and cooking skill to recommend perfect meals you\'ll love.',
    gradient: 'from-violet-600 to-violet-400',
    accentColor: 'violet',
  },
  {
    id: 'meal-planning',
    icon: Workflow,
    title: 'Smart Meal Planning',
    description:
      'Create balanced weekly meal plans automatically. Get nutrition-optimized suggestions with prep time estimates and difficulty levels tailored to your lifestyle.',
    gradient: 'from-fuchsia-600 to-fuchsia-400',
    accentColor: 'fuchsia',
  },
  {
    id: 'grocery-savings',
    icon: BarChart3,
    title: 'Save 30% on Groceries',
    description:
      'Cut grocery costs with intelligent substitutions and budget optimization. Get smart recommendations, track spending, and find deals automatically.',
    gradient: 'from-cyan-600 to-cyan-400',
    accentColor: 'cyan',
  },
  {
    id: 'shopping-lists',
    icon: Rocket,
    title: 'Intelligent Shopping Lists',
    description:
      'Auto-generated shopping lists organized by store layout. Get budget-friendly alternatives and smart substitutions based on your pantry and recipes.',
    gradient: 'from-violet-600 to-fuchsia-400',
    accentColor: 'violet',
  },
  {
    id: 'nutrition-tracking',
    icon: Shield,
    title: 'Nutrition Tracking',
    description:
      'Hit your health goals without sacrificing taste. Automatic macro tracking and personalized recommendations to keep you on track.',
    gradient: 'from-fuchsia-600 to-cyan-400',
    accentColor: 'fuchsia',
  },
  {
    id: 'waste-reduction',
    icon: Lock,
    title: 'Reduce Food Waste',
    description:
      'AI-powered suggestions based on available ingredients reduce food waste by 40%. Use what you have before it spoils.',
    gradient: 'from-cyan-600 to-violet-400',
    accentColor: 'cyan',
  },
];

export default function KeyFeaturesHighlight(): React.ReactElement {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-violet-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Key Features
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              That Transform Your Kitchen
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Discover the powerful AI-driven features that make meal planning, cooking, and grocery shopping effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/50 p-8 transition-all duration-300 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`}
                  />
                </div>

                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:via-fuchsia-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 border border-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
            Start Your Free Trial
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}