import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import PinIcon from "@/assets/pin.svg";

interface Capability {
  title: string;
  description: string;
  link?: string;
}

interface VASCapabilitiesSectionProps {
  heading?: string;
  description?: string;
  highlightText?: string;
  capabilities?: Capability[];
}

const defaultCapabilities: Capability[] = [
  {
    title: "Entertainment",
    description: "Gamified content including trivia, quizzes and challenges that keep subscribers coming back daily.",
    link: "/services/entertainment",
  },
  {
    title: "Content based Services",
    description: "Subscription and on-demand content services across SMS and web. From education to entertainment.",
    link: "/services/content-based-services",
  },
  {
    title: "Web development",
    description: "Modern, secure and scalable websites and platforms made to solve consumer problems.",
    link: "/services/web-development",
  },
  {
    title: "Payments & Billers",
    description: "Subscription management and billing designed for reliability, transparency, and fraud prevention.",
    link: "/services/payments-billers",
  },
];

const VASCapabilitiesSection: React.FC<VASCapabilitiesSectionProps> = ({
  heading = "Our VAS Capabilities",
  description = "Send content, launch games, collect payments. We connect you to millions of subscribers on MTN, Airtel, and Glo and handle all the tech stuff.",
  highlightText = "You create, we deliver.",
  capabilities = defaultCapabilities,
}) => {
  return (
    <section className="w-full bg-[#f0f0f0] py-20 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[#F05A24] mb-6">
            {heading}
          </h2>
          <p className="text-gray-900 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            {description}{" "}
            <span className="text-[#F05A24] font-medium">{highlightText}</span>
          </p>
        </div>

        {/* Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-20">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white p-10 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300"
            >
              <div>
                {/* Pin Icon */}
                <div className="w-8 h-8 mb-6 relative">
                  <Image
                    src={PinIcon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain" // The svg itself should be orange based on design req
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#F05A24] font-bold text-xl mb-4">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 text-base leading-relaxed mb-8">
                  {capability.description}
                </p>
              </div>

              {/* Learn More Link */}
              {capability.link && (
                <Link
                  href={capability.link}
                  className="inline-flex items-center gap-2 text-black font-bold text-base hover:text-[#F05A24] transition-colors duration-300 group mt-auto"
                >
                  Learn more
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VASCapabilitiesSection;