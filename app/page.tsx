'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import SampleRecipes from '@/components/SampleRecipes'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Main Call to Action */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400/80 mb-10 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
              <span className="text-sm font-bold text-cyan-100">⭐ TRUSTED BY 100K+ HOME COOKS • 4.9★ RATED • 🚀 TRENDING NOW</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Your Personal AI Chef
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-3">
                Unlimited Recipes, Zero Stress, Maximum Savings
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-100 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Stop wasting time on meal planning and money on groceries. Get personalized AI recipes in seconds, save 10+ hours weekly, and cut grocery bills by 30%. <span className="font-bold text-emerald-300">Join 100K+ home cooks</span> who are already <span className="font-bold text-cyan-300">saving 10+ hours weekly</span> and <span className="font-bold text-blue-300">cooking smarter meals</span>. <span className="font-bold text-purple-300">Start free today—no credit card required.</span>
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-emerald-300 font-semibold">
              <span className="flex items-center gap-2">⏱️ Save 10+ hours weekly on meal planning</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">💰 Cut grocery bills by 30%</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-2">🗑️ Reduce food waste by 40%</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link
                href="/get-started"
                className="group relative px-14 py-7 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/80 hover:shadow-emerald-500/120 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-3 text-lg whitespace-nowrap hover:shadow-2xl hover:shadow-cyan-500/80 active:scale-95 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Get Your AI Chef Now - Free Forever
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/features"
                className="group relative px-10 py-6 border-2 border-cyan-400/80 text-white font-semibold rounded-xl hover:bg-cyan-500/30 hover:border-cyan-200 transition-all duration-300 flex items-center justify-center gap-2 text-lg backdrop-blur-sm hover:scale-105 bg-cyan-500/10 active:scale-95 before:absolute before:inset-0 before:bg-cyan-400/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ✨ See What's Possible
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Benefits Section - Enhanced */}
            <div className="mt-32 mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">Why 100K+ Home Cooks Choose RecipeAI</h2>
              <p className="text-center text-slate-200 mb-16 max-w-3xl mx-auto text-lg">Discover the three core benefits that make RecipeAI the #1 AI recipe generator. Save 10+ hours every week on meal planning, cut your grocery bills by 30%, and reduce food waste by 40%. Our advanced AI learns your taste preferences and generates unlimited personalized recipes in seconds. Join thousands of families already cooking smarter, eating better, and saving money every single day.</p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-500/60 hover:border-cyan-300/80 transition hover:shadow-2xl hover:shadow-cyan-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/35 hover:to-blue-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">⏱️</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Save 10+ Hours Weekly</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-cyan-300">Reclaim your time.</span> Get personalized dinner ideas in seconds based on your ingredients and preferences. Spend less time planning, more time enjoying meals with family.</p>
                    <div className="pt-6 border-t border-cyan-400/40 text-cyan-300 text-sm font-semibold">✓ Instant recipe generation</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 border border-emerald-500/60 hover:border-emerald-300/80 transition hover:shadow-2xl hover:shadow-emerald-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-500/35 hover:to-teal-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💰</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Cut Grocery Bills by 30%</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-emerald-300">Save $1,200+ yearly.</span> Smart ingredient swaps and budget-friendly suggestions automatically reduce your grocery costs while maintaining quality and taste.</p>
                    <div className="pt-6 border-t border-emerald-400/40 text-emerald-300 text-sm font-semibold">✓ Smart budget optimization</div>
                  </div>
                </div>

                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/25 to-pink-500/25 border border-purple-500/60 hover:border-purple-300/80 transition hover:shadow-2xl hover:shadow-purple-500/50 duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-500/35 hover:to-pink-500/35 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">🌱</div>
                    <h3 className="text-white font-bold mb-4 text-2xl">Reduce Food Waste by 40%</h3>
                    <p className="text-slate-200 text-base leading-relaxed mb-6"><span className="font-bold text-purple-300">Cook sustainably.</span> AI-powered recipes use ingredients you already have, preventing spoilage and helping you cook smarter while saving money and protecting the environment.</p>
                    <div className="pt-6 border-t border-purple-400/40 text-purple-300 text-sm font-semibold">✓ Eco-friendly cooking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-t border-slate-700/50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advanced AI Features Built for Your Kitchen
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of AI-driven cooking with our comprehensive suite of features. From intelligent recipe generation and smart meal planning to budget optimization and nutrition tracking, every feature is designed to save you time, money, and reduce food waste. Experience the future of home cooking today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Recipe Generation</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Get unlimited personalized recipes in seconds based on your ingredients, dietary preferences, and cooking skill level. Our advanced AI learns your taste preferences and suggests delicious dishes you&apos;ll love. Say goodbye to boring meals and meal planning stress forever.</p>
              <div className="text-xs text-cyan-300 font-semibold">✓ Instant personalization • Taste learning • 10,000+ recipes</div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Intelligent Meal Planning</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Plan your entire week in minutes with AI-generated meal plans that balance nutrition, taste, and variety. Get perfectly balanced meals tailored to your family&apos;s preferences and dietary needs. Never stress about &quot;What&apos;s for dinner?&quot; again.</p>
              <div className="text-xs text-emerald-300 font-semibold">✓ Weekly planning • Balanced nutrition • Family-friendly</div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🛒</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Shopping Lists</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Get organized shopping lists with budget-friendly alternatives and intelligent substitutions. Shop efficiently, stay within budget, and save up to 30% on groceries. Our AI finds the best deals and suggests smart ingredient swaps automatically.</p>
              <div className="text-xs text-purple-300 font-semibold">✓ Budget optimization • Smart swaps • Save 30%</div>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Nutrition Tracking</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Track macros and hit your health goals with automatic nutrition analysis for every recipe. Stay healthy and achieve your fitness goals without sacrificing taste. Get detailed breakdowns of calories, protein, carbs, and fats for every meal.</p>
              <div className="text-xs text-orange-300 font-semibold">✓ Macro tracking • Health goals • Instant analysis</div>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 hover:border-indigo-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-white mb-3">Family-Friendly Planning</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Plan meals for your entire family with personalized preferences for each member. Create meals everyone loves while accommodating different dietary needs and restrictions. Keep picky eaters happy and everyone satisfied.</p>
              <div className="text-xs text-indigo-300 font-semibold">✓ Multi-profile • Dietary preferences • Allergy-safe</div>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 hover:border-blue-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 group cursor-pointer hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3">Chef-Curated Recipes</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">Access exclusive recipes from professional chefs and culinary experts. Learn cooking techniques from the best in the industry with 10,000+ recipes. Elevate your cooking skills with expert tips and restaurant-quality meals at home.</p>
              <div className="text-xs text-blue-300 font-semibold">✓ 10,000+ recipes • Expert tips • Pro techniques</div>
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
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30">
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

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 hover:border-orange-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30">
              <div className="text-5xl font-bold text-orange-400 mb-3">30%</div>
              <p className="text-slate-200 font-semibold">Grocery Savings</p>
              <p className="text-sm text-slate-300 mt-2">Average reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Recipes Section */}
      <SampleRecipes />

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">RecipeAI</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing home cooking with AI-powered meal planning that saves you time, money, and reduces food waste. Our mission is to make restaurant-quality cooking accessible to everyone, every day. Join the cooking revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 hover:border-emerald-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-slate-200">Advanced machine learning algorithms that understand your preferences and generate personalized recipes in seconds.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Time-Saving</h3>
              <p className="text-slate-200">Spend less time planning meals and more time enjoying them. Get dinner ideas in seconds, not hours.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-3">Sustainable</h3>
              <p className="text-slate-200">Reduce food waste by 40% with smart recipes that use ingredients you already have at home.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <p className="text-lg text-slate-100 leading-relaxed mb-6">
              <span className="font-bold text-emerald-300">RecipeAI</span> combines cutting-edge artificial intelligence with culinary expertise to transform how you approach cooking. Whether you&apos;re a beginner looking for simple recipes or an experienced cook seeking inspiration, our platform adapts to your skill level and preferences.
            </p>
            <p className="text-lg text-slate-100 leading-relaxed">
              Join over <span className="font-bold text-cyan-300">100,000+ home cooks</span> who are already saving time, cutting grocery costs, and discovering delicious meals every day. Start your culinary journey today—<span className="font-bold text-emerald-300">completely free, no credit card required.</span>
            </p>
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
