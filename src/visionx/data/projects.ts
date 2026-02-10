import { VisionXProject } from '../types';

/**
 * VisionX Projects Data
 * Mock data for Computer Vision projects
 */
export const VISIONX_PROJECTS: VisionXProject[] = [
    {
        id: '1',
        slug: 'face-detection',
        title: 'Face Detection',
        tagline: 'Real-time face detection and recognition',
        description: 'Advanced face detection system using deep learning models. Detects multiple faces in images and video streams with high accuracy.',
        category: 'face-detection',
        tags: ['face', 'detection', 'real-time', 'deep-learning'],
        techStack: ['TensorFlow.js', 'MediaPipe', 'React', 'WebGL'],
        status: 'active',
        thumbnail: '/visionx/projects/face-detection.jpg',
        features: [
            'Multi-face detection',
            'Real-time processing',
            'Facial landmark detection',
            'Age and emotion estimation'
        ]
    },
    {
        id: '2',
        slug: 'background-removal',
        title: 'Background Removal',
        tagline: 'AI-powered background segmentation',
        description: 'Remove backgrounds from images with precision using advanced segmentation models. Perfect for product photography and portraits.',
        category: 'image-processing',
        tags: ['segmentation', 'background', 'AI', 'image-processing'],
        techStack: ['U-Net', 'BodyPix', 'Canvas API', 'WebAssembly'],
        status: 'active',
        thumbnail: '/visionx/projects/background-removal.jpg',
        features: [
            'Automatic background detection',
            'Edge refinement',
            'Custom background replacement',
            'Batch processing'
        ]
    },
    {
        id: '3',
        slug: 'object-detection',
        title: 'Object Detection',
        tagline: 'Detect and classify objects in images',
        description: 'State-of-the-art object detection using YOLO and COCO datasets. Identifies and localizes multiple objects with bounding boxes.',
        category: 'object-detection',
        tags: ['object', 'detection', 'YOLO', 'classification'],
        techStack: ['YOLO v8', 'TensorFlow', 'COCO Dataset', 'Python'],
        status: 'active',
        thumbnail: '/visionx/projects/object-detection.jpg',
        features: [
            '80+ object classes',
            'Real-time detection',
            'Confidence scoring',
            'Custom model training'
        ]
    },
    {
        id: '4',
        slug: 'ocr-engine',
        title: 'OCR Engine',
        tagline: 'Extract text from images',
        description: 'Optical Character Recognition engine that extracts text from images, documents, and scanned files with high accuracy.',
        category: 'ocr',
        tags: ['OCR', 'text-extraction', 'document', 'recognition'],
        techStack: ['Tesseract.js', 'OpenCV', 'LSTM', 'Node.js'],
        status: 'beta',
        thumbnail: '/visionx/projects/ocr.jpg',
        features: [
            'Multi-language support',
            'Document layout analysis',
            'Handwriting recognition',
            'PDF text extraction'
        ]
    },
    {
        id: '5',
        slug: 'image-comparison',
        title: 'Image Comparison',
        tagline: 'Find similarities between images',
        description: 'Compare images using perceptual hashing and feature matching. Detect duplicates, find similar images, and measure visual similarity.',
        category: 'image-processing',
        tags: ['comparison', 'similarity', 'hashing', 'matching'],
        techStack: ['OpenCV', 'SIFT', 'ORB', 'Perceptual Hash'],
        status: 'coming-soon',
        thumbnail: '/visionx/projects/image-comparison.jpg',
        features: [
            'Perceptual hashing',
            'Feature point matching',
            'Similarity scoring',
            'Duplicate detection'
        ]
    }
];

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug: string): VisionXProject | undefined => {
    return VISIONX_PROJECTS.find(project => project.slug === slug);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: string): VisionXProject[] => {
    return VISIONX_PROJECTS.filter(project => project.category === category);
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
    return Array.from(new Set(VISIONX_PROJECTS.map(p => p.category)));
};

/**
 * Get all unique tags
 */
export const getAllTags = (): string[] => {
    const allTags = VISIONX_PROJECTS.flatMap(p => p.tags);
    return Array.from(new Set(allTags));
};
