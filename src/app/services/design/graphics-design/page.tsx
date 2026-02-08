'use client';

import Link from 'next/link';
import { Palette, Sparkles, Image, Layers } from 'lucide-react';

export default function GraphicsDesignPage() {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Brand Identity',
      description: 'Create memorable brand identities that stand out'
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional designs'
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'Digital Graphics',
      description: 'Social media graphics and digital assets'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Creative Concepts',
      description: 'Innovative design solutions for your brand'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Graphics Design Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Professional graphic design that brings your vision to life
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
                  <div className="text-brand-secondary mb-4">{service.icon}</div>
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
              Need Professional Design?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create stunning visuals for your brand.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
