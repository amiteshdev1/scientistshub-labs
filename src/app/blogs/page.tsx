'use client';

import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  const blogPosts = [
    {
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn how to build production-ready web applications using Next.js and modern best practices.',
      author: 'ScientistsHub Labs Team',
      date: '2026-02-08',
      category: 'Web Development',
      slug: 'building-scalable-web-apps-nextjs'
    },
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build software.',
      author: 'ScientistsHub Labs Team',
      date: '2026-02-05',
      category: 'AI & Innovation',
      slug: 'future-of-ai-software-development'
    },
    {
      title: 'Best Practices for API Design',
      excerpt: 'A comprehensive guide to designing RESTful APIs that are scalable and maintainable.',
      author: 'ScientistsHub Labs Team',
      date: '2026-02-01',
      category: 'Backend Development',
      slug: 'best-practices-api-design'
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              Insights, tutorials, and thoughts on technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="theme-card rounded-2xl p-8 hover:scale-102 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4 text-sm theme-text-muted">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold theme-text-primary mb-3">
                  {post.title}
                </h2>

                <p className="theme-text-secondary mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#0774E8] font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
