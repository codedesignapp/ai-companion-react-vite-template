import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Mission() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="ds-section ds-grid items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
        <div className="text-text-secondary">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            Our Mission
          </h2>
          <p className="ds-body-lg mb-6">
            Our mission is to create technology that empowers organizations to reach their full
            potential. We believe in building sustainable, innovative solutions that make a real
            difference in people's lives and businesses.
          </p>
          <p className="ds-body-lg">
            Through dedication, expertise, and a commitment to excellence, we strive to be the
            trusted partner that helps our clients navigate the complexities of the digital
            landscape and achieve their strategic objectives.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-8 lg:mt-0" style={{ gap: 'var(--grid-gap)' }}>
          <img
            className="w-full object-cover h-64"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="mission image 1"
          />
          <img
            className="mt-8 w-full object-cover h-64"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="mission image 2"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
