'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-bg-secondary border-t theme-border-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold theme-text-primary mb-4">
              ScientistsHub Labs
            </div>
            <p className="theme-text-secondary text-sm mb-6 leading-relaxed">
              Innovation and product studio building cutting-edge solutions. We transform ideas into reality through advanced technology and creative engineering.
            </p>
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
                <Link href="/services/development" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="theme-text-secondary hover:text-brand-secondary transition-colors">
                  Software Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="theme-text-secondary hover:text-brand-secondary transition-colors">
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
                <Link href="/contacts" className="hover:text-brand-secondary transition-colors">
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
        <div className="border-t theme-border-primary pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="theme-text-secondary text-sm">
            © {currentYear} ScientistsHub Labs. All Rights Reserved. | Engineered by ScientistsHub Labs
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="theme-text-secondary hover:text-brand-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-condition" className="theme-text-secondary hover:text-brand-secondary text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
