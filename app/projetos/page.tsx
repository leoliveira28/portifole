import { Navigation } from "@/components/Navigation";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce construída com Next.js e Stripe",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com autenticação e real-time updates",
    image: "/project2.jpg",
    technologies: ["React", "Firebase", "Material UI"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Site de portfolio moderno e responsivo com tema espacial",
    image: "/project3.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export default function Projetos() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Projetos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-colors"
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-20" />
                  <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver Projeto
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 