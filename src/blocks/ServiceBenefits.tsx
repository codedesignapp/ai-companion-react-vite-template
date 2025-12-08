import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ServiceBenefits() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface-elevated"
    >
      <div className="gap-12 items-center py-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-28 lg:px-6">
        <div className="grid grid-cols-2 gap-6">
          <img
            className="w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="benefits image 1"
          />
          <img
            className="mt-8 w-full rounded-2xl object-cover h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="benefits image 2"
          />
        </div>
        <div className="text-text-secondary mt-8 lg:mt-0">
          <h2 className="mb-8 text-5xl tracking-tight font-extrabold text-text-primary lg:text-6xl">
            Why Partner With Us
          </h2>
          <p className="mb-8 text-xl leading-relaxed">
            When you choose our services, you're not just getting technical expertise – you're
            gaining a dedicated partner committed to your success. We bring years of industry
            experience, cutting-edge technology, and a customer-first approach to every project.
          </p>
          <p className="text-xl leading-relaxed">
            Our team stays ahead of the curve, continuously learning and adapting to ensure we
            deliver solutions that not only meet today's needs but are ready for tomorrow's
            challenges.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
