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
      <div className="gap-12 items-center py-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-28 lg:px-6">
        <div className="grid grid-cols-2 gap-6">
          <img
            className="w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="history image 1"
          />
          <img
            className="mt-8 w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="history image 2"
          />
        </div>
        <div className="text-text-secondary mt-8 lg:mt-0">
          <h2 className="mb-8 text-5xl tracking-tight font-extrabold text-text-primary lg:text-6xl">
            Our Journey
          </h2>
          <p className="mb-8 text-xl leading-relaxed">
            Founded with a vision to transform how businesses operate in the digital landscape, we
            have grown from a small startup to a trusted partner for organizations worldwide. Our
            journey began with a simple idea: technology should empower, not complicate.
          </p>
          <p className="text-xl leading-relaxed">
            Over the years, we have helped hundreds of companies achieve their goals through
            innovative solutions and dedicated support. Our story is one of perseverance,
            innovation, and an unwavering commitment to our clients' success.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
