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
      <Navigation locale={"pt-BR"} dict={{
        home: "",
        about: "",
        projects: "",
        services: "",
        contact: "",
        blog: ""
      }} 
      switchLanguage={""} />
      <BlogNavigation />
      {children}
    </>
  );
} 