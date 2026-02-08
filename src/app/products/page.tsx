'use client';

import Link from 'next/link';
import { Layout, Zap, Users, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'LifeOS+',
      tagline: 'Your life, organized in one place',
      description: 'A comprehensive productivity ecosystem that helps you organize your entire life. Task management, goal tracking, habit building, and analytics in one place.',
      category: 'Productivity',
      status: 'Beta',
      icon: <Layout className="w-12 h-12" />,
      link: '/products/lifeos-plus',
      color: 'text-blue-500' 
    },
    {
      name: 'DataFlow AI',
      tagline: 'Transform raw data into insights',
      description: 'An intelligent data analysis platform that leverages AI to process, visualize, and derive actionable insights from your business data in real-time.',
      category: 'Data Analytics',
      status: 'In Progress',
      icon: <Zap className="w-12 h-12" />,
      link: '/products/dataflow-ai',
      color: 'text-yellow-500'
    },
    {
      name: 'TeamSync',
      tagline: 'Collaboration reimagined for remote teams',
      description: 'A modern collaboration platform designed for remote teams. Seamless communication, project management, and file sharing in a secure environment.',
      category: 'Collaboration',
      status: 'In Progress',
      icon: <Users className="w-12 h-12" />,
      link: '/products/teamsync',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/20 blur-[100px] animate-pulse-medium"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Explore our suite of innovative solutions designed to transform your business and personal productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group relative rounded-2xl p-8 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--card-border)] hover:shadow-[var(--card-hover-shadow)] hover:-translate-y-1 block h-full flex flex-col"
              >
                <div className={`mb-6 p-4 rounded-xl inline-flex items-center justify-center bg-[var(--bg-tertiary)] ${product.color} group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-secondary)]">
                    {product.category}
                  </span>
                  <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                    product.status === 'Live' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    product.status === 'Beta' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm font-medium text-[var(--accent-primary)] mb-4">
                  {product.tagline}
                </p>
                
                <p className="text-[var(--text-secondary)] mb-6 flex-grow line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
