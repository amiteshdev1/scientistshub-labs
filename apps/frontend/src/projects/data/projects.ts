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
    },

    {
        id: '3',
        name: 'E-Commerce Website',
        slug: 'ecommerce-website',
        status: 'Work In Progress',
        category: 'E-commerce',
        description: 'E-commerce website for a Startup that helps in selling products online and managing inventory.',
        // demoUrl: '/products/ecommerce-website',
        techStack: ['Next.js', 'React', 'Express.js',  'TypeScript', 'TailwindCSS', 'Stripe'],
        features: ['Product Catalog', 'Cart', 'Checkout', 'Payment Gateway', 'Order Tracking', 'Customer Accounts', 'Analytics', 'SEO Optimization', 'Mobile Responsive Design', 'Admin Dashboard', 'Seller Portal', 'Inventory Management','Stock Management', 'Otp Verification' ],
        // slug: 'ecommerce-websit  e',

        // imageUrl: '/images/projects/ecommerce-website.png'

    }
];
