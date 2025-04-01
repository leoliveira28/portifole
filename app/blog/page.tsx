'use client'
import { motion } from "framer-motion";
import { SpaceBackground } from "@/components/SpaceBackground";
import Link from "next/link";
import { getAllPosts } from "@/utils/blog";

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <header className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Artigos e insights sobre desenvolvimento web, marketing digital e tecnologia
              </p>
            </header>

            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Fique por dentro das últimas novidades e insights sobre desenvolvimento web e tecnologia.
                Assine nossa newsletter para receber atualizações.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
                >
                  Assinar
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 