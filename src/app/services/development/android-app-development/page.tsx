'use client';

import Link from 'next/link';
import { Smartphone, Code, Zap, Shield } from 'lucide-react';

export default function AndroidAppDevelopmentPage() {
  const features = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Native Android Development',
      description: 'Build high-performance apps using Kotlin and Java'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Material Design',
      description: 'Beautiful UI following Google\'s Material Design guidelines'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security and scalability'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Play Store Optimization',
      description: 'App Store Optimization for better visibility'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Android App Development
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Build powerful Android applications that reach billions of users
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="theme-card rounded-xl p-6">
                  <div className="text-[#0774E8] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold theme-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="theme-text-secondary text-sm">{feature.description}</p>
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
              Ready to Build Your Android App?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create an amazing Android experience for your users.
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
