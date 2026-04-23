import Image from "next/image";
import CTAButton from "@/components/Ctabutton";
import HeroImage from "@/assets/services-main.jpg";

interface HeroSectionProps {
  tagline?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline = "How We Help You Reach Millions.",
  title = "We help your business create Games, Quizzes, Cool Ringtones, Daily Tips & News and we make sure these things work perfectly on every phone in the country.",
  buttonText = "Let's Start Building",
  buttonHref = "/contact",
  imageAlt = "RoutelinkVAS platform preview",
}) => {
  return (
    <section className="w-full bg-[#FAF9F6] pt-32 pb-24 flex flex-col items-center text-center overflow-hidden rounded-b-[100px] md:rounded-b-[140px]">
      {/* Text Content */}
      <div className="px-6 max-w-6xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-[#F05A24] font-medium text-3xl md:text-5xl lg:text-6xl leading-tight">
          {tagline}
        </h1>

        <p className="text-gray-900 font-medium text-lg md:text-2xl max-w-6xl leading-relaxed">
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