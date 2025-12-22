'use client';

import React from 'react';

const HomepageShowcase: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Homepage Showcase
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12 text-center">
          <p className="text-xl text-gray-600">
            Welcome to our platform. Experience the future of digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageShowcase;
