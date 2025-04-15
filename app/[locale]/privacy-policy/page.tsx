import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";
import Link from "next/link";
import { Locale } from "@/middleware";
import { getDictionary } from "../../i18n/utils";

export const metadata = {
  title: 'Política de Privacidade | PortifoLe',
  description: 'Política de Privacidade e Cookies do PortifoLe',
};

export default function PrivacyPolicy({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const dict = getDictionary(locale);
  
  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      <Navigation locale={locale} dict={dict.navigation} switchLanguage={dict.switchLanguage} />
      
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
          <h1 className="text-3xl font-bold mb-8">{dict.privacyPolicy.title}</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. {locale === 'pt-BR' ? 'Informações Gerais' : 'General Information'}</h2>
              <p>
                {locale === 'pt-BR'
                  ? 'Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou interage com o site PortifoLe.'
                  : 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with the PortifoLe website.'}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. {locale === 'pt-BR' ? 'Informações Pessoais que Coletamos' : 'Personal Information We Collect'}</h2>
              <p>
                {locale === 'pt-BR'
                  ? 'Quando você visita o site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e cookies instalados em seu dispositivo.'
                  : 'When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device.'}
              </p>
              <p className="mt-2">
                {locale === 'pt-BR'
                  ? 'Quando você entra em contato conosco através do formulário de contato, coletamos as seguintes informações:'
                  : 'When you contact us through the contact form, we collect the following information:'}
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>{locale === 'pt-BR' ? 'Nome' : 'Name'}</li>
                <li>{locale === 'pt-BR' ? 'Endereço de e-mail' : 'Email address'}</li>
                <li>{locale === 'pt-BR' ? 'Mensagem enviada' : 'Message sent'}</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. {locale === 'pt-BR' ? 'Uso de Cookies' : 'Use of Cookies'}</h2>
              <p>
                {locale === 'pt-BR'
                  ? 'Este site utiliza cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site.'
                  : 'This site uses cookies to improve your browsing experience. Cookies are small text files that are stored on your device when you visit a website.'}
              </p>
              <p className="mt-2">
                {locale === 'pt-BR'
                  ? 'Utilizamos os seguintes tipos de cookies:'
                  : 'We use the following types of cookies:'}
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>{locale === 'pt-BR'
                  ? 'Cookies estritamente necessários: necessários para o funcionamento do site'
                  : 'Strictly necessary cookies: required for the site to function'}
                </li>
                <li>{locale === 'pt-BR'
                  ? 'Cookies de preferências: permitem que o site lembre suas preferências'
                  : 'Preference cookies: allow the site to remember your preferences'}
                </li>
                <li>{locale === 'pt-BR'
                  ? 'Cookies de estatísticas: coletam informações anônimas sobre como você usa o site'
                  : 'Statistics cookies: collect anonymous information about how you use the site'}
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. {locale === 'pt-BR' ? 'Contato' : 'Contact'}</h2>
              <p>
                {locale === 'pt-BR'
                  ? 'Para mais informações sobre nossas práticas de privacidade, ou se tiver dúvidas, entre em contato conosco pelos seguintes meios:'
                  : 'For more information about our privacy practices, or if you have questions, please contact us using the following methods:'}
              </p>
              <ul className="list-none mt-2 ml-4 space-y-2">
                <li>
                  <span className="font-medium text-foreground">{locale === 'pt-BR' ? 'E-mail:' : 'Email:'}</span>{" "}
                  <a href="mailto:leandropimentel2011@gmail.com" className="text-primary hover:underline">
                    leandropimentel2011@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">{locale === 'pt-BR' ? 'Telefone:' : 'Phone:'}</span>{" "}
                  <a href="tel:+5517992193504" className="text-primary hover:underline">
                    {locale === 'pt-BR' ? '(17) 99219-3504' : '+55 17 99219-3504'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border">
            <Link href={`/${locale}`} className="text-primary hover:underline">
              {dict.privacyPolicy.backHome}
            </Link>
          </div>
        </div>
      </section>
      
      <Footer dict={dict.footer} />
    </main>
  );
} 