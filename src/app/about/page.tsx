'use client';

import { useTheme } from 'next-themes';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market conditions.'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              About ScientistsHub Labs
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary leading-relaxed">
              We are a team of passionate engineers, designers, and innovators dedicated to building 
              the future of technology. Our mission is to transform bold ideas into reality through 
              advanced engineering and creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="theme-card rounded-2xl p-8">
              <div className="text-[#0774E8] mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">Our Mission</h2>
              <p className="theme-text-secondary leading-relaxed">
                To empower businesses and individuals with innovative technology solutions that 
                drive growth, efficiency, and transformation. We believe in making advanced 
                technology accessible and impactful for everyone.
              </p>
            </div>

            <div className="theme-card rounded-2xl p-8">
              <div className="text-[#1DA1F2] mb-4">
                <Eye className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold theme-text-primary mb-4">Our Vision</h2>
              <p className="theme-text-secondary leading-relaxed">
                To be the world's leading innovation studio, recognized for creating groundbreaking 
                products that shape the future of technology and improve lives globally. We envision 
                a world where technology seamlessly enhances human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center theme-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#0774E8] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold theme-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="theme-text-secondary text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
