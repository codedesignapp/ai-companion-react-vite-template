import { HeaderNavigation } from "./blocks/HeaderNavigation";
import { Hero } from "./blocks/Hero";
import { Features } from "./blocks/Features";
import { Content } from "./blocks/Content";
import { TeamSection } from "./blocks/TeamSection";
import { PricingTables } from "./blocks/PricingTables";
import { SocialProof } from "./blocks/SocialProof";
import { FAQSection } from "./blocks/FAQSection";
import { ContactForm } from "./blocks/ContactForm";
import { CTA } from "./blocks/CTA";
import { FooterSection } from "./blocks/FooterSection";

export default function App() {
  return (
    <>
      <HeaderNavigation />
      <Hero />
      <Features />
      <Content />
      <TeamSection />
      <PricingTables />
      <SocialProof />
      <FAQSection />
      <ContactForm />
      <CTA />
      <FooterSection />
    </>
  );
}
