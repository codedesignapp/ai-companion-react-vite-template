import { HiTrendingUp, HiUserGroup, HiGlobe, HiLightningBolt } from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Stats() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  const stats = [
    {
      icon: HiUserGroup,
      value: "50K+",
      label: "Active Users",
      description: "Growing every day",
    },
    {
      icon: HiGlobe,
      value: "120+",
      label: "Countries",
      description: "Worldwide reach",
    },
    {
      icon: HiTrendingUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service",
    },
    {
      icon: HiLightningBolt,
      value: "2.5x",
      label: "Faster",
      description: "Than competitors",
    },
  ];

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-white lg:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="text-primary-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Our platform powers businesses worldwide with enterprise-grade reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-100">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
