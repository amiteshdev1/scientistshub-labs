import { HeroSection } from '@/visionx/components';
import { VISIONX_CONFIG } from '@/visionx/config/visionx.config';
import { Eye, Target, Zap, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection
        subtitle="About VisionX"
        title="Computer Vision Lab"
        description="VisionX is a research initiative focused on building practical computer vision solutions. We explore the intersection of AI, machine learning, and visual intelligence."
      />

      <div className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                VisionX aims to make advanced computer vision technology accessible and practical. 
                We build tools that solve real-world problems using state-of-the-art AI models, 
                from face detection to document processing.
              </p>
            </div>

            {/* What We Build */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">What We Build</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Face Detection</h3>
                  <p className="text-gray-400">
                    Real-time face detection and recognition systems using deep learning
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Object Detection</h3>
                  <p className="text-gray-400">
                    Identify and classify objects in images and video streams
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">OCR Systems</h3>
                  <p className="text-gray-400">
                    Extract text from images and documents with high accuracy
                  </p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Image Processing</h3>
                  <p className="text-gray-400">
                    Advanced image manipulation and enhancement tools
                  </p>
                </div>
              </div>
            </div>

            {/* Labs Connection */}
            {VISIONX_CONFIG.SHOW_LABS_ATTRIBUTION && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Part of ScientistsHub Labs</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  VisionX is a flagship initiative by{' '}
                  <a 
                    href="https://labs.scientistshub.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ScientistsHub Labs
                  </a>
                  , a research-driven product development and engineering studio. 
                  We build scalable software systems and intelligent AI solutions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  VisionX represents our commitment to pushing the boundaries of computer vision 
                  technology while maintaining a focus on practical, production-ready solutions.
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technology</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We leverage cutting-edge frameworks and models:
              </p>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe', 'YOLO', 'Tesseract', 'Next.js', 'WebGL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
