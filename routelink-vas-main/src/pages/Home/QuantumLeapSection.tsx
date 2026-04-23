"use client";

import React from "react";
import Image from "next/image";
import BrandWheel, { Brand } from "@/components/BrandWheel";
import RoutelinkGroupLogo from "@/assets/Routelink-Group-logo-design.svg";
import RoutepayLogo from "@/assets/routepay-logo.svg";
import FestMobileLogo from "@/assets/Fest-mobile-logo.svg";
import EnterpriseLogo from "@/assets/routelink-enterprise-logo.svg";
import TelecomLogo from "@/assets/routelink-telecom-logo.svg";
import MfbLogo from "@/assets/Routelink-MFB-Logo.svg";
import GenericLogo from "@/assets/Logo.svg";

const QuantumLeapSection: React.FC = () => {
  const brands: Brand[] = [
    { number: 1, name: "fest mobile", color: "orange", logo: FestMobileLogo, href: "https://festmobile.ng/" },
    { number: 2, name: "routelink enterprise", color: "gray", logo: EnterpriseLogo, href: "https://routelinkent.com/" },
    { number: 3, name: "routelink IDA", color: "orange", logo: GenericLogo, href: "#" },
    { number: 4, name: "routepay", color: "gray", logo: RoutepayLogo, href: "https://routepay.com/" },
    { number: 5, name: "routelink telecom", color: "orange", logo: TelecomLogo, href: "https://routelinktel.com/" },
    { number: 6, name: "routelink VAS", color: "gray", logo: GenericLogo, href: "#" },
    { number: 7, name: "routelink microfinance bank", color: "orange", logo: MfbLogo, href: "#" },
    { number: 8, name: "routepay", color: "gray", logo: RoutepayLogo, href: "https://routepay.com/" },
  ];

  const handleBrandClick = (brandName: string) => {
    // Analytics or other logic can go here
  };

  return (
    <section className="w-full bg-[#FAF7F5] py-24 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-3xl font-medium text-black mb-8 leading-tight">
            Quantum Leap <span className="text-[#F05A24]">X10</span>
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Routelink Group is driving exponential growth across the digital landscape.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Our integrated ecosystem of brands delivers seamless, industry-leading solutions. We power the future of{" "}
              <span className="text-[#F05A24]">digital payments, connectivity, enterprise tech, and inclusive banking</span>. Discover the synergy connecting the future of business.
            </p>
          </div>
        </div>

        {/* Right Content: Circular Diagram */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <BrandWheel 
            brands={brands} 
            centerLogo={RoutelinkGroupLogo} 
            centerHref="https://www.routelinkgroup.com/"
            onBrandClick={handleBrandClick}
          />
        </div>
      </div>
    </section>
  );
};

export default QuantumLeapSection;
