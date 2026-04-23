"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Logo.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Orange Top Border */}
      {/* <div className="w-full h-1 bg-[#F05A24]"></div> */}

      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 py-12 lg:py-16">
        {/* Logo and Description */}
        <div className="mb-12">
<Image src={Logo} alt="routelink VAS" className="h-[18px] w-auto mb-6" height={40} />
          <p className="text-gray-300 max-w-3xl text-base leading-relaxed">
            We prioritize transparency and user trust. All RoutelinkVAS solutions are designed with strict adherence to MNO guidelines.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

          {/* Column 1 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/about") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/services") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/contact") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-semibold text-base uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/services/entertainment" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/services/entertainment") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/content-based-services" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/services/content-based-services") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Content based Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/web-development" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/services/web-development") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/payments-billers" 
                  className={`transition-colors duration-300 text-base ${
                    isActive("/services/payments-billers") ? "text-[#F05A24] font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  Payments & Billers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Spacer */}
          <div></div>

          {/* Column 4 — Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-base uppercase tracking-widest mb-5">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-6">
              <div className="leading-relaxed">
                Ground Floor, Africa Re House,<br />
                Plot 1679 Karimu Kotun St,<br />
                Victoria Island, Lagos.
              </div>
              <div className="space-y-2">
                <p>Contact: <a href="tel:+2348036390777" className="hover:text-white transition-colors duration-300">+234 803 639 0777</a></p>
                <p>WhatsApp: <a href="https://wa.me/2348036390777" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">+234 803 639 0777</a></p>
                <p>Email: <a href="mailto:busdev@routelinksys.com" className="hover:text-white transition-colors duration-300">busdev@routelinksys.com</a></p>
              </div>
            </address>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            Copyright © 2026, RoutelinkGroup. All rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-1">
            <span className="text-gray-300 text-sm mr-3">Connect with</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#F05A24] flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
