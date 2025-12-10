import { Link } from "react-router-dom";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function FooterSection() {
  const config = ANIMATION_CONFIG.blockAnimations.footer;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      as="footer"
      className="bg-surface-elevated"
      style={{ padding: 'var(--card-padding)' }}
      data-section="footer"
    >
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-text-primary"
          style={{ fontFamily: 'var(--heading-font)' }}
        >
          <div
            className="mr-2 h-8 w-8 bg-primary-600 flex items-center justify-center"
            style={{ borderRadius: 'var(--icon-container-radius)' }}
          >
            <span className="text-white font-bold text-lg">S</span>
          </div>
          Brand name
        </Link>
        <p className="ds-body my-6 text-text-secondary">
          Open-source library of over 400+ web components and interactive elements built for better web.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-text-primary">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ds-transition hover:text-primary-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ds-transition hover:text-primary-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="mr-4 hover:underline md:mr-6 ds-transition hover:text-primary-600">
              Service
            </Link>
          </li>
        </ul>
        <span className="text-sm text-text-secondary sm:text-center">
          © 2024-2025 <Link to="/" className="hover:underline ds-transition">Starter™</Link>. All Rights Reserved.
        </span>
      </div>
    </AnimatedSection>
  );
}
