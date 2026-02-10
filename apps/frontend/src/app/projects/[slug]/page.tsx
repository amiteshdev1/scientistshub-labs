'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2, Layers, CheckCircle } from 'lucide-react';
import { projects } from '@/projects/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/projects"
            className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[var(--accent-primary)] font-semibold tracking-wide uppercase text-sm mb-2 block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                  {project.name}
                </h1>
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${
                project.status === 'active' 
                  ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' 
                  : 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
              }`}>
                {project.status === 'active' ? (
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-gray-500 mr-2" />
                )}
                {project.status.toUpperCase()}
              </div>
            </div>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Tech Stack - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-secondary)]">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-[var(--accent-secondary)]" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-lg text-sm bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Launch Demo
                </a>
              )}
            </div>

            {/* Features & Details */}
            <div className="lg:col-span-2 space-y-8">
              {project.features && (
                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-secondary)]">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Layers className="w-6 h-6 mr-3 text-[var(--accent-primary)]" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Placeholder for more content */}
              <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-secondary)] flex items-center justify-center min-h-[200px] text-[var(--text-muted)] italic">
                Additional project documentation and gallery coming soon.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
