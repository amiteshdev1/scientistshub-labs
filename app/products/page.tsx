import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description: "Innovative digital products built by Scientistshub Labs, including LifeOS+ productivity app and upcoming solutions.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "LifeOS+",
      description: "A comprehensive productivity ecosystem that helps you organize your entire life. Manage tasks, set and track goals, build habits, take notes, and automate your daily routines with intelligent features and beautiful design.",
      status: "Live" as const,
      features: ["Task Management", "Goal Tracking", "Habit Builder", "Smart Reminders", "Analytics Dashboard"]
    },
    {
      name: "DataFlow AI",
      description: "An intelligent data analysis platform that transforms raw data into actionable insights. Perfect for businesses looking to make data-driven decisions with the power of AI and machine learning.",
      status: "In Progress" as const,
      features: ["AI-Powered Analytics", "Custom Dashboards", "Real-time Processing", "Predictive Models"]
    },
    {
      name: "TeamSync",
      description: "A modern collaboration platform designed for remote teams. Streamline communication, manage projects, and keep everyone aligned with real-time updates and intelligent notifications.",
      status: "In Progress" as const,
      features: ["Team Chat", "Project Management", "Video Calls", "File Sharing", "Integrations"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions we've built to solve real-world problems
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  status={product.status}
                />
                <div className="mt-4 ml-6">
                  <h3 className="text-sm font-semibold text-primary mb-2">KEY FEATURES:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Have a product idea?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            We can help you build it from concept to launch
          </p>
          <Button variant="primary" href="/contact">
            Let's Talk
          </Button>
        </div>
      </section>
    </div>
  );
}
