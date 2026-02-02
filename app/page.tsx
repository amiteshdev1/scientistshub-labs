import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We specialize in building fast, scalable, and intelligent digital products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="💻"
              title="Software Development"
              description="Custom web and mobile applications built with modern technologies for maximum performance and scalability."
            />
            <ServiceCard
              icon="🎨"
              title="Product Design"
              description="User-centered design that combines aesthetics with functionality to create exceptional digital experiences."
            />
            <ServiceCard
              icon="🤖"
              title="AI & Automation"
              description="Intelligent systems that automate workflows, analyze data, and provide actionable insights for your business."
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Innovative solutions we've built and launched
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              name="LifeOS+"
              description="A comprehensive productivity app that helps you organize your life, manage tasks, set goals, and track habits with intelligent automation."
              status="Live"
            />
            <ProductCard
              name="Future Product"
              description="Exciting new products are in development. Stay tuned for innovative solutions that will transform how you work and live."
              status="In Progress"
            />
          </div>
        </div>
      </section>

      {/* Why Scientistshub Labs Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Why <span className="gradient-text">Scientistshub Labs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Execution</h3>
              <p className="text-gray-400">We move quickly from concept to deployment without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">User-Focused</h3>
              <p className="text-gray-400">Every product is designed with the end user in mind, ensuring maximum value.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-gray-400">Built to grow with your needs, from MVP to enterprise-level applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust and modern applications
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'AI/ML', 'React Native'].map((tech) => (
              <div key={tech} className="bg-dark-lighter border border-dark-border rounded-lg p-4 hover:border-primary transition-colors">
                <p className="font-semibold text-gray-300">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to build something <span className="gradient-text">amazing</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's collaborate and bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>
          <Button variant="primary" href="/contact">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
