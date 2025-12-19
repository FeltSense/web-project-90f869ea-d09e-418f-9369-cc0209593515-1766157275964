'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Persist success state in localStorage to survive RSC re-renders
  useEffect(() => {
    const saved = localStorage.getItem('form_submitted');
    if (saved === 'true') setStatus('success');
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '90f869ea-d09e-418f-9369-cc0209593515',
          founder_id: 'feb4fffa-df20-4405-a2ea-f8959bda9fb2',
        }),
      });

      if (response.ok) {
        localStorage.setItem('form_submitted', 'true');
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-4">Start Your Wellness Journey</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Join thousands of people discovering personalized nutrition and health insights. Fill out the form below and we'll get in touch within 24 hours.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Welcome to Hello My Love!</h3>
              <p className="text-slate-500">We'll be in touch soon with personalized recommendations for your health journey.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 text-slate-900 placeholder:text-slate-400 transition-all duration-300" 
                  placeholder="Sarah Johnson" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 text-slate-900 placeholder:text-slate-400 transition-all duration-300" 
                  placeholder="sarah@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 text-slate-900 placeholder:text-slate-400 transition-all duration-300" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'} 
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'Submitting...' : 'Get Started'}
                {status !== 'loading' && <Send className="w-5 h-5" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
