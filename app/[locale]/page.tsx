import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpaceBackground } from "@/components/SpaceBackground";
import { CookieConsent } from "@/components/CookieConsent";
import { getDictionary } from "../i18n/utils";
import type { Locale } from "@/middleware";

export default async function Home({ 
  params: { locale } 
}: { 
  params: { locale: Locale } 
}) {
  const dict = getDictionary(locale);
  
  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      <Navigation locale={locale} dict={dict.navigation} switchLanguage={dict.switchLanguage} />
      <Hero dict={dict.hero} />
      <section id="about">
        <About dict={dict.about} />
      </section>
      <section id="skills">
        <Skills dict={dict.skills} />
      </section>
      <section id="projects">
        <Projects dict={dict.projects} />
      </section>
      <section id="services">
        <Services dict={dict.services} />
      </section>
      <section id="contact">
        <Contact dict={dict.contact} />
      </section>
      <Footer dict={dict.footer} />
      <CookieConsent dict={dict.cookieConsent} />
    </main>
  );
} 