'use client';

import React from 'react';

const KeyFeaturesShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Features Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our platform provides cutting-edge features designed to meet your business needs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg h-64"></div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesShowcase;
