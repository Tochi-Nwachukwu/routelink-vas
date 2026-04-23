import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import ContentHero from "@/pages/content-based-services/ContentHero";
import ServiceDetailSection from "@/pages/content-based-services/Servicedetail";

export default function ContentVAS() {
    return (
       <main className="bg-white">
        <ContentHero categoryTitle="Content based Services" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title=" Launch Your Content Service"
        description="Ready to turn your content into a revenue stream? Let’s get started."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}