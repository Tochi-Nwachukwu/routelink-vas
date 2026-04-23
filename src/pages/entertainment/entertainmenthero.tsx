import Image from "next/image";
import CTAButton from "@/components/Ctabutton";
import HeroImage from "@/assets/entertainment-hero.jpg";

interface HeroSectionProps {
  categoryTitle?: string;
  tagline?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  categoryTitle,
  tagline = "Turn Engagement Into Revenue.",
  title = "Gamified VAS platforms built for maximum engagement, retention, and regulatory compliance.",
  buttonText = "Let's Start Building",
  buttonHref = "/contact",
  imageAlt = "RoutelinkVAS platform preview",
}) => {
  return (
    <section className="w-full bg-[#FAF9F6] pt-32 pb-24 flex flex-col items-center text-center overflow-hidden rounded-b-[100px] md:rounded-b-[140px]">
      {/* Text Content */}
      <div className="px-6 max-w-5xl mx-auto flex flex-col items-center gap-6">
        {categoryTitle && (
          <span className="text-xl md:text-2xl font-semibold text-black mb-2 block">
            {categoryTitle}
          </span>
        )}
        <h1 className="text-[#F05A24] font-medium text-3xl md:text-5xl lg:text-6xl leading-tight">
          {tagline}
        </h1>

        <p className="text-gray-900 font-medium text-lg md:text-2xl max-w-3xl leading-relaxed">
          {title}
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-12 w-full max-w-5xl mx-auto px-4 relative">
        <div className="rounded-[40px] overflow-hidden">
          <Image
            src={HeroImage}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;