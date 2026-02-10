import Link from 'next/link';
import { VISIONX_CONFIG } from '../config/visionx.config';
import { ROUTES } from '../config/routes';

export function VisionXFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {currentYear} {VISIONX_CONFIG.APP_NAME}
            {VISIONX_CONFIG.SHOW_LABS_ATTRIBUTION && (
              <span className="ml-2 text-gray-500">
                — A Computer Vision initiative by{' '}
                <a 
                  href="https://labs.scientistshub.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ScientistsHub Labs
                </a>
              </span>
            )}
          </div>
          
          <nav className="flex gap-6 text-sm">
            <Link 
              href={ROUTES.HOME}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href={ROUTES.PROJECTS}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              href={ROUTES.ABOUT}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
