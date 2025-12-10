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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-500/20 blur-[100px] opacity-20 rounded-full pointer-events-none" />

      <div className="relative py-24 px-4 mx-auto max-w-screen-xl text-center lg:py-36 lg:px-12 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50/50 dark:bg-primary-900/30 backdrop-blur-md rounded-full border border-primary-200 dark:border-primary-700/50 shadow-sm">
          <HiSparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span>Introducing our latest innovation</span>
        </div>

        {/* Main Heading with better typography */}
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight leading-tight md:text-6xl lg:text-7xl max-w-5xl mx-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-primary-600 to-secondary-500 animate-gradient-x">
            We invest in the world's potential
          </span>
        </h1>

        {/* Description with better spacing */}
        <p className="mb-12 text-lg font-normal text-text-secondary lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>

        {/* Action Buttons with modern styling */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button
            as="a"
            href="#"
            color="blue"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow-primary shadow-lg shadow-primary-500/20 active:scale-95"
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
            className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-semibold text-text-primary bg-white/5 backdrop-blur-sm hover:bg-surface-elevated/80 rounded-xl border border-border transition-all duration-300 hover:shadow-lg active:scale-95"
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

