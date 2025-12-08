import { Button } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function CTA() {
  const config = ANIMATION_CONFIG.blockAnimations.cta;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20" />

      <div className="relative gap-12 items-center py-16 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl blur-2xl" />
          <img
            className="relative w-full dark:hidden rounded-2xl shadow-2xl"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="relative w-full hidden dark:block rounded-2xl shadow-2xl"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
        </div>
        <div className="mt-8 md:mt-0">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Let's create more tools and ideas that brings us together
          </h2>
          <p className="mb-8 text-lg text-text-secondary leading-relaxed">
            Flowbite helps you connect with friends and communities of people who share your interests.
            Connecting with your friends and family as well as discovering new ones is easy with features
            like Groups.
          </p>
          <Button
            as="a"
            href="#"
            color="blue"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            Get started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
