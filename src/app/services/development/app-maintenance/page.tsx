'use client';

import Link from 'next/link';
import { Wrench, Shield, Zap, Clock } from 'lucide-react';

export default function AppMaintenancePage() {
  const services = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Bug Fixes & Updates',
      description: 'Regular maintenance and bug fixing services'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Security Patches',
      description: 'Keep your app secure with latest security updates'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Performance Optimization',
      description: 'Optimize app performance and speed'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              App Maintenance & Support
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Keep your application running smoothly with our maintenance services
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
              Need App Maintenance?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let us handle the technical details while you focus on your business.
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
