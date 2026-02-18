'use client';

import Link from 'next/link';
import { Search, MousePointerClick, Share2, Mail, MapPin, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import MarketingDashboard from '@/Components/dashboards/MarketingDashboard';

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in organic search results to drive long-term traffic and build authority.',
      bg: 'bg-green-50 dark:bg-green-900/20',
      color: 'text-green-600 dark:text-green-400',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical Audits',
        'Link Building'
      ]
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: 'PPC Advertising',
      description: 'Targeted paid campaigns that deliver instant results. Maximize ROI with data-driven bidding strategies.',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      color: 'text-blue-500',
      features: [
        'Google Ads',
        'Facebook Ads',
        'A/B Testing',
        'Conversion Tracking'
      ]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media',
      description: 'Build a loyal community and increase brand awareness across all major social media platforms.',
      bg: 'bg-pink-50 dark:bg-pink-900/20',
      color: 'text-pink-500',
      features: [
        'Content Strategy',
        'Community Management',
        'Influencer Marketing',
        'Brand Monitoring'
      ]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email workflows and newsletters.',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      color: 'text-yellow-500',
      features: [
        'Campaign Design',
        'List Segmentation',
        'Automated Flows',
        'Deliverability Optimization'
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers ready to buy.',
      bg: 'bg-red-50 dark:bg-red-900/20',
      color: 'text-red-500',
      features: [
        'Google Business Profile',
        'Local Citations',
        'Review Management',
        'Map Pack Ranking'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Marketing',
      description: 'Create valuable, relevant content that attracts and engages a clearly defined audience.',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      color: 'text-purple-500',
      features: [
        'Blog Writing',
        'Video Content',
        'Infographics',
        'Distribution Strategy'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Hero Section - Preserved Dashboard */}
      <HeroWithDashboard
        subtitle="Growth & Performance"
        title="Digital Marketing Services"
        description="Drive measurable results with data-driven digital marketing strategies. From SEO to PPC, social media to content marketing—we help you reach your target audience and maximize ROI."
        primaryCTA={{ text: 'Grow Your Business', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Explore Services', href: '#services' }}
        dashboardComponent={<MarketingDashboard />}
      />

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Comprehensive Growth Strategies
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              We combine creativity with analytics to deliver marketing campaigns that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-8 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className={`mb-6 p-4 rounded-2xl inline-flex items-center justify-center w-16 h-16 ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-[var(--border-primary)]">
                    <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className={`w-4 h-4 ${service.color}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-50 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-[var(--bg-tertiary)] rounded-3xl p-10 md:p-14 border border-[var(--border-secondary)] shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Get a custom marketing plan designed to achieve your specific growth goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
               <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--border-secondary)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-semibold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
