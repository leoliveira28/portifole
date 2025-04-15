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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SpaceBackground />
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <CookieConsent />
    </main>
  );
}
