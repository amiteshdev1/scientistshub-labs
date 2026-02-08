import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This would typically come from a database or CMS
const blogPosts = {
  'building-scalable-web-apps-nextjs': {
    title: 'Building Scalable Web Applications with Next.js',
    author: 'ScientistsHub Labs Team',
    date: '2026-02-08',
    category: 'Web Development',
    content: `
Next.js has revolutionized the way we build web applications. In this comprehensive guide, we'll explore how to build production-ready, scalable web applications using Next.js and modern best practices.

## Why Next.js?

Next.js provides an excellent developer experience with features like:

- **Server-Side Rendering (SSR)**: Improve SEO and initial page load performance
- **Static Site Generation (SSG)**: Pre-render pages at build time for maximum performance
- **API Routes**: Build your backend API alongside your frontend
- **File-based Routing**: Intuitive routing based on your file structure
- **Image Optimization**: Automatic image optimization out of the box

## Getting Started

To create a new Next.js application, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Best Practices

1. **Use Server Components by Default**: Leverage React Server Components for better performance
2. **Optimize Images**: Use the Next.js Image component for automatic optimization
3. **Implement Proper Caching**: Use Next.js caching strategies effectively
4. **Code Splitting**: Utilize dynamic imports for better bundle sizes
5. **Environment Variables**: Properly manage environment-specific configurations

## Conclusion

Next.js is a powerful framework that makes building scalable web applications easier than ever. By following these best practices, you can create fast, SEO-friendly applications that provide an excellent user experience.
    `
  },
  'future-of-ai-software-development': {
    title: 'The Future of AI in Software Development',
    author: 'ScientistsHub Labs Team',
    date: '2026-02-05',
    category: 'AI & Innovation',
    content: `
Artificial Intelligence is transforming the software development landscape. Let's explore how AI is changing the way we build software and what the future holds.

## AI-Powered Development Tools

Modern developers are leveraging AI tools like:

- **Code Completion**: AI-powered code suggestions and completions
- **Bug Detection**: Automated bug finding and fixing
- **Code Review**: AI-assisted code review and optimization
- **Documentation**: Automatic documentation generation

## The Impact on Developers

AI is not replacing developers; it's augmenting their capabilities:

1. **Increased Productivity**: Developers can focus on complex problems
2. **Better Code Quality**: AI helps catch bugs and suggest improvements
3. **Faster Learning**: AI tools help developers learn new technologies faster
4. **Automated Testing**: AI can generate and run comprehensive tests

## Looking Ahead

The future of AI in software development is bright. We can expect:

- More sophisticated AI pair programming tools
- Better natural language to code translation
- Automated architecture design
- Intelligent debugging and optimization

## Conclusion

AI is here to stay in software development. Embracing these tools will make you a more effective and efficient developer.
    `
  },
  'best-practices-api-design': {
    title: 'Best Practices for API Design',
    author: 'ScientistsHub Labs Team',
    date: '2026-02-01',
    category: 'Backend Development',
    content: `
Designing a good API is crucial for building maintainable and scalable applications. Here are the best practices we follow at ScientistsHub Labs.

## RESTful Principles

Follow REST conventions:

- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Use meaningful resource names
- Implement proper status codes
- Version your API

## API Design Guidelines

### 1. Consistent Naming

Use consistent, descriptive names for endpoints:

\`\`\`
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
\`\`\`

### 2. Proper Error Handling

Return meaningful error messages:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
}
\`\`\`

### 3. Pagination

Implement pagination for list endpoints:

\`\`\`
GET /api/users?page=1&limit=20
\`\`\`

### 4. Authentication & Security

- Use OAuth 2.0 or JWT for authentication
- Implement rate limiting
- Use HTTPS only
- Validate all inputs

## Documentation

Always provide comprehensive API documentation:

- Clear endpoint descriptions
- Request/response examples
- Authentication requirements
- Error codes and meanings

## Conclusion

Following these best practices will help you build APIs that are easy to use, maintain, and scale.
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen theme-bg-primary">
      <article className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 theme-text-secondary hover:text-[#0774E8] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm theme-text-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="px-3 py-1 bg-[#0774E8]/20 text-[#0774E8] text-xs font-bold rounded-full">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-4">
                {post.title}
              </h1>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg theme-text-secondary max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold theme-text-primary mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="theme-text-secondary">
                          {item.replace(/^- \*\*(.+?)\*\*: /, '').replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.startsWith('```')) {
                  return (
                    <pre key={index} className="theme-bg-secondary p-4 rounded-lg overflow-x-auto my-4">
                      <code className="theme-text-primary text-sm">
                        {paragraph.replace(/```\w*\n?/g, '')}
                      </code>
                    </pre>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="theme-text-secondary leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
