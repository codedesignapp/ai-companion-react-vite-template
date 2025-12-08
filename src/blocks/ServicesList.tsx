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
      staggerSelector=".grid > div"
      className="bg-surface-elevated"
    >
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="max-w-screen-md mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            What We Offer
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Explore our comprehensive range of services designed to help your business succeed in
            the digital age.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-surface border border-border rounded-2xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
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
