import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Scientistshub Labs - a modern software studio building fast, useful, and scalable digital products.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="gradient-text">Scientistshub Labs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A modern software studio dedicated to building exceptional digital products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark-lighter">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What We Are */}
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Are</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Scientistshub Labs is a software and product development studio focused on creating 
              intelligent digital systems that solve real-world problems. We combine technical 
              expertise with design thinking to build products that users love.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're not a research institution or academic lab—we're builders. Our focus is on 
              shipping production-ready software that delivers value from day one.
            </p>
          </div>

          {/* Our Philosophy */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Build Fast</h3>
                <p className="text-gray-400">
                  Speed matters. We move quickly from concept to deployment, iterating based on 
                  real user feedback rather than endless planning.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Build Useful</h3>
                <p className="text-gray-400">
                  Every feature must serve a purpose. We prioritize user needs and business value 
                  over technical complexity for its own sake.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Build Scalable</h3>
                <p className="text-gray-400">
                  We design systems that grow with your needs. From MVP to enterprise, our 
                  architecture supports your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Relationship to ScientistsHub */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Ecosystem</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Scientistshub Labs operates under Scientistshub Innovations LLP, focusing exclusively 
              on software and product development. While we share the "Scientistshub" name, we 
              maintain a clear separation from research activities.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is simple: build great software that makes a difference. We leverage 
              modern technologies, best practices, and user-centered design to create products 
              that stand out in the market.
            </p>
          </div>

          {/* What We Don't Do */}
          <div className="bg-dark border border-dark-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-gray-400">Studio-focused approach, not individual founder hype</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-gray-400">Production-ready code, not experimental prototypes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-gray-400">User-centered design, not technology for technology's sake</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-gray-400">Collaborative partnerships, not just client-vendor relationships</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want to work with us?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            We're always looking for exciting projects and great collaborators
          </p>
          <Button variant="primary" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
