import React from 'react';
import { Metadata } from 'next';
import ProductHero from '@/Components/products/ProductHero';
import FeatureList from '@/Components/products/FeatureList';
import UseCaseSection from '@/Components/products/UseCaseSection';
import HowItWorksSection from '@/Components/products/HowItWorksSection';
import CTASection from '@/Components/products/CTASection';
import lifeOSPlusData from '@/data/products/lifeosplus';

// SEO Metadata
export const metadata: Metadata = {
  title: lifeOSPlusData.seo.title,
  description: lifeOSPlusData.seo.description,
  keywords: lifeOSPlusData.seo.keywords,
  alternates: {
    canonical: lifeOSPlusData.seo.canonicalUrl
  },
  openGraph: {
    title: lifeOSPlusData.seo.title,
    description: lifeOSPlusData.seo.description,
    url: lifeOSPlusData.seo.canonicalUrl,
    siteName: 'ScientistsHub Labs',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: lifeOSPlusData.seo.title,
    description: lifeOSPlusData.seo.description
  }
};

export default function LifeOSPlusPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ProductHero
        name={lifeOSPlusData.name}
        tagline={lifeOSPlusData.tagline}
        status={lifeOSPlusData.status}
        description={lifeOSPlusData.description}
        primaryCTA={lifeOSPlusData.cta.primary}
        iconName="Layout"
      />

      {/* What is LifeOS+ Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold theme-text-primary mb-8 text-center">
              What is LifeOS+?
            </h2>
            
            <div className="space-y-8">
              {/* Explanation */}
              <div className="theme-card rounded-xl p-6">
                <p className="text-base sm:text-lg theme-text-secondary leading-relaxed">
                  {lifeOSPlusData.whatIsIt.explanation}
                </p>
              </div>

              {/* Who It's For */}
              <div className="theme-card rounded-xl p-6">
                <h3 className="text-xl font-semibold theme-text-primary mb-3">
                  Who It's For
                </h3>
                <p className="text-base theme-text-secondary leading-relaxed">
                  {lifeOSPlusData.whatIsIt.whoItsFor}
                </p>
              </div>

              {/* Problem It Solves */}
              <div className="theme-card rounded-xl p-6 border-l-4 border-brand-secondary">
                <h3 className="text-xl font-semibold theme-text-primary mb-3">
                  The Problem We Solve
                </h3>
                <p className="text-base theme-text-secondary leading-relaxed">
                  {lifeOSPlusData.whatIsIt.problemItSolves}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureList features={lifeOSPlusData.features} />

      {/* Use Cases */}
      <UseCaseSection useCases={lifeOSPlusData.useCases} />

      {/* How It Works */}
      <HowItWorksSection steps={lifeOSPlusData.howItWorks} />

      <section className="py-12 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-xl p-8 border-2 border-blue-500/30">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full font-bold text-sm mb-4">
              {lifeOSPlusData.status.toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold theme-text-primary mb-3">
              LifeOS+ is in Beta
            </h2>
            <p className="theme-text-secondary">
              We're actively developing and refining the platform. Request early access to be among the first to experience LifeOS+ and help shape its future.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Organized?"
        description="Join thousands of users who have transformed their productivity with LifeOS+. Start your journey today."
        primaryCTA={lifeOSPlusData.cta.primary}
        secondaryCTA={lifeOSPlusData.cta.secondary}
      />
    </div>
  );
}
