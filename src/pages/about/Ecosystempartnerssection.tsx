import TelecomPartners from "@/components/Telecompartners";
import LicenseBadge from "@/components/Licensebadge";

interface EcosystemPartnersSectionProps {
  heading?: string;
  description?: string;
}

const EcosystemPartnersSection: React.FC<EcosystemPartnersSectionProps> = ({
  heading = "Our Ecosystem Partners & Networks",
  description = "We maintain strong relationships across the VAS ecosystem:",
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Top: Heading + Description */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
            {heading}
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium">
            {description}
          </p>
        </div>

        {/* Bottom: Partners Carousel + License Badge */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          <div className="w-full md:max-w-[65%] overflow-hidden">
            <TelecomPartners />
          </div>
          <div className="flex-shrink-0">
            <LicenseBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPartnersSection;