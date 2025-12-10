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
      {/* Decorative blob */}
      <div className="ds-blob absolute -top-40 -right-40 bg-primary-600/20 rounded-full pointer-events-none" />

      <div className="ds-section relative mx-auto max-w-screen-xl text-center">
        {/* Badge */}
        <div className="ds-badge inline-flex items-center gap-2 mb-[var(--heading-gap)] text-sm font-medium text-primary-400 bg-primary-600/20 border border-primary-500/30">
          <HiUserGroup className="w-4 h-4" />
          <span>Meet the team behind the innovation</span>
        </div>

        <h1 className="ds-heading-1 mb-6 text-text-primary max-w-4xl mx-auto">
          About Our Company
        </h1>

        <p className="ds-body-lg mb-10 text-text-secondary max-w-2xl mx-auto">
          We are a team of passionate professionals dedicated to delivering innovative solutions
          that empower businesses to thrive in the digital age.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            as="a"
            href="#"
            color="blue"
            className="ds-button inline-flex justify-center items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-glow-primary"
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
