'use client';

import Link from 'next/link';
import { ShoppingCart, CreditCard, Package, TrendingUp } from 'lucide-react';

export default function ECommerceSolutionsPage() {
  const features = [
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'Online Store',
      description: 'Complete e-commerce platform with product management'
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Payment Integration',
      description: 'Secure payment gateways and checkout process'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Inventory Management',
      description: 'Track and manage your products efficiently'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Analytics & Reports',
      description: 'Detailed sales analytics and reporting'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingCart className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              E-Commerce Solutions
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Build powerful online stores that drive sales and growth
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
              Start Selling Online
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's build your e-commerce empire.
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
