'use client';

import Link from 'next/link';
import { Search, MousePointerClick, Share2, Mail, MapPin, FileText } from 'lucide-react';

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO (Search Engine Optimization)',
      description: 'Improve your website\'s visibility in search engine results and drive organic traffic.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building',
        'SEO Audits',
        'Ranking Reports'
      ]
    },
    {
      icon: <MousePointerClick className="w-10 h-10" />,
      title: 'PPC Advertising',
      description: 'Targeted pay-per-click campaigns to maximize ROI and conversions.',
      features: [
        'Google Ads',
        'Facebook Ads',
        'Campaign Strategy',
        'A/B Testing',
        'Conversion Tracking',
        'ROI Optimization'
      ]
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: 'Social Media Optimization',
      description: 'Build and engage your audience across social media platforms.',
      features: [
        'Content Strategy',
        'Community Management',
        'Social Analytics',
        'Influencer Marketing',
        'Paid Social',
        'Brand Monitoring'
      ]
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.',
      features: [
        'Campaign Design',
        'List Segmentation',
        'Automation',
        'A/B Testing',
        'Analytics',
        'Deliverability'
      ]
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: 'Local SEO Services',
      description: 'Optimize your online presence for local search and attract nearby customers.',
      features: [
        'Google Business Profile',
        'Local Citations',
        'Review Management',
        'Local Content',
        'Map Pack Optimization',
        'Local Link Building'
      ]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your audience.',
      features: [
        'Content Strategy',
        'Blog Writing',
        'Video Content',
        'Infographics',
        'Content Distribution',
        'Performance Tracking'
      ]
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Data-driven marketing strategies to grow your online presence and drive results
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="theme-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#0774E8] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="theme-text-secondary mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 theme-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0774E8]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Ready to Grow Your Online Presence?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create a digital marketing strategy that delivers measurable results.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
