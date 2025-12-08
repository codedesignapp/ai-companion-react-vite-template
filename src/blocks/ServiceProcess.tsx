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
      <div className="gap-12 items-center py-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-28 lg:px-6">
        <div className="text-text-secondary">
          <h2 className="mb-8 text-5xl tracking-tight font-extrabold text-text-primary lg:text-6xl">
            Our Process
          </h2>
          <p className="mb-8 text-xl leading-relaxed">
            We follow a proven methodology that ensures successful project delivery every time. From
            initial consultation to final deployment and beyond, we work closely with you at every
            step to ensure your vision becomes reality.
          </p>
          <p className="text-xl leading-relaxed">
            Our agile approach allows for flexibility while maintaining laser focus on your
            objectives. We prioritize communication, transparency, and continuous improvement
            throughout the entire engagement, ensuring you're always in the loop.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
          <img
            className="w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="process image 1"
          />
          <img
            className="mt-8 w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="process image 2"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
