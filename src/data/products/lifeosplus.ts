export interface ProductFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ProductUseCase {
    category: 'Personal' | 'Professional' | 'Team';
    title: string;
    problem: string;
    solution: string;
}

export interface ProductStep {
    number: number;
    title: string;
    description: string;
}

export interface ProductCTA {
    primary: {
        text: string;
        href: string;
    };
    secondary?: {
        text: string;
        href: string;
    };
}

export interface ProductData {
    name: string;
    tagline: string;
    status: 'Live' | 'Beta' | 'Experimental' | 'In Progress';
    description: string;
    whatIsIt: {
        explanation: string;
        whoItsFor: string;
        problemItSolves: string;
    };
    features: ProductFeature[];
    useCases: ProductUseCase[];
    howItWorks: ProductStep[];
    cta: ProductCTA;
    seo: {
        title: string;
        description: string;
        keywords: string[];
        canonicalUrl: string;
    };
}

const lifeOSPlusData: ProductData = {
    name: 'LifeOS+',
    tagline: 'Your life, organized in one place',
    status: 'Beta',
    description: 'A comprehensive productivity ecosystem that helps you organize your entire life.',

    whatIsIt: {
        explanation: 'LifeOS+ is a unified productivity platform that brings together task management, goal tracking, habit building, and analytics into a single, cohesive system. Built for people who want to take control of their time and achieve their goals systematically.',
        whoItsFor: 'Designed for professionals, students, and anyone who wants to organize their life more effectively. Whether you\'re managing complex projects, building new habits, or tracking personal goals, LifeOS+ adapts to your workflow.',
        problemItSolves: 'Stop juggling multiple apps and losing track of your goals. LifeOS+ eliminates the chaos of scattered tools by providing one integrated system where everything connects—your tasks link to your goals, your habits support your objectives, and your progress is always visible.'
    },

    features: [
        {
            icon: 'CheckSquare',
            title: 'Task Management',
            description: 'Organize tasks with projects, tags, priorities, and due dates. Smart views help you focus on what matters.'
        },
        {
            icon: 'Target',
            title: 'Goal Tracking',
            description: 'Set meaningful goals and track progress with visual indicators. Break big goals into actionable milestones.'
        },
        {
            icon: 'Activity',
            title: 'Habit Builder',
            description: 'Build lasting habits with streak tracking, reminders, and insights. See your consistency over time.'
        },
        {
            icon: 'Bell',
            title: 'Smart Reminders',
            description: 'Never miss important tasks with intelligent notifications that adapt to your schedule and preferences.'
        },
        {
            icon: 'BarChart',
            title: 'Analytics Dashboard',
            description: 'Understand your productivity patterns with detailed analytics. Identify trends and optimize your workflow.'
        }
    ],

    useCases: [
        {
            category: 'Personal',
            title: 'Building Better Habits',
            problem: 'You want to exercise regularly, read more, or meditate daily, but struggle to stay consistent.',
            solution: 'Use LifeOS+ to track daily habits, set reminders, and visualize your streaks. The analytics show your progress over weeks and months, keeping you motivated.'
        },
        {
            category: 'Professional',
            title: 'Managing Multiple Projects',
            problem: 'You\'re juggling client work, personal projects, and learning goals across different tools.',
            solution: 'Centralize everything in LifeOS+. Link tasks to specific goals, track time spent on each project, and see your overall progress in one dashboard.'
        },
        {
            category: 'Personal',
            title: 'Achieving Long-term Goals',
            problem: 'You have big goals (learn a language, write a book) but don\'t know how to break them down or track progress.',
            solution: 'Create goals in LifeOS+, break them into milestones, and connect daily tasks. The system shows exactly how today\'s work contributes to your bigger vision.'
        }
    ],

    howItWorks: [
        {
            number: 1,
            title: 'Set Your Goals',
            description: 'Define what you want to achieve—personal, professional, or both. Break big goals into smaller milestones.'
        },
        {
            number: 2,
            title: 'Build Your System',
            description: 'Create tasks, establish habits, and set up reminders. Everything connects to your goals automatically.'
        },
        {
            number: 3,
            title: 'Track & Improve',
            description: 'Review your analytics dashboard to see patterns, celebrate wins, and adjust your approach based on real data.'
        }
    ],

    cta: {
        primary: {
            text: 'Request Early Access',
            href: '/contacts'
        },
        secondary: {
            text: 'Learn More',
            href: '/about'
        }
    },

    seo: {
        title: 'LifeOS+ | Productivity Ecosystem | ScientistsHub Labs',
        description: 'Organize your entire life with LifeOS+. Task management, goal tracking, habit building, and analytics in one integrated productivity system.',
        keywords: ['productivity app', 'task management', 'goal tracking', 'habit builder', 'personal productivity', 'life organization'],
        canonicalUrl: '/products/lifeosplus'
    }
};

export default lifeOSPlusData;
