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
      staggerSelector=".ds-grid-responsive > div"
      className="relative overflow-hidden"
      data-section="features"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-surface pointer-events-none ds-gradient-overlay" />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="max-w-screen-md mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-4 text-text-primary">
            Designed for business teams like yours
          </h2>
          <p className="ds-body-lg text-text-secondary">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
          </p>
        </div>

        {/* Features Grid - theme-controlled columns */}
        <div className="ds-grid-responsive">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="ds-card relative bg-surface/[var(--card-bg-opacity)] border border-border hover:border-primary-300 dark:hover:border-primary-700 group overflow-hidden"
              >
                {/* Card gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 ds-transition" />

                {/* Icon Container */}
                <div className="ds-icon-container relative mb-6 bg-primary-600/20 text-primary-500 group-hover:scale-110 group-hover:rotate-3 ds-transition shadow-sm">
                  <Icon className="ds-icon" />
                </div>

                {/* Content */}
                <h3 className="ds-heading-3 relative mb-3 text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 ds-transition">
                  {feature.title}
                </h3>
                <p className="ds-body relative text-text-secondary">
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
