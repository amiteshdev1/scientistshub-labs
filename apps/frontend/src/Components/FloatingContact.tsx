'use client';

import { useState } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {isOpen && (
        <div className="mb-4 theme-card rounded-lg shadow-xl p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold theme-text-primary">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="theme-text-secondary hover:theme-text-primary"
              aria-label="Close"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            <Link
              href="/contacts"
              className="flex items-center gap-2 theme-text-secondary hover:text-brand-secondary transition-colors"
            >
              <Mail size={18} />
              <span>Send Message</span>
            </Link>
            <a
              href="tel:+918601760733"
              className="flex items-center gap-2 theme-text-secondary hover:text-brand-secondary transition-colors"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/918601760733"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 theme-text-secondary hover:text-brand-secondary transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-brand-secondary text-white shadow-lg hover:bg-brand-secondary/90 transition-all duration-300 hover:scale-110"
        aria-label="Contact us"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
