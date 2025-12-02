import { useEffect, useRef } from "react";
import { animateOnMount, animateChildren, type AnimationType } from "../utils/animations";
import { ANIMATION_CONFIG } from "../animation.config";

/**
 * Hook to animate an element on mount
 */
export function useAnimation(
  type: AnimationType,
  options: {
    enabled?: boolean;
    duration?: number;
    delay?: number;
    scrollTrigger?: boolean;
  } = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ANIMATION_CONFIG.enabled || options.enabled === false) return;

    const element = elementRef.current;
    if (!element) return;

    const animation = animateOnMount(element, type, {
      duration: options.duration,
      delay: options.delay,
      scrollTrigger: options.scrollTrigger,
    });

    return () => {
      animation?.kill();
    };
  }, [type, options.enabled, options.duration, options.delay, options.scrollTrigger]);

  return elementRef;
}

/**
 * Hook to animate children elements with stagger
 */
export function useAnimationChildren(
  type: AnimationType,
  selector: string,
  options: {
    enabled?: boolean;
    duration?: number;
    delay?: number;
    stagger?: number | boolean;
    scrollTrigger?: boolean;
  } = {}
) {
  const parentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ANIMATION_CONFIG.enabled || options.enabled === false) return;

    const parent = parentRef.current;
    if (!parent) return;

    const animation = animateChildren(parent, selector, type, {
      duration: options.duration,
      delay: options.delay,
      stagger: options.stagger,
      scrollTrigger: options.scrollTrigger,
    });

    return () => {
      animation?.kill();
    };
  }, [type, selector, options.enabled, options.duration, options.delay, options.stagger, options.scrollTrigger]);

  return parentRef;
}

