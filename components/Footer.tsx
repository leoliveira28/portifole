'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

interface FooterProps {
  dict: {
    copyright: string;
    madeWith: string;
    by: string;
  };
}

export function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card/20 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {dict.copyright.replace('2024', currentYear.toString())}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              {dict.madeWith} <FaHeart className="text-primary" /> {dict.by}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 