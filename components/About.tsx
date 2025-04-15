'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "📦" },
  { name: "HTML/CSS", icon: "🎨" },
];

export function About() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl transform rotate-3" />
              <div className="relative w-[385px] h-[385px] -rotate-1 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Desenvolvedor Full Stack"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Sobre Mim
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Desenvolvedor Full Stack com mais de 3 anos de experiência em desenvolvimento web,
                especializado em criar soluções intuitivas e eficientes com React.js e Next.js.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Minha jornada na programação começou com uma paixão por criar experiências digitais
                memoráveis. Ao longo dos anos, desenvolvi expertise em diversas tecnologias modernas,
                sempre focando em entregar soluções que não apenas atendam às necessidades dos clientes,
                mas também superem suas expectativas.
              </p>

              <p className="text-muted-foreground">
                Acredito que o desenvolvimento web vai além de apenas escrever código - é sobre criar
                experiências que impactam positivamente o negócio dos clientes. Meu objetivo é ajudar
                empresas a alcançarem seus objetivos através de soluções tecnológicas inovadoras e
                eficientes.
              </p>
            </div>

            {/* Technologies Grid */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tecnologias Principais</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 