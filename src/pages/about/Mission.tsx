interface MissionSectionProps {
  heading?: string;
  description?: string;
  missionTitle?: string;
  missionText?: string;
  visionTitle?: string;
  visionText?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  heading = "Our Mission and vision",
  description = "We're here to make launching mobile services easy for everyone. From solo creators to big brands. We handle the complicated stuff so you can focus on what you do best.",
  missionTitle = "Mission",
  missionText = "To empower businesses and content creators with world-class VAS infrastructure and support, enabling them to deliver valuable digital services to Nigerian mobile subscribers at scale.",
  visionTitle = "Vision",
  visionText = "To be Nigeria's leading VAS provider, known for innovation, compliance, reliability, and partnership excellence.",
}) => {
  return (
    <section className="w-full bg-[#F05A24] py-20 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        {/* Left Column: Heading & Description */}
        <div className="w-full lg:w-[45%] text-white lg:sticky lg:top-24">
          <div className="border-b-2 border-white pb-8 mb-8">
            <h2 className="text-3xl md:text-3xl font-medium">
              {heading}
            </h2>
          </div>
          <p className="text-white text-lg leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Mission Card */}
          <div className="bg-white p-10 h-full flex flex-col justify-between border border-radius-[40px]">
            <div>
              <h3 className="text-gray-900 text-2xl font-medium mb-6">
                {missionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {missionText}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-10 h-full flex flex-col justify-between border border-radius-[40px]">
            <div>
              <h3 className="text-gray-900 text-2xl font-medium mb-6">
                {visionTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
