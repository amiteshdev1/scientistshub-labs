'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building, Layers, DollarSign, Calendar, FileText } from 'lucide-react';
import { sendQuoteEmail, type QuoteFormData } from '@/lib/emailService';

export default function RequestQuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await sendQuoteEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        description: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send quote request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-secondary-blue)]/10 via-[var(--brand-sky-blue)]/10 to-[var(--brand-primary-blue)]/10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand-secondary-blue)]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--brand-sky-blue)]/20 rounded-full blur-3xl animate-pulse-medium pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
            Start Your Journey
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Tell us about your project, and we'll craft the perfect solution for you.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto relative">
            {/* Form Container */}
            <div className="bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-secondary)] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              
             
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-secondary)] pb-2">
                    <User className="w-5 h-5 text-[var(--accent-primary)]" /> Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">Full Name *</label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                          placeholder="John Doe"
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email Address *</label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                          placeholder="john@company.com"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-[var(--text-secondary)]">Phone Number *</label>
                      <div className="relative">
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                          placeholder="+91 98765 43210"
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-[var(--text-secondary)]">Company Name</label>
                      <div className="relative">
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                          placeholder="Your Company Ltd."
                        />
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-secondary)] pb-2">
                    <Layers className="w-5 h-5 text-[var(--accent-primary)]" /> Project Details
                  </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-[var(--text-secondary)]">Service Required *</label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--text-primary)] appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a service category</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="software-services">Software Services</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="custom-solution">Custom Solution</option>
                        </select>
                        <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-[var(--text-secondary)]">Budget Range *</label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--text-primary)] appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select your budget</option>
                            <option value="<50k">Less than ₹50,000</option>
                            <option value="50k-1L">₹50,000 - ₹1 Lakh</option>
                            <option value="1L-3L">₹1 Lakh - ₹3 Lakhs</option>
                            <option value="3L-5L">₹3 Lakhs - ₹5 Lakhs</option>
                            <option value=">5L">More than ₹5 Lakhs</option>
                          </select>
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timeline" className="text-sm font-medium text-[var(--text-secondary)]">Expected Timeline *</label>
                        <div className="relative">
                          <select
                            id="timeline"
                            name="timeline"
                            required
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all text-[var(--text-primary)] appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select timeline</option>
                            <option value="urgent">Urgent (&lt; 1 month)</option>
                            <option value="1-3months">1-3 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="6+months">6+ months</option>
                          </select>
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium text-[var(--text-secondary)]">Project Description *</label>
                      <div className="relative">
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={6}
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Tell us about your project goals, key features, and any specific requirements you have in mind..."
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)] resize-none"
                        />
                        <FileText className="absolute left-3 top-5 w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-[var(--text-secondary)] mt-4">
                    By submitting this form, you agree to our privacy policy. We respect your data and privacy.
                  </p>
                </div>
              </form>
               {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-green-500 font-bold text-lg">Quote Request Received!</h3>
                    <p className="text-green-500/80">We'll review your details and get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-red-500 font-bold text-lg">Something went wrong</h3>
                    <p className="text-red-500/80">{errorMessage}</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
