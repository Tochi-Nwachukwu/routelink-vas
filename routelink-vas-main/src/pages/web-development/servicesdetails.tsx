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
          Web Development
        </h1>

        {/* Description - Centered */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-24 max-w-4xl mx-auto font-medium">
          We deliver secure, scalable, and high-quality web solutions tailored to meet the evolving needs of modern digital businesses.
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
                  <span className="font-bold">Custom Web Applications:</span> Specialized development of scalable platforms using modern frameworks and secure coding practices.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Responsive Design:</span> Optimized user interfaces that provide a consistent and high-quality experience on mobile, tablet, and desktop.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Architecture & Maintenance:</span> Implementation of high-availability infrastructure coupled with ongoing technical support and performance optimization.
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
                  <span className="font-bold">Enterprises:</span> Large organizations requiring secure, high-traffic web solutions and complex system integrations.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">SMEs & Startups:</span> Growing businesses looking to establish a professional digital presence with scalable architecture.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">E-commerce & Platforms:</span> Digital businesses needing robust, high-performance web applications to drive online growth.
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;