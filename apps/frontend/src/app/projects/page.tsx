'use client';

import { ProjectCard } from '@/projects/components/ProjectCard';
import { projects } from '@/projects/data/projects';
import { useTheme } from 'next-themes';

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Projects & Labs
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Explore our active projects, experiments, and open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
               <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
