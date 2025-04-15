import { Navigation } from "@/components/Navigation";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation locale={"pt-BR"} dict={{
        home: "",
        about: "",
        projects: "",
        services: "",
        contact: "",
        blog: ""
      }} switchLanguage={""} />
      
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Sobre Mim</h1>
          
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Olá! Sou um desenvolvedor de software apaixonado por criar soluções
                inovadoras e experiências digitais memoráveis. Com anos de experiência
                no desenvolvimento web, tenho trabalhado em diversos projetos
                desafiadores que me permitiram expandir minhas habilidades e
                conhecimentos.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Minha Jornada</h2>
              <p>
                Minha jornada na programação começou com uma curiosidade natural
                por tecnologia e uma vontade de criar coisas novas. Ao longo dos
                anos, desenvolvi expertise em várias tecnologias e frameworks
                modernos, sempre mantendo-me atualizado com as últimas tendências
                do mercado.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Valores</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qualidade e excelência em cada linha de código</li>
                <li>Inovação e criatividade na resolução de problemas</li>
                <li>Colaboração e comunicação efetiva</li>
                <li>Aprendizado contínuo e evolução profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 