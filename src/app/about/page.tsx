import HeroSection from "@/pages/about/Abouthero";
import WhoWeAreSection from "@/pages/about/Whowearesection";
import EcosystemPartnersSection from "@/pages/about/Ecosystempartnerssection";
import MissionSection from "@/pages/about/Mission";
import WhatSetsUsApartSection from "@/pages/about/Whatsetsusapart";
import HeroBanner from "@/components/Herobanner";

export default function About() {
  return (
    <main className="bg-white">
      <HeroSection />
      <WhoWeAreSection />
      <EcosystemPartnersSection />
      <MissionSection />
      <WhatSetsUsApartSection />
      <HeroBanner 
        title="Partner With a Licensed Leader"
        description="Join the brands and content providers who trust RoutelinkVAS to power their digital services."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  );
}