'use client';

import Link from 'next/link';
import { Smartphone, Apple, CheckCircle, Code } from 'lucide-react';

export default function AppDevelopmentPage() {
  const features = [
    'Native iOS Development (Swift/SwiftUI)',
    'Native Android Development (Kotlin/Java)',
    'Cross-Platform Development (React Native)',
    'App UI/UX Design',
    'Backend API Integration',
    'Push Notifications',
    'In-App Purchases',
    'App Store Optimization',
    'App Maintenance & Updates',
    'Analytics Integration'
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Smartphone className="w-12 h-12 text-[#0774E8]" />
              <Apple className="w-12 h-12 text-[#0774E8]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Mobile App Development
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Build powerful mobile applications for iOS and Android that users love
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold theme-text-primary mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 theme-card rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="theme-text-primary">{feature}</span>
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's turn your app idea into reality with our expert development team.
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
