import { AboutHero } from "../blocks/AboutHero";
import { Mission } from "../blocks/Mission";
import { Values } from "../blocks/Values";
import { TeamSection } from "../blocks/TeamSection";
import { History } from "../blocks/History";
import { SocialProof } from "../blocks/SocialProof";
import { Content } from "../blocks/Content";
import { CTA } from "../blocks/CTA";
import { ContactForm } from "../blocks/ContactForm";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <TeamSection />
      <History />
      <SocialProof />
      <Content />
      <CTA />
      <ContactForm />
    </>
  );
}
