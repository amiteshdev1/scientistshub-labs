'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CTAButton {
  text: string;
  href: string;
}

interface HeroWithDashboardProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  dashboardComponent: React.ReactNode;
}

export default function HeroWithDashboard({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  dashboardComponent,
}: HeroWithDashboardProps) {
  return (
    <section className="relative py-20 lg:py-28 min-h-[80vh] flex items-center theme-bg-primary overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d65bc]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="animate-fade-scale space-y-8">
            {/* Subtitle badge */}
            {subtitle && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d65bc]/10 border border-[#2d65bc]/20 animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-[#2d65bc] soft-pulse" />
                <span className="text-sm font-medium text-[#2d65bc]">{subtitle}</span>
              </div>
            )}

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight animate-slide-up-delay-100">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl theme-text-secondary leading-relaxed max-w-xl animate-slide-up-delay-200">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-300">
              {/* Primary CTA */}
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2d65bc] hover:bg-[#1e4a8e] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2d65bc]/20"
              >
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#2d65bc] theme-text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-[#2d65bc]/5"
                >
                  {secondaryCTA.text}
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              )}
            </div>

            {/* Trust badges or stats (optional) */}
            {/* <div className="flex items-center gap-6 pt-4 animate-slide-up-delay-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2d65bc] to-[#1e4a8e] border-2 border-white dark:border-gray-900"
                    />
                  ))}
                </div>
                <span className="text-sm theme-text-secondary">100+ Projects Delivered</span>
              </div>
            </div> */}
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="perspective">
            <div className="card-3d rotate-y-12">
              {dashboardComponent}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
