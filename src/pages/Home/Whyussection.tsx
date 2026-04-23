import Image from "next/image";
import StackIcon from "@/assets/stack.svg";
import ManImage from "@/assets/confidence.jpg";
import WomanImage from "@/assets/umbrella lady.jpg";

interface FeatureCard {
  title: string;
  description: string;
}

interface WhyUsSectionProps {
  heading?: string;
  headingHighlight?: string;
  topCards?: FeatureCard[];
  bottomCards?: FeatureCard[];
}

const defaultTopCards: FeatureCard[] = [
  {
    title: "We know what works.",
    description: "Proven and trusted experts in mobile and digital VAS.",
  },
  {
    title: "We're Connected",
    description: "Deep integrations with carriers and the entire ecosystem.",
  },
];

const defaultBottomCards: FeatureCard[] = [
  {
    title: "We Play It Safe",
    description: "We work with a Compliance-first design that protects your business.",
  },
  {
    title: "We've Got You",
    description: "Total support from bright idea to final deployment.",
  },
];

const WhyUsSection: React.FC<WhyUsSectionProps> = ({
  heading = "Why",
  headingHighlight = "Routelink VAS",
  topCards = defaultTopCards,
  bottomCards = defaultBottomCards,
}) => {
  return (
    <section className="relative w-full bg-[#FFF9F6] pb-24 px-6 md:px-12 lg:px-20 xl:px-28 mt-32">
      {/* Curved Top SVG Separator - Simple Convex Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z"
            className="fill-[#FFF9F6]"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto pt-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">
            {heading}{" "}
            <span className="text-[#F05A24]">{headingHighlight}</span>
          </h2>
          <p className="text-gray-800 font-medium text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer experienced, compliant mobile service solutions with strong carrier partnerships and
            complete end-to-end management.
          </p>
        </div>

        {/* Flattened Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-18 md:gap-y-16 items-start">
          
          {/* 1. Green Man Image */}
          {/* Mobile: 1st, Desktop: 1st (Top Left) */}
          <div className="order-1 md:order-1 w-full aspect-[4/5] md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden relative bg-[#2A4032]">
            <Image
              src={ManImage}
              alt="Professional man"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 2. Top Feature Cards (We Know Our Stuff, Connected) */}
          {/* Mobile: 2nd, Desktop: 2nd (Top Right) */}
          <div className="order-2 md:order-2 flex flex-col gap-8 h-full justify-center">
            {topCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px] flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={StackIcon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-gray-900 font-medium text-lg md:text-xl">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-14">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* 3. Bottom Feature Cards (Play It Safe, Got You) */}
          {/* Mobile: 4th, Desktop: 3rd (Bottom Left) */}
          <div className="order-4 md:order-3 flex flex-col gap-8 h-full justify-center">
            {bottomCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px] flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={StackIcon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-gray-900 font-medium text-lg md:text-xl">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-14">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4. Orange Woman Image */}
          {/* Mobile: 3rd, Desktop: 4th (Bottom Right) */}
          <div className="order-3 md:order-4 w-full aspect-[4/5] md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden relative bg-[#F05A24]">
            <Image
              src={WomanImage}
              alt="Woman with umbrella"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;