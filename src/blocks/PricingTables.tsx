import { HiCheck } from "react-icons/hi";
import { Button } from "../components/Button";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: 'Team size: <span class="font-semibold">1 developer</span>' },
      { text: 'Premium support: <span class="font-semibold">6 months</span>' },
      { text: 'Free updates: <span class="font-semibold">6 months</span>' },
    ],
  },
  {
    name: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: 'Team size: <span class="font-semibold">10 developers</span>' },
      { text: 'Premium support: <span class="font-semibold">24 months</span>' },
      { text: 'Free updates: <span class="font-semibold">24 months</span>' },
    ],
  },
  {
    name: "Enterprise",
    description: "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: 'Team size: <span class="font-semibold">100+ developers</span>' },
      { text: 'Premium support: <span class="font-semibold">36 months</span>' },
      { text: 'Free updates: <span class="font-semibold">36 months</span>' },
    ],
  },
];

export function PricingTables() {
  const config = ANIMATION_CONFIG.blockAnimations.pricing;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      stagger={config.stagger}
      staggerSelector=".ds-grid-responsive > div"
      className="relative overflow-hidden bg-surface-elevated"
      data-section="pricing"
    >
      {/* Decorative radial gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent pointer-events-none"
        style={{ opacity: 'var(--deco-gradient-opacity)' }}
      />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="mx-auto max-w-screen-md text-center mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            Designed for business teams like yours
          </h2>
          <p className="ds-body-lg text-text-secondary">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
        </div>

        {/* Pricing Grid - theme-controlled columns */}
        <div className="ds-grid-responsive">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="ds-card flex flex-col mx-auto max-w-lg text-center text-text-primary bg-surface/[var(--card-bg-opacity)] border border-border hover:border-primary-300 dark:hover:border-primary-700 group relative overflow-hidden"
            >
              {/* Featured indicator */}
              {plan.name === "Company" && (
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-primary-500 shadow-glow-primary" style={{ borderRadius: 'var(--card-radius)' }} />
                </div>
              )}

              <h3 className="ds-heading-3 mb-4">{plan.name}</h3>
              <p className="ds-body text-text-secondary">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex justify-center items-baseline my-10">
                <span
                  className="mr-2 tracking-tight"
                  style={{
                    fontSize: 'var(--heading-1-size)',
                    fontWeight: 'var(--heading-weight)',
                    fontFamily: 'var(--heading-font)'
                  }}
                >
                  {plan.price}
                </span>
                <span className="ds-body text-text-secondary">/month</span>
              </div>

              {/* Features List */}
              <ul role="list" className="mb-10 space-y-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                      style={{ borderRadius: 'var(--badge-radius)' }}
                    >
                      <HiCheck className="w-3.5 h-3.5 text-green-500 dark:text-green-400" />
                    </div>
                    <span className="ds-body text-text-secondary">
                      {feature.text.split(/(<span[^>]*>.*?<\/span>)/g).map((part, i) => {
                        if (part.startsWith("<span")) {
                          return (
                            <span key={i} className="font-semibold text-text-primary">
                              {part.replace(/<[^>]*>/g, "")}
                            </span>
                          );
                        }
                        return part;
                      })}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                as="a"
                href="/about"
                color={plan.name === "Company" ? "blue" : "gray"}
                className={`ds-button w-full justify-center mt-auto ${plan.name === "Company"
                  ? "text-white bg-primary-600 hover:bg-primary-500 hover:shadow-glow-primary shadow-primary-500/20"
                  : "text-text-primary bg-surface-elevated hover:bg-surface-subtle border border-border hover:border-primary-300"
                  }`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
