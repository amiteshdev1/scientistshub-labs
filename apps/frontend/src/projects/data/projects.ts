import { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        name: 'LifeOS+',
        slug: 'lifeosplus',
        status: 'Work In Progress',
        category: 'Productivity',
        description: 'A comprehensive productivity ecosystem that helps you organize your entire life.',
        demoUrl: '/products/lifeosplus',
        techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
        features: ['Task Management', 'Goal Tracking', 'Habit Builder']
    },
    {
        id: '2',
        name: 'Object Detection',
        slug: 'object-detection',
        status: 'Work In Progress',
        category: 'Computer Vision',
        description: 'Real-time object detection using image and video and tracking for various applications.',
        // demoUrl: '/products/object-detection',
        techStack: ['Python', 'YOLOv8', 'OpenCV'],
        features: ['Object Detection', 'Tracking', 'Classification']
    }
];
