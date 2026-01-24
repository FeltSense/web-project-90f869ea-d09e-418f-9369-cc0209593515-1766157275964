'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import SampleRecipes from '@/components/SampleRecipes'
import BetaSignup from '@/components/BetaSignup'
import KeyFeaturesShowcaseEnhanced from '@/components/KeyFeaturesShowcaseEnhanced'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Enhanced with Modern Design */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-400/80 mb-10 backdrop-blur-sm hover:border-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-bold text-emerald-100">🏆 #1 AI RECIPE GENERATOR • 4.9★ RATING • 100K+ ACTIVE USERS</span>
            </div>

            {/* Main Headline - Enhanced with More Compelling Value Proposition & Mobile Optimization */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Transform Your Kitchen with AI
              <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mt-3 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Unlimited Recipes • Smarter Meal Planning • 10+ Hours Saved Weekly
              </span>
            </h1>

            {/* Mission Statement - Enhanced */}
            <div className="mb-8 inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-300/80 backdrop-blur-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 transition-transform duration-300">
              <p className="text-lg font-bold text-emerald-50">🎯 Trusted by 100K+ Home Cooks • Save 10+ Hours Weekly • Cut Costs by 30%</p>
            </div>

            {/* Subheading - Optimized with Stronger Value Proposition & Mobile Responsive */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-50 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Get unlimited personalized recipes in seconds, tailored to your taste, budget, and dietary needs. <span className="font-bold text-emerald-300">Reclaim 10+ hours weekly</span> from meal planning, <span className="font-bold text-cyan-300">save $1,200+ annually</span> on groceries, <span className="font-bold text-blue-300">eliminate 40% of food waste</span>, and <span className="font-bold text-emerald-300">cook restaurant-quality meals</span> every single night. <span className="font-bold text-emerald-300 text-lg">Join 100K+ home cooks transforming their kitchens—start free today, no credit card needed.</span>
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">⏱️ Reclaim 10+ hours weekly</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">💰 Save $1,200+ annually</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">🌱 Eliminate 40% food waste</span>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/50">
                <span className="text-lg">⭐</span>
                <span className="text-emerald-100 font-semibold">4.9★ Rating (50K+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/50">
                <span className="text-lg">👥</span>
                <span className="text-cyan-100 font-semibold">100K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/50">
                <span className="text-lg">✅</span>
                <span className="text-purple-100 font-semibold">No Credit Card Required</span>
              </div>
            </div>

            {/* CTA Buttons - Enhanced with More Compelling Copy & Optimized Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button
                onClick={() => {
                  const betaSection = document.getElementById('beta-signup-section');
                  if (betaSection) {
                    betaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-16 py-8 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 text-white font-bold rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/90 hover:shadow-cyan-500/150 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap active:scale-95 before:absolute before:inset-0 before:bg-white/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity animate-pulse hover:animate-none"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Start Cooking Free Today
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <Link
                href="/features"
                className="group relative px-12 py-7 border-2 border-emerald-300/90 text-white font-semibold rounded-2xl hover:bg-emerald-500/40 hover:border-emerald-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:scale-110 bg-emerald-500/20 active:scale-95 before:absolute before:inset-0 before:bg-emerald-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 md:text-base sm:px-10 sm:py-6"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ See All Features
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Benefits Section - Enhanced */}
            <div className="mt-32 mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">The Three Pillars of Smarter Cooking</h2>
              <p className="text-center text-slate-200 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">RecipeAI revolutionizes home cooking by combining intelligent recipe generation, smart meal planning, and budget optimization. <span className="font-bold text-emerald-300">Save 10+ hours weekly</span>, <span className="font-bold text-cyan-300">cut grocery costs by 30%</span>, and <span className="font-bold text-blue-300">eliminate 40% of food waste</span>. Our AI learns your preferences and generates unlimited personalized recipes tailored to your taste, dietary needs, and available ingredients. Join 100K+ families who are already cooking restaurant-quality meals, saving money, and reducing waste every single day.</p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-500/60 hover:border-cyan-200 transition hover:shadow-2xl hover:shadow-cyan-500/70 duration-300 hover:scale-105 transition-transform duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/35 hover:to-blue-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Save 10+ Hours Weekly</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-cyan-300">Reclaim your time.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                    <div className="pt-6 border-t border-cyan-400/40 text-cyan-300 text-sm font-semibold">✓ Instant recipe generation</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 border border-emerald-500/60 hover:border-emerald-200 transition hover:shadow-2xl hover:shadow-emerald-500/70 duration-300 hover:scale-105 transition-transform duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/35 hover:to-teal-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💰</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Cut Grocery Bills by 30%</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                    <div className="pt-6 border-t border-emerald-400/40 text-emerald-300 text-sm font-semibold">✓ Smart budget optimization</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/25 to-pink-500/25 border border-purple-500/60 hover:border-purple-200 transition hover:shadow-2xl hover:shadow-purple-500/70 duration-300 hover:scale-105 transition-transform duration-300 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/35 hover:to-pink-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">🌱</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Reduce Food Waste by 40%</h3>
                    <p className="text-slate-100 text-base leading-relaxed mb-6 font-medium"><span className="font-bold text-purple-300">Cook sustainably.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and protecting the environment.</p>
                    <div className="pt-6 border-t border-purple-400/40 text-purple-300 text-sm font-semibold">✓ Eco-friendly cooking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Product Features Details */}
            <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm\">
              <h3 className="text-2xl font-bold text-white mb-6 text-center\">Why 100K+ Home Cooks Trust RecipeAI</h3>
              <div className="grid md:grid-cols-2 gap-6\">
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">🎯</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Personalized to Your Taste</h4>
                    <p className="text-slate-200 text-sm\">Our AI learns your flavor preferences, dietary restrictions, and cooking skill level to suggest recipes you'll actually love cooking.</p>
                  </div>
                </div>
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">⚡</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Lightning-Fast Generation</h4>
                    <p className="text-slate-200 text-sm\">Get unlimited recipe ideas in seconds, not hours. Perfect for last-minute meal planning or when inspiration strikes.</p>
                  </div>
                </div>
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">🛒</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Smart Shopping Integration</h4>
                    <p className="text-slate-200 text-sm\">Auto-generated shopping lists with budget-friendly alternatives, organized by store section for faster checkout.</p>
                  </div>
                </div>
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">📊</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Nutrition Insights</h4>
                    <p className="text-slate-200 text-sm\">Automatic macro tracking and nutritional analysis for every recipe to help you hit your health goals.</p>
                  </div>
                </div>
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">👨‍👩‍👧‍👦</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Family-Friendly Meals</h4>
                    <p className="text-slate-200 text-sm\">Plan meals for the whole family with personalized preferences for each member, accommodating all dietary needs.</p>
                  </div>
                </div>
                <div className="flex gap-4\">
                  <div className="text-3xl flex-shrink-0\">🌱</div>
                  <div>
                    <h4 className="font-bold text-white mb-2\">Eco-Conscious Cooking</h4>
                    <p className="text-slate-200 text-sm\">Reduce food waste by 40% with recipes that use ingredients you already have, protecting the environment and your wallet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* Key Features Showcase - New Enhanced Section */}
      <KeyFeaturesShowcaseEnhanced />


      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-cyan-100">⚡ POWERFUL FEATURES • DESIGNED FOR REAL KITCHENS</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">Unlock Your Culinary Potential</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-4">
              Discover six powerful features designed to revolutionize your cooking experience. From AI-powered recipe generation to advanced nutrition tracking, every tool is crafted to save you time, money, and effort.
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              <span className="text-emerald-300 font-bold">✨ Intelligent • Personalized • Efficient</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 group cursor-pointer hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Recipe Generation</h3>
                <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-cyan-300">🎯 Never ask "what's for dinner?" again.</span> Get unlimited personalized recipes in seconds based on your ingredients, dietary preferences, and cooking skill level. Our advanced AI learns your taste preferences and suggests delicious dishes you&apos;ll love. Works with any ingredients you have on hand—from pantry staples to fresh produce.</p>
                <div className="text-xs text-cyan-300 font-semibold">✓ Instant personalization • Taste learning • 10,000+ recipes • Works offline</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-emerald-300">📅 Plan entire weeks in minutes.</span> Get AI-generated meal plans that balance nutrition, taste, and variety perfectly. Our AI considers allergies, dietary restrictions, and budget constraints automatically. Perfectly balanced meals tailored to your family&apos;s preferences—no more guessing or stress.</p>
              <div className="text-xs text-emerald-300 font-semibold">✓ Weekly planning • Balanced nutrition • Allergy-aware • Budget-conscious</div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Shopping Lists</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-purple-300">💳 Save 30% on groceries automatically.</span> Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Our AI finds the best deals, suggests smart ingredient swaps, and organizes items by store section for faster checkout. Shop efficiently and stay within budget every time.</p>
              <div className="text-xs text-purple-300 font-semibold">✓ Budget optimization • Smart swaps • Save 30% • Store-organized</div>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-orange-300">💪 Hit your health goals without sacrifice.</span> Automatic nutrition analysis for every recipe with detailed breakdowns of calories, protein, carbs, fats, and micronutrients. Track macros effortlessly and achieve your fitness goals while enjoying delicious meals. Sync with your favorite fitness apps seamlessly.</p>
              <div className="text-xs text-orange-300 font-semibold">✓ Macro tracking • Health goals • Fitness sync • Instant analysis</div>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/70 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-white mb-3">Family-Friendly Planning</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-indigo-300">❤️ Keep everyone happy at the table.</span> Plan meals for your entire family with personalized preferences for each member. Accommodate different dietary needs, allergies, and restrictions while keeping picky eaters satisfied. Create meals everyone loves without cooking multiple dinners.</p>
              <div className="text-xs text-indigo-300 font-semibold">✓ Multi-profile • Dietary preferences • Allergy-safe • Picky-eater friendly</div>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/70 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 font-medium"><span className="font-semibold text-blue-300">👨‍🍳 Cook restaurant-quality meals at home.</span> Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with 10,000+ recipes and video tutorials. Elevate your cooking skills and impress your family every night.</p>
              <div className="text-xs text-blue-300 font-semibold">✓ 10,000+ recipes • Expert tips • Pro techniques • Video tutorials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden border-t border-slate-700/50">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Trusted by 100K+ Home Cooks Worldwide</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">Join thousands of families who are already cooking smarter, saving money, and reducing food waste. See the real impact RecipeAI has made on their lives.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70">
              <div className="text-5xl font-bold text-emerald-400 mb-3">100K+</div>
              <p className="text-slate-200 font-semibold">Active Home Cooks</p>
              <p className="text-sm text-slate-300 mt-2">Using RecipeAI daily</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="text-5xl font-bold text-cyan-400 mb-3">4.9★</div>
              <p className="text-slate-200 font-semibold">Average Rating</p>
              <p className="text-sm text-slate-300 mt-2">From 50K+ reviews</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="text-5xl font-bold text-purple-400 mb-3">10+</div>
              <p className="text-slate-200 font-semibold">Hours Saved Weekly</p>
              <p className="text-sm text-slate-300 mt-2">On average per user</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/70">
              <div className="text-5xl font-bold text-orange-400 mb-3">30%</div>
              <p className="text-slate-200 font-semibold">Grocery Savings</p>
              <p className="text-sm text-slate-300 mt-2">Average reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Section */}
      <div id="beta-signup-section">
        <BetaSignup />
      </div>

      {/* Sample Recipes Section */}
      <SampleRecipes />

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* About Section - Enhanced & Optimized */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/80 mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold text-emerald-100">💡 OUR MISSION • TRANSFORMING HOME COOKING WORLDWIDE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">RecipeAI</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing home cooking with AI-powered meal planning that saves you time, money, and reduces food waste. Our mission is to make restaurant-quality cooking accessible to everyone, every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/70 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Innovation</h3>
              <p className="text-slate-200 leading-relaxed">Advanced machine learning algorithms that understand your preferences and generate personalized recipes in seconds. Our AI learns from your feedback to improve recommendations over time.</p>
            </div>

            <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Time-Saving Solutions</h3>
              <p className="text-slate-200 leading-relaxed">Spend less time planning meals and more time enjoying them. Get dinner ideas in seconds, not hours. Automate your meal planning and reclaim 10+ hours every week.</p>
            </div>

            <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Impact</h3>
              <p className="text-slate-200 leading-relaxed">Reduce food waste by 40% with smart recipes that use ingredients you already have. Cook sustainably while saving money and protecting the environment.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-8 sm:p-16 backdrop-blur-sm shadow-2xl shadow-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-100 leading-relaxed mb-6">
                  <span className="font-bold text-emerald-300 text-xl">RecipeAI</span> combines cutting-edge artificial intelligence with culinary expertise to transform how you approach cooking. Whether you&apos;re a beginner looking for simple recipes or an experienced cook seeking inspiration, our platform adapts to your skill level and preferences.
                </p>
                <p className="text-lg text-slate-100 leading-relaxed mb-6">
                  Join over <span className="font-bold text-cyan-300">100,000+ home cooks</span> who are already saving time, cutting grocery costs, and discovering delicious meals every day. Start your culinary journey today—<span className="font-bold text-emerald-300">completely free, no credit card required.</span>
                </p>
                <button
                  onClick={() => {
                    const betaSection = document.getElementById('beta-signup-section');
                    if (betaSection) {
                      betaSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Key Value Propositions */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-400/50 hover:border-emerald-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-emerald-400 mb-2">10+ Hours</p>
                  <p className="text-slate-200 font-semibold">Saved Weekly on Meal Planning</p>
                  <p className="text-sm text-slate-300 mt-2">Automate your meal planning process</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-cyan-400 mb-2">30% Less</p>
                  <p className="text-slate-200 font-semibold">Spent on Groceries Annually</p>
                  <p className="text-sm text-slate-300 mt-2">Smart budget optimization</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                  <p className="text-4xl font-bold text-purple-400 mb-2">40% Reduction</p>
                  <p className="text-slate-200 font-semibold">in Food Waste</p>
                  <p className="text-sm text-slate-300 mt-2">Eco-friendly cooking solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  )
}
