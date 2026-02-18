'use client';

import Link from 'next/link';
import { Code, Zap, Cloud, Smartphone, Palette, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import DevDashboard from '@/Components/dashboards/DevDashboard';

export default function DevelopmentServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'End-to-end web application development using modern frameworks like React, Next.js, and Node.js for robust performance.',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      color: 'text-purple-600 dark:text-purple-400',
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver intuitive user experiences.',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      color: 'text-blue-500',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'API & Integrations',
      description: 'Seamlessly connect your systems with RESTful APIs, GraphQL endpoints, and third-party service integrations.',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      color: 'text-indigo-500',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Third-party Integration']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design focused on usability, accessibility, and creating visually stunning digital interfaces.',
      bg: 'bg-pink-50 dark:bg-pink-900/20',
      color: 'text-pink-500',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Custom Web Solutions',
      description: 'Tailored web applications built from the ground up to address your specific business challenges and requirements.',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      color: 'text-amber-500',
      features: ['Custom Features', 'Scalable Architecture', 'Performance Optimization', 'Security Focus']
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Maintenance',
      description: 'Ongoing support, monitoring, and updates to ensure your web and mobile applications remain secure and performant.',
      bg: 'bg-slate-50 dark:bg-slate-900/20',
      color: 'text-slate-500',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Hero Section - Preserved Dashboard */}
      <HeroWithDashboard
        subtitle="Technical Excellence"
        title="Development Services"
        description="Build robust, scalable applications with our Web Development expertise. From web to mobile, APIs to custom solutions—we deliver advanced technology tailored to your business needs."
        primaryCTA={{ text: 'Start Your Project', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'View Services', href: '#services' }}
        dashboardComponent={<DevDashboard />}
      />

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              End-to-End Development
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              We leverage the latest technologies to build software that stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-8 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className={`mb-6 p-4 rounded-2xl inline-flex items-center justify-center w-16 h-16 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-[var(--border-primary)]">
                    <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className={`w-4 h-4 ${service.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
              Have a Vision in Mind?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Our team of expert developers is ready to turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
               <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--border-secondary)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-semibold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                Discuss Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
