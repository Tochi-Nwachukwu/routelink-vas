import TelecomPartners from "@/components/Telecompartners";
import LicenseBadge from "@/components/Licensebadge";

interface PartnersSectionProps {
  heading?: string;
  description?: string;
  nccText?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  heading = "Our Partners.",
  description = "Our VAS license from the Nigerian Communications Commission (NCC) authorizes us as a VAS provider to deliver content services reaching millions of subscribers across Nigeria.",
  nccText = "Licensed By The Nigerian communications Commission",
}) => {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-start">
        {/* Left Column: Heading */}
        <div className="md:col-span-1">
          <h2 className="text-xl md:text-2xl font-medium text-gray-900">
            {heading}
          </h2>
        </div>

        {/* Right Column: Description + Logos */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
            <div className="w-full md:max-w-[60%] overflow-hidden">
              <TelecomPartners />
            </div>
            <div className="flex-shrink-0">
              <LicenseBadge text={nccText} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;