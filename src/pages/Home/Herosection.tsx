import Image from "next/image";
import CTAButton from "@/components/Ctabutton";
import HeroImage from "@/assets/Hero-Section-images.png";

interface HeroSectionProps {
  tagline?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline = "Games, Music, Websites, Payments & Lots More.",
  title = "Reach millions of customers all at once with Nigeria's biggest VAS platform",
  buttonText = "Let's Start Building",
  buttonHref = "/contact",
  imageAlt = "RoutelinkVAS platform preview",
}) => {
  return (
    <section className="w-full bg-[#FAF9F6] pt-32 pb-0 flex flex-col items-center text-center overflow-hidden rounded-b-[120px]">
      {/* Text Content */}
      <div className="px-6 max-w-8xl mx-auto flex flex-col items-center gap-4">
        <h1 className="text-[#F05A24] font-medium text-3xl md:text-5xl lg:text-6xl leading-tight">
          {tagline}
        </h1>

        <p className="text-gray-600 font-medium text-lg md:text-2xl max-w-2xl leading-relaxed">
          {title}
        </p>

        <div className="mt-2">
          <CTAButton text={buttonText} href={buttonHref} />
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-10 w-full max-w-3xl mx-auto px-4 relative">
        <Image
          src={HeroImage}
          alt={imageAlt}
          width={900}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;