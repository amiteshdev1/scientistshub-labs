'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail, type ContactFormData } from '@/lib/emailService';

export default function ContactsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      await sendContactEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Have a project in mind? Let's discuss how we can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="theme-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold theme-text-primary mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-500 font-medium">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block theme-text-primary font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg theme-bg-secondary theme-text-primary border border-gray-700 focus:border-[#0774E8] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block theme-text-primary font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg theme-bg-secondary theme-text-primary border border-gray-700 focus:border-[#0774E8] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block theme-text-primary font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg theme-bg-secondary theme-text-primary border border-gray-700 focus:border-[#0774E8] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block theme-text-primary font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg theme-bg-secondary theme-text-primary border border-gray-700 focus:border-[#0774E8] focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="theme-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-[#0774E8]">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold theme-text-primary mb-2">Email</h3>
                    <p className="theme-text-secondary">labs@scientistshub.com</p>
                  </div>
                </div>
              </div>

              <div className="theme-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-[#0774E8]">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold theme-text-primary mb-2">Phone</h3>
                    <p className="theme-text-secondary">+91 8601760733</p>
                  </div>
                </div>
              </div>

              <div className="theme-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="text-[#0774E8]">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold theme-text-primary mb-2">Headquarters (Primary)</h3>
                    <p className="theme-text-secondary mb-4">
                      Noida, Uttar Pradesh 201301, IN
                    </p>
                    
                    <h3 className="font-bold theme-text-primary mb-2">Other Location</h3>
                    <p className="theme-text-secondary">
                      Jaunpur, Uttar Pradesh 222002, IN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
