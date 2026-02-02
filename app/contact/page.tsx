'use client';

import type { Metadata } from "next";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // TODO: Integrate with your backend API or service (Formspree, SendGrid, etc.)
    // For now, this is a placeholder that simulates submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Let's build something <span className="gradient-text">meaningful</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                Thank you! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                Something went wrong. Please try again.
              </div>
            )}
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Or reach out to us directly at
            </p>
            <a 
              href="mailto:hello@labs.scientistshub.com" 
              className="text-primary hover:text-primary-light transition-colors text-lg font-semibold"
            >
              hello@labs.scientistshub.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
