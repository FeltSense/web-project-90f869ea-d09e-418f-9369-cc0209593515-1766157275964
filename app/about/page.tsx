'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Target } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-orange-950 to-rose-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.2),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">Story</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium">
                Empowering home cooks with AI-powered recipes tailored to their unique tastes and needs
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe everyone deserves access to personalized, delicious recipes tailored to their tastes, dietary needs, and available ingredients. By combining cutting-edge artificial intelligence with culinary expertise, we empower home cooks to create restaurant-quality meals with confidence and joy. Our mission is to transform cooking from a chore into a joy—saving time, reducing costs, and inspiring creativity in every kitchen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <Heart className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Passion for Food</h3>
                <p className="text-gray-700">
                  We believe cooking should be joyful, creative, and accessible to everyone regardless of skill level.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <Sparkles className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push the boundaries of AI and technology to create better culinary experiences.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-700">
                  Our platform thrives on shared knowledge, user feedback, and collaborative recipe development.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <Target className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Empowerment</h3>
                <p className="text-gray-700">
                  We empower home cooks with tools and knowledge to create delicious, healthy meals with confidence and joy.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              How It Started
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our journey began with a simple frustration: finding recipes that match your dietary preferences, available ingredients, and time constraints is incredibly difficult. We envisioned an intelligent system that could generate personalized recipes instantly, making cooking accessible and enjoyable for everyone. We saw an opportunity to use AI to solve a universal problem—the daily question of &quot;What&apos;s for dinner?&quot;
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Building the Platform</h3>
              <p className="text-gray-700 leading-relaxed">
                We assembled a world-class team combining machine learning expertise, culinary mastery, and design innovation. Together, we developed proprietary AI models trained on thousands of recipes and refined through feedback from users around the world.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 border-l-4 border-rose-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Growing Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                What started as a small project has grown into a global platform used by millions. We have expanded our AI capabilities, added support for diverse dietary needs, and built a thriving community of food enthusiasts who use our platform every day to discover, create, and share meals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Meet Our Team
            </motion.h2>

            <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Our diverse team brings together expertise in artificial intelligence, culinary arts, product design, and user experience. We&apos;re passionate about making cooking accessible, enjoyable, and personalized for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👨‍💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI &amp; Engineering</h3>
                <p className="text-gray-700">
                  Our machine learning engineers build the intelligent algorithms that power personalized recipe generation and continuous learning from user preferences.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👨‍🍳</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Culinary Experts</h3>
                <p className="text-gray-700">
                  Professional chefs and nutritionists ensure every recipe is delicious, nutritionally balanced, and tested for quality and accuracy.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200 hover:border-rose-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👩‍🎨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Design &amp; Product</h3>
                <p className="text-gray-700">
                  Our designers and product managers create intuitive, beautiful experiences that make cooking with AI feel natural and delightful.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white"
          >
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-orange-100 text-lg">Active Users</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">500K+</div>
              <p className="text-orange-100 text-lg">Recipes Generated</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-orange-100 text-lg">Dietary Preferences</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <p className="text-orange-100 text-lg">Average Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Kitchen?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-blue-50 max-w-2xl mx-auto">
              Join 100,000+ home cooks using AI-powered recipes to create delicious meals with confidence. Start your free 7-day trial today—no credit card required.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/pricing"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-white/50 transition-all transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
