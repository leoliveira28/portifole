import blogData from '@/data/blog-posts.json';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
  content: {
    type: 'paragraph' | 'heading' | 'list';
    content?: string;
    items?: string[];
  }[];
}

export function getAllPosts(): BlogPost[] {
  return blogData.posts as BlogPost[];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return (blogData.posts as BlogPost[]).find(post => post.slug === slug);
}

export function getAdjacentPosts(currentSlug: string): {
  prevPost?: { title: string; slug: string };
  nextPost?: { title: string; slug: string };
} {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);

  return {
    prevPost: currentIndex > 0 ? {
      title: posts[currentIndex - 1].title,
      slug: posts[currentIndex - 1].slug
    } : undefined,
    nextPost: currentIndex < posts.length - 1 ? {
      title: posts[currentIndex + 1].title,
      slug: posts[currentIndex + 1].slug
    } : undefined
  };
} 