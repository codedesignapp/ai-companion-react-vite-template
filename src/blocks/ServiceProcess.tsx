import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ServiceProcess() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="ds-section ds-grid items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
        <div className="text-text-secondary">
          <h2 className="ds-heading-1 mb-8 text-text-primary">
            Our Process
          </h2>
          <p className="ds-body-lg mb-8">
            We follow a proven methodology that ensures successful project delivery every time. From
            initial consultation to final deployment and beyond, we work closely with you at every
            step to ensure your vision becomes reality.
          </p>
          <p className="ds-body-lg">
            Our agile approach allows for flexibility while maintaining laser focus on your
            objectives. We prioritize communication, transparency, and continuous improvement
            throughout the entire engagement, ensuring you're always in the loop.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-8 lg:mt-0" style={{ gap: 'var(--grid-gap)' }}>
          <img
            className="w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="process image 1"
          />
          <img
            className="mt-8 w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="process image 2"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
