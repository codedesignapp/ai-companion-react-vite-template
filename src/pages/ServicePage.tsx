import { ServicesHero } from "../blocks/ServicesHero";
import { ServicesList } from "../blocks/ServicesList";
import { BentoFeatures } from "../blocks/BentoFeatures";
import { ServiceProcess } from "../blocks/ServiceProcess";
import { Stats } from "../blocks/Stats";
import { ServiceBenefits } from "../blocks/ServiceBenefits";
import { Testimonials } from "../blocks/Testimonials";
import { CTA } from "../blocks/CTA";
import { PricingTables } from "../blocks/PricingTables";
import { FAQSection } from "../blocks/FAQSection";
import { ContactForm } from "../blocks/ContactForm";

export function ServicePage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <BentoFeatures />
      <ServiceProcess />
      <Stats />
      <ServiceBenefits />
      <Testimonials />
      <CTA />
      <PricingTables />
      <FAQSection />
      <ContactForm />
    </>
  );
}
