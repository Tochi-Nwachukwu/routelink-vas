interface ServiceDetailProps {
  title?: string;
  description?: string;
  keyFeaturesTitle?: string;
  keyFeatures?: string[];
  idealForTitle?: string;
  idealFor?: string[];
}

const ServiceDetailSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28 mt-20 mb-20 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-[#F05A24] mb-8">
          Entertainment
        </h1>

        {/* Description - Centered */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-24 max-w-4xl mx-auto font-medium">
          We provide comprehensive CRBT, OTT, and gamified engagement solutions designed to extend digital reach across mobile networks and maximise user retention.
        </p>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-5xl mx-auto">
            {/* Key Features Section */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-[#F05A24] mb-8">
                Key Features
              </h2>
              <ul className="space-y-8">
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Digital Media & Distribution:</span> Full-scale CRBT aggregation, multi-network deployment, and OTT service integration.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Interactive Engagement:</span> High-impact trivia, quiz platforms, and daily challenge services for maximum retention.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Loyalty & Compliance:</span> Custom reward mechanics and interactive competitions built within strict regulatory frameworks.
                </li>
              </ul>
            </div>

            {/* Ideal For Section */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-[#F05A24] mb-8">
                Ideal For
              </h2>
              <ul className="space-y-8">
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Content Creators:</span> Music labels, artists, and entertainment companies seeking broader digital distribution.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Service Providers:</span> Content aggregators and digital service providers looking for cross-network compatibility.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Growth Partners:</span> Brands, marketing agencies, and community platforms focused on gamified user engagement.
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;