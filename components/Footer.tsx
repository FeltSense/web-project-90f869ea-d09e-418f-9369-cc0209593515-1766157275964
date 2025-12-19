'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Linkedin', href: 'https://linkedin.com', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-24 md:py-32 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Hello My Love
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Nourish your body. Elevate your health. Love every bite.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-violet-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Empty spacer for layout */}
          <div />

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-violet-600 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-violet-600 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Hello My Love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
