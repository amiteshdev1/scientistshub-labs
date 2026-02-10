'use client';

import Link from 'next/link';
import { 
  Code, 
  Megaphone, 
  Settings, 
  Layout, 
  Smartphone, 
  ArrowRight,
  Database,
  Globe,
  TrendingUp,
  Mail,
  Search,
  MapPin
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Software Services',
      description: 'Streamline your customer relationships and boost sales efficiency with our robust software solutions.',
      link: '/software',
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      features: [
        { name: 'Custom Software', icon: <Layout className="w-4 h-4" /> },
        // { name: 'Real Estate CRM', icon: <Database className="w-4 h-4" /> },
        // { name: 'Hospital CRM', icon: <Layout className="w-4 h-4" /> }
        
      ]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Development',
      description: 'Scalable, secure, and high-performance web and mobile solutions tailored to your unique business needs.',
      link: '/development',
      color: 'text-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      features: [
        { name: 'Full-Stack Development', icon: <Globe className="w-4 h-4" /> },
        { name: 'Cloud Infrastructure', icon: <Layout className="w-4 h-4" /> },
        { name: 'API Design', icon: <Database className="w-4 h-4" /> },
        { name: 'Native Mobile Apps', icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to drive traffic, increase engagement, and maximize your conversions.',
      link: '/digital-marketing',
      color: 'text-green-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      features: [
        { name: 'SEO Optimization', icon: <Search className="w-4 h-4" /> },
        { name: 'PPC Advertising', icon: <TrendingUp className="w-4 h-4" /> },
        { name: 'Social Media', icon: <Globe className="w-4 h-4" /> },
        { name: 'Email Marketing', icon: <Mail className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px] animate-pulse-slow"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-[120px] animate-pulse-medium"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Our Expertise
              </span>
            </h1>
            <p className="text-lg sm:text-2xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-3xl mx-auto">
              Innovative technology solutions designed to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative flex flex-col h-full bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-4 md:p-6 lg:p-6 flex flex-col flex-grow">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color} transition-transform group-hover:scale-110 duration-300 shadow-inner`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]  transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        <div className={`p-1.5 rounded-full ${service.bg} ${service.color}`}>
                          {feature.icon}
                        </div>
                        {feature.name}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-[var(--border-primary)]">
                    <span
                      className="inline-flex items-center font-semibold text-[var(--accent-primary)] group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
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
