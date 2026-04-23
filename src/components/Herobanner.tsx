import Link from "next/link";

interface HeroBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title = "Empowering Your Digital Ecosystem",
  description = "RoutelinkVAS provides end-to-end Value Added Services (VAS) that enable brands, content providers, and enterprises to design, deploy, and scale across mobile and digital channels.",
  buttonText = "Get Started",
  buttonHref = "/contact",
}) => {
  return (
    <section
      className="relative w-full py-12 px-5 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden bg-[#F05A24]"
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl md:max-w-5xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight">
          {title}
        </h1>

        <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-3xl md:max-w-4xl">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="mt-2 px-8 py-3 bg-white text-[#F05A24] font-medium text-sm hover:bg-orange-50 transition-colors duration-300 rounded-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
