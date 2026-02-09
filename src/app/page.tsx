'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Shield, Code, Sparkles, Database, TrendingUp, Palette, Rocket, Clock, Scan } from 'lucide-react';
import HeroWithDashboard from '@/Components/HeroWithDashboard';


export default function HomePage() {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Custom Software',
      description: 'Scalable, enterprise-grade software solutions tailored to your specific business needs.',
      link: '/software',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      color: 'text-blue-600 dark:text-blue-400',
      border: 'hover:border-blue-500/50'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web & Mobile Dev',
      description: 'High-performance applications built with modern frameworks like React, Next.js, and Native.',
      link: '/development',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      color: 'text-indigo-600 dark:text-indigo-400',
      border: 'hover:border-indigo-500/50'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to boost your online presence, traffic, and conversion rates.',
      link: '/digital-marketing',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      color: 'text-emerald-600 dark:text-emerald-400',
      border: 'hover:border-emerald-500/50'
    },
    // {
    //   icon: <Palette className="w-8 h-8" />,
    //   title: 'UI/UX Design',
    //   description: 'User-centric design that creates intuitive, engaging, and beautiful digital experiences.',
    //   link: '/services/design',
    //   bg: 'bg-purple-50 dark:bg-purple-900/20',
    //   color: 'text-purple-600 dark:text-purple-400',
    //   border: 'hover:border-purple-500/50'
    // }
  ];

  const products = [
    {
      title: 'LifeOS+',
      tagline: 'Your entire life, organized.',
      description: 'A comprehensive productivity ecosystem that helps you organize your entire life.',
      link: '/products/lifeos-plus',
      icon: <Clock className="w-8 h-8" />,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      color: 'text-blue-500',
      border: 'hover:border-blue-500/50'
    },
    {
      title: 'Object Detection',
      tagline: 'Real-time visual intelligence.',
      description: 'Advanced object detection specifically designed for real-time video analysis.',
      link: '/products/object-detection',
      icon: <Scan className="w-8 h-8" />,
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      color: 'text-purple-500', 
      border: 'hover:border-purple-500/50'
    }
  ];

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Research First',
      description: 'Evidence-based development methodologies rooted in engineering rigor.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Availability',
      description: 'Systems designed for maximum uptime and fault tolerance.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Architecture',
      description: 'Security-by-design approach for enterprise-grade protection.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Scalable Impact',
      description: 'Solutions engineered to grow seamlessly with your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Hero Section */}
      <HeroWithDashboard
        subtitle="Innovation Studio"
        title="Building the Future of Digital"
        description="Scientistshub Labs is a premier product development studio. We transform ambitious ideas into powerful digital realities through expert engineering, design, and strategy."
        primaryCTA={{ text: 'Start Your Project', href: '/request-a-quote' }}
        secondaryCTA={{ text: 'Our Work', href: '/products' }}
        dashboardComponent={
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 bg-black/50 backdrop-blur">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/scientistshub-labs-intro-video.mp4" type="video/mp4" />
            </video>
          </div>
        }
      />

      {/* Services Section */}
      <section className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-medium"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-semibold mb-4 border border-[var(--accent-primary)]/20">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
              Primary Research Areas
            </h2>
            <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
              We focus on building robust, scalable systems across key engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6  max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group relative rounded-[2rem] p-4 md:p-6 bg-[var(--card-bg)]/50 backdrop-blur-sm border border-[var(--border-secondary)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-[var(--card-bg)] ${service.border}`}
              >
                <div className={`mb-4 md:mb-8 w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-bold text-[var(--accent-primary)] group/link">
                  <span className="border-b-2 border-transparent group-hover/link:border-[var(--accent-primary)] transition-all duration-300">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-[var(--bg-primary)] relative border-t border-[var(--border-secondary)]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-center mb-16 gap-8">
            <div className="max-w-4xl text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] text-sm font-semibold mb-4 border border-[var(--accent-secondary)]/20">
                Innovation Lab
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">Products</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
                Explore our internal products, built to solve complex problems through systems thinking and advanced engineering.
              </p>
            </div>
           
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className={`group relative rounded-[2.5rem] p-1 bg-gradient-to-br from-[var(--border-secondary)] to-transparent hover:from-[var(--accent-primary)]/50 hover:to-[var(--accent-secondary)]/50 transition-all duration-500`}
              >
                <div className="h-full rounded-[2.4rem] p-4 md:p-6 bg-[var(--bg-secondary)] relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 ${product.bg.split(' ')[0]} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 md:gap-8">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${product.bg} flex items-center justify-center ${product.color} shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {product.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                          {product.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)]">
                          Featured
                        </span>
                      </div>
                      
                      <p className="text-sm font-semibold text-[var(--accent-primary)] mb-4 uppercase tracking-wide">
                        {product.tagline}
                      </p>
                      
                      <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>
                      
                      <div className="inline-flex items-center text-sm font-bold text-[var(--text-primary)] border-b-2 border-[var(--accent-primary)] pb-0.5 group-hover:border-[var(--accent-secondary)] transition-colors">
                        Explore Product <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12"> <Link 
              href="/products" 
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[var(--border-secondary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 transition-all duration-300"
            >
              <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]">View All Products</span>
              <ArrowRight className="ml-2 w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform" />
            </Link></div>
          
        </div>
        
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Partner with <span className="text-[var(--accent-primary)]">Scientistshub Labs?</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                We don't just build software; we build partnerships. Our collaborative approach ensures that we understand your vision and deliver solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-primary)] border border-[var(--border-secondary)]">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual (Abstract Representation) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-3xl p-4 md:p-8 shadow-2xl">
                 <div className="space-y-6">
                   {/* Mock UI Elements for "Process" */}
                   <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Sparkles className="w-5 h-5" /></div>
                       <div>
                         <div className="font-bold">Discovery</div>
                         <div className="text-xs text-[var(--text-secondary)]">Week 1-2</div>
                       </div>
                     </div>
                     <div className="text-green-500 text-sm font-medium">Completed</div>
                   </div>

                   <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500"><Palette className="w-5 h-5" /></div>
                       <div>
                         <div className="font-bold">Design</div>
                         <div className="text-xs text-[var(--text-secondary)]">Week 3-4</div>
                       </div>
                     </div>
                     <div className="text-green-500 text-sm font-medium">Completed</div>
                   </div>

                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500"><Code className="w-5 h-5" /></div>
                       <div>
                         <div className="font-bold">Development</div>
                         <div className="text-xs text-[var(--text-secondary)]">In Progress</div>
                       </div>
                     </div>
                     <div className="w-24 h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                       <div className="h-full bg-amber-500 w-[65%]" />
                     </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-50 z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center bg-[var(--bg-tertiary)] rounded-[2.5rem] p-4 md:p-8 lg:p-12 border border-[var(--border-secondary)] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--accent-primary)]/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-[var(--accent-secondary)]/20 transition-colors duration-500" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] relative z-10">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">Accelerate</span> Your Growth?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of successful businesses that have transformed their operations with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-[var(--accent-primary)] hover:bg-opacity-90 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto hover:transform hover:scale-105"
              >
                Let's Talk Business <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            {/* <div className="mt-12 pt-8 border-t border-[var(--border-primary)] grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                {[
                  { val: '100+', label: 'Projects' },
                  { val: '50+', label: 'Clients' },
                  { val: '98%', label: 'Retention' },
                  { val: '24/7', label: 'Support' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.val}</div>
                    <div className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
