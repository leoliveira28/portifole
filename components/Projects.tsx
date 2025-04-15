'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Hospital de Base de Rio Preto",
    description: "Desenvolvi um portal web completo para o Hospital de Base de Rio Preto, uma das maiores instituições de saúde do Brasil, que recebe mais de 100.000 visitas mensais. O portal fornece informações detalhadas tanto para pacientes quanto para profissionais de saúde e inclui um blog institucional integrado. Construído com Next.js e otimizado para 100% de SEO, maximizando alcance e visibilidade.",
    image: "/home_hb.png",
    technologies: ["Next.js", "TypeScript", "SEO", "CMS", "Responsivo"],
    demoUrl: "https://www.hospitaldebase.com.br",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Hospital da Criança e Maternidade (HCM)",
    description: "Desenvolvi uma presença web para o HCM (Hospital da Criança e Maternidade), um hospital pediátrico dedicado a proporcionar um atendimento humanizado. O website foi projetado com foco na sensibilidade e facilidade de uso para abordar a natureza delicada de uma instituição de saúde infantil.",
    image: "/hcm_home.png",
    technologies: ["Next.js", "TypeScript", "UX/UI", "Acessibilidade"],
    demoUrl: "https://www.hcmriopreto.com.br",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Sistema de Gestão de Tarefas SmartSol",
    description: "Desenvolvi um sistema completo de gerenciamento de tarefas com interface estilo Kanban. Este projeto foi construído inteiramente usando Next.js para o frontend e backend, utilizando PostgreSQL para o banco de dados e implantado na Vercel para escalabilidade e confiabilidade.",
    image: "/home_smat.png",
    technologies: ["Next.js", "PostgreSQL", "Vercel", "Auth.js", "Kanban"],
    demoUrl: "https://smartsol.v3vagenciacriativa.com.br",
    githubUrl: "#",
    featured: true,
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Projetos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus principais projetos, demonstrando expertise em desenvolvimento web moderno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo ao Vivo
                    </Link>
                    {/* <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </Link> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 