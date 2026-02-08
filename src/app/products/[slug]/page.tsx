import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Package } from 'lucide-react';

// This would typically come from a database or API
const products = {
  'custom-web-applications': {
    name: 'Custom Web Applications',
    tagline: 'Tailored solutions for your business',
    description: 'Full-stack web applications built with modern technologies to meet your specific business needs.',
    category: 'Web Development',
    status: 'live',
    features: [
      'Custom functionality tailored to your workflow',
      'Scalable architecture for future growth',
      'Modern tech stack (React, Next.js, Node.js)',
      'Responsive design for all devices',
      'API integration with third-party services',
      'Admin dashboard for content management',
      'Real-time updates and notifications',
      'Advanced security features',
      'Performance optimization',
      'Ongoing support and maintenance'
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    pricing: 'Custom quote based on requirements'
  },
  'mobile-app-solutions': {
    name: 'Mobile App Solutions',
    tagline: 'Native and cross-platform apps',
    description: 'iOS and Android applications that provide exceptional user experiences and drive engagement.',
    category: 'Mobile Development',
    status: 'live',
    features: [
      'Native iOS development (Swift)',
      'Native Android development (Kotlin)',
      'Cross-platform development (React Native)',
      'Intuitive UI/UX design',
      'Push notifications',
      'In-app purchases',
      'Offline functionality',
      'App analytics integration',
      'App Store optimization',
      'Continuous updates and support'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    pricing: 'Starting from $15,000'
  },
  'ecommerce-platforms': {
    name: 'E-commerce Platforms',
    tagline: 'Sell online with confidence',
    description: 'Complete e-commerce solutions with payment integration, inventory management, and analytics.',
    category: 'E-commerce',
    status: 'live',
    features: [
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Analytics and reporting',
      'SEO optimization',
      'Mobile responsive design',
      'Admin dashboard'
    ],
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel', 'Shopify API'],
    pricing: 'Starting from $10,000'
  },
  'business-automation-tools': {
    name: 'Business Automation Tools',
    tagline: 'Streamline your operations',
    description: 'Custom automation solutions to boost productivity and reduce manual work.',
    category: 'Automation',
    status: 'live',
    features: [
      'Workflow automation',
      'Task scheduling',
      'Email automation',
      'Data synchronization',
      'Report generation',
      'Integration with existing tools',
      'Custom dashboards',
      'Notification system',
      'API development',
      'Scalable infrastructure'
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    pricing: 'Custom quote based on complexity'
  }
};

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  const statusColors = {
    live: 'bg-green-500/20 text-green-500',
    beta: 'bg-blue-500/20 text-blue-500',
    coming_soon: 'bg-yellow-500/20 text-yellow-500'
  };

  return (
    <div className="min-h-screen theme-bg-primary">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 theme-text-secondary hover:text-[#0774E8] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            {/* Product Header */}
            <div className="theme-card rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#0774E8]">
                  <Package className="w-16 h-16" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl sm:text-4xl font-bold theme-text-primary">
                      {product.name}
                    </h1>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[product.status as keyof typeof statusColors]}`}>
                      {product.status.toUpperCase().replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-lg text-[#0774E8] font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="theme-text-secondary text-sm mb-4">
                    Category: {product.category}
                  </p>
                  <p className="theme-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="theme-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold theme-text-primary mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="theme-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="theme-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold theme-text-primary mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0774E8]/20 text-[#0774E8] rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="theme-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold theme-text-primary mb-3">
                Pricing
              </h2>
              <p className="text-xl theme-text-secondary mb-6">
                {product.pricing}
              </p>
              <Link
                href="/request-a-quote"
                className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
