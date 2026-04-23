import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/Ctabutton";

// SVG imports from assets
import ContentVasIcon from "@/assets/content-svg.svg";
import CloudSvgIcon from "@/assets/cloud_svg.svg";
import HashSvgIcon from "@/assets/hash_svg.svg";
import CRBTIcon from "@/assets/CRBT-svg.svg";
import WebDevIcon from "@/assets/web dev-svg.svg";
import EntertainmentIcon from "@/assets/entertainment-svg.svg";

interface Service {
  icon: string;
  label: string;
  active?: boolean;
}

interface WhatWeDoSectionProps {
  heading?: string;
  description?: string;
  highlightText?: string;
  highlightHref?: string;
  buttonText?: string;
  buttonHref?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  { icon: EntertainmentIcon, label: "Entertainment" },
  { icon: ContentVasIcon, label: "Content based Services" },
  { icon: WebDevIcon,     label: "Web Development" },
  { icon: CRBTIcon,       label: "Payments & Billers" },
];

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  heading = "What we can do for you",
  description = "We help your business create Games, Quizzes, Cool Ringtones, Daily Tips & News and we make sure these things work perfectly",
  highlightText = "on every phone in the country.",
  highlightHref = "",
  buttonText = "Our services",
  buttonHref = "/services",
  services = defaultServices,
}) => {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12 lg:px-20 xl:px-28 md:mb-32">
      <div className="max-w-8xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
          {/* Left: heading + description */}
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              {heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}{" "}
              <Link
                href={highlightHref}
                className="text-[#F05A24] hover:underline"
              >
                {highlightText}
              </Link>
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <CTAButton text={buttonText} href={buttonHref} />
          </div>
        </div>

        {/* Styles for hover effects */}
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          .group:hover .pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-8 mt-32 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="service-card flex flex-col items-center text-center gap-6 cursor-pointer group"
            >
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center">
              {/* Active State Outer Ring - visible on hover */}
              <div className="pulse-ring absolute w-[130px] h-[130px] md:w-[190px] md:h-[190px] rounded-full border border-[#F05A24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main Circle Container */}
              <div className="icon-container relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full flex items-center justify-center transition-all duration-300 bg-[#F05A24]">
                
                {/* Normal Icon (White) - Always visible */}
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={80}
                  height={80}
                  className="icon relative transition-opacity duration-300 w-14 h-14 md:w-[80px] md:h-[80px]"
                />
              </div>
            </div>

            {/* Content Group (Divider + Label) */}
            <div className="flex flex-col items-center gap-4 w-full">
               {/* Divider */}
              <div className="w-full h-px max-w-[130px] md:max-w-[190px] bg-gray-400 group-hover:bg-[#F05A24] transition-colors duration-300" />
              
              {/* Label */}
              <p className="text-gray-800 text-sm md:text-lg font-normal group-hover:text-[#F05A24] transition-colors duration-300">
                {service.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;