import { Button } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { HiSparkles } from "react-icons/hi";
import { ANIMATION_CONFIG } from "../animation.config";

export function Hero() {
  const config = ANIMATION_CONFIG.blockAnimations.hero;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface relative overflow-hidden"
    >
      {/* Decorative background elements - controlled by design system */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/[var(--deco-gradient-opacity)] via-transparent to-secondary-500/[var(--deco-gradient-opacity)] dark:from-primary-900/[var(--deco-gradient-opacity)] dark:to-secondary-900/[var(--deco-gradient-opacity)] pointer-events-none"
        style={{ opacity: 'var(--deco-gradient-opacity)' }}
      />
      <div
        className="ds-blob absolute top-0 left-1/2 -translate-x-1/2 bg-primary-500/20 rounded-full pointer-events-none"
      />

      <div className="ds-section relative mx-auto max-w-screen-xl text-center z-10">
        {/* Badge */}
        <div className="ds-badge inline-flex items-center gap-2 mb-[var(--heading-gap)] text-sm font-medium text-primary-400 bg-primary-600/20 backdrop-blur-md border border-primary-500/30 shadow-sm ds-transition">
          <HiSparkles className="w-4 h-4 text-primary-400" />
          <span>Introducing our latest innovation</span>
        </div>

        {/* Main Heading with design system typography */}
        <h1 className="ds-heading-1 mb-[var(--heading-gap)] max-w-5xl mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-primary-600 to-secondary-500 animate-gradient-x">
            We invest in the world's potential
          </span>
        </h1>

        {/* Description with design system body text */}
        <p className="ds-body-lg mb-[calc(var(--heading-gap)*1.5)] text-text-secondary max-w-3xl mx-auto">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>

        {/* Action Buttons with design system button styling */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button
            as="a"
            href="#"
            color="blue"
            className="ds-button inline-flex justify-center items-center gap-2 text-white bg-primary-600 hover:bg-primary-500 hover:shadow-glow-primary shadow-primary-500/20 active:scale-95"
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
          <Button
            as="a"
            href="#"
            outline
            className="ds-button inline-flex justify-center items-center gap-2 text-text-primary bg-white/5 backdrop-blur-sm hover:bg-surface-elevated/80 border border-border hover:shadow-lg active:scale-95"
          >
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-[calc(var(--section-gap)*1.5)] pt-[calc(var(--section-gap)*0.75)] border-t border-border">
          <p className="text-sm font-medium text-text-tertiary mb-6 uppercase tracking-wider">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="h-8 w-24 bg-text-tertiary/20 rounded"></div>
            <div className="h-8 w-28 bg-text-tertiary/20 rounded"></div>
            <div className="h-8 w-20 bg-text-tertiary/20 rounded"></div>
            <div className="h-8 w-32 bg-text-tertiary/20 rounded"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
