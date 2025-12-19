'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-indigo-500/30 backdrop-blur-md shadow-lg shadow-indigo-500/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors duration-300 group">
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-indigo-400 transition-all duration-300">🍳 Hello My Love</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold rounded-xl px-6 py-2.5 transition-all duration-300 shadow-sm hover:shadow-indigo-500/50 hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-slate-300 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-800 bg-slate-950">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block py-3 text-slate-400 hover:text-white font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="block mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-indigo-500/50 hover:shadow-md text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
