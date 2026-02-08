'use client';

import Link from 'next/link';
import { Building2, Hospital, Zap, Database } from 'lucide-react';

export default function SoftwareServicesPage() {
  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Real Estate CRM',
      description: 'Comprehensive CRM solution designed specifically for real estate professionals.',
      features: [
        'Lead Management',
        'Property Listings',
        'Client Portal',
        'Automated Follow-ups',
        'Analytics Dashboard',
        'Mobile Access'
      ]
    },
    {
      icon: <Hospital className="w-10 h-10" />,
      title: 'Hospital Management System',
      description: 'Complete hospital management solution for healthcare facilities.',
      features: [
        'Patient Records',
        'Appointment Scheduling',
        'Billing & Insurance',
        'Inventory Management',
        'Staff Management',
        'Reporting Tools'
      ]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Workflow Automation',
      description: 'Custom automation solutions to streamline your business processes.',
      features: [
        'Process Automation',
        'Task Management',
        'Email Automation',
        'Integration Hub',
        'Custom Workflows',
        'Analytics'
      ]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Custom Software Solutions',
      description: 'Tailored software applications built for your unique business needs.',
      features: [
        'Requirements Analysis',
        'Custom Development',
        'System Integration',
        'Training & Support',
        'Scalable Architecture',
        'Ongoing Maintenance'
      ]
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Software Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Enterprise software solutions to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="theme-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#0774E8] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold theme-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="theme-text-secondary mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 theme-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0774E8]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Transform Your Business with Custom Software
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's build a solution that perfectly fits your workflow and scales with your growth.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
