'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SpaceBackground() {
  // Removida a referência não utilizada
  
  // Usar scroll global em vez do target específico
  const { scrollYProgress } = useScroll({
    // Remover target para capturar o scroll da página inteira
    offset: ["start", "end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Nebula Effect */}
      <motion.div
        style={{ scale, opacity: useTransform(scrollYProgress, [0, 1], [0.4, 0.6]) }}
        className="absolute inset-0 bg-gradient-radial from-primary/40 via-transparent to-transparent"
      />

      {/* Stars Layer 1 - Far */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-60"
      />
      
      {/* Stars Layer 2 - Medium */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]), opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-40"
      />
      
      {/* Stars Layer 3 - Close */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -25]), opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-20"
      />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/30 rounded-full blur-3xl"
      />

      {/* Gradient Overlay - reduced opacity to make background more visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
    </div>
  );
} 