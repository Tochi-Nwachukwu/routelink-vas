import Image from "next/image";
import NCCLogo from "@/assets/NCC.jpg";

interface LicenseBadgeProps {
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
}

const LicenseBadge: React.FC<LicenseBadgeProps> = ({
  logoSrc,
  logoAlt = "NCC - Nigerian Communications",
  text = "Licensed By The Nigerian communications Commission",
}) => {
  return (
    <div className="inline-flex items-center gap-3 bg-[#FDEEEE] rounded-lg px-4 py-3">
      {/* Logo */}
      <div className="flex-shrink-0 w-16 h-10 relative">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain"
          />
        ) : (
          <Image
            src={NCCLogo}
            alt={logoAlt}
            fill
            className="object-contain"
          />
        )}
      </div>



      {/* Text */}
      <div className="flex flex-col">
        <span className="text-gray-600 text-sm font-normal leading-tight whitespace-nowrap">
          Licensed By The Nigerian
        </span>
        <span className="text-gray-600 text-sm font-normal leading-tight whitespace-nowrap">
          communications Commission
        </span>
      </div>
    </div>
  );
};

export default LicenseBadge;