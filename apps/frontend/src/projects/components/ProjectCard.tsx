'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-2xl p-6 bg-[var(--card-bg)] border border-[var(--border-secondary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)]">
          {project.category}
        </span>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          project.status === 'active' 
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
            : project.status === 'Work In Progress'
            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
        }`}>
          {project.status}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
        {project.name}
      </h3>
      
      <p className="text-[var(--text-secondary)] mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center font-semibold text-[var(--accent-primary)] hover:underline"
        >
          View Project <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
