'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowRight, Zap, Rocket, Award, Shield, Code, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Cutting-edge solutions built with the latest technologies and methodologies.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Expert Engineering',
      description: 'World-class development team with deep expertise across the full stack.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Delivery',
      description: 'Agile development process ensuring fast time-to-market without compromising quality.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance built into every solution we deliver.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 100+ projects for startups and enterprises worldwide.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored products designed specifically for your unique business needs.'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
              Building the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-sky to-brand-green">
                Innovation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              ScientistsHub Labs is an innovation and product studio where cutting-edge ideas meet advanced engineering. 
              We transform concepts into reality through research, development, and creative problem-solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacts"
                className="group inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-secondary theme-text-primary font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
              Why Choose ScientistsHub Labs
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              We combine technical excellence with creative innovation to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="theme-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 theme-shadow-primary"
              >
                <div className="text-brand-secondary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="theme-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center theme-card rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
              Ready to Transform Your{' '}
              <span className="text-brand-secondary">Ideas into Reality?</span>
            </h2>
            <p className="text-lg theme-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build innovative solutions that drive real business results.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-brand-secondary hover:bg-brand-secondary/90 text-white shadow-lg hover:scale-105"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
