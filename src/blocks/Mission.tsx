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
      <div className="gap-12 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-6">
        <div className="text-text-secondary">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Our Mission
          </h2>
          <p className="mb-6 text-lg leading-relaxed">
            Our mission is to create technology that empowers organizations to reach their full
            potential. We believe in building sustainable, innovative solutions that make a real
            difference in people's lives and businesses.
          </p>
          <p className="text-lg leading-relaxed">
            Through dedication, expertise, and a commitment to excellence, we strive to be the
            trusted partner that helps our clients navigate the complexities of the digital
            landscape and achieve their strategic objectives.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
          <img
            className="w-full rounded-2xl object-cover h-64 shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="mission image 1"
          />
          <img
            className="mt-8 w-full rounded-2xl object-cover h-64 shadow-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="mission image 2"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
