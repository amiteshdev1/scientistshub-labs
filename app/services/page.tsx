import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional software development services including web development, mobile apps, custom software, UI/UX design, and AI automation solutions.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge frameworks like React, Next.js, and Vue. We create fast, SEO-friendly, and scalable web solutions.",
      useCases: ["E-commerce platforms", "SaaS applications", "Corporate websites", "Web portals"]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces with seamless performance and offline capabilities.",
      useCases: ["Consumer apps", "Enterprise mobile solutions", "On-demand services", "Social platforms"]
    },
    {
      icon: "⚙️",
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs. From CRM systems to inventory management and beyond.",
      useCases: ["Business automation", "Internal tools", "API development", "System integrations"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. We create intuitive interfaces that users love and that drive conversions.",
      useCases: ["Product design", "Design systems", "User research", "Prototyping"]
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description: "Intelligent systems powered by machine learning and AI. Automate workflows, analyze data, and gain insights to make better business decisions.",
      useCases: ["Process automation", "Chatbots", "Data analysis", "Predictive models"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-primary mb-2">USE CASES:</h3>
                  <ul className="space-y-1">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="text-primary mr-2">▸</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">start a project</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss how we can help you achieve your goals
          </p>
          <Button variant="primary" href="/contact">
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
}
