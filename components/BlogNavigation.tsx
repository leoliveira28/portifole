'use client'
import Link from "next/link";

interface BlogNavigationProps {
  prevPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export function BlogNavigation({ prevPost, nextPost }: BlogNavigationProps) {
  return (
    <nav className="mt-12 pt-8 border-t border-border">
      <div className="flex items-center justify-between">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div className="text-right">
              <span className="text-sm">Post anterior</span>
              <p className="font-medium">{prevPost.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="text-left">
              <span className="text-sm">Próximo post</span>
              <p className="font-medium">{nextPost.title}</p>
            </div>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
} 