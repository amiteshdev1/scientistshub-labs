'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare, Tag, Globe, Clock, ArrowRight } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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

    const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL!;

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-secondary-blue)]/10 via-[var(--brand-sky-blue)]/10 to-[var(--brand-primary-blue)]/10 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--brand-secondary-blue)]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--brand-sky-blue)]/20 rounded-full blur-3xl animate-pulse-medium pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
            We're Here for You
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Have a question about our services, products, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Information (Left Column) */}
            <div className="space-y-8">
              <div className="bg-[var(--card-bg)]/50 backdrop-blur-md border border-[var(--border-secondary)] rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-[var(--accent-primary)]" /> Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Email Us</h3>
                      <a href="mailto:support@scientistshub.com" className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                        support@scientistshub.com
                      </a>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">For general inquiries and support</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">WhatsApp & Call Us </h3>
                      <a href="tel:+918601760733" className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                        +91 8601760733
                      </a>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">Mon-Fri from 9am to 6pm IST</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Visit Us</h3>
                      <p className="text-lg font-medium text-[var(--text-primary)]">
                        Noida, Uttar Pradesh
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">201301, India (Headquarters)</p>
                      
                      <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                        <p className="text-lg font-medium text-[var(--text-primary)]">
                          Jaunpur, Uttar Pradesh
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">222002, India (Branch)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours or Additional Info */}
              <div className="bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Business Hours</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST. Weekend inquiries will be addressed on the next business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-secondary)] rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
               {/* Decorative background element inside card */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-secondary)]/10 rounded-bl-[100px] pointer-events-none" />

              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-[var(--text-secondary)] mb-8">We usually respond within 24 hours.</p>
              
              

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Name *</label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                      placeholder="Your name"
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Email *</label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                      placeholder="your@email.com"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Subject *</label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)]"
                      placeholder="How can we help?"
                    />
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Message *</label>
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] text-[var(--text-primary)] resize-none"
                      placeholder="Tell us more..."
                    ></textarea>
                    <MessageSquare className="absolute left-3 top-5 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-[var(--accent-primary)] transition-colors" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500 font-medium">Message sent successfully!</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-500 font-medium">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
