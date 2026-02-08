'use client';

import Link from 'next/link';
import { Code2, LayoutDashboard, Network, Cloud } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';
import DevDashboard from '@/Components/dashboards/DevDashboard';

export default function CustomWebSolutionPage() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Custom Web Apps',
      description: 'Tailor-made software built from scratch to fit your exact business process'
    },
    {
      icon: <LayoutDashboard className="w-10 h-10" />,
      title: 'Admin Dashboards',
      description: 'Centralize your data with custom control panels for your team'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'API Integration',
      description: 'Connect your disparate software systems seamlessly'
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Migration',
      description: 'Move your legacy desktop software to the modern web cloud'
    }
  ];

  const process = [
    { number: 1, title: 'Discovery', description: 'We interview your team to map out requirements' },
    { number: 2, title: 'Architecture', description: 'Designing the database and user flow' },
    { number: 3, title: 'Development', description: 'Agile sprints with regular progress demos' },
    { number: 4, title: 'Testing', description: 'Security checks and performance tuning' },
    { number: 5, title: 'Launch', description: 'Deployment to cloud and staff training' }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroWithDashboard
        subtitle="Custom Development"
        title="Custom Web Solutions"
        description="Build tailor-made web applications that perfectly fit your business needs. From SaaS platforms to internal tools, we create scalable solutions that drive efficiency."
        primaryCTA={{ text: 'Schedule Consultation', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Our Approach', href: '#process' }}
        dashboardComponent={<DevDashboard />}
      />

      {/* Services Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
              What We Build
            </h2>
            <p className="text-lg theme-text-secondary">
              From concept to deployment, we handle every aspect of your custom web solution
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="theme-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
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

      {/* Process Section */}
      <section id="process" className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
              Our Development Process
            </h2>
            <p className="text-lg theme-text-secondary">
              A proven methodology that delivers results on time and on budget
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="theme-card rounded-xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0774E8] flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold theme-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="theme-text-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's discuss how we can bring your vision to life with cutting-edge technology.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}