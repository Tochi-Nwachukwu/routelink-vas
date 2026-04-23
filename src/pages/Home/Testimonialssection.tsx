"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import quoteIcon from "../../assets/quote.svg";
import testimonialImg1 from "../../assets/elegant-black-girl-summer-city.jpg";
import testimonialImg2 from "../../assets/testimonial-2.jpg";

interface Testimonial {
  image: any;
  quote: string;
  name: string;
  title: string;
}

interface TestimonialsSectionProps {
  heading?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    image: testimonialImg1,
    quote: "We launched our trivia gaming platform in just 6 weeks thanks to RoutelinkVAS. The direct carrier billing integration works flawlessly, and their fraud prevention systems have saved us significant revenue.",
    name: "Blessing Ezekiel",
    title: "Product Manager, GameZone Africa",
  },
  {
    image: testimonialImg2,
    quote: "RoutelinkVAS provided us with the scalable infrastructure we needed to expand our services across multiple regions. Their support team is exceptional and always ready to help.",
    name: "Emmanuel Okeke",
    title: "CTO, TechConnect Nigeria",
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  heading = "What Our Clients Say.",
  testimonials = defaultTestimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 20000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 xl:px-28">

      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-2xl font-medium text-gray-900 mb-12">
          {heading}
        </h2>

        {/* Content Container */}
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-10 items-center">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden relative">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full py-4">
             <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              {testimonials[currentIndex].quote}
            </p>
            
            
             <div className="flex justify-end pr-12 mb-6">
              <Image 
                src={quoteIcon} 
                alt="Quote" 
                width={120} 
                height={120} 
                className="opacity-80"
              />
            </div>

            {/* Author Info - Moved lower */}
            <div className="mt-12">
              <p className="text-gray-900 font-medium text-xl mb-1">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 text-base">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots - Centered below image and quotes */}
        <div className="flex items-center justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 transition-all duration-300 rounded-sm ${
                index === currentIndex
                  ? "w-3 bg-[#F05A24]" // Active: Orange Square
                  : "w-3 bg-gray-300 hover:bg-gray-400" // Inactive: Gray Square
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;