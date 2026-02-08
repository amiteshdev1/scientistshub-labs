'use client';

import Link from 'next/link';
import { Code, Zap, Cloud, Smartphone, Palette, Cog } from 'lucide-react';

export default function DevelopmentServicesPage() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks and technologies.',
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development']
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment']
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'API & System Integration',
      description: 'RESTful APIs and third-party system integrations for seamless connectivity.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Third-party Integration']
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'App UI/UX Design',
      description: 'User-centered design for web and mobile applications.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Custom Web Solutions',
      description: 'Tailored web applications built to your specific business requirements.',
      features: ['Custom Features', 'Scalable Architecture', 'Performance Optimization', 'Security']
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: 'App Maintenance',
      description: 'Ongoing support and maintenance for your web and mobile applications.',
      features: ['Bug Fixes', 'Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Development Services
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Full-stack development solutions for web and mobile applications
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
              Ready to Build Your Next Project?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's discuss your development needs and create a solution that exceeds expectations.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
