import { Button } from "../components/Button";
import { AnimatedSection } from "../components/AnimatedSection";
import { HiSparkles } from "react-icons/hi";
import { ANIMATION_CONFIG } from "../animation.config";

/**
 * Hero Section with Design-Driven Image Layouts
 * 
 * Layout modes controlled via data-hero-layout on :root:
 * 
 * - off: Full-width centered text, no images
 * - split: 50/50 grid - text left, images right (contained)
 * - fullbleed: Full-width edge-to-edge image with text overlay
 * - background: Large background image with centered text
 * - offset: Images break out of container bounds (dramatic overlap)
 */
export function Hero() {
  const config = ANIMATION_CONFIG.blockAnimations.hero;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="ds-hero bg-surface relative overflow-hidden"
      data-section="hero"
    >
      {/* Background Image Layer - for 'background' and 'fullbleed' modes */}
      <div className="ds-hero-bg-image">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="ds-hero-bg-overlay"></div>
      </div>

      {/* Background decorative elements */}
      <div
        className="ds-hero-gradient absolute inset-0 bg-gradient-to-br from-primary-500/[var(--deco-gradient-opacity)] via-transparent to-secondary-500/[var(--deco-gradient-opacity)] pointer-events-none"
        style={{ opacity: 'var(--deco-gradient-opacity)' }}
      />
      <div className="ds-blob absolute top-0 left-1/2 -translate-x-1/2 bg-primary-500/20 rounded-full pointer-events-none" />

      {/* Main Hero Container */}
      <div className="ds-hero-wrapper relative z-10 flex flex-col min-h-[inherit]">
        {/* Hero Content Grid */}
        <div className="ds-section ds-hero-container mx-auto max-w-screen-xl flex-1">

          {/* Text Content */}
          <div className="ds-hero-content">
            {/* Badge */}
            <div className="ds-badge ds-hero-badge inline-flex items-center gap-2 mb-6 text-sm font-medium text-primary-400 bg-primary-600/20 backdrop-blur-md border border-primary-500/30 shadow-sm ds-transition">
              <HiSparkles className="w-4 h-4 text-primary-400" />
              <span>Introducing our latest innovation</span>
            </div>

            {/* Main Heading */}
            <h1 className="ds-heading-1 ds-hero-heading mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-primary-600 to-secondary-500 animate-gradient-x">
                We invest in the world's potential
              </span>
            </h1>

            {/* Description */}
            <p className="ds-body-lg ds-hero-description mb-8 text-text-secondary">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
              long-term value and drive economic growth.
            </p>

            {/* Action Buttons */}
            <div className="ds-hero-actions flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                as="a"
                href="#"
                color="blue"
                className="ds-button inline-flex justify-center items-center gap-2 text-white bg-primary-600 hover:bg-primary-500 hover:shadow-glow-primary shadow-primary-500/20 active:scale-95"
              >
                Get started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                as="a"
                href="#"
                outline
                className="ds-button inline-flex justify-center items-center gap-2 text-text-primary bg-white/5 backdrop-blur-sm hover:bg-surface-elevated/80 border border-border hover:shadow-lg active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch demo
              </Button>
            </div>
          </div>

          {/* Image Section - for 'split', 'left', and 'offset' modes */}
          <div className="ds-hero-images">
            <div className="ds-hero-image-stack">
              {/* Main large image */}
              <div className="ds-hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                />
              </div>
              {/* Floating accent image */}
              <div className="ds-hero-image-accent">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
                  alt="Modern workspace"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed Image - for 'fullbleed' mode (below text, edge-to-edge) */}
        <div className="ds-hero-fullbleed-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
            alt="Team collaboration"
          />
        </div>

        {/* Trust indicators - INSIDE wrapper to avoid being affected by parent flex */}
        <div className="ds-hero-trust mx-auto max-w-screen-xl px-4 w-full">
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm font-medium text-text-tertiary mb-6 uppercase tracking-wider text-center">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="h-8 w-24 bg-text-tertiary/20 rounded"></div>
              <div className="h-8 w-28 bg-text-tertiary/20 rounded"></div>
              <div className="h-8 w-20 bg-text-tertiary/20 rounded"></div>
              <div className="h-8 w-32 bg-text-tertiary/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
