'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Heart,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  number: string;
  label: string;
  suffix?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const values: ValueItem[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Innovation',
    description:
      'We constantly push boundaries and embrace new ideas to deliver cutting-edge solutions.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Integrity',
    description:
      'We believe in transparency, honesty, and doing the right thing in all our dealings.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Excellence',
    description:
      'We strive for the highest standards in everything we do, from products to service.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Collaboration',
    description:
      'We work together as a unified team to achieve common goals and celebrate victories.',
  },
];

const stats: StatItem[] = [
  { number: '10+', label: 'Years of Experience' },
  { number: '500+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
  { number: '100%', label: 'Customer Satisfaction' },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/team/sarah.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    image: '/images/team/michael.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'COO',
    image: '/images/team/emily.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Lead Designer',
    image: '/images/team/david.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function AboutUs(): React.ReactElement {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white">
      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of innovators, creators, and problem-solvers dedicated to
              transforming ideas into reality and making a positive impact on the world.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border-l-4 border-blue-600"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses and individuals by providing innovative solutions that
                  drive growth, foster creativity, and create meaningful connections in an
                  increasingly digital world. We believe in the power of technology to transform
                  lives and are committed to making our solutions accessible, reliable, and
                  impactful for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do and define who we are
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014, our company started with a simple vision: to make technology
                  accessible and affordable for everyone. What began as a small team of three
                  passionate individuals has grown into a thriving company with a diverse team
                  of talented professionals.
                </p>
                <p>
                  Over the past decade, we have witnessed the transformative power of innovation
                  and have dedicated ourselves to creating products and services that make a real
                  difference in people's lives. Our journey has been marked by challenges, growth,
                  and countless success stories from our clients.
                </p>
                <p>
                  Today, we continue to evolve, adapt, and innovate. We remain committed to our
                  core values while embracing new technologies and methodologies. Our success is
                  not just measured by our achievements, but by the positive impact we create for
                  our clients, employees, and communities.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {['Growth', 'Innovation', 'Trust', 'Impact'].map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-blue-600 shadow-md"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600" />
              <Image
                src="/images/office.jpg"
                alt="Our team working together"
                fill
                className="object-cover mix-blend-overlay"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Milestones that define our journey and impact
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                    {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
                  </div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="w-10 h-10 text-blue-600" />,
                title: 'Industry Recognition',
                description: 'Multiple awards for innovation and excellence in our field',
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-indigo-600" />,
                title: 'Consistent Growth',
                description: 'Year-over-year growth demonstrating market leadership',
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: 'Team Excellence',
                description: 'Talented individuals united by shared vision and values',
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced leaders driving innovation and growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative h-80 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-white border-t-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22white%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22/></svg>')] bg-repeat" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our
              services, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-2 border-white"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}