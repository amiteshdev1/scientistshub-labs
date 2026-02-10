export interface VisionXProject {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    techStack: string[];
    status: ProjectStatus;
    demoUrl?: string;
    githubUrl?: string;
    thumbnail: string;
    features: string[];
}

export type ProjectCategory =
    | 'face-detection'
    | 'object-detection'
    | 'ocr'
    | 'image-processing'
    | 'video-analysis';

export type ProjectStatus = 'active' | 'beta' | 'coming-soon';

export interface ProjectFilter {
    category?: ProjectCategory;
    tags?: string[];
    status?: ProjectStatus;
}
