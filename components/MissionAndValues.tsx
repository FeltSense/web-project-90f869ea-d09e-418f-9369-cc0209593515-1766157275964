'use client';

import { ReactNode } from 'react';
import {
  Rocket,
  Target,
  Heart,
  Zap,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
} from 'lucide-react';

interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const MissionAndValues = (): ReactNode => {
  const values: ValueItem[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description:
        'We constantly push boundaries and embrace new technologies to create groundbreaking solutions.',
      gradient: 'from-emerald-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork and open communication to achieve extraordinary results.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description:
        'We conduct our business with honesty, transparency, and unwavering ethical principles.',
      gradient: 'from-blue-500 to-emerald-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creativity',
      description:
        'We foster an environment where bold ideas flourish and creative thinking is celebrated.',
      gradient: 'from-emerald-400 to-blue-400',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description:
        'We deliver consistent, dependable solutions that our customers can trust completely.',
      gradient: 'from-cyan-400 to-emerald-400',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth',
      description:
        'We are committed to continuous improvement and scaling our impact across the globe.',
      gradient: 'from-blue-400 to-cyan-400',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Mission & Values
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Guided by our core principles, we're building the future with purpose,
            passion, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                To empower organizations and individuals by delivering innovative
                solutions that transform challenges into opportunities, drive
                sustainable growth, and create meaningful impact in the world.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                To become the globally recognized leader in our industry, known for
                setting new standards of excellence, fostering innovation, and
                inspiring others to achieve their greatest potential.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500`}
                />
                <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition duration-300 h-full flex flex-col hover:translate-y-[-4px]">
                  <div
                    className={`p-3 bg-gradient-to-br ${value.gradient} rounded-lg w-fit mb-4 text-white`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur" />
          <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-slate-600/50 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              We're always looking for talented individuals who share our values and
              passion for excellence. Be part of something extraordinary.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;