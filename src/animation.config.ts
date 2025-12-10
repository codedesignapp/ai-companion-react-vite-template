/**
 * ============================================
 * ANIMATION CONFIGURATION - CENTRALIZED CONTROL
 * ============================================
 * 
 * Controls animation settings for the entire application.
 * 
 * To enable/disable animations or change animation settings:
 * 1. Change the values below
 * 2. Save this file
 * 3. All blocks will automatically use the new settings
 * 
 * Animation tokens (durations, easings, delays) are defined in:
 * 📁 src/animation-system.css (if needed for CSS animations)
 */

export const ANIMATION_CONFIG = {
  /**
   * GLOBAL ANIMATION TOGGLE
   * 
   * Set to false to disable all animations (useful for accessibility)
   * Set to true to enable animations
   */
  enabled: true,

  /**
   * ANIMATION PRESET
   * 
   * Choose a preset animation style:
   * - "subtle" - Gentle, minimal animations
   * - "moderate" - Balanced animations (default)
   * - "dynamic" - More pronounced, energetic animations
   */
  preset: "moderate" as "subtle" | "moderate" | "dynamic",

  /**
   * ANIMATION DURATIONS (in seconds)
   * 
   * Control how long animations take to complete
   */
  duration: {
    fast: 0.3,      // Quick animations (hover effects, etc.)
    normal: 0.6,    // Standard animations (fade in, slide up)
    slow: 1.0,      // Slower animations (complex sequences)
    verySlow: 1.5,  // Very slow animations (page transitions)
  },

  /**
   * ANIMATION DELAYS (in seconds)
   * 
   * Stagger delays for sequential animations
   */
  delay: {
    stagger: 0.1,   // Delay between each item in a list
    section: 0.2,   // Delay between sections
  },

  /**
   * EASING FUNCTIONS
   * 
   * Control the acceleration/deceleration of animations
   * Available: "power1", "power2", "power3", "power4", "back", "elastic", "bounce"
   */
  easing: {
    in: "power2.out" as string,      // Ease in
    out: "power2.out" as string,     // Ease out
    inOut: "power2.inOut" as string, // Ease in-out
  },

  /**
   * SCROLL TRIGGER SETTINGS
   * 
   * Control when animations trigger on scroll
   */
  scrollTrigger: {
    enabled: true,           // Enable scroll-triggered animations
    start: "top bottom",     // Start animation IMMEDIATELY when top of element hits bottom of viewport
    end: "bottom 20%",       // End animation when element is 20% from bottom
    toggleActions: "play none none none", // Play on enter, don't reverse (stay visible)
  },

  /**
   * ANIMATION TYPES PER BLOCK
   * 
   * Configure which animation type each block uses
   */
  blockAnimations: {
    hero: {
      type: "fadeInUp" as AnimationType,
      enabled: true,
    },
    features: {
      type: "fadeInUp" as AnimationType,
      enabled: true,
      stagger: true, // Stagger child items
    },
    content: {
      type: "fadeIn" as AnimationType,
      enabled: true,
    },
    team: {
      type: "fadeInUp" as AnimationType,
      enabled: true,
      stagger: true,
    },
    pricing: {
      type: "fadeInUp" as AnimationType,
      enabled: true,
      stagger: true,
    },
    socialProof: {
      type: "fadeIn" as AnimationType,
      enabled: true,
    },
    faq: {
      type: "fadeIn" as AnimationType,
      enabled: true,
    },
    contact: {
      type: "fadeInUp" as AnimationType,
      enabled: true,
    },
    cta: {
      type: "fadeIn" as AnimationType,
      enabled: true,
    },
    footer: {
      type: "fadeIn" as AnimationType,
      enabled: false,
    },
    header: {
      type: "fadeInDown" as AnimationType,
      enabled: true,
    },
  },
} as const;

/**
 * Available animation types
 */
export type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideInUp"
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight";

