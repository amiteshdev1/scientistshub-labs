import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

interface ProductHeroProps {
  name: string;
  tagline: string;
  status: 'Live' | 'Beta' | 'Experimental' | 'In Progress';
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  iconName?: string;
}

export default function ProductHero({
  name,
  tagline,
  status,
  description,
  primaryCTA,
  iconName = 'Layout'
}: ProductHeroProps) {
  // Dynamically get icon component
  const IconComponent = (Icons as any)[iconName] || Icons.Layout;

  const statusStyles = {
    Live: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Beta: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Experimental: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'In Progress': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-brand-secondary/10 dark:bg-brand-secondary/20">
              <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-brand-secondary" />
            </div>
          </div>

          {/* Product Name & Status */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary">
              {name}
            </h1>
            <span className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-full ${statusStyles[status]}`}>
              {status.toUpperCase()}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-medium theme-text-secondary mb-6">
            {tagline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg theme-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          {/* Primary CTA */}
          <Link
            href={primaryCTA.href}
            className="inline-block bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            {primaryCTA.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
