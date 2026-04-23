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
          Content based Services
        </h1>

        {/* Description - Centered */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-24 max-w-4xl mx-auto font-medium">
          We offer a diverse portfolio of interactive content, including premium gaming and lottery services designed for high user participation.
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
                  <span className="font-bold">Gaming & Lottery:</span> End-to-end management of digital lotteries and gaming platforms with secure draw mechanics.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Interactive Content:</span> Engaging SMS and web-based trivia, predictive games, and real-time competition modules.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Performance Analytics:</span> Detailed reporting on user participation and engagement trends to optimize content performance.
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
                  <span className="font-bold">Gaming Operators:</span> Businesses looking to deploy secure, scalable lottery and interactive gaming solutions.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Marketing Teams:</span> Brands seeking to boost customer interaction through gamified content and rewards.
                </li>
                <li className="text-gray-900 text-lg leading-relaxed">
                  <span className="font-bold">Media Houses:</span> Broadcasters and digital publishers wanting to monetize their audience through interactive participation.
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;