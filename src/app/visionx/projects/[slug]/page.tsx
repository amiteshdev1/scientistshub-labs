import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug } from '@/visionx/data/projects';
import { ROUTES } from '@/visionx/config/routes';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

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
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href={ROUTES.PROJECTS}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {project.tagline}
              </p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo Placeholder */}
            {project.status !== 'coming-soon' && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Demo</h2>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Demo coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
              <div className="space-y-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-gray-800 text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-2">Category</h3>
              <p className="text-gray-300 capitalize">
                {project.category.split('-').join(' ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
