'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Sparkles,
  TrendingUp,
  Lock
} from 'lucide-react'

interface Feature {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  gradient: string
}

const features: Feature[] = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with optimized infrastructure and caching systems.',
    benefits: ['50% faster load times', '99.9% uptime'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade security with end-to-end encryption and compliance certifications.',
    benefits: ['ISO 27001 certified', 'SOC 2 compliant'],
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and detailed reports to drive data-driven decisions.',
    benefits: ['Real-time dashboards', '200+ metrics tracked'],
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools that keep your team connected and productive.',
    benefits: ['Unlimited team members', 'Real-time sync'],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 5,
    icon: <Clock className="w-8 h-8" />,
    title: 'Time-Saving Automation',
    description: 'Automate repetitive tasks and save hours every week on manual work.',
    benefits: ['Save 20 hours/week', 'Reduce errors by 95%'],
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 6,
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI-Powered Intelligence',
    description: 'Leverage cutting-edge AI to get smart recommendations and predictive insights.',
    benefits: ['ML-driven predictions', 'Smart automation'],
    gradient: 'from-indigo-400 to-purple-600'
  },
  {
    id: 7,
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Scalable Growth',
    description: 'Grow without limits with infrastructure that scales with your business needs.',
    benefits: ['Handle 10M+ requests', 'Auto-scaling'],
    gradient: 'from-rose-400 to-red-500'
  },
  {
    id: 8,
    icon: <Lock className="w-8 h-8" />,
    title: 'Data Privacy',
    description: 'Your data is yours. Complete control with GDPR and privacy-first architecture.',
    benefits: ['GDPR compliant', 'Data ownership guaranteed'],
    gradient: 'from-teal-400 to-cyan-600'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const FeatureCard = ({ feature }: { feature: Feature }): React.ReactElement => {
  return (
    <motion.div
      variants={itemVariants}
      className="group h-full"
    >
      <div className="relative h-full rounded-2xl p-8 overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-300 bg-white dark:bg-gray-900">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg`}
          >
            {feature.icon}
          </motion.div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
            {feature.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {feature.description}
          </p>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {feature.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${feature.gradient} mt-2 flex-shrink-0`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`
          }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </div>
    </motion.div>
  )
}

const FeaturesShowcase = (): React.ReactElement => {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Powerful Features Built for Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to accelerate growth, save time, and achieve exceptional results with our comprehensive platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature: Feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">20+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Hours Saved Weekly</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">95%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Fewer Errors</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">99.9%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
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
  )
}

export default FeaturesShowcase