import { HiCheck } from "react-icons/hi";
import { Button } from "../components";

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
  return (
    <section className="bg-surface">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-primary">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-text-secondary sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-text-primary bg-surface-elevated rounded-lg border border-border shadow xl:p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-text-secondary sm:text-lg">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-text-secondary">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <HiCheck className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>
                      {feature.text.split(/(<span[^>]*>.*?<\/span>)/g).map((part, i) => {
                        if (part.startsWith("<span")) {
                          return (
                            <span key={i} className="font-semibold">
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
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

