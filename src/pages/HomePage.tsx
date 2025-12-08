import { Hero } from "../blocks/Hero";
import { Features } from "../blocks/Features";
import { Content } from "../blocks/Content";
import { SocialProof } from "../blocks/SocialProof";
import { CTA } from "../blocks/CTA";
import { PricingTables } from "../blocks/PricingTables";
import { FAQSection } from "../blocks/FAQSection";
import { ContactForm } from "../blocks/ContactForm";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Content />
      <SocialProof />
      <CTA />
      <PricingTables />
      <FAQSection />
      <ContactForm />
    </>
  );
}
