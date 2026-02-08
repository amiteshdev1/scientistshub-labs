'use client';

import Link from 'next/link';
import { Code, Megaphone, Package, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies and best practices.',
      link: '/services/development',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'API Integration', 'Progressive Web Apps']
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Software Services',
      description: 'Enterprise software solutions including CRM systems and business automation.',
      link: '/services/software',
      features: ['Real Estate CRM', 'Hospital Management', 'Workflow Automation', 'Custom Software']
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and conversions.',
      link: '/services/digital-marketing',
      features: ['SEO Optimization', 'PPC Advertising', 'Social Media Marketing', 'Content Marketing']
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      link: '/services/development/app-development',
      features: ['iOS Development', 'Android Development', 'React Native', 'App UI/UX Design']
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Comprehensive technology solutions to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="theme-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 theme-shadow-primary block"
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 theme-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0774E8]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
