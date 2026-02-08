'use client';

import Link from 'next/link';
import { Palette, Figma, Users, Smartphone } from 'lucide-react';

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI Design',
      description: 'Beautiful, modern interfaces that users love'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'UX Research',
      description: 'User research and testing for optimal experiences'
    },
    {
      icon: <Figma className="w-10 h-10" />,
      title: 'Prototyping',
      description: 'Interactive prototypes to visualize your product'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Responsive Design',
      description: 'Designs that work perfectly on all devices'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              App UI/UX Design
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              User-centered design that delights and converts
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
              Create Exceptional User Experiences
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's design an interface that your users will love.
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
