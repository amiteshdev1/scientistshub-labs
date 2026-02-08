'use client';

import { Shield, Eye, Lock, Server, Share2, Cookie, UserCheck, Mail, ArrowRight, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const lastUpdated = "February 09, 2026";

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-green)]/5 to-[var(--bg-primary)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--brand-green)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
            Your Privacy Matters
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Privacy Policy
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            We are committed to protecting your personal data and ensuring transparency in how we handle your information.
          </p>
          <p className="mt-4 text-[var(--text-muted)] text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Table of Contents (Sticky Sidebar) */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24 space-y-2 bg-[var(--card-bg)] border border-[var(--border-primary)] rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 text-[var(--text-primary)] flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[var(--accent-primary)]" />
                  Contents
                </h3>
                {[
                  { id: "collection", label: "Information We Collect" },
                  { id: "usage", label: "How We Use Your Data" },
                  { id: "sharing", label: "Information Sharing" },
                  { id: "security", label: "Data Security" },
                  { id: "cookies", label: "Cookies & Tracking" },
                  { id: "rights", label: "Your Rights" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="collection" className="scroll-mt-28">
                <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Eye className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Information We Collect</h2>
                    <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>We collect information to provide better services to all our users. This includes:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Personal Information:</strong> Information you provide to us directly, such as your name, email address, phone number, and company details when you fill out forms, request a quote, or contact support.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                        <li><strong>Technical Data:</strong> Device information, operating system, and connection type.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="usage" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <Server className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. How We Use Your Data</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>Your information helps us to:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Provide, maintain, and improve our services and website functionality.</li>
                        <li>Process transactions and send related information, including confirmations and invoices.</li>
                        <li>Respond to your comments, questions, and requests for customer service.</li>
                        <li>Send you technical notices, updates, security alerts, and administrative messages.</li>
                        <li>Analyze trends and usage to better understand user behavior and optimize our platform.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="sharing" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. Information Sharing</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        We do not sell your personal data. We may share your information only in the following circumstances:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>With Service Providers:</strong> We may share data with trusted third-party vendors who assist us in operating our website, conducting our business, or serving our users (e.g., email delivery services, hosting providers).</li>
                        <li><strong>Legal Compliance:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                        <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="security" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">4. Data Security</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        We implement robust industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

               <div id="cookies" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Cookie className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">5. Cookies & Tracking</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
                      </p>
                      <p className="mt-2">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="rights" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">6. Your Rights</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        Depending on your location, you may have certain rights regarding your personal information, including:
                      </p>
                       <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>The right to access the personal information we hold about you.</li>
                        <li>The right to request correction of inaccurate personal information.</li>
                        <li>The right to request deletion of your personal information.</li>
                        <li>The right to object to processing of your personal information.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                 <div className="bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                   <div className="relative z-10 text-center">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Contact for Privacy Concerns</h2>
                     <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                       If you have any questions about this Privacy Policy, please contact us.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-4">
                       <Link 
                        href="/contacts" 
                        className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25"
                      >
                        Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      <a 
                        href="mailto:support@scientistshub.com" 
                        className="inline-flex items-center justify-center bg-transparent border border-[var(--border-primary)] hover:bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                      >
                        support@scientistshub.com
                      </a>
                     </div>
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
