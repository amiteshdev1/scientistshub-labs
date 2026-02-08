'use client';

import { Calendar, User, ArrowLeft, Clock, Tag, Share2, ChevronRight, Hash, Search, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Helper to generate IDs from heading text
const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

interface BlogPostClientProps {
  post: any;
  relatedPosts: any[];
  allPosts: any[];
}

interface TOCItem {
  id: string;
  text: string;
  level: string;
}

export default function BlogPostClient({ post, relatedPosts, allPosts }: BlogPostClientProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [processedHtml, setProcessedHtml] = useState(post.content);
  const [activeSection, setActiveSection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Process content on mount to generate TOC and IDs
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const div = document.createElement('div');
    div.innerHTML = post.content;
    
    const headings = Array.from(div.querySelectorAll('h2, h3'));
    const newToc = headings.map((heading) => {
      const text = heading.textContent || '';
      const id = generateId(text);
      // We are just generating metadata, but the actual HTML is dangerously set later.
      // To ensure IDs are in the rendered HTML, we would typically need to modify the string content or use a library.
      // Since we are doing a client-side parse here for TOC, let's update the string too if possible or trust the content has IDs (it usually doesnt).
      // A better approach for client-side TOC generation with static HTML string is to inject IDs.
      
      // Let's assume we modify the HTML string to add IDs.
      // Simple regex replacement might be risky if content repeats, but for formatted blog posts it's okay.
      // Or we can rely on the fact that we are just monitoring scroll position of elements that *should* match.
      // Let's try to inject IDs into the HTML processed string.
      return { id, text, level: heading.tagName.toLowerCase() };
    });

    // Basic ID injection (naive but functional for simple blogs)
    // A robust solution would parse the HTML string in the state directly.
    let contentWithIds = post.content;
    newToc.forEach(item => {
        // Regex to find the heading tag and insert id
        // This is a bit fragile but works for well-formed HTML from our data
        const regex = new RegExp(`(<${item.level}[^>]*>)(${item.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(<\/${item.level}>)`, 'i');
        // We replace it only if it doesn't already have an id (to avoid double id if re-processed)
        // Actually, let's just use the client-side DOM manipulation on the `div` we created if we were to mount it, but we can't mount it easily in React without dangerouslySetInnerHTML.
        // Let's update `contentWithIds` using string replacement for now.
        contentWithIds = contentWithIds.replace(regex, `<${item.level} id="${item.id}">$2</${item.level}>`);
    });

    setToc(newToc);
    setProcessedHtml(contentWithIds);
  }, [post.content]);

  // Intersection Observer for Active TOC Link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    // Wait for DOM update
    setTimeout(() => {
        const headingElements = document.querySelectorAll('h2, h3');
        headingElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [processedHtml]);

  // Search Logic
  useEffect(() => {
      if (searchQuery.trim() === '') {
          setSearchResults([]);
      } else {
          const results = allPosts.filter(p => 
              p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
              p.category.toLowerCase().includes(searchQuery.toLowerCase())
          ).slice(0, 5);
          setSearchResults(results);
      }
  }, [searchQuery, allPosts]);


  if (!post) return null;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--accent-primary)] selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-primary)] origin-left z-50"
        style={{ scaleX }}
      />

      <article>
        {/* Dynamic Hero Section */}
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
           {/* Abstract Background Elements */}
           <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[var(--brand-secondary-blue)]/5 to-transparent pointer-events-none" />
           <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-[var(--brand-secondary-blue)]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-6 border border-[var(--accent-primary)]/20"
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-8 leading-tight tracking-tight"
              >
                {post.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-6 text-[var(--text-secondary)]"
              >
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--brand-secondary-blue)] flex items-center justify-center text-white text-xs font-bold">
                       {post.author.charAt(0)}
                    </div>
                    <span className="font-medium">{post.author}</span>
                 </div>
                 <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                 <div className="flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   {post.date}
                 </div>
                 <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                 <div className="flex items-center gap-2">
                   <Clock className="w-4 h-4" />
                   {post.readTime}
                 </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Parallax Featured Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl -mt-8 relative z-20"
        >
             <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-[var(--border-primary)]/50 group">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
             </div>
        </motion.div>

        {/* Main Layout Grid */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Sidebar (TOC + Contact) - Col-span-3 */}
              <div className="hidden lg:block lg:col-span-3">
                 <div className="sticky top-32 space-y-8">
                    {/* Table of Contents */}
                    <div className="bg-[var(--bg-secondary)]/50 backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl p-6">
                       <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
                         <Hash className="w-4 h-4 text-[var(--accent-primary)]" />
                         Contents
                       </h4>
                       <nav className="space-y-1">
                          {toc.map((item) => (
                             <a 
                               key={item.id} 
                               href={`#${item.id}`}
                               onClick={(e) => {
                                 e.preventDefault();
                                 document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                               }}
                               className={`block text-sm py-2 px-3 rounded-lg transition-all line-clamp-1 border-l-2 ${
                                 activeSection === item.id 
                                   ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/5 text-[var(--accent-primary)] font-semibold translate-x-1' 
                                   : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                               } ${item.level === 'h3' ? 'ml-4' : ''}`}
                             >
                               {item.text}
                             </a>
                          ))}
                       </nav>
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-2xl p-6 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-primary)]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--accent-primary)]/20 transition-colors" />
                        
                        <h4 className="font-bold text-[var(--text-primary)] mb-2 relative z-10">Have questions?</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-6 relative z-10">Our team is ready to help you build your next big idea.</p>
                        
                        <div className="space-y-3 relative z-10">
                            <a href="mailto:contact@scientistshub.com" className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                <div className="p-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-primary)]">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>Contact Support</span>
                            </a>
                             <a href="/contact" className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                <div className="p-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-primary)]">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>Talk to Sales</span>
                            </a>
                        </div>

                        <Link href="/contact" className="mt-6 block w-full py-2.5 px-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white text-center rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-[var(--accent-primary)]/20 relative z-10">
                          Get in Touch
                        </Link>
                    </div>
                 </div>
              </div>

              {/* Main Content - Col-span-6 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 lg:col-span-6"
              >
                  {/* Mobile Back & Share (Visible only on small screens) */}
                  <div className="flex lg:hidden items-center justify-between mb-8">
                     <Link href="/blogs" className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
                        <ArrowLeft className="w-4 h-4" /> Back
                     </Link>
                     <button 
                        title="Share this article"
                        aria-label="Share this article"
                        onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                        className="p-2 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                     >
                        <Share2 className="w-4 h-4" />
                     </button>
                  </div>

                  <div 
                    className="prose prose-lg prose-invert max-w-none 
                    prose-headings:text-[var(--text-primary)] prose-headings:font-bold prose-headings:tracking-tight
                    prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
                    prose-strong:text-[var(--text-primary)] 
                    prose-li:text-[var(--text-secondary)] 
                    prose-a:text-[var(--accent-primary)] hover:prose-a:text-[var(--accent-secondary)] prose-a:transition-colors prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-[var(--accent-primary)] prose-blockquote:bg-[var(--bg-tertiary)]/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                    prose-img:rounded-2xl prose-img:shadow-md
                    hr:border-[var(--border-secondary)]" 
                    dangerouslySetInnerHTML={{ __html: processedHtml }} 
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-[var(--border-secondary)]">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string, idx: number) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-full text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all cursor-pointer flex items-center gap-2"
                        >
                          <Hash className="w-3.5 h-3.5 opacity-50" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inline Share Section (Bottom of Content) */}
                   <div className="mt-8 flex items-center gap-4">
                      <span className="text-sm font-bold text-[var(--text-secondary)]">Share this article:</span>
                      <div className="flex gap-2">
                          <button 
                            onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                            className="p-2.5 rounded-full bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors text-[var(--text-secondary)]"
                            title="Share"
                          >
                             <Share2 className="w-4 h-4" />
                          </button>
                          {/* Add more social buttons if needed */}
                      </div>
                   </div>
              </motion.div>

              {/* Right Sidebar (Search + Latest Articles) - Col-span-3 */}
              <div className="hidden lg:block lg:col-span-3">
                 <div className="sticky top-32 space-y-8">
                    {/* Search Widget */}
                    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4">Search</h4>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-xl text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all placeholder:text-[var(--text-muted)]"
                            />
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                        </div>
                        
                        {/* Search Results Dropdown */}
                        {searchQuery && (
                            <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                                {searchResults.length > 0 ? (
                                    searchResults.map(result => (
                                        <Link key={result.id} href={`/blogs/${result.slug}`} className="block group">
                                            <h5 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                                                {result.title}
                                            </h5>
                                            <span className="text-xs text-[var(--text-muted)]">{result.date}</span>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-[var(--text-muted)]">No articles found.</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Latest Articles Widget */}
                    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6">
                        <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-6 flex items-center justify-between">
                            Latest Articles
                            <Link href="/blogs" className="text-xs text-[var(--accent-primary)] hover:underline">View All</Link>
                        </h4>
                        <div className="space-y-6">
                            {allPosts.slice(0, 4).map((post) => (
                                <Link key={post.id} href={`/blogs/${post.slug}`} className="group flex gap-4 items-start">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[var(--bg-tertiary)]">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2 leading-snug mb-1">
                                            {post.title}
                                        </h5>
                                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>
      </article>

      {/* Bottom Related Posts (Read Next) */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden border-t border-[var(--border-primary)]">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl font-bold text-[var(--text-primary)]">You might also like</h2>
             <Link href="/blogs" className="hidden sm:flex items-center gap-2 text-[var(--accent-primary)] font-semibold hover:gap-3 transition-all">
               View All <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {relatedPosts.map((relatedPost, idx) => (
               <motion.div
                 key={relatedPost.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
               >
                 <Link 
                   href={`/blogs/${relatedPost.slug}`} 
                   className="group bg-[var(--card-bg)] rounded-3xl overflow-hidden border border-[var(--border-primary)] hover:border-[var(--accent-primary)]/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-[var(--accent-primary)]/10"
                  >
                   <div className="relative h-56 overflow-hidden">
                     <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wide border border-white/10">
                          {relatedPost.category}
                        </span>
                     </div>
                     <img 
                       src={relatedPost.image} 
                       alt={relatedPost.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                   </div>
                   <div className="p-8 flex flex-col flex-grow">
                     <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {relatedPost.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--border-secondary)]" />
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {relatedPost.readTime}</span>
                     </div>
                     <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                       {relatedPost.title}
                     </h3>
                     <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {relatedPost.excerpt}
                     </p>
                     
                     <div className="flex items-center gap-2 text-[var(--accent-primary)] text-sm font-bold mt-auto group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                     </div>
                   </div>
                 </Link>
               </motion.div>
             ))}
           </div>
         </div>
      </section>
    </div>
  );
}
