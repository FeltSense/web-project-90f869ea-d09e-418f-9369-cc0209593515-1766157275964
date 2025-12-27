'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormState {
  email: string;
  isLoading: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function BetaSignup(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    isLoading: false,
    isSubmitted: false,
    error: null,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState((prev) => ({
      ...prev,
      email: e.target.value,
      error: null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formState.email) {
      setFormState((prev) => ({
        ...prev,
        error: 'Please enter your email address',
      }));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setFormState((prev) => ({
        ...prev,
        error: 'Please enter a valid email address',
      }));
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formState.email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to sign up');
      }

      setFormState({
        email: '',
        isLoading: false,
        isSubmitted: true,
        error: null,
      });

      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSubmitted: false,
        }));
      }, 5000);
    } catch (err) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'An error occurred. Please try again.',
      }));
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full backdrop-blur-sm">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-purple-200">Limited Beta Access Available</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-100 bg-clip-text text-transparent leading-tight">
            🤖 Try Our AI Recipe Generator Free
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Get 7 days of unlimited access to our AI-powered recipe generator. Create personalized recipes, meal plans, and smart shopping lists powered by advanced AI. No credit card required—cancel anytime.
          </p>
        </div>

        {/* Benefits section - Key Features of AI Recipe Generator */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-md border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Instant AI Recipes</h3>
            <p className="text-purple-200 text-sm">Get personalized recipes in seconds based on your available ingredients and dietary needs</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-md border border-purple-400/30 rounded-xl p-6 hover:border-purple-400/60 transition-all">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">Smart Meal Plans</h3>
            <p className="text-purple-200 text-sm">AI-generated weekly meal plans tailored to your preferences, budget, and allergies</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 backdrop-blur-md border border-pink-400/30 rounded-xl p-6 hover:border-pink-400/60 transition-all">
            <div className="text-3xl mb-3">🛒</div>
            <h3 className="text-white font-semibold mb-2">Shopping Lists</h3>
            <p className="text-purple-200 text-sm">Auto-generated shopping lists organized by store section, with price estimates</p>
          </div>
        </div>

        {/* Signup form */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12">
          {formState.isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">🎉 Welcome to the AI Recipe Generator Beta!</h3>
              <p className="text-purple-200 mb-4">Check your email for next steps and exclusive beta access to our AI recipe generator.</p>
              <p className="text-sm text-purple-300">You'll receive your login credentials shortly. Start creating personalized recipes in minutes!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-3">
                  Start Your Free Beta Trial
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/20 transition-all"
                    disabled={formState.isLoading}
                  />
                  <button
                    type="submit"
                    disabled={formState.isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {formState.isLoading ? 'Starting Trial...' : 'Try Free Now'}
                  </button>
                </div>
              </div>

              {formState.error && (
                <div className="flex items-center gap-2 text-red-300 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formState.error}
                </div>
              )}

              <p className="text-purple-300 text-sm mt-4">
                ✨ Your free trial includes: Unlimited AI recipes • Personalized meal plans • Smart shopping lists • Full nutrition tracking • 50+ dietary options • Mobile apps • Priority support
              </p>
            </form>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12,500+</div>
            <p className="text-purple-300 text-sm">Beta Waitlist Members</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">
                  ⭐
                </span>
              ))}
            </div>
            <p className="text-purple-300 text-sm">4.9/5 from 1,200+ testers</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">48 Hours</div>
            <p className="text-purple-300 text-sm">Limited offer closes soon</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
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
}