import Image from "next/image";
import MtnLogo from "@/assets/MTN-Logo.svg";
import AirtelLogo from "@/assets/airtel-logo.svg";
import GloLogo from "@/assets/glo.svg";
import HmlLogo from "@/assets/hml-consulting.svg";
import JivmobLogo from "@/assets/jivmob.svg";
import NinaJojerLogo from "@/assets/nina-jojer.svg";

interface Partner {
  name: string;
  logoSrc: any;
}

interface TelecomPartnersProps {
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  {
    name: "MTN",
    logoSrc: MtnLogo,
  },
  {
    name: "Airtel",
    logoSrc: AirtelLogo,
  },
  {
    name: "Glo",
    logoSrc: GloLogo,
  },
  {
    name: "HML Consulting",
    logoSrc: HmlLogo,
  },
  {
    name: "Jivamob",
    logoSrc: JivmobLogo,
  },
  {
    name: "Nina Jojer",
    logoSrc: NinaJojerLogo,
  },
];

const TelecomPartners: React.FC<TelecomPartnersProps> = ({
  partners = defaultPartners,
}) => {
  // Double the partners to create a seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden no-scrollbar">
      <div className="flex flex-nowrap items-center gap-12 md:gap-16 animate-marquee w-max">
        {displayPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`flex-shrink-0 relative w-auto flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
              partner.name === "Glo" ? "h-20 md:h-24" : "h-12 md:h-14"
            }`}
          >
            <Image
              src={partner.logoSrc}
              alt={partner.name}
              width={120}
              height={60}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelecomPartners;