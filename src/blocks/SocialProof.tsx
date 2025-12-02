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
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-text-primary sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{stat.value}</dt>
              <dd className="font-light text-text-secondary">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </AnimatedSection>
  );
}

