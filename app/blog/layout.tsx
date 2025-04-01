'use client'
import { Navigation } from "@/components/Navigation";
import { BlogNavigation } from "@/components/BlogNavigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <BlogNavigation />
      {children}
    </>
  );
} 