import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function History() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="ds-section ds-grid items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
        <div className="grid grid-cols-2 mt-8 lg:mt-0" style={{ gap: 'var(--grid-gap)' }}>
          <img
            className="w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="history image 1"
          />
          <img
            className="mt-8 w-full object-cover h-72 ds-transition hover:shadow-2xl"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow-hover)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="history image 2"
          />
        </div>
        <div className="text-text-secondary mt-8 lg:mt-0">
          <h2 className="ds-heading-1 mb-8 text-text-primary">
            Our Journey
          </h2>
          <p className="ds-body-lg mb-8">
            Founded with a vision to transform how businesses operate in the digital landscape, we
            have grown from a small startup to a trusted partner for organizations worldwide. Our
            journey began with a simple idea: technology should empower, not complicate.
          </p>
          <p className="ds-body-lg">
            Over the years, we have helped hundreds of companies achieve their goals through
            innovative solutions and dedicated support. Our story is one of perseverance,
            innovation, and an unwavering commitment to our clients' success.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
