import Link from 'next/link';
import Image from 'next/image';
import { VisionXProject } from '../types';
import { ROUTES } from '../config/routes';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: VisionXProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    beta: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'coming-soon': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  };

  const statusLabels = {
    active: 'Active',
    beta: 'Beta',
    'coming-soon': 'Coming Soon'
  };

  return (
    <Link 
      href={ROUTES.PROJECT_DETAIL(project.slug)}
      className="group block"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-48 bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">🔬</div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {project.tagline}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <span className="text-sm text-gray-500">
              {project.techStack.length} technologies
            </span>
            <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
              View Project
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
