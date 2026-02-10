'use client';

import Link from 'next/link';
import { FileText, Video, Image, TrendingUp } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import MarketingDashboard from '@/Components/dashboards/MarketingDashboard';

export default function ContentMarketingPage() {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Blog Writing',
      description: 'SEO-optimized blog posts that rank and convert'
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Video Content',
      description: 'Engaging video content for social and YouTube'
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Infographics',
      description: 'Visual content that simplifies complex topics'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Content Strategy',
      description: 'Data-driven content plans that drive results'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Digital Marketing"
        title="Content Marketing"
        description="Create valuable, SEO-optimized content that attracts and converts your target audience. Data-driven content strategies that drive measurable results."
        primaryCTA={{ text: 'Plan Your Strategy', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'See Case Studies', href: '/blogs' }}
        dashboardComponent={<MarketingDashboard />}
      />

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
              Tell Your Story
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create content that resonates with your audience.
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
