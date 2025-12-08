import { ServicesHero } from "../blocks/ServicesHero";
import { ServicesList } from "../blocks/ServicesList";
import { Features } from "../blocks/Features";
import { ServiceProcess } from "../blocks/ServiceProcess";
import { PricingTables } from "../blocks/PricingTables";
import { ServiceBenefits } from "../blocks/ServiceBenefits";
import { CTA } from "../blocks/CTA";
import { SocialProof } from "../blocks/SocialProof";
import { FAQSection } from "../blocks/FAQSection";
import { ContactForm } from "../blocks/ContactForm";

export function ServicePage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Features />
      <ServiceProcess />
      <PricingTables />
      <ServiceBenefits />
      <CTA />
      <SocialProof />
      <FAQSection />
      <ContactForm />
    </>
  );
}
