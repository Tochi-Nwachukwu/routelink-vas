interface ServiceDetailProps {
  title?: string;
  description?: string;
  keyFeaturesTitle?: string;
  keyFeatures?: string[];
  idealForTitle?: string;
  idealFor?: string[];
}

import Link from "next/link";

const ServiceDetailSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28 mt-20 mb-20 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-[#F05A24] mb-8">
          Payments & Billers
        </h1>

        {/* Description - Centered */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-24 max-w-4xl mx-auto font-medium">
          We offer secure payment integration and billing solutions in collaboration with{" "}
          <Link 
            href="https://routepay.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F05A24] hover:underline transition-all"
          >
            Routepay
          </Link>{" "}
          for seamless partner onboarding.
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
                  <span className="font-bold">
                    <Link 
                      href="https://routepay.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:underline transition-all"
                    >
                      Routepay
                    </Link>{" "}
                    Integration:
                  </span> Seamless API-driven connection for unified payment processing and third-party onboarding.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Billing & Collections:</span> Automated invoicing, recurring subscription management, and diverse payment channel support.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Security & Scalability:</span> High-availability infrastructure with advanced encryption and real-time transaction monitoring.
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
                  <span className="font-bold">Fintechs & Startups:</span> Companies requiring rapid deployment of secure payment and billing APIs.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Utility Providers:</span> Billers looking to automate collections and simplify the user payment journey.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Enterprise Partners:</span> Large organizations seeking scalable, multi-channel financial settlement solutions.
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;