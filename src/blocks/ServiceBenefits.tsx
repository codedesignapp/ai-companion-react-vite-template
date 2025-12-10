import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ServiceBenefits() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface-elevated"
      data-section="benefits"
    >
      <div className="ds-section ds-layout-split items-center mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2" style={{ gap: 'var(--grid-gap)' }}>
          <img
            className="w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="benefits image 1"
          />
          <img
            className="mt-8 w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="benefits image 2"
          />
        </div>
        <div className="text-text-secondary mt-8 lg:mt-0">
          <h2 className="ds-heading-1 mb-8 text-text-primary">
            Why Partner With Us
          </h2>
          <p className="ds-body-lg mb-8">
            When you choose our services, you're not just getting technical expertise – you're
            gaining a dedicated partner committed to your success. We bring years of industry
            experience, cutting-edge technology, and a customer-first approach to every project.
          </p>
          <p className="ds-body-lg">
            Our team stays ahead of the curve, continuously learning and adapting to ensure we
            deliver solutions that not only meet today's needs but are ready for tomorrow's
            challenges.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
