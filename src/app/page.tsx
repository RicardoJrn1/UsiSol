"use client";

import Header from "../components/header";
import HeroSection from "../components/hero-section"
import BeneficiosSection from "../components/beneficios-section";
import ComoFuncionaSection from "../components/comofunciona-section"
import EconomiaSimuladaSection from "../components/economiasimulada-section";
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
      <ComoFuncionaSection />
      <EconomiaSimuladaSection />
      <PorqueUsisolSection />
      <PortfolioSection />
      <DepoimentosSection />
      <FaqSection />
      <CtaFinalSection />
    </>
  );
}
