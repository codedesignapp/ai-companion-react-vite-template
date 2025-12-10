import { Button } from "../components/Button";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function CTA() {
  const config = ANIMATION_CONFIG.blockAnimations.cta;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface relative overflow-hidden"
      data-section="cta"
    >
      {/* Decorative elements - controlled by design system */}
      <div className="ds-blob absolute -top-20 -right-20 bg-primary-500/20 dark:bg-primary-600/20 rounded-full mix-blend-screen" />
      <div className="ds-blob absolute -bottom-20 -left-20 bg-secondary-500/20 dark:bg-secondary-600/20 rounded-full mix-blend-screen" />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Split Layout - theme-controlled direction */}
        <div className="ds-layout-split">
          {/* Image Container */}
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl ds-transition"
              style={{ opacity: 'var(--deco-glow-opacity)' }}
            />
            <div
              className="relative overflow-hidden ring-1 ring-white/10 ds-transition group-hover:scale-[1.02]"
              style={{
                borderRadius: 'var(--card-radius)',
                boxShadow: 'var(--card-shadow-hover)'
              }}
            >
              <img
                className="w-full dark:hidden ds-image"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                alt="dashboard image"
              />
              <img
                className="w-full hidden dark:block ds-image"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                alt="dashboard image"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="ds-heading-2 mb-6 text-text-primary">
              Let's create more tools and ideas that brings us together
            </h2>
            <p className="ds-body-lg mb-8 text-text-secondary">
              Our platform helps you connect with friends and communities of people who share your interests.
              Connecting with your friends and family as well as discovering new ones is easy with features
              like Groups.
            </p>
            <Button
              as="a"
              href="#"
              color="blue"
              className="ds-button inline-flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-500 hover:shadow-glow-primary shadow-primary-500/20 active:scale-95"
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
      </div>
    </AnimatedSection>
  );
}
