'use client'
import { motion } from "framer-motion";

interface HeroProps {
  dict: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    contact: string;
  };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            {dict.greeting}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              {dict.name}
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">{dict.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {dict.description}
          </p>
          <div className="flex gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {dict.cta}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              {dict.contact}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 