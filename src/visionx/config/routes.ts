import { VISIONX_CONFIG } from './visionx.config';

/**
 * Route Helper for VisionX
 * Ensures all routes work in both embedded and standalone modes
 */
export const visionxRoute = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${VISIONX_CONFIG.BASE_PATH}${cleanPath}`;
};

/**
 * VisionX Routes
 */
export const ROUTES = {
    HOME: visionxRoute('/'),
    PROJECTS: visionxRoute('/projects'),
    PROJECT_DETAIL: (slug: string) => visionxRoute(`/projects/${slug}`),
    ABOUT: visionxRoute('/about'),
} as const;
