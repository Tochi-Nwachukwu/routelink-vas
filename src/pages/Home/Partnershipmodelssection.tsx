import { LuHandshake, LuTag, LuHeadphones, LuBuilding2 } from "react-icons/lu";

interface PartnershipModel {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PartnershipModelsSectionProps {
  heading?: string;
  description?: string;
  highlightText?: string;
  models?: PartnershipModel[];
}

const defaultModels: PartnershipModel[] = [
  {
    icon: <LuHandshake className="w-6 h-6" />,
    title: "Revenue Share Partnerships",
    description: "Launch VAS services with shared revenue models designed for mutual growth.",
  },
  {
    icon: <LuTag className="w-6 h-6" />,
    title: "White-Label Deployments",
    description: "Branded VAS solutions under your name, powered by our infrastructure.",
  },
  {
    icon: <LuHeadphones className="w-6 h-6" />,
    title: "Managed VAS Services",
    description: "Full service management for content providers looking to focus on content creation.",
  },
  {
    icon: <LuBuilding2 className="w-6 h-6" />,
    title: "Enterprise Solutions",
    description: "Custom VAS platforms tailored to enterprise communication and engagement needs.",
  },
];

const PartnershipModelsSection: React.FC<PartnershipModelsSectionProps> = ({
  heading = "Partnership Models.",
  description = "We have flexible ways to work together. We can share profits, put your brand name on our technology, manage the tech for you, or build a custom platform",
  highlightText = "just for your needs.",
  models = defaultModels,
}) => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 xl:px-28">

      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-2xl font-medium text-gray-900 mb-6">
            {heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
            {description}{" "}
            <span className="text-[#F05A24] font-medium">{highlightText}</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full group"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center mb-8 text-gray-800 group-hover:border-[#F05A24] group-hover:text-[#F05A24] transition-colors duration-300">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-medium text-lg mb-4 leading-tight">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsSection;