'use client';

import { Mail, MessageCircle, Phone, Search, Book, FileQuestion, Users, Zap, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section with Search */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-secondary-blue)]/5 to-[var(--bg-primary)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--brand-secondary-blue)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
              Support Center
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
              How can we help you?
            </h1>
            
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mt-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-secondary-blue)] to-[var(--brand-sky-blue)] rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl shadow-xl flex items-center p-2 transition-transform group-hover:scale-[1.01]">
                <Search className="w-6 h-6 text-[var(--text-muted)] ml-4" />
                <input 
                  type="text" 
                  placeholder="Search for answers, topics, or articles..." 
                  className="w-full bg-transparent border-none px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none text-lg"
                />
                <button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white px-6 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/25">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Channels */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a href="mailto:support@scientistshub.com" className="group">
              <div className="bg-[var(--card-bg)] border border-[var(--border-secondary)] rounded-3xl p-8 hover:shadow-xl hover:border-[var(--accent-primary)]/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-secondary-blue)]/5 rounded-bl-[100px] pointer-events-none group-hover:bg-[var(--brand-secondary-blue)]/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-secondary-blue)]/10 flex items-center justify-center text-[var(--brand-secondary-blue)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">Email Support</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Get in-depth answers to your questions. We usually reply within 24 hours.
                </p>
                <div className="flex items-center text-sm font-medium text-[var(--brand-secondary-blue)] group-hover:translate-x-1 transition-transform">
                  Send an email <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>

            <a href="https://wa.me/918601760733" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-[var(--card-bg)] border border-[var(--border-secondary)] rounded-3xl p-8 hover:shadow-xl hover:border-[var(--accent-primary)]/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-sky-blue)]/5 rounded-bl-[100px] pointer-events-none group-hover:bg-[var(--brand-sky-blue)]/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-sky-blue)]/10 flex items-center justify-center text-[var(--brand-sky-blue)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">Live WhatsApp Chat</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Chat with our team in real-time for immediate assistance during business hours.
                </p>
                <div className="flex items-center text-sm font-medium text-[var(--brand-sky-blue)] group-hover:translate-x-1 transition-transform">
                  Start chat <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>

            <a href="tel:+918601760733" className="group">
              <div className="bg-[var(--card-bg)] border border-[var(--border-secondary)] rounded-3xl p-8 hover:shadow-xl hover:border-[var(--accent-primary)]/50 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-green)]/5 rounded-bl-[100px] pointer-events-none group-hover:bg-[var(--brand-green)]/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">Phone Support</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Direct line to our support specialists for urgent or complex issues.
                </p>
                <div className="flex items-center text-sm font-medium text-[var(--brand-green)] group-hover:translate-x-1 transition-transform">
                  Call us <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Common Topics / FAQ Preview */}
      <section className="py-20 bg-[var(--bg-secondary)]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                { question: "What is your typical project timeline?", answer: "Timelines vary by project scope. Small projects typically take 2-4 weeks, while complex solutions may take 3-6 months. We provide detailed timelines in our initial proposal." },
                { question: "Do you offer post-launch support?", answer: "Yes! We offer comprehensive maintenance and support packages to ensure your solution remains secure, up-to-date, and performant after launch." },
                { question: "How do you handle data security?", answer: "Security is our top priority. We implement industry-standard encryption, secure authentication methods, and regular security audits for all our projects." },
                { question: "Can you work with our existing team?", answer: "Absolutely. We often collaborate with internal teams to augment capabilities or handle specific components of a larger system." }
              ].map((faq, index) => (
                <div key={index} className="bg-[var(--card-bg)] border border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--accent-primary)] transition-colors duration-300">
                  <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                    <FileQuestion className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-secondary)] ml-8 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contacts" className="inline-flex items-center text-[var(--accent-primary)] font-medium hover:underline">
                View all FAQs <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className=" max-w-5xl mx-auto text-center bg-[var(--bg-tertiary)] rounded-[2.5rem] p-4 md:p-8 lg:p-12 border border-[var(--border-secondary)] shadow-2xl relative overflow-hidden group">
            {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div> */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Still need assistance?</h2>
              <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">
                Our detailed documentation might have the answer you're looking for, or our team is just a message away.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link 
                  href="/contacts" 
                  className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Contact Support <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Browse Docs
                </Link>
              </div>
            </div>
          </div>

      </section>
    </div>
  );
}
