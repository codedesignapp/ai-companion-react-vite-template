import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, type AnimationType } from "../animation.config";

// Re-export AnimationType for use in components
export type { AnimationType };

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animation utilities for consistent animations across all blocks
 */

/**
 * Get animation duration based on preset
 */
export function getDuration(type: "fast" | "normal" | "slow" | "verySlow" = "normal"): number {
  if (!ANIMATION_CONFIG.enabled) return 0;

  const multiplier = {
    subtle: 0.7,
    moderate: 1.0,
    dynamic: 1.3,
  }[ANIMATION_CONFIG.preset];

  return ANIMATION_CONFIG.duration[type] * multiplier;
}

/**
 * Get easing function
 */
export function getEasing(type: "in" | "out" | "inOut" = "out"): string {
  return ANIMATION_CONFIG.easing[type];
}

/**
 * Create animation based on type
 */
export function createAnimation(
  element: gsap.TweenTarget,
  type: AnimationType,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number | boolean;
    scrollTrigger?: boolean | ScrollTrigger.Vars;
  } = {}
) {
  if (!ANIMATION_CONFIG.enabled) return null;

  const duration = options.duration ?? getDuration("normal");
  const delay = options.delay ?? 0;
  const easing = getEasing("out");

  // Base animation properties
  const baseProps: gsap.TweenVars = {
    duration,
    delay,
    ease: easing,
  };

  // Define from and to values based on animation type
  let fromValues: gsap.TweenVars = {};
  let toValues: gsap.TweenVars = { ...baseProps };

  switch (type) {
    case "fadeIn":
      fromValues = { opacity: 0 };
      toValues = { ...baseProps, opacity: 1 };
      break;

    case "fadeInUp":
      fromValues = { opacity: 0, y: 50 };
      toValues = { ...baseProps, opacity: 1, y: 0 };
      break;

    case "fadeInDown":
      fromValues = { opacity: 0, y: -50 };
      toValues = { ...baseProps, opacity: 1, y: 0 };
      break;

    case "fadeInLeft":
      fromValues = { opacity: 0, x: -50 };
      toValues = { ...baseProps, opacity: 1, x: 0 };
      break;

    case "fadeInRight":
      fromValues = { opacity: 0, x: 50 };
      toValues = { ...baseProps, opacity: 1, x: 0 };
      break;

    case "scaleIn":
      fromValues = { opacity: 0, scale: 0.8 };
      toValues = { ...baseProps, opacity: 1, scale: 1 };
      break;

    case "slideInUp":
      fromValues = { y: 100 };
      toValues = { ...baseProps, y: 0 };
      break;

    case "slideInDown":
      fromValues = { y: -100 };
      toValues = { ...baseProps, y: 0 };
      break;

    case "slideInLeft":
      fromValues = { x: -100 };
      toValues = { ...baseProps, x: 0 };
      break;

    case "slideInRight":
      fromValues = { x: 100 };
      toValues = { ...baseProps, x: 0 };
      break;
  }

  // Handle stagger
  if (options.stagger) {
    const staggerAmount = typeof options.stagger === "number"
      ? options.stagger
      : ANIMATION_CONFIG.delay.stagger;

    toValues.stagger = staggerAmount;
  }

  // Handle scroll trigger
  if (options.scrollTrigger !== false && ANIMATION_CONFIG.scrollTrigger.enabled) {
    const scrollTriggerConfig: ScrollTrigger.Vars = typeof options.scrollTrigger === "object"
      ? options.scrollTrigger
      : {
        start: ANIMATION_CONFIG.scrollTrigger.start,
        end: ANIMATION_CONFIG.scrollTrigger.end,
        toggleActions: ANIMATION_CONFIG.scrollTrigger.toggleActions,
      };

    toValues.scrollTrigger = {
      trigger: element as gsap.DOMTarget,
      ...scrollTriggerConfig,
    };
  }

  return gsap.fromTo(element, fromValues, toValues);
}

/**
 * Animate element on mount
 */
export function animateOnMount(
  element: HTMLElement | null,
  type: AnimationType,
  options: {
    duration?: number;
    delay?: number;
    scrollTrigger?: boolean | ScrollTrigger.Vars;
  } = {}
) {
  if (!element || !ANIMATION_CONFIG.enabled) return null;
  if (typeof window === "undefined") return null; // SSR safety

  try {
    return createAnimation(element, type, {
      ...options,
      scrollTrigger: options.scrollTrigger ?? true,
    });
  } catch (error) {
    console.warn("Error animating element:", error);
    return null;
  }
}

/**
 * Animate children with stagger
 */
export function animateChildren(
  parent: HTMLElement | null,
  selector: string,
  type: AnimationType,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number | boolean;
    scrollTrigger?: boolean | ScrollTrigger.Vars;
  } = {}
) {
  if (!parent || !ANIMATION_CONFIG.enabled) return null;
  if (typeof window === "undefined") return null; // SSR safety

  try {
    const children = parent.querySelectorAll(selector);
    if (children.length === 0) {
      console.warn(`No elements found for selector: ${selector}`);
      return null;
    }

    return createAnimation(children, type, {
      ...options,
      stagger: options.stagger ?? true,
      scrollTrigger: options.scrollTrigger ?? true,
    });
  } catch (error) {
    console.warn("Error animating children:", error);
    return null;
  }
}

