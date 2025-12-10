import { ReactNode, useRef, useEffect, ComponentPropsWithoutRef, ElementType } from "react";
import { animateOnMount, animateChildren, type AnimationType } from "../utils/animations";
import { ANIMATION_CONFIG } from "../animation.config";

interface AnimatedSectionProps<T extends ElementType = 'section'> {
  children: ReactNode;
  type?: AnimationType;
  enabled?: boolean;
  duration?: number;
  delay?: number;
  stagger?: boolean | number;
  staggerSelector?: string;
  scrollTrigger?: boolean;
  className?: string;
  as?: T;
  style?: React.CSSProperties;
}

// Allow data-* attributes by extending the base props
type AnimatedSectionPropsWithRest<T extends ElementType = 'section'> =
  AnimatedSectionProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof AnimatedSectionProps<T>>;

/**
 * AnimatedSection - Wrapper component for animated sections
 * 
 * Automatically animates the section and optionally its children
 */
export function AnimatedSection<T extends ElementType = 'section'>({
  children,
  type = "fadeInUp",
  enabled = true,
  duration,
  delay,
  stagger = false,
  staggerSelector,
  scrollTrigger = true,
  className = "",
  as,
  style,
  ...rest
}: AnimatedSectionPropsWithRest<T>) {
  const Component = as || 'section';
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ANIMATION_CONFIG.enabled || !enabled) return;
    if (typeof window === "undefined") return; // SSR safety

    const section = sectionRef.current;
    if (!section) return;

    let sectionAnimation: ReturnType<typeof animateOnMount> | null = null;
    let childrenAnimation: ReturnType<typeof animateChildren> | null = null;

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
  const ElementComponent = Component as any;
  return (
    <ElementComponent ref={sectionRef} className={className} style={style} {...rest}>
      {children}
    </ElementComponent>
  );
}
