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
    >
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center lg:py-24 lg:px-6">
        <div className="grid max-w-screen-lg gap-12 mx-auto md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-surface-elevated border border-border rounded-2xl group hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
            >
              <dt className="mb-3 text-5xl md:text-6xl font-extrabold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </dt>
              <dd className="font-medium text-text-secondary uppercase tracking-wider text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
