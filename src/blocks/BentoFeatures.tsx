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
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Everything You Need
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Powerful features designed to help your business thrive.
          </p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Large featured item - spans 2 columns and 2 rows */}
          <div className="md:col-span-2 md:row-span-2 p-10 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/50 dark:to-primary-900/50 border border-primary-200 dark:border-primary-900 rounded-3xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-900/50 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-primary-600 dark:bg-primary-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <HiShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-text-primary mb-6">
                Enterprise Security
              </h3>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Bank-level encryption and security protocols to keep your data safe.
                Compliance with industry standards including SOC 2, GDPR, and HIPAA.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-text-primary border border-border">
                  256-bit Encryption
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-text-primary border border-border">
                  SOC 2 Certified
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-text-primary border border-border">
                  GDPR Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Top right item */}
          <div className="p-8 bg-surface-elevated border border-border rounded-3xl hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HiLightningBolt className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Lightning Fast
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Optimized for speed with sub-100ms response times globally.
            </p>
          </div>

          {/* Bottom right item */}
          <div className="p-8 bg-surface-elevated border border-border rounded-3xl hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HiChartBar className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Real-time Analytics
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Comprehensive insights and metrics updated in real-time.
            </p>
          </div>
        </div>

        {/* Bottom row - full width */}
        <div className="mt-6 p-10 bg-gradient-to-r from-surface-elevated to-surface border border-border rounded-3xl hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
              <HiCog className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Fully Customizable
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Tailor every aspect of the platform to match your unique workflow and branding requirements.
              </p>
            </div>
            <a
              href="#"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25 whitespace-nowrap"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
