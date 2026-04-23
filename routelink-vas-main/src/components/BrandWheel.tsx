"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Brand {
  name: string;
  logo: any; // Using any for imported assets
  color: "orange" | "gray";
  number?: number;
  href?: string;
}

interface WheelProps {
  brands: Brand[];
  centerLogo: any;
  centerHref?: string;
  onBrandClick?: (name: string) => void;
  className?: string;
}

export default function BrandWheel({ brands, centerLogo, centerHref = "#", onBrandClick, className = "" }: WheelProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const SEGMENTS = brands.length; // should be 8
  const ANGLE_PER_SEGMENT = 360 / SEGMENTS; // 45 degrees each

  // Outer and inner radius as % of SVG viewBox (viewBox = 0 0 100 100, center = 50,50)
  const OUTER_R = 50;
  const INNER_R = 13; // smaller = smaller center circle

  // Where to place the text labels radially (between inner and outer)
  const LABEL_R = (INNER_R + OUTER_R) / 2 + 6;

  const BORDER_COLOR = "rgba(2, 2, 2, 0.3)"; // Subtle white separator as seen in modern designs

  function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    // 0deg = top (12 o'clock), clockwise
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  function donutSegmentPath(index: number): string {
    const startAngle = index * ANGLE_PER_SEGMENT;
    const endAngle = (index + 1) * ANGLE_PER_SEGMENT;

    const outerStart = polarToCartesian(50, 50, OUTER_R, startAngle);
    const outerEnd   = polarToCartesian(50, 50, OUTER_R, endAngle);
    const innerStart = polarToCartesian(50, 50, INNER_R, startAngle);
    const innerEnd   = polarToCartesian(50, 50, INNER_R, endAngle);

    const largeArc = ANGLE_PER_SEGMENT > 180 ? 1 : 0;

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
      "Z",
    ].join(" ");
  }

  return (
    <div className={`relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] ${className}`}>
      {/* ── SVG Donut Wheel ── */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.15))" }}
      >
        {/* Background circle borders (drawn first) */}
        <circle cx="50" cy="50" r={OUTER_R - 0.4} fill="none" stroke={BORDER_COLOR} strokeWidth="0.5" className="pointer-events-none" />
        <circle cx="50" cy="50" r={INNER_R + 0.4} fill="none" stroke={BORDER_COLOR} strokeWidth="0.5" className="pointer-events-none" />

        {/* 1. Base Layer: Stable segments that never reorder */}
        {brands.map((brand, index) => (
          <Link key={index} href={brand.href || "#"} legacyBehavior>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (brand.href === "#" || !brand.href) {
                  e.preventDefault();
                }
                onBrandClick?.(brand.name);
              }}
            >
              <path
                d={donutSegmentPath(index)}
                fill={brand.color === "orange" ? "#F05A24" : "#454545"}
                stroke={BORDER_COLOR}
                strokeWidth="0.5"
                className="cursor-pointer outline-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </a>
          </Link>
        ))}

        {/* 2. Top Layer: Hovered segment clones that transition smoothly on top of everything */}
        {brands.map((brand, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <path
              key={`hover-${index}`}
              d={donutSegmentPath(index)}
              fill={brand.color === "orange" ? "#F05A24" : "#454545"}
              stroke="transparent"
              strokeWidth="0.5"
              className="transition-all duration-300 pointer-events-none origin-center"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "scale(1.06)" : "scale(1)",
              }}
            />
          );
        })}
      </svg>

      {/* ── Label Overlays (positioned with trig) ── */}
      {brands.map((brand, index) => {
        const midAngleDeg = index * ANGLE_PER_SEGMENT + ANGLE_PER_SEGMENT / 2;
        const midAngleRad = ((midAngleDeg - 90) * Math.PI) / 180;

        // Position as % of container (outer radius = 50% of container)
        const scale = 100 / 100; // viewBox is 0-100, container is 100%
        const x = 50 + LABEL_R * Math.cos(midAngleRad) * scale;
        const y = 50 + LABEL_R * Math.sin(midAngleRad) * scale;
        
        const isHovered = hoveredIndex === index;

        return (
          <Link
            key={index}
            href={brand.href || "#"}
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
              style={{
                left: `${x}%`,
                top:  `${y}%`,
                transform: `translate(-50%, -50%) ${isHovered ? "scale(1.15)" : "scale(1)"}`,
                width: "100px",
                pointerEvents: "auto",
                zIndex: isHovered ? 20 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                if (brand.href === "#" || !brand.href) e.preventDefault();
                onBrandClick?.(brand.name);
              }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={96}
                height={96}
                className={`${
                  brand.name.toLowerCase().includes("fest mobile") 
                    ? "w-12 h-12 md:w-20 md:h-20" 
                    : "w-16 h-16 md:w-28 md:h-28"
                } object-contain brightness-0 invert`}
              />
            </a>
          </Link>
        );
      })}

      {/* ── Center Logo Button ── */}
      <Link
        href={centerHref}
        legacyBehavior
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all z-30 border-[3px] border-white cursor-pointer"
          style={{
            width:  "32%",
            height: "32%",
          }}
          onClick={(e) => {
            if (centerHref === "#") e.preventDefault();
            onBrandClick?.("Routelink Group");
          }}
        >
          <Image
            src={centerLogo}
            alt="Routelink Group"
            width={128}
            height={128}
            className="w-full h-full object-contain pointer-events-none scale-125"
          />
        </a>
      </Link>
    </div>
  );
}
