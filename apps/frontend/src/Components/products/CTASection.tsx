import React from 'react';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA
}: CTASectionProps) {
  return (
    <section className="py-16 theme-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg theme-text-secondary mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href={primaryCTA.href}
              className="w-full sm:w-auto inline-block bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {primaryCTA.text}
            </Link>

            {/* Secondary CTA */}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="w-full sm:w-auto inline-block border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
