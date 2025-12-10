import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Content() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
      data-section="content"
    >
      <div className="ds-section ds-layout-split items-center mx-auto max-w-screen-xl">
        <div className="text-text-secondary">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            We didn't reinvent the wheel
          </h2>
          <p className="ds-body-lg mb-6">
            We are strategists, designers and developers. Innovators and problem solvers. Small enough to
            be simple and quick, but big enough to deliver the scope you want at the pace you need.
          </p>
          <p className="ds-body-lg">
            Our approach combines deep expertise with agile methodology, ensuring you get results that
            matter without the overhead of traditional agencies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0" style={{ gap: 'var(--grid-gap)' }}>
          <img
            className="w-full object-cover h-64"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-8 w-full object-cover h-64"
            style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
