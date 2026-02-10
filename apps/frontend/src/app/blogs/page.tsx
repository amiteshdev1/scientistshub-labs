'use client';

import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { getBlogPosts } from '@/data/blogPosts';

export default function BlogsPage() {
  const allPosts = getBlogPosts();
  const featuredPost = allPosts.find(post => post.featured) || allPosts[0];
  const remainingPosts = allPosts.filter(post => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-secondary-blue)]/5 to-[var(--bg-primary)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--brand-secondary-blue)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20 backdrop-blur-sm">
            Our Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Latest News & Articles
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Explore our thoughts on technology, innovation, and digital transformation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blogs/${featuredPost.slug}`} className="group block">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[var(--border-primary)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-primary)]/20">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 lg:hidden" />
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 lg:p-12 bg-[var(--card-bg)] flex flex-col justify-center relative z-20">
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 bg-[var(--accent-primary)] text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/25">
                      Featured
                    </span>
                    <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-3">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[var(--text-secondary)] text-lg mb-8 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[var(--accent-primary)] font-bold group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">Recent Articles</h2>
            {/* <div className="hidden sm:flex gap-2">
              {['All', 'Development', 'Design', 'Business'].map((category) => (
                <button 
                  key={category}
                  className="px-4 py-2 rounded-full border border-[var(--border-primary)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)] hover:text-white hover:border-transparent transition-all text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-[var(--card-bg)] border border-[var(--border-secondary)] rounded-3xl overflow-hidden hover:shadow-xl hover:border-[var(--accent-primary)]/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4 text-xs font-medium text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[var(--accent-primary)] text-sm font-bold group-hover:translate-x-1 transition-transform mt-auto">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
