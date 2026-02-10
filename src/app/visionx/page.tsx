import Link from 'next/link';
import { HeroSection, ProjectCard } from '@/visionx/components';
import { VISIONX_PROJECTS } from '@/visionx/data/projects';
import { ROUTES } from '@/visionx/config/routes';
import { ArrowRight, Eye, Zap, Brain } from 'lucide-react';

export default function VisionXHomePage() {
  const featuredProjects = VISIONX_PROJECTS.filter(p => p.status === 'active').slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Computer Vision Lab"
        title="VisionX"
        description="Explore cutting-edge computer vision projects. From face detection to OCR, discover AI-powered visual intelligence tools built by ScientistsHub Labs."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ROUTES.PROJECTS}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={ROUTES.ABOUT}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Learn More
          </Link>
        </div>
      </HeroSection>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
              <p className="text-gray-400 text-sm">
                Process images and video streams in real-time with optimized algorithms
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deep Learning</h3>
              <p className="text-gray-400 text-sm">
                Powered by state-of-the-art neural networks and computer vision models
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Production Ready</h3>
              <p className="text-gray-400 text-sm">
                Battle-tested solutions ready for deployment in real-world applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of computer vision projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href={ROUTES.PROJECTS}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
