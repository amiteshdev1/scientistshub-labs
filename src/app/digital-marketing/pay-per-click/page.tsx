'use client';

import Link from 'next/link';
import { MousePointerClick, Target, TrendingUp, BarChart3 } from 'lucide-react';

export default function PPCPage() {
  const platforms = [
    {
      name: 'Google Ads',
      description: 'Search, Display, Shopping, and Video campaigns'
    },
    {
      name: 'Facebook Ads',
      description: 'Targeted social media advertising on Facebook and Instagram'
    },
    {
      name: 'LinkedIn Ads',
      description: 'B2B advertising for professional audiences'
    },
    {
      name: 'Microsoft Ads',
      description: 'Reach users on Bing and Microsoft network'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MousePointerClick className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              PPC Advertising
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Targeted pay-per-click campaigns to maximize ROI and conversions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold theme-text-primary mb-8 text-center">
              Platforms We Manage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="theme-card rounded-xl p-6">
                  <h3 className="text-xl font-bold theme-text-primary mb-2">
                    {platform.name}
                  </h3>
                  <p className="theme-text-secondary text-sm">
                    {platform.description}
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
              Drive Immediate Results with PPC
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create high-converting ad campaigns that deliver measurable ROI.
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
