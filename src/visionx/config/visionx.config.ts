/**
 * VisionX Configuration
 * 
 * This configuration enables VisionX to run in two modes:
 * 1. Embedded: /visionx (current - inside Labs)
 * 2. Standalone: / (future - visionx.scientistshub.com)
 */

export const VISIONX_CONFIG = {
    APP_NAME: 'VisionX',
    TAGLINE: 'Computer Vision Initiative by ScientistsHub Labs',

    // Routing
    MODE: process.env.NEXT_PUBLIC_VISIONX_MODE || 'embedded', // 'embedded' | 'standalone'
    BASE_PATH: process.env.NEXT_PUBLIC_VISIONX_MODE === 'standalone' ? '' : '/visionx',

    // Branding
    SHOW_LABS_ATTRIBUTION: process.env.NEXT_PUBLIC_VISIONX_MODE !== 'standalone',

    // API (Future-ready)
    API_BASE_URL: process.env.NEXT_PUBLIC_VISIONX_API_URL || '/api/visionx',

    // Meta
    META: {
        title: 'VisionX - Computer Vision Projects',
        description: 'Explore cutting-edge computer vision projects including face detection, OCR, object detection, and image processing.',
        keywords: ['computer vision', 'AI', 'machine learning', 'face detection', 'OCR', 'object detection']
    }
} as const;

export type VisionXMode = 'embedded' | 'standalone';
