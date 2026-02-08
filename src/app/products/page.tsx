'use client';

import Link from 'next/link';
import { 
  Layout, 
  Zap, 
  ArrowRight, 
  Clock,
  Scan,
  Database,
  BarChart,
  CheckCircle,
  Shield
} from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'LifeOS+',
      tagline: 'Your entire life, organized.',
      description: 'A comprehensive productivity ecosystem that helps you organize your entire life. From task management to habit building, everything you need is here.',
      category: 'Productivity',
      status: 'In Progress',
      icon: <Clock className="w-12 h-12" />,
      link: '/products/lifeos-plus',
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Task Management', 'Goal Tracking', 'Habit Builder', 'Smart Reminders']
    },
    {
      name: 'Object Detection',
      tagline: 'Real-time visual intelligence.',
      description: 'Advanced object detection and tracking specifically designed for real-time video analysis and image processing applications.',
      category: 'AI & Vision',
      status: 'In Progress',
      icon: <Scan className="w-12 h-12" />,
      link: '/products/object-detection',
      color: 'text-purple-500', 
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      features: ['Object Detection', 'Object Tracking', 'Image Classification', 'Segmentation']
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
             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Our Products
              </span>
            </h1>
            <p className="text-lg sm:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Explore our suite of innovative solutions designed to transform your business and personal productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 pt-10 bg-[var(--bg-secondary)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group relative rounded-3xl p-4 md:p-6 lg:p-6 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
              >
                <div className={`mb-8 p-4 rounded-2xl inline-flex items-center justify-center ${product.bg} ${product.color} shadow-inner group-hover:scale-110 transition-transform duration-300 w-20 h-20`}>
                  {product.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full border border-[var(--border-secondary)]">
                    {product.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    product.status === 'Live' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2  transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm font-medium text-[var(--accent-primary)] mb-4">
                  {product.tagline}
                </p>
                
                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-8 bg-[var(--bg-tertiary)] p-4 rounded-xl border border-[var(--border-secondary)]">
                   {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--accent-primary)]" />
                        {feature}
                      </div>
                   ))}
                </div>
                
                <div className="mt-auto">
                  <span
                      className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl font-semibold bg-[var(--accent-primary)] text-white hover:bg-opacity-90 transition-all shadow-lg shadow-blue-500/20"
                    >
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
