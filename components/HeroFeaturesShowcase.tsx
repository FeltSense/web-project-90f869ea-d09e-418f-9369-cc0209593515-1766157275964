'use client';

import React from 'react';

const HeroFeaturesShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Capabilities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature {item}</h3>
              <p className="text-gray-600">Discover the power of our innovative solutions.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeaturesShowcase;
