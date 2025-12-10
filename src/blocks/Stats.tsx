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
      data-section="stats"
    >
      {/* Decorative blobs - controlled by design system */}
      <div
        className="absolute top-0 right-1/4 bg-primary-900/30 rounded-full"
        style={{ width: 'var(--deco-blob-size)', height: 'var(--deco-blob-size)', filter: 'blur(var(--deco-blob-blur))', opacity: 'var(--deco-blob-opacity)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 bg-secondary-900/30 rounded-full"
        style={{ width: 'var(--deco-blob-size)', height: 'var(--deco-blob-size)', filter: 'blur(var(--deco-blob-blur))', opacity: 'var(--deco-blob-opacity)' }}
      />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="ds-heading-2 mb-6 text-white drop-shadow-sm">
            Trusted by Thousands
          </h2>
          <p className="ds-body-lg text-primary-50 max-w-2xl mx-auto font-medium opacity-90">
            Our platform powers businesses worldwide with enterprise-grade reliability.
          </p>
        </div>

        {/* Stats Grid - 4 items: 4-col on desktop, 2x2 on tablet, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="ds-card relative group text-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 ds-transition" style={{ borderRadius: 'var(--card-radius)' }} />

                {/* Icon */}
                <div className="flex justify-center mb-6 relative">
                  <div
                    className="bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 ds-transition"
                    style={{ width: 'var(--icon-container-size)', height: 'var(--icon-container-size)', borderRadius: 'var(--icon-container-radius)' }}
                  >
                    <Icon className="ds-icon text-white drop-shadow-sm" />
                  </div>
                </div>

                {/* Value */}
                <div
                  className="relative text-white mb-3"
                  style={{ fontSize: 'var(--heading-1-size)', fontWeight: 'var(--heading-weight)', fontFamily: 'var(--heading-font)', letterSpacing: 'var(--heading-tracking)' }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="ds-heading-3 relative text-white mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="ds-body relative text-primary-50 font-medium opacity-80">
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
