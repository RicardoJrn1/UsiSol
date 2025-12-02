"use client";

import Header from "../components/header";
import HeroSection from "../components/hero-section"
import BeneficiosSection from "../components/beneficios-section";
import PorqueUsisolSection from "../components/porqueusisol-section"
import PortfolioSection from "../components/portfolio-section"
import DepoimentosSection from "../components/depoimentos-section";
import FaqSection from "../components/faq-section";
import CtaFinalSection from "../components/ctafinal-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BeneficiosSection />
      <PorqueUsisolSection />
      <PortfolioSection />
      <DepoimentosSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
