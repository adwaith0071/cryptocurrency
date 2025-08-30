import React from "react";
import { Header, Footer } from "../components/layout";
import {
  HeroSection,
  TradingSection,
  MarketSection,
  LearnSection,
  FAQSection,
  ContactSection
} from "../components/sections";
import {
  NAVIGATION_ITEMS,
  CRYPTO_DATA,
  FEATURE_CARDS,
  LEARNING_CARDS,
  FAQ_DATA,
  FOOTER_SECTIONS
} from "../constants/data";

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#101427] min-h-screen w-full overflow-hidden">
      <div className="app-wrapper">
        <Header navigationItems={NAVIGATION_ITEMS} />
        <div className="w-full h-px bg-gray-600"></div>
        <HeroSection />
        <TradingSection />
        <MarketSection cryptoData={CRYPTO_DATA} />
        <LearnSection 
          featureCards={FEATURE_CARDS}
          learningCards={LEARNING_CARDS}
        />
        <FAQSection faqData={FAQ_DATA} />
        <ContactSection />
        <Footer sections={FOOTER_SECTIONS} />
      </div>
    </div>
  );
};