'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Users,
  Lock,
  Clock,
  TrendingUp,
} from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance optimized for speed and efficiency',
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-yellow-400 to-orange-500',
    iconBg: 'bg-yellow-100',
  },
  {
    id: 2,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications',
    icon: <Shield className="w-6 h-6" />,
    gradient: 'from-blue-400 to-cyan-500',
    iconBg: 'bg-blue-100',
  },
  {
    id: 3,
    title: 'Rapid Deployment',
    description: 'Get up and running in minutes with our streamlined setup process',
    icon: <Rocket className="w-6 h-6" />,
    gradient: 'from-purple-400 to-pink-500',
    iconBg: 'bg-purple-100',
  },
  {
    id: 4,
    title: 'Advanced Analytics',
    description: 'Gain deep insights with comprehensive analytics and real-time reporting',
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: 'from-green-400 to-emerald-500',
    iconBg: 'bg-green-100',
  },
  {
    id: 5,
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools for seamless team communication and workflows',
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-indigo-400 to-blue-500',
    iconBg: 'bg-indigo-100',
  },
  {
    id: 6,
    title: 'Privacy First',
    description: 'Your data stays yours with strict privacy controls and transparent practices',
    icon: <Lock className="w-6 h-6" />,
    gradient: 'from-rose-400 to-red-500',
    iconBg: 'bg-rose-100',
  },
  {
    id: 7,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you whenever you need help',
    icon: <Clock className="w-6 h-6" />,
    gradient: 'from-amber-400 to-yellow-500',
    iconBg: 'bg-amber-100',
  },
  {
    id: 8,
    title: 'Continuous Growth',
    description: 'Regular updates and new features to help your business scale and succeed',
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: 'from-teal-400 to-green-500',
    iconBg: 'bg-teal-100',
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
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-full p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`${feature.iconBg} p-3 rounded-lg flex items-center justify-center`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}>
              {feature.icon}
            </div>
          </motion.div>

          <motion.div
            className="text-slate-400"
            animate={isHovered ? { opacity: 1 } : { opacity: 0.5 }}
          >
            <span className="text-sm font-medium">0{index + 1}</span>
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
          {feature.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {feature.description}
        </p>

        <motion.div
          className="flex items-center text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={isHovered ? { x: 4 } : { x: 0 }}
        >
          Learn more
          <span className="ml-2">→</span>
        </motion.div>

        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
        />
      </div>
    </motion.div>
  );
};

export default function HeroFeaturesShowcase(): React.ReactElement {
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6"
          >
            <span className="text-sm font-medium text-blue-700">✨ Powerful Features</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive features that empower thousands of businesses to
            achieve their goals and scale rapidly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/signup"
              className="block w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              Start Free Trial
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/features"
              className="block w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 text-center"
            >
              Explore All Features
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 text-center text-sm text-slate-600"
        >
          <p>
            No credit card required • Free forever plan available • 14-day full feature
            access
          </p>
        </motion.div>
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
      `}</style>
    </section>
  );
}