'use client';

import { Mail, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Support Center
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              We're here to help! Get in touch with our support team
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              href="/contacts"
              className="theme-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#0774E8] mb-4 flex justify-center">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Email Support</h3>
              <p className="theme-text-secondary text-sm">
                Get help via email within 24 hours
              </p>
            </Link>

            <Link
              href="/contacts"
              className="theme-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#0774E8] mb-4 flex justify-center">
                <MessageCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Live Chat</h3>
              <p className="theme-text-secondary text-sm">
                Chat with our team in real-time
              </p>
            </Link>

            <Link
              href="/contacts"
              className="theme-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-[#0774E8] mb-4 flex justify-center">
                <Phone className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Phone Support</h3>
              <p className="theme-text-secondary text-sm">
                Call us for immediate assistance
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
