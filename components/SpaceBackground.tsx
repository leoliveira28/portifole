'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SpaceBackground() {
  
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

      {/* Stars Layer 1 - Far - Menor movimento, maior tamanho do background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat bg-[length:250px_290px]"
      />
      
      {/* Stars Layer 2 - Medium - Movimento médio, tamanho médio do background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]), opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat bg-[length:150px_150px] opacity-70"
      />
      
      {/* Stars Layer 3 - Close - Movimento rápido, menor tamanho do background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]), opacity }}
        className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat bg-[length:100px_100px] opacity-85"
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40" />
    </div>
  );
} 