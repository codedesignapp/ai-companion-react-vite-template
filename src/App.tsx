import { Routes, Route } from "react-router-dom";
import { HeaderNavigation } from "./blocks/HeaderNavigation";
import { FooterSection } from "./blocks/FooterSection";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicePage } from "./pages/ServicePage";


import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  // Automatically refresh GSAP ScrollTrigger when theme changes
  // This fixes issues where layout changes (padding/margins) in different themes
  // invalidate the cached scroll positions of animations.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          // Small delay to allow CSS transitions/reflows to complete first
          setTimeout(() => {
            ScrollTrigger.refresh();
            console.debug("Theme changed: Refreshed GSAP animations");
          }, 300); // 300ms matches typical transition duration
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <FooterSection />
    </>
  );
}
