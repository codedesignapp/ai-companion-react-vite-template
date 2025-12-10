import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "73M+",
    label: "developers",
  },
  {
    value: "1B+",
    label: "contributors",
  },
  {
    value: "4M+",
    label: "organizations",
  },
];

export function SocialProof() {
  const config = ANIMATION_CONFIG.blockAnimations.socialProof;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
      data-section="social-proof"
    >
      <div className="ds-section max-w-screen-xl mx-auto text-center">
        <div className="ds-grid-responsive max-w-screen-lg mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="ds-card flex flex-col items-center justify-center bg-surface-elevated border border-border group hover:border-primary-300 dark:hover:border-primary-700"
            >
              <dt
                className="mb-3 text-primary-600 dark:text-primary-400 group-hover:scale-110 ds-transition"
                style={{
                  fontSize: 'var(--heading-1-size)',
                  fontWeight: 'var(--heading-weight)',
                  fontFamily: 'var(--heading-font)'
                }}
              >
                {stat.value}
              </dt>
              <dd className="ds-body font-medium text-text-secondary uppercase tracking-wider text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
