interface WhoWeAreSectionProps {
  heading?: string;
  leftText?: string;
  rightTextTop?: string;
  rightTextBottom?: string;
}

const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  heading = "Who we are",
  leftText = "RoutelinkVAS is a licensed Value Added Services provider authorized by the Nigerian Communications Commission (NCC) to deliver innovative digital content services across Nigeria's leading mobile networks.",
  rightTextTop = "With deep expertise in carrier integrations, billing systems, regulatory compliance, and service management, we enable brands, content providers, and enterprises to design, deploy, and scale revenue-generating services that reach millions of subscribers nationwide.",
  rightTextBottom = "Our VAS license authorizes us to work with MTN, Airtel, and Glo, providing us with direct access to Nigeria's largest mobile subscriber bases. We leverage this access to create seamless, compliant, and engaging digital experiences",
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column: Heading + Intro Text */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 md:mb-24">
              {heading}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {leftText}
            </p>
          </div>

          {/* Right Column: Detailed Text */}
          <div className="flex flex-col gap-6 md:pt-2">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {rightTextTop}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {rightTextBottom}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;