import Image from "next/image";
import RunnerImage from "@/assets/runner-image.jpg"; 
import InfraIcon from "@/assets/wallet-fill.svg";
import NetworkIcon from "@/assets/people.svg";
import TrackIcon from "@/assets/letter.svg";
import ExpertiseIcon from "@/assets/lightbulb.svg";
import ComplianceIcon from "@/assets/pin.svg";
import LicenseIcon from "@/assets/shield.svg";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhatSetsUsApartProps {
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: InfraIcon,
    title: "Scalable Infrastructure",
    description: "Built to handle high-volume, high-availability requirements with robust monitoring and support.",
  },
  {
    icon: NetworkIcon,
    title: "Strong Network Relationships",
    description: "Established integrations and relationships with MTN, Airtel, and Glo for seamless service delivery.",
  },
  {
    icon: TrackIcon,
    title: "Proven Track Record",
    description: "Successfully deployed services reaching millions of subscribers across Nigeria.",
  },
  {
    icon: ExpertiseIcon,
    title: "End-to-End Expertise",
    description: "From concept development to deployment, billing, and ongoing optimization. We manage it all.",
  },
  {
    icon: ComplianceIcon,
    title: "Compliance-First Design",
    description: "Every solution is built with regulatory requirements, user consent, and transparency at its core.",
  },
  {
    icon: LicenseIcon,
    title: "Licensed & Authorized",
    description: "Full NCC VAS license with authorization to operate across multiple mobile networks in Nigeria.",
  },
];

const WhatSetsUsApartSection: React.FC<WhatSetsUsApartProps> = ({
  heading = "What Sets Us Apart",
  imageSrc = RunnerImage,
  imageAlt = "Routelink athlete",
  features = defaultFeatures,
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28 mb-16 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-medium text-gray-900 mb-12">
          {heading}
        </h2>

        {/* Content Grid - adjusted to give more space to text (40% image, 60% text) */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-8 items-center">
          {/* Left: Image */}
          <div className="w-full h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden relative"> 
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain object-left" // Align image to left inside container, keep contain
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Right: Features Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3 mb-1">
                   {/* Icon */}
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    <Image 
                      src={feature.icon} 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#F05A24] font-bold text-xl leading-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-800 text-base leading-relaxed pl-9 max-w-[340px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;