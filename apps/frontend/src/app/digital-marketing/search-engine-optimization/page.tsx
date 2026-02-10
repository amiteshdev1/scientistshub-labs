'use client';

import Link from 'next/link';
import { Search, TrendingUp, Target, BarChart } from 'lucide-react';

export default function SEOPage() {
  const services = [
    {
      title: 'Keyword Research',
      description: 'Identify high-value keywords to target for maximum visibility'
    },
    {
      title: 'On-Page SEO',
      description: 'Optimize content, meta tags, and site structure'
    },
    {
      title: 'Technical SEO',
      description: 'Improve site speed, mobile-friendliness, and crawlability'
    },
    {
      title: 'Link Building',
      description: 'Build high-quality backlinks to boost domain authority'
    },
    {
      title: 'Content Strategy',
      description: 'Create SEO-optimized content that ranks and converts'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track rankings, traffic, and conversions with detailed reports'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Search className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              SEO Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Improve your search engine rankings and drive organic traffic
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold theme-text-primary mb-8 text-center">
              Our SEO Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="theme-card rounded-xl p-6">
                  <h3 className="text-lg font-bold theme-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="theme-text-secondary text-sm">
                    {service.description}
                  </p>
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
              Boost Your Online Visibility
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create an SEO strategy that drives real results for your business.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get a Free SEO Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
