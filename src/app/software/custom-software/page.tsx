'use client';

import React from 'react';
import Link from 'next/link';
import { FileSearch, Code2, Network, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import SoftwareDashboard from '@/Components/dashboards/SoftwareDashboard';

export default function CustomSoftwarePage() {
  const features = [
    {
      icon: <FileSearch className="w-10 h-10" />,
      title: 'Requirements Analysis',
      description: 'In-depth analysis of your business processes to identify opportunities for automation and optimization.',
      color: 'text-[var(--accent-primary)]',
      bg: 'bg-[var(--accent-primary)]/10'
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Custom Development',
      description: 'Bespoke software tailored to your workflows, ensuring a perfect fit for your operational needs.',
      color: 'text-[var(--accent-primary)]',
      bg: 'bg-[var(--accent-primary)]/10'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'System Integration',
      description: 'Seamlessly integrate new software with your existing tools and databases for a unified ecosystem.',
      color: 'text-[var(--accent-primary)]',
      bg: 'bg-[var(--accent-primary)]/10'
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'Scalable Architecture',
      description: 'Built on robust, cloud-native architectures designed to grow with your business without performance bottlenecks.',
      color: 'text-[var(--accent-primary)]',
      bg: 'bg-[var(--accent-primary)]/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Hero Section */}
      <HeroWithDashboard
        subtitle="Tailored Solutions"
        title="Custom Software"
        description="Tailored software applications built specifically for your unique business needs and scalability requirements."
        primaryCTA={{ text: 'Start Your Project', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Our Process', href: '#features' }}
        dashboardComponent={<SoftwareDashboard />}
      />

      {/* Features Section */}
      <section id="features" className="py-24 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Why Choose Custom Software?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Off-the-shelf solutions often force you to adapt your processes. We build software that adapts to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-50 z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-[var(--bg-tertiary)] rounded-3xl p-12 border border-[var(--border-secondary)] shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              From concept to deployment, our team of experts is ready to deliver the high-performance software your business deserves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
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
