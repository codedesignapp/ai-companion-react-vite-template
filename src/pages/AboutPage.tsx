import { AboutHero } from "../blocks/AboutHero";
import { Mission } from "../blocks/Mission";
import { Values } from "../blocks/Values";
import { Stats } from "../blocks/Stats";
import { TeamSection } from "../blocks/TeamSection";
import { History } from "../blocks/History";
import { Testimonials } from "../blocks/Testimonials";
import { CTA } from "../blocks/CTA";
import { ContactForm } from "../blocks/ContactForm";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Stats />
      <TeamSection />
      <History />
      <Testimonials />
      <CTA />
      <ContactForm />
    </>
  );
}
