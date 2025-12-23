'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, User, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Home Cooking',
    slug: 'ai-revolutionizing-cooking',
    excerpt: 'Discover how artificial intelligence is transforming the way we cook, plan meals, and manage nutrition at home.',
    author: 'Chef Sarah',
    date: '2024-01-15',
    category: 'AI Cooking',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    readTime: 5,
  },
  {
    id: '2',
    title: '10 Time-Saving Meal Prep Strategies',
    slug: 'meal-prep-strategies',
    excerpt: 'Learn proven techniques to save hours on meal planning and preparation every week.',
    author: 'Nutrition Expert',
    date: '2024-01-10',
    category: 'Meal Planning',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Personalized Nutrition: The Future of Health',
    slug: 'personalized-nutrition-health',
    excerpt: 'Explore how AI-powered nutrition tracking helps you achieve your health goals faster.',
    author: 'Dr. James',
    date: '2024-01-08',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Budget-Friendly Recipes That Taste Amazing',
    slug: 'budget-friendly-recipes',
    excerpt: 'Discover delicious recipes that help you eat well without breaking the bank.',
    author: 'Budget Chef',
    date: '2024-01-05',
    category: 'Recipes',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
    readTime: 8,
  },
  {
    id: '5',
    title: 'Reduce Food Waste with Smart Shopping',
    slug: 'reduce-food-waste-shopping',
    excerpt: 'Learn how intelligent meal planning and shopping lists can dramatically reduce your food waste.',
    author: 'Sustainability Expert',
    date: '2024-01-01',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1488459716781-6f3ee1e28e54?w=600&h=400&fit=crop',
    readTime: 9,
  },
  {
    id: '6',
    title: 'Success Stories: How Users Transformed Their Cooking',
    slug: 'user-success-stories',
    excerpt: 'Real stories from our community about how AI-powered meal planning changed their lives.',
    author: 'Community Team',
    date: '2023-12-28',
    category: 'Success Stories',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    readTime: 10,
  },
];

interface SearchFilters {
  query: string;
  category: string;
}

export default function BlogPage(): JSX.Element {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: '',
  });

  const categories: string[] = Array.from(
    new Set(blogPosts.map((post) => post.category))
  ).sort();

  const filteredPosts: BlogPost[] = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filters.query.toLowerCase()) ||
        post.author.toLowerCase().includes(filters.query.toLowerCase());

      const matchesCategory =
        !filters.category || post.category === filters.category;

      return matchesQuery && matchesCategory;
    });
  }, [filters]);

  const handleSearchChange = (value: string): void => {
    setFilters((prev) => ({ ...prev, query: value }));
  };

  const handleCategoryChange = (value: string): void => {
    setFilters((prev) => ({ ...prev, category: value }));
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="mb-12 pt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200/50">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🍳 Cooking Tips & Recipe Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover expert cooking tips, AI-powered recipe ideas, meal planning strategies, and nutrition insights to transform your kitchen.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-4 bg-white rounded-lg shadow-md p-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes, tips, and cooking advice..."
              value={filters.query}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filters.category === ''
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filters.category === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} posts
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="space-y-2 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="text-xs text-gray-500">
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-emerald-600 font-semibold text-sm hover:text-emerald-800">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-2">No posts found</p>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
