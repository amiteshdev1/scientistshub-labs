'use client';

import Link from 'next/link';
import { Smartphone, Layout, Zap, Users } from 'lucide-react';

export default function MobileFirstDesignPage() {
  const services = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile-First Approach',
      description: 'Designed for mobile, enhanced for desktop'
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: 'Responsive Layouts',
      description: 'Perfect on all screen sizes'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Touch Optimized',
      description: 'Intuitive touch interactions'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'User-Centric',
      description: 'Focused on mobile user experience'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Mobile-First Design
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Design experiences optimized for mobile users first
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="theme-card rounded-xl p-6">
                  <div className="text-[#0774E8] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold theme-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="theme-text-secondary text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Go Mobile-First?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create a mobile-optimized experience.
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
