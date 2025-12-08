import { HiCheck } from "react-icons/hi";
import { Button } from "../components";
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
      staggerSelector=".space-y-8 > div, .lg\\:grid > div"
      className="bg-surface"
    >
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-20">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Designed for business teams like yours
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-8 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col p-8 mx-auto max-w-lg text-center text-text-primary bg-surface-elevated rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 xl:p-10 group"
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <p className="text-text-secondary leading-relaxed">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-10">
                <span className="mr-2 text-5xl font-extrabold md:text-6xl">{plan.price}</span>
                <span className="text-text-secondary text-lg">/month</span>
              </div>
              <ul role="list" className="mb-10 space-y-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <HiCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span className="text-text-secondary">
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
              <Button
                as="a"
                href="#"
                color="blue"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-xl text-base px-8 py-3.5 text-center dark:text-white dark:focus:ring-primary-900 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25 mt-auto"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

