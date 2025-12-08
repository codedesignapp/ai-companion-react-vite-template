import { Hero } from "../blocks/Hero";
import { BentoFeatures } from "../blocks/BentoFeatures";
import { Content } from "../blocks/Content";
import { Stats } from "../blocks/Stats";
import { Testimonials } from "../blocks/Testimonials";
import { CTA } from "../blocks/CTA";
import { PricingTables } from "../blocks/PricingTables";
import { FAQSection } from "../blocks/FAQSection";
import { ContactForm } from "../blocks/ContactForm";

export function HomePage() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <Content />
      <Stats />
      <Testimonials />
      <CTA />
      <PricingTables />
      <FAQSection />
      <ContactForm />
    </>
  );
}
