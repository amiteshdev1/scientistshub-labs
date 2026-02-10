import Link from 'next/link';
import { Eye } from 'lucide-react';
import { VISIONX_CONFIG } from '../config/visionx.config';
import { ROUTES } from '../config/routes';

export function VisionXNav() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              {VISIONX_CONFIG.APP_NAME}
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href={ROUTES.HOME}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href={ROUTES.PROJECTS}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link 
              href={ROUTES.ABOUT}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
