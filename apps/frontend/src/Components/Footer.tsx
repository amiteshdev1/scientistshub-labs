'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-bg-secondary border-t theme-border-primary py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/scientistshub-labs-logo.png"
                alt="ScientistsHub Labs Logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
              <div className="text-2xl font-bold theme-text-primary">
                ScientistsHub Labs
              </div>
            </div>
            <p className="theme-text-secondary text-sm mb-6 leading-relaxed">
              Innovation and product studio building cutting-edge solutions. We transform ideas into reality through advanced technology and creative engineering.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6">
              {[
                {
                  name: 'Facebook',
                  url: 'https://facebook.com/scientistshublabs',
                  icon: <Facebook className="w-5 h-5 fill-current" />,
                  className: 'bg-[#1877F2] hover:opacity-90'
                },
                  {
                  name: 'Instagram',
                  url: 'https://instagram.com/scientistshublabs',
                  icon: <Instagram className="w-5 h-5" />,
                  className: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90'
                },
                {
                  name: 'X (Twitter)',
                  url: 'https://x.com/scientistshubl',
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  className: 'bg-black hover:opacity-90 border border-gray-800'
                },
                {
                  name: 'YouTube',
                  url: 'https://youtube.com/@scientistshubhq',
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  className: 'bg-[#FF0000] hover:opacity-90'
                },
              
                {
                  name: 'LinkedIn',
                  url: 'https://linkedin.com/company/scientistshublabs',
                  icon: <Linkedin className="w-5 h-5 fill-current" />,
                  className: 'bg-[#0077B5] hover:opacity-90'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-white transition-all duration-300 shadow-sm hover:scale-110 ${social.className}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold theme-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold theme-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/development" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link href="/software" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Software Services
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold theme-text-primary mb-4">Contact</h3>
            <ul className="space-y-2 theme-text-secondary text-sm">
              <li>
                <Link href="/contact" className="hover:text-brand-secondary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="hover:text-brand-secondary transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-brand-secondary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t theme-border-primary pt-8 flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="theme-text-secondary text-sm">
            © {currentYear} ScientistsHub Labs.
An innovation initiative by ScientistsHub
          </div>
          <div className="flex gap-2">
            <Link href="/privacy" className="theme-text-secondary hover:text-brand-secondary text-sm transition-colors">
            |   Privacy Policy
            </Link>
            <Link href="/terms-condition" className="theme-text-secondary hover:text-brand-secondary text-sm transition-colors">
              |   Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
