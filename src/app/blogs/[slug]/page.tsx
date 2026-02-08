
import { notFound } from 'next/navigation';
import { findBlogBySlug, getBlogPosts } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

// This function is required for Static Site Generation (SSG) with dynamic routes
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = findBlogBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Scientistshub Labs',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.metaTitle || post.title} | Scientistshub Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = findBlogBySlug(params.slug);
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post?.id).slice(0, 3);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} relatedPosts={relatedPosts} allPosts={allPosts} />;
}
