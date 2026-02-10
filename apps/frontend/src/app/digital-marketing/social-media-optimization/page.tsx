'use client';

import Link from 'next/link';
import { Share2, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function SocialMediaOptimizationPage() {
  const platforms = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube'];

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Share2 className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Social Media Optimization
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Build and engage your audience across social media platforms
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold theme-text-primary mb-8 text-center">
              Platforms We Manage
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-[#0774E8]/20 text-[#0774E8] rounded-lg font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Grow Your Social Presence
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's build a social media strategy that drives engagement.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
