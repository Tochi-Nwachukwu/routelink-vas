import Contacthero from "@/pages/Contact/Contacthero";
import Contactformsection from "@/pages/Contact/Contactformsection";
import Contactinfosection from "@/pages/Contact/Contactinfosection";

export default function ContactPage() {
    return (
        <main className="bg-white">
            <Contacthero />
            <Contactformsection />
            <Contactinfosection />
        </main>
    );
}