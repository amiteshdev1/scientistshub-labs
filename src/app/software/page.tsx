'use client';

import Link from 'next/link';
import { Building2, Hospital, Zap, Database, ArrowRight, CheckCircle, Layout } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import SoftwareDashboard from '@/Components/dashboards/SoftwareDashboard';

export default function SoftwareServicesPage() {
  const services = [
    // {
    //   icon: <Building2 className="w-8 h-8" />,
    //   title: 'Real Estate CRM',
    //   slug: 'real-estate-crm',
    //   description: 'Comprehensive CRM solution designed specifically for real estate professionals to manage leads and close deals faster.',
    //   bg: 'bg-blue-50 dark:bg-blue-900/20',
    //   color: 'text-blue-500',
    //   features: [
    //     'Lead Management',
    //     'Property Listings',
    //     'Client Portal',
    //     'Automated Follow-ups'
    //   ]
    // },
    // {
    //   icon: <Hospital className="w-8 h-8" />,
    //   title: 'Hospital CRM',
    //   slug: 'hospital-crm',
    //   description: 'Streamline hospital operations with our advanced Hospital CRM software. Manage patient records, appointments, billing, and inventory—all in one secure platform.',
    //   bg: 'bg-teal-50 dark:bg-teal-900/20',
    //   color: 'text-teal-500',
    //   features: [
    //     'Patient Records',
    //     'Appointment Scheduling',
    //     'Billing & Insurance',
    //     'Inventory Management'
    //   ]
    // },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Workflow Automation',
      slug: 'workflow-automation',
      description: 'Custom automation solutions to streamline your business processes and reduce manual overhead.',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      color: 'text-amber-500',
      features: [
        'Process Automation',
        'Task Management',
        'Email Automation',
        'Integration Hub'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Custom Software',
      slug: 'custom-software',
      description: 'Tailored software applications built specifically for your unique business needs and scalability requirements.',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      color: 'text-indigo-500',
      features: [
        'Requirements Analysis',
        'Custom Development',
        'System Integration',
        'Scalable Architecture'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Hero Section - Preserved Dashboard */}
      <HeroWithDashboard
        subtitle="Enterprise Solutions"
        title="Software Solutions"
        description="We build custom software solutions tailored to your unique business needs. From workflow automation to enterprise applications, our team delivers scalable, high-performance platforms that drive real results."
        primaryCTA={{ text: 'Request Demo', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'View Solutions', href: '#services' }}
        dashboardComponent={<SoftwareDashboard />}
      />

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Specialized Industry Solutions
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              We provide targeted software solutions that address the specific challenges of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/software/${service.slug}`}
                className="group relative rounded-3xl p-4 md:p-6 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className={`mb-6 p-4 rounded-2xl inline-flex items-center justify-center w-16 h-16 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className={`w-4 h-4 ${service.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-50 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-[var(--bg-tertiary)] rounded-3xl p-10 md:p-14 border border-[var(--border-secondary)] shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Optimize Your Workflow?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Stop letting manual processes slow you down. Let's build a software solution that propels your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
               <Link
                href="/contacts"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--border-secondary)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-semibold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
