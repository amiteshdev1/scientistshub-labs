'use client';

import { Shield, FileText, Scale, Globe, AlertCircle, Clock, Book, Lock, ArrowRight, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const lastUpdated = "February 09, 2026";

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-secondary-blue)]/5 to-[var(--bg-primary)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--brand-secondary-blue)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
            Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Terms & Conditions
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. They outline your rights and responsibilities when working with ScientistsHub Labs.
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
                  <Book className="w-5 h-5 text-[var(--accent-primary)]" />
                  Table of Contents
                </h3>
                {[
                  { id: "acceptance", label: "Acceptance of Terms" },
                  { id: "services", label: "Services Provided" },
                  { id: "intellectual-property", label: "Intellectual Property" },
                  { id: "user-obligations", label: "User Obligations" },
                  { id: "payment", label: "Payment & Refund Policy" },
                  { id: "liability", label: "Limitation of Liability" },
                  { id: "termination", label: "Termination" },
                  { id: "governing-law", label: "Governing Law" },
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
              
              <div id="acceptance" className="scroll-mt-28">
                <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">1. Acceptance of Terms</h2>
                    <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        By accessing our website and utilizing the services provided by ScientistsHub Labs ("we," "us," or "our"), you ("User," "Client") agree to be legally bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
                      </p>
                      <p className="mt-4">
                        We reserve the right to modify these terms at any time. Significant changes will be communicated through our platform or via email. Continued use of our services constitutes acceptance of the revised terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="services" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <Globe className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">2. Services Provided</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>ScientistsHub Labs specializes in:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                        <li>Custom Software Development</li>
                        <li>Web & Mobile App Development</li>
                        <li>Digital Marketing & SEO Strategies</li>
                        <li>UI/UX Design Services</li>
                        <li>Cloud Solutions & DevOps</li>
                      </ul>
                      <p>
                        Specific deliverables, timelines, and costs for custom projects will be outlined in a separate Statement of Work (SOW) or project proposal agreed upon by both parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="intellectual-property" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Shield className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">3. Intellectual Property</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        <strong>Client Ownership:</strong> Upon full payment, the Client owns all rights, title, and interest in the custom code, designs, and content specifically created for them.
                      </p>
                      <p className="mt-4">
                        <strong>ScientistsHub Labs Ownership:</strong> We retain ownership of our pre-existing code, libraries, tools, and methodologies used to create the deliverables. We grant the Client a perpetual, non-exclusive license to use these background technologies for their intended purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="user-obligations" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">4. User Obligations</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>You agree to:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Provide accurate and complete information required for service delivery.</li>
                        <li>Ensure you have the necessary rights to any content (images, text, data) you provide us.</li>
                        <li>Not use our services for any illegal or unauthorized purpose.</li>
                        <li>Collaborate in a timely manner regarding feedback and approvals to stay on project schedules.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

               <div id="payment" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <Scale className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">5. Payment & Refund Policy</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        <strong>Payment Terms:</strong> Payments are due as per the schedule outlined in your specific project agreement/invoice. Typical terms involve a deposit to commence work, with milestone payments thereafter.
                      </p>
                      <p className="mt-4">
                        <strong>Refunds:</strong> Deposits are generally non-refundable once work has commenced. Refunds for subsequent milestones are evaluated based on work completed and are at the discretion of ScientistsHub Labs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="liability" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">6. Limitation of Liability</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        To the fullest extent permitted by law, ScientistsHub Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data, arising out of or in connection with our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="termination" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">7. Termination</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        Either party may terminate a service agreement with written notice if the other party breaches a material term. Upon termination, the Client is responsible for payment for all work completed up to the termination date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="governing-law" className="scroll-mt-28">
                 <div className="flex items-start gap-4 mb-4">
                  {/* <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center text-slate-500 shrink-0">
                    <Gavel className="w-6 h-6" />
                  </div> */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">8. Governing Law</h2>
                     <div className="prose prose-lg text-[var(--text-secondary)]">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in Jaunpur, Uttar Pradesh, India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                 <div className="bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-3xl p-8 md:p-10 relative overflow-hidden">
                   <div className="relative z-10 text-center">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Questions about these Terms?</h2>
                     <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                       If you have any questions or concerns regarding our terms and conditions, please don't hesitate to reach out to our legal team.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-4">
                       <Link 
                        href="/contact" 
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
