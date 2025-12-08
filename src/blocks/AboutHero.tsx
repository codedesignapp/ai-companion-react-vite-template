import { Button } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { HiUserGroup } from "react-icons/hi";
import { ANIMATION_CONFIG } from "../animation.config";

export function AboutHero() {
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
          <HiUserGroup className="w-4 h-4" />
          <span>Meet the team behind the innovation</span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-text-primary md:text-6xl lg:text-7xl max-w-4xl mx-auto">
          About Our Company
        </h1>

        <p className="mb-10 text-lg font-normal text-text-secondary lg:text-xl max-w-2xl mx-auto leading-relaxed">
          We are a team of passionate professionals dedicated to delivering innovative solutions
          that empower businesses to thrive in the digital age.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            as="a"
            href="#"
            color="blue"
            className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            Join our team
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
