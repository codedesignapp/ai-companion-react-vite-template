import {
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiShieldCheck,
  HiCode,
  HiChartBar,
} from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ServicesList() {
  const config = ANIMATION_CONFIG.blockAnimations.features;

  const services = [
    {
      icon: HiCloud,
      title: "Cloud Solutions",
      description:
        "Migrate and manage your infrastructure in the cloud with our expert guidance and comprehensive support services.",
    },
    {
      icon: HiCog,
      title: "IT Consulting",
      description:
        "Strategic technology consulting to align your IT infrastructure with business goals and drive growth.",
    },
    {
      icon: HiLightningBolt,
      title: "Performance Optimization",
      description:
        "Enhance your application's speed and efficiency with our comprehensive optimization and tuning services.",
    },
    {
      icon: HiShieldCheck,
      title: "Security Audits",
      description:
        "Comprehensive security assessments and penetration testing to protect your business from emerging threats.",
    },
    {
      icon: HiCode,
      title: "Custom Development",
      description:
        "Bespoke software solutions built to your exact specifications using modern technologies and best practices.",
    },
    {
      icon: HiChartBar,
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with our advanced analytics and business intelligence services.",
    },
  ];

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      stagger={config.stagger}
      staggerSelector=".ds-grid-responsive > div"
      className="bg-surface-elevated"
      data-section="services"
    >
      <div className="ds-section mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="max-w-screen-md mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-4 text-text-primary">
            What We Offer
          </h2>
          <p className="ds-body-lg text-text-secondary">
            Explore our comprehensive range of services designed to help your business succeed in
            the digital age.
          </p>
        </div>

        {/* Services Grid - theme-controlled columns */}
        <div className="ds-grid-responsive">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="ds-card bg-surface border border-border hover:border-primary-300 dark:hover:border-primary-700 group"
              >
                <div className="ds-icon-container mb-6 bg-primary-600/20 text-primary-500 group-hover:scale-110 ds-transition">
                  <Icon className="ds-icon" />
                </div>
                <h3 className="ds-heading-3 mb-3 text-text-primary">
                  {service.title}
                </h3>
                <p className="ds-body text-text-secondary">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
