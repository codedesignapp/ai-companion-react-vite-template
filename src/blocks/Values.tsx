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
      staggerSelector=".grid > div"
      className="bg-surface-elevated"
    >
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="max-w-screen-md mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Our Core Values
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            These principles guide everything we do and shape the culture of our organization.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-8 bg-surface border border-border rounded-2xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
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
