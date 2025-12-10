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
      className="bg-primary-950 relative overflow-hidden"
    >
      {/* Decorative elements - clean and subtle */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-900/30 rounded-full blur-3xl" />

      <div className="relative py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-white lg:text-5xl drop-shadow-sm">
            Trusted by Thousands
          </h2>
          <p className="text-primary-50 text-lg leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
            Our platform powers businesses worldwide with enterprise-grade reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="flex justify-center mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                </div>
                <div className="relative text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="relative text-xl font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="relative text-primary-50 font-medium opacity-80">
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
