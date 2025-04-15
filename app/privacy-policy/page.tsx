import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";
import Link from "next/link";

export const metadata = {
  title: 'Política de Privacidade | PortifoLe',
  description: 'Política de Privacidade e Cookies do PortifoLe',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Informações Gerais</h2>
              <p>
                Esta Política de Privacidade descreve como suas informações pessoais são coletadas, 
                usadas e compartilhadas quando você visita ou interage com o site PortifoLe.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Informações Pessoais que Coletamos</h2>
              <p>
                Quando você visita o site, coletamos automaticamente certas informações sobre seu dispositivo, 
                incluindo informações sobre seu navegador, endereço IP, fuso horário e cookies instalados em seu dispositivo.
              </p>
              <p className="mt-2">
                Quando você entra em contato conosco através do formulário de contato, coletamos as seguintes informações:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Mensagem enviada</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Uso de Cookies</h2>
              <p>
                Este site utiliza cookies para melhorar sua experiência de navegação. Cookies são pequenos 
                arquivos de texto que são armazenados em seu dispositivo quando você visita um site.
              </p>
              <p className="mt-2">
                Utilizamos os seguintes tipos de cookies:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Cookies estritamente necessários: necessários para o funcionamento do site</li>
                <li>Cookies de preferências: permitem que o site lembre suas preferências</li>
                <li>Cookies de estatísticas: coletam informações anônimas sobre como você usa o site</li>
              </ul>
              <p className="mt-2">
                Você pode optar por aceitar ou recusar estes cookies. A maioria dos navegadores aceita cookies 
                automaticamente, mas você pode modificar as configurações do seu navegador para recusar cookies, se preferir.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Como Usamos Suas Informações</h2>
              <p>
                Usamos as informações que coletamos para:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Responder às suas solicitações, perguntas e comentários</li>
                <li>Melhorar nosso site e entender como os visitantes usam nosso site</li>
                <li>Prevenir atividades fraudulentas e melhorar a segurança</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que coletamos. 
                Para exercer esses direitos, entre em contato conosco através das informações fornecidas abaixo.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Alterações</h2>
              <p>
                Podemos atualizar esta política de privacidade periodicamente para refletir, por exemplo, 
                mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contato</h2>
              <p>
                Para mais informações sobre nossas práticas de privacidade, ou se tiver dúvidas, 
                entre em contato conosco pelos seguintes meios:
              </p>
              <ul className="list-none mt-2 ml-4 space-y-2">
                <li>
                  <span className="font-medium text-foreground">E-mail:</span>{" "}
                  <a href="mailto:leandropimentel2011@gmail.com" className="text-primary hover:underline">
                    leandropimentel2011@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">Telefone:</span>{" "}
                  <a href="tel:+5517992193504" className="text-primary hover:underline">
                    (17) 99219-3504
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 