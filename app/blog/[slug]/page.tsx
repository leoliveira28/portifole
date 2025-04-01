'use client'
import { motion } from "framer-motion";
import { SpaceBackground } from "@/components/SpaceBackground";
import { BlogShare } from "@/components/BlogShare";
import { BlogNavigation } from "@/components/BlogNavigation";
import { BlogContent } from "@/components/BlogContent";
import { getPostBySlug, getAdjacentPosts } from "@/utils/blog";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  const { prevPost, nextPost } = getAdjacentPosts(params.slug);

  if (!post) {
    notFound();
  }

  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      
      <article className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              <BlogShare title={post.title} url={url} />
            </header>

            <BlogContent content={post.content} />

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para discutir como podemos ajudar você a alcançar seus objetivos.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
              >
                Solicitar Orçamento
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <BlogNavigation
              prevPost={prevPost}
              nextPost={nextPost}
            />
          </motion.div>
        </div>
      </article>
    </main>
  );
} 