import { HiShieldCheck, HiLightningBolt, HiChartBar, HiCog } from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function BentoFeatures() {
  const config = ANIMATION_CONFIG.blockAnimations.features;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="ds-section mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="text-center mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            Everything You Need
          </h2>
          <p className="ds-body-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features designed to help your business thrive.
          </p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid ds-grid md:grid-cols-3 md:grid-rows-2">
          {/* Large featured item - spans 2 columns and 2 rows */}
          <div
            className="md:col-span-2 md:row-span-2 bg-surface-elevated border border-border group relative overflow-hidden ds-transition"
            style={{
              padding: 'calc(var(--card-padding) * 1.25)',
              borderRadius: 'var(--card-radius)',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            {/* Decorative blob - uses theme-aware primary color */}
            <div
              className="ds-blob absolute top-0 right-0 bg-primary-600/20 rounded-full group-hover:opacity-50 ds-transition pointer-events-none"
            />
            <div className="relative">
              <div
                className="ds-icon-container bg-primary-600 text-white mb-8 group-hover:scale-110 ds-transition"
                style={{ width: 'calc(var(--icon-container-size) * 1.4)', height: 'calc(var(--icon-container-size) * 1.4)' }}
              >
                <HiShieldCheck className="w-10 h-10" />
              </div>
              <h3
                className="text-text-primary mb-6"
                style={{ fontSize: 'var(--heading-2-size)', fontWeight: 'var(--heading-weight)', fontFamily: 'var(--heading-font)' }}
              >
                Enterprise Security
              </h3>
              <p className="ds-body-lg text-text-secondary mb-8">
                Bank-level encryption and security protocols to keep your data safe.
                Compliance with industry standards including SOC 2, GDPR, and HIPAA.
              </p>
              <div className="flex flex-wrap gap-3">
                {["256-bit Encryption", "SOC 2 Certified", "GDPR Compliant"].map((tag) => (
                  <span
                    key={tag}
                    className="ds-badge bg-surface text-sm font-medium text-text-primary border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Top right item */}
          <div className="ds-card bg-surface-elevated border border-border hover:border-primary-500 group">
            <div className="ds-icon-container bg-primary-600/20 text-primary-500 mb-6 group-hover:scale-110 ds-transition">
              <HiLightningBolt className="ds-icon" />
            </div>
            <h3 className="ds-heading-3 text-text-primary mb-4">
              Lightning Fast
            </h3>
            <p className="ds-body text-text-secondary">
              Optimized for speed with sub-100ms response times globally.
            </p>
          </div>

          {/* Bottom right item */}
          <div className="ds-card bg-surface-elevated border border-border hover:border-primary-500 group">
            <div className="ds-icon-container bg-primary-600/20 text-primary-500 mb-6 group-hover:scale-110 ds-transition">
              <HiChartBar className="ds-icon" />
            </div>
            <h3 className="ds-heading-3 text-text-primary mb-4">
              Real-time Analytics
            </h3>
            <p className="ds-body text-text-secondary">
              Comprehensive insights and metrics updated in real-time.
            </p>
          </div>
        </div>

        {/* Bottom row - full width */}
        <div
          className="mt-6 bg-surface-elevated border border-border ds-transition"
          style={{ padding: 'calc(var(--card-padding) * 1.25)', borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex flex-col md:flex-row items-center" style={{ gap: 'var(--grid-gap)' }}>
            <div
              className="ds-icon-container bg-primary-600/20 text-primary-500 flex-shrink-0"
              style={{ width: 'calc(var(--icon-container-size) * 1.15)', height: 'calc(var(--icon-container-size) * 1.15)' }}
            >
              <HiCog className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="ds-heading-3 text-text-primary mb-3">
                Fully Customizable
              </h3>
              <p className="ds-body-lg text-text-secondary">
                Tailor every aspect of the platform to match your unique workflow and branding requirements.
              </p>
            </div>
            <a
              href="#"
              className="ds-button bg-primary-600 hover:bg-primary-700 text-white whitespace-nowrap"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
