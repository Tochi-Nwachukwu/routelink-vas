"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Update with actual image path
import WorkImage from "@/assets/active-woman-footer.jpg";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowWeWorkSectionProps {
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Concept Development",
    description: "We work with you to design VAS services aligned with your business goals and market needs.",
  },
  {
    number: 2,
    title: "Platform Development",
    description: "Our team builds secure, scalable platforms with full carrier integration and compliance features.",
  },
  {
    number: 3,
    title: "Compliance & Testing",
    description: "Rigorous testing and regulatory alignment before launch to ensure seamless operation.",
  },
  {
    number: 4,
    title: "Launch & Support",
    description: "Go-live support and ongoing optimization to maximize subscriber engagement and revenue.",
  },
];

const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  heading = "How We Work",
  imageSrc = WorkImage,
  imageAlt = "Professional at work",
  steps = defaultSteps,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [lineLength, setLineLength] = useState(0);
  const [lineStart, setLineStart] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Measure the width of the horizontal track and line length
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current && sectionRef.current) {
        // Total width of the scrolling content
        const trackWidth = trackRef.current.scrollWidth;
        // Width of the visible window/container
        const windowWidth = window.innerWidth;
        // How much we need to shift left to see the end
        // Add some padding to measurement to ensure last item clears nicely
        const distance = Math.max(0, trackWidth - windowWidth + 100); 
        setScrollDistance(distance);
        
        setIsDesktop(window.innerWidth >= 768);

        // Calculate line geometry
        // Children: BackgroundLine, OrangeLine, Step1, Step2...
        // Filter for step divs (flex-col ones)
        const items = Array.from(trackRef.current.children).filter(
             c => c.tagName === 'DIV' && !c.classList.contains('absolute')
        ) as HTMLElement[];

        if (items.length > 0) {
             const firstItem = items[0];
             const lastItem = items[items.length - 1];
             
             // Get offsets relative to track (which includes the padding)
             const firstLeft = firstItem.offsetLeft;
             const lastLeft = lastItem.offsetLeft;
             
             // Circle alignment
             const isDesktop = window.innerWidth >= 768;
             const circleOffset = isDesktop ? 40 : 32; // Half of w-20 (80px) or w-16 (64px)

             const start = firstLeft + circleOffset;
             const length = (lastLeft + circleOffset) - start;

             setLineStart(start);
             setLineLength(length);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    // Delay slightly to ensure layout is settled
    const timer = setTimeout(handleResize, 100);

    return () => { 
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Total scrollable height of the container
      const totalScrollHeight = section.offsetHeight - windowHeight;
      const scrolled = -rect.top;
      
      let newProgress = 0;
      if (totalScrollHeight > 0) {
        newProgress = Math.max(0, Math.min(1, scrolled / totalScrollHeight));
      }

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    // Height determines how long the user scrolls to finish the animation
    <section ref={sectionRef} className="relative w-full h-auto md:h-[400vh]">
      
      {/* Sticky/Grid Container */}
      <div className="relative h-auto min-h-[65vh] md:h-screen md:sticky md:top-0 md:overflow-hidden md:flex md:items-center py-16 md:py-0">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="sticky top-0 h-screen w-full md:absolute md:inset-0 md:h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[75%_50%] md:object-center"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 w-full mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
          <div className="max-w-[1400px] mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-20">
              {heading}
            </h2>
          </div>

          {/* Horizontal Moving Track */}
          <div 
            ref={trackRef}
            className="grid grid-cols-1 gap-12 md:flex md:items-start md:gap-40 md:will-change-transform md:pl-[25%] md:pb-0"
            style={{
              transform: isDesktop ? `translate3d(-${progress * scrollDistance}px, 0, 0)` : 'none',
            }}
          > 
             {/* Background Line (Black) */}
             <div 
                className="hidden md:block absolute top-[32px] md:top-[40px] left-0 h-1 bg-black/20 -z-10" 
                style={{ 
                    left: `${lineStart}px`,
                    width: `${lineLength}px`
                }}
             />
             
             {/* Progress Line (Orange) */}
             <div 
                className="hidden md:block absolute top-[32px] md:top-[40px] left-0 h-1 bg-[#F05A24] -z-10 transition-all duration-75 ease-linear"
                style={{ 
                    left: `${lineStart}px`,
                    width: `${progress * lineLength}px`,
                    maxWidth: `${lineLength}px`
                }} 
             />

            {steps.map((step, index) => {
               // Logic to highlight circle
               const percent = index / (steps.length - 1 || 1);
               const isActive = isDesktop ? progress >= (percent - 0.05) : true; // Always active (orange) or inactive on mobile? User said "just circles". Maybe keep them orange or black? Let's default to orange (active) for static view or keeping logic? 
               // Actually asking "no lines, just circles" usually means valid state. Let's make them all "active" style or just standard?
               // Let's stick to using the same Conditional logic but since progress is 0 on mobile (if reduced height) or varying, let's just make 'em all standard or checked.
               // If it's static grid, "isActive" logic based on scroll is weird.
               // Let's make them all orange border/text on mobile? Or just black?
               // Let's force isActive=true on mobile for consistent look? Or false?
               // Let's use `isActive` logic only on Desktop. On mobile, maybe just static style?
               // Let's use `const isActive = isDesktop ? progress >= ... : true;` -> All highlighted?
               // Or let's just keep the loop logic. If progress is 0 on mobile, only first is active. 
               // User didn't specify interaction. "Just circles".
               // Let's keep existing logic but `progress` might be 0. So only first 1 active.
               // If I make all active, it might look better?
               // I'll stick to `isActive` as is, but since interaction allows reading all, maybe all should be highlighted?
               // Let's try matching the loop logic for now.

               return (
                <div key={step.number} className="flex flex-col gap-6 w-full md:w-[400px] flex-shrink-0">
                  {/* Number Circle */}
                  <div 
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] flex items-center justify-center font-medium text-2xl md:text-2xl shadow-sm transition-colors duration-300 bg-white ${
                        isActive 
                        ? "border-[#F05A24] text-[#F05A24]" 
                        : "border-black/20 text-black"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl md:text-2xl font-medium text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-900 text-lg leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
               );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;