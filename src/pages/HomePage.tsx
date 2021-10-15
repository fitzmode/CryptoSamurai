import React from "react";

import Hero from "../components/Hero";
import LandingLayout from "../components/Layout";
import BuynowSection from "../sections/BuynowSection";
import ExampleSection from "../sections/ExampleSection";
import FAQSection from "../sections/FAQSection";
import FooterSection from "../sections/FooterSection";
import RaritySection from "../sections/RaritySection";
import RoadmapSection from "../sections/RoadmapSection";
import TeamSection from "../sections/TeamSection";

export default function HomePage() {
  return (
    <LandingLayout>
      <Hero />
      <BuynowSection />
      <RaritySection />
      <ExampleSection />
      <FAQSection />
      <RoadmapSection />
      <TeamSection />
      <FooterSection />
    </LandingLayout>
  );
}
