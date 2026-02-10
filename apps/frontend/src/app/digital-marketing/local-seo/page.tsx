'use client';

import Link from 'next/link';
import { MapPin, Star, Search, TrendingUp } from 'lucide-react';

export default function LocalSEOPage() {
  const features = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: 'Google Business Profile',
      description: 'Optimize your Google Business listing'
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Review Management',
      description: 'Build and manage your online reputation'
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'Local Citations',
      description: 'Get listed in local directories'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Map Pack Optimization',
      description: 'Rank in Google\'s local map results'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Local SEO Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Dominate local search and attract nearby customers
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
              Get Found Locally
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's boost your local visibility and drive foot traffic.
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
