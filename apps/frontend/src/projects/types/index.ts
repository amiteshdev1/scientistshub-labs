export interface Project {
    id: string;
    name: string;
    slug: string;
    status: 'active' | 'paused' | 'archived' | 'Work In Progress';
    category: string;
    description: string;
    demoUrl?: string; // External or internal URL for the demo
    techStack: string[];
    thumbnail?: string; // URL to image
    features?: string[];
}
