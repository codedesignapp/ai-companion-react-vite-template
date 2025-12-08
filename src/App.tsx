import { Routes, Route } from "react-router-dom";
import { HeaderNavigation } from "./blocks/HeaderNavigation";
import { FooterSection } from "./blocks/FooterSection";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicePage } from "./pages/ServicePage";

export default function App() {
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
