import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import WebDevHero from "@/pages/entertainment/entertainmenthero";
import ServiceDetailSection from "@/pages/entertainment/servicedetails";

export default function Entertainment() {
    return (
       <main className="bg-white">
        <WebDevHero categoryTitle="Entertainment" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title="Keep Users Engaged!"
        description="Let's build something subscribers love coming back to every day."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}