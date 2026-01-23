'use client';

import { Clock, ChefHat, Flame, Users } from 'lucide-react';

interface Recipe {
  id: number
  name: string
  cuisine: string
  cookingTime: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  servings: number
  gradient: string
  icon: React.ReactNode
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Thai Green Curry',
    cuisine: 'Thai',
    cookingTime: 25,
    difficulty: 'Medium',
    description: 'Aromatic and spicy coconut-based curry with fresh vegetables and basil. AI-optimized for your taste preferences.',
    servings: 4,
    gradient: 'from-green-400 to-emerald-600',
    icon: <ChefHat className="w-8 h-8" />,
  },
  {
    id: 2,
    name: 'Margherita Pasta',
    cuisine: 'Italian',
    cookingTime: 20,
    difficulty: 'Easy',
    description: 'Classic pasta with fresh tomatoes, basil, and creamy mozzarella. Perfect for quick weeknight dinners.',
    servings: 2,
    gradient: 'from-red-400 to-pink-600',
    icon: <Flame className="w-8 h-8" />,
  },
  {
    id: 3,
    name: 'Beef Tacos',
    cuisine: 'Mexican',
    cookingTime: 30,
    difficulty: 'Easy',
    description: 'Seasoned ground beef with fresh toppings and warm tortillas. Customizable for any dietary preference.',
    servings: 4,
    gradient: 'from-yellow-400 to-orange-600',
    icon: <ChefHat className="w-8 h-8" />,
  },
  {
    id: 4,
    name: 'Sushi Rolls',
    cuisine: 'Japanese',
    cookingTime: 40,
    difficulty: 'Hard',
    description: 'Delicate rolls with fresh fish, vegetables, and perfectly seasoned rice. Step-by-step AI guidance included.',
    servings: 4,
    gradient: 'from-blue-400 to-cyan-600',
    icon: <Flame className="w-8 h-8" />,
  },
  {
    id: 5,
    name: 'Coq au Vin',
    cuisine: 'French',
    cookingTime: 90,
    difficulty: 'Hard',
    description: 'Tender chicken braised in rich red wine sauce with mushrooms and pearl onions. Restaurant-quality at home.',
    servings: 6,
    gradient: 'from-purple-400 to-indigo-600',
    icon: <ChefHat className="w-8 h-8" />,
  },
  {
    id: 6,
    name: 'Pad Thai',
    cuisine: 'Thai',
    cookingTime: 15,
    difficulty: 'Medium',
    description: 'Stir-fried noodles with shrimp, peanuts, and lime in a savory sweet sauce. Ready in under 20 minutes.',
    servings: 2,
    gradient: 'from-amber-400 to-yellow-600',
    icon: <Flame className="w-8 h-8" />,
  },
]

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'Hard':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function SampleRecipes(): React.ReactElement {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-300">
            <p className="text-sm font-bold text-emerald-700">✨ AI-POWERED RECIPE GENERATION</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Unlimited Recipes<br />
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Personalized to Your Taste & Budget
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-semibold leading-relaxed">
            Our advanced AI generates unlimited personalized recipes based on your taste preferences, dietary restrictions, and available ingredients. Each recipe includes detailed cooking times, difficulty levels, complete nutrition information, and step-by-step instructions to ensure perfect results every time. From quick weeknight dinners to impressive weekend meals, discover recipes you'll actually want to cook—and your family will love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-xl">🤖</span>
              <span className="text-sm font-semibold text-blue-900">AI-Powered Generation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-xl">🎯</span>
              <span className="text-sm font-semibold text-purple-900">Personalized to You</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-lg border border-pink-200">
              <span className="text-xl">⚡</span>
              <span className="text-sm font-semibold text-pink-900">Instant Results</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border border-gray-100 hover:border-emerald-200"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${recipe.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
              />

              <div className={`h-40 bg-gradient-to-br ${recipe.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                </div>
                <div className="text-white relative z-10 text-6xl">
                  {recipe.icon}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-gray-900">🤖 AI Generated</span>
                </div>
              </div>

              <div className="p-7 relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                    {recipe.name}
                  </h3>
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
                    {recipe.cuisine} Cuisine
                  </p>
                </div>

                <p className="text-gray-700 text-sm mb-5 line-clamp-3 font-medium leading-relaxed">
                  {recipe.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${getDifficultyColor(recipe.difficulty)}`}>
                    <Flame className="w-3 h-3" />
                    {recipe.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    <span>📊</span>
                    Nutrition Info
                  </span>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>{recipe.cookingTime} mins</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span>Serves {recipe.servings}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-5 px-4 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                  View Full Recipe
                </button>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-200 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section - Try the AI Recipe Generator */}
        <div className="mt-16 mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Cook Smarter & Save Money?
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 font-semibold">
            Start using our AI recipe generator today and discover unlimited personalized recipes tailored to your taste, dietary needs, and available ingredients. Join 100K+ home cooks already saving 10+ hours weekly and cutting grocery bills by 30%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-emerald-600 font-black text-base sm:text-lg rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              🤖 Try AI Recipe Generator - Free
            </button>
            <button className="px-8 sm:px-12 py-4 sm:py-5 bg-white/20 border-2 border-white text-white font-bold text-base sm:text-lg rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Key Features Highlight Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Our AI Recipe Generator Stands Out
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by advanced machine learning to deliver the perfect recipe every time. Experience the difference that intelligent AI makes in your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Personalized</h4>
              <p className="text-sm text-gray-700">AI learns your taste preferences and dietary needs for truly customized recipes</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Instant Generation</h4>
              <p className="text-sm text-gray-700">Get unlimited recipes in seconds based on your ingredients and preferences</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">📊</div>
              <h4 className="font-bold text-gray-900 mb-2">Complete Nutrition</h4>
              <p className="text-sm text-gray-700">Full nutritional breakdown and macro tracking for every recipe</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">🌍</div>
              <h4 className="font-bold text-gray-900 mb-2">Global Cuisines</h4>
              <p className="text-sm text-gray-700">Explore recipes from 50+ cuisines worldwide, all AI-optimized for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
