'use client'

import React from 'react'
import Link from 'next/link'
import {
  Zap,
  Shield,
  Cpu,
  BarChart3,
  Lock,
  Gauge,
  Cloud,
  Workflow,
} from 'lucide-react'

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  gradient: string
}

const features: Feature[] = [
  {
    id: 'performance',
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast Performance',
    description: 'Optimize your application with sub-millisecond response times and intelligent caching strategies.',
    benefits: [
      'Sub-millisecond latency',
      'Global CDN distribution',
      'Smart caching layer',
      'Real-time optimization',
    ],
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'security',
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and multi-layer security protocols to protect your sensitive data.',
    benefits: [
      'End-to-end encryption',
      '256-bit SSL/TLS',
      'DDoS protection',
      'Compliance certified',
    ],
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'intelligence',
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI-Powered Analytics',
    description: 'Leverage machine learning algorithms to gain deeper insights into your business metrics.',
    benefits: [
      'Predictive analytics',
      'Anomaly detection',
      'ML-powered recommendations',
      'Custom model training',
    ],
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 'scalability',
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Unlimited Scalability',
    description: 'Automatically scale your infrastructure to handle millions of concurrent users without downtime.',
    benefits: [
      'Auto-scaling infrastructure',
      'Load balancing',
      'Multi-region deployment',
      'Zero downtime updates',
    ],
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    id: 'compliance',
    icon: <Lock className="w-8 h-8" />,
    title: 'Compliance & Governance',
    description: 'Meet regulatory requirements with built-in compliance tools and audit trails.',
    benefits: [
      'GDPR compliant',
      'HIPAA certified',
      'SOC 2 audited',
      'Detailed audit logs',
    ],
    gradient: 'from-red-400 to-rose-500',
  },
  {
    id: 'monitoring',
    icon: <Gauge className="w-8 h-8" />,
    title: 'Advanced Monitoring',
    description: 'Real-time system monitoring with customizable alerts and comprehensive dashboards.',
    benefits: [
      'Real-time monitoring',
      'Custom dashboards',
      'Alerting system',
      'Performance metrics',
    ],
    gradient: 'from-indigo-400 to-blue-500',
  },
  {
    id: 'integration',
    icon: <Cloud className="w-8 h-8" />,
    title: 'Seamless Integration',
    description: 'Connect with 500+ third-party services and APIs with pre-built integrations.',
    benefits: [
      '500+ integrations',
      'Webhook support',
      'API marketplace',
      'Custom connectors',
    ],
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    id: 'automation',
    icon: <Workflow className="w-8 h-8" />,
    title: 'Workflow Automation',
    description: 'Automate complex workflows with visual builder and powerful automation rules.',
    benefits: [
      'Visual workflow builder',
      'Conditional logic',
      'Scheduled tasks',
      'Batch processing',
    ],
    gradient: 'from-amber-400 to-orange-500',
  },
]

const FeatureCard: React.FC<{
  feature: Feature
  index: number
}> = ({ feature, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative p-6 sm:p-8">
        <div
          className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
        >
          {feature.icon}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
          {feature.title}
        </h3>

        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          {feature.description}
        </p>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Key Benefits
          </p>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center text-gray-700 text-sm transition-all duration-300 group-hover:text-gray-900"
              >
                <span
                  className={`mr-3 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center text-sm font-semibold text-gray-600 transition-all duration-300 group-hover:text-gray-900">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
      />
    </div>
  )
}

const AdvancedFeaturesSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Advanced Features for Modern Teams
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Unlock powerful capabilities designed to scale with your business and
            deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row sm:gap-6">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Get Started Now
          </Link>
          <Link
            href="/learn-more"
            className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Join 10,000+ companies already using our advanced features to grow their business.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvancedFeaturesSection