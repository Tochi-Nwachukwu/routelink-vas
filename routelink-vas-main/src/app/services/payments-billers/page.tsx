import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import WebDevHero from "@/pages/payments-billers/billinghero";
import ServiceDetailSection from "@/pages/payments-billers/servicedetails";

export default function Billing() {
    return (
       <main className="bg-white">
        <WebDevHero categoryTitle="Payments & Billers" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title="Get Paid Consistently!"
        description="Stop chasing payments. Let us handle subscriptions, charging, and reconciliation."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}