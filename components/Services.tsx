'use client';

import { Apple, Leaf, Heart, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Personalized Nutrition Plans',
    description: 'AI-powered meal recommendations tailored to your health goals, dietary preferences, and lifestyle. Get delicious recipes that actually taste good and support your wellness journey.',
  },
  {
    icon: Leaf,
    title: 'Real-Time Health Tracking',
    description: 'Monitor calories, macros, and micronutrients with precision. Sync with wearables to see how food affects your body and optimize your nutrition.',
  },
  {
    icon: Apple,
    title: 'Smart Grocery Integration',
    description: 'Shop smarter with personalized grocery lists, nutrition-optimized alternatives, cost tracking, and local store integration.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Beautiful dashboards showing your transformation. See what works. Celebrate wins. Stay motivated with detailed insights and progress tracking.',
  },
];

export default function Services() {
  // Extract icon components to use in JSX
  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;
  const Icon2 = services[2].icon;
  const Icon3 = services[3].icon;

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 mb-6">
            <span className="text-sm font-semibold text-emerald-600">💚 Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Complete Kitchen Intelligence at Your Fingertips
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Beyond recipes. Our comprehensive platform handles meal planning, nutrition tracking, grocery shopping, and health insights—all powered by AI that learns your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FIRST CARD - SPANS 2 COLUMNS */}
          <div className="md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-amber-200">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center mb-6 shadow-md">
                <Icon0 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                {services[0].title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {services[0].description}
              </p>
            </div>
          </div>

          {/* SECOND CARD - SINGLE COLUMN, TALL */}
          <div className="bg-white rounded-3xl p-8 min-h-[320px] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                <Icon1 className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                {services[1].title}
              </h3>
              <p className="text-slate-600">
                {services[1].description}
              </p>
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="bg-white rounded-3xl p-8 min-h-[280px] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <Icon2 className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                {services[2].title}
              </h3>
              <p className="text-slate-600">
                {services[2].description}
              </p>
            </div>
          </div>

          {/* FOURTH CARD - SPANS 2 COLUMNS, DARK */}
          <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center mb-6">
                <Icon3 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                {services[3].title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
