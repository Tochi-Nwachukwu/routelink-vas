
import Servicehero from "@/pages/Services/Servicehero";
import HeroBanner from "@/components/Herobanner";
import Vascapabilities from "@/pages/Services/Vascapabilities";
import Howweworksection from "@/components/Howweworksection";

export default function services() {
  return (
    <main>
      <Servicehero />
      <Vascapabilities />
      <Howweworksection />
      
      <HeroBanner 
        title="Partner With a Licensed Leader"
        description="Join the brands and content providers who trust RoutelinkVAS to power their digital services."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  );
}