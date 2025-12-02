import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { animateOnMount, animateChildren, type AnimationType } from "../utils/animations";
import { ANIMATION_CONFIG } from "../animation.config";

interface AnimatedSectionProps {
  children: ReactNode;
  type?: AnimationType;
  enabled?: boolean;
  duration?: number;
  delay?: number;
  stagger?: boolean | number;
  staggerSelector?: string;
  scrollTrigger?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * AnimatedSection - Wrapper component for animated sections
 * 
 * Automatically animates the section and optionally its children
 */
export function AnimatedSection({
  children,
  type = "fadeInUp",
  enabled = true,
  duration,
  delay,
  stagger = false,
  staggerSelector,
  scrollTrigger = true,
  className = "",
  as: Component = "section",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ANIMATION_CONFIG.enabled || !enabled) return;
    if (typeof window === "undefined") return; // SSR safety

    const section = sectionRef.current;
    if (!section) return;

    let sectionAnimation: gsap.core.Tween | null = null;
    let childrenAnimation: gsap.core.Tween | null = null;

    try {
      // Animate the section itself
      sectionAnimation = animateOnMount(section, type, {
        duration,
        delay,
        scrollTrigger,
      });

      // Animate children if stagger is enabled
      if (stagger && staggerSelector) {
        childrenAnimation = animateChildren(section, staggerSelector, type, {
          duration,
          delay: typeof stagger === "number" ? stagger : undefined,
          stagger: true,
          scrollTrigger,
        });
      }
    } catch (error) {
      console.warn("Animation error:", error);
      // Silently fail - animations are non-critical
    }

    return () => {
      try {
        sectionAnimation?.kill();
        childrenAnimation?.kill();
      } catch (error) {
        // Ignore cleanup errors
      }
    };
  }, [type, enabled, duration, delay, stagger, staggerSelector, scrollTrigger]);

  // Use a type assertion for the ref since we know Component will be an HTML element
  return (
    <Component ref={sectionRef as any} className={className}>
      {children}
    </Component>
  );
}

