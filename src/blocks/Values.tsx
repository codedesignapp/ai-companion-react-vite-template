import {
  HiLightningBolt,
  HiShieldCheck,
  HiHeart,
  HiUsers,
  HiLightBulb,
  HiTrendingUp,
} from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Values() {
  const config = ANIMATION_CONFIG.blockAnimations.features;

  const values = [
    {
      icon: HiLightningBolt,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that drive progress.",
    },
    {
      icon: HiShieldCheck,
      title: "Integrity",
      description:
        "We conduct business with transparency, honesty, and ethical practices at all times, building trust with every interaction.",
    },
    {
      icon: HiHeart,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do, driving our decisions and inspiring our innovations.",
    },
    {
      icon: HiUsers,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster a collaborative environment where ideas flourish.",
    },
    {
      icon: HiLightBulb,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring the highest quality standards and attention to detail.",
    },
    {
      icon: HiTrendingUp,
      title: "Growth",
      description:
        "We are committed to continuous learning and improvement, both as individuals and as an organization.",
    },
  ];

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      stagger={config.stagger}
      staggerSelector=".ds-grid-responsive > div"
      className="bg-surface-elevated"
      data-section="values"
    >
      <div className="ds-section mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="max-w-screen-md mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-4 text-text-primary">
            Our Core Values
          </h2>
          <p className="ds-body-lg text-text-secondary">
            These principles guide everything we do and shape the culture of our organization.
          </p>
        </div>

        {/* Values Grid - theme-controlled columns */}
        <div className="ds-grid-responsive">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="ds-card bg-surface border border-border hover:border-primary-300 dark:hover:border-primary-700 group"
              >
                <div className="ds-icon-container mb-6 bg-primary-600/20 text-primary-500 group-hover:scale-110 ds-transition">
                  <Icon className="ds-icon" />
                </div>
                <h3 className="ds-heading-3 mb-3 text-text-primary">
                  {value.title}
                </h3>
                <p className="ds-body text-text-secondary">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
