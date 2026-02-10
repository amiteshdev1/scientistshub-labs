'use client';

import Link from 'next/link';
import { Code, Server, Database, Cloud } from 'lucide-react';

export default function FullStackDevelopmentPage() {
  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx']
  };

  return (
    <div className="min-h-screen theme-bg-primary">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Code className="w-16 h-16 text-[#0774E8] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-6">
              Web Development
            </h1>
            <p className="text-lg sm:text-xl theme-text-secondary">
              End-to-end web application development from frontend to backend
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold theme-text-primary mb-8 text-center">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="theme-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-[#0774E8]" />
                  <h3 className="text-xl font-bold theme-text-primary">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="theme-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-[#0774E8]" />
                  <h3 className="text-xl font-bold theme-text-primary">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="theme-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-[#0774E8]" />
                  <h3 className="text-xl font-bold theme-text-primary">Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.database.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="theme-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-8 h-8 text-[#0774E8]" />
                  <h3 className="text-xl font-bold theme-text-primary">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.devops.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center theme-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold theme-text-primary mb-4">
              Ready to Build Your Application?
            </h2>
            <p className="theme-text-secondary mb-6">
              Let's create a scalable, performant web application tailored to your needs.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-block bg-[#0774E8] hover:bg-[#0562c7] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
