import {
  HiClipboard,
  HiShieldCheck,
  HiBriefcase,
  HiCurrencyDollar,
  HiDesktopComputer,
  HiCog,
} from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Features() {
  const config = ANIMATION_CONFIG.blockAnimations.features;

  const features = [
    {
      icon: HiClipboard,
      title: "Marketing",
      description:
        "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
    },
    {
      icon: HiShieldCheck,
      title: "Legal",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
    },
    {
      icon: HiBriefcase,
      title: "Business Automation",
      description:
        "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
    },
    {
      icon: HiCurrencyDollar,
      title: "Finance",
      description:
        "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
    },
    {
      icon: HiDesktopComputer,
      title: "Enterprise Design",
      description:
        "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
    },
    {
      icon: HiCog,
      title: "Operations",
      description:
        "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    },
  ];

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      stagger={config.stagger}
      staggerSelector=".grid > div"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-surface pointer-events-none" />

      <div className="relative py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="max-w-screen-md mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Designed for business teams like yours
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
