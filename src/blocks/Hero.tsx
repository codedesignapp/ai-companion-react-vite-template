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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-transparent dark:from-primary-950/20 pointer-events-none" />

      <div className="relative py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 rounded-full border border-primary-200 dark:border-primary-900">
          <HiSparkles className="w-4 h-4" />
          <span>Introducing our latest innovation</span>
        </div>

        {/* Main Heading with better typography */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-text-primary md:text-6xl lg:text-7xl max-w-4xl mx-auto">
          We invest in the world's potential
        </h1>

        {/* Description with better spacing */}
        <p className="mb-10 text-lg font-normal text-text-secondary lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>

        {/* Action Buttons with modern styling */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            as="a"
            href="#"
            color="blue"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25"
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
            className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-semibold text-text-primary bg-surface-elevated hover:bg-surface-subtle rounded-xl border border-border transition-all duration-200"
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

        {/* Trust indicators - more subtle and modern */}
        <div className="mt-16 pt-8 border-t border-border">
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

