"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineBars3, HiChevronDown } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.svg";
import Image from "next/image";

const services = [
  { title: "Entertainment", href: "/services/entertainment" },
  { title: "Content based Services", href: "/services/content-based-services" },
  { title: "Web development", href: "/services/web-development" },
  { title: "Payments & Billers", href: "/services/payments-billers" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleNav = (): void => setOpen(!open);
  const toggleMobileServices = (): void => setMobileServicesOpen(!mobileServicesOpen);

  const isActive = (path: string) => pathname === path;
  const isParentActive = (path: string) => pathname?.startsWith(path);

  return (
    <nav className="w-full fixed z-50 bg-white shadow-sm">
      {/* DESKTOP NAV */}
      <div className="hidden lg:flex w-full h-[80px] px-8 xl:px-16 2xl:px-28 items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="routelink VAS" height={40} className="h-[18px] w-auto" />
        </Link>

        <div className="flex items-center gap-8 xl:gap-12">
          <Link
            href="/about"
            className={`hover:text-[#F05A24] transition-colors duration-300 font-medium ${
              isActive("/about") ? "text-[#F05A24]" : "text-gray-800"
            }`}
          >
            About us
          </Link>

          {/* Services Dropdown - Desktop */}
          <div className="relative group">
            <Link
              href="/services"
              className={`flex items-center gap-1 hover:text-[#F05A24] transition-colors duration-300 font-medium ${
                isParentActive("/services") ? "text-[#F05A24]" : "text-gray-800"
              }`}
            >
              Services
              <HiChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[260px]">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                 <div className="flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                          isActive(service.href) 
                            ? "bg-orange-50 text-[#F05A24] font-semibold" 
                            : "text-gray-700 hover:bg-orange-50 hover:text-[#F05A24]"
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={`hover:text-[#F05A24] transition-colors duration-300 font-medium ${
              isActive("/contact") ? "text-[#F05A24]" : "text-gray-800"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="px-6 py-2.5 border-2 border-[#F05A24] text-[#F05A24] rounded-lg hover:bg-[#F05A24] hover:text-white transition-all duration-300 font-medium"
          >
            Lets Start Building
          </Link>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden flex justify-between items-center px-5 h-[70px] bg-white shadow-sm relative z-50">
        <Link href="/" onClick={() => setOpen(false)}>
           <Image src={Logo} alt="routelink VAS" height={34} className="h-[18px] w-auto" />
        </Link>

        <button type="button" onClick={toggleNav} aria-label="Toggle menu">
          {open ? (
            <AiOutlineClose size={28} color="#333" />
          ) : (
            <HiOutlineBars3 size={33} color="#333" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed h-full w-full bg-white transition-transform duration-500 top-[70px] z-40 overflow-y-auto pb-32 ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="text-gray-800 px-7 font-medium">
          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/"
              className={`block ${
                isActive("/") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/about"
              className={`block ${
                isActive("/about") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              About us
            </Link>
          </li>
          
          {/* Services Mobile */}
          <li className="py-5 border-b border-gray-200">
            <div className="flex items-center justify-between w-full">
              <Link
                onClick={toggleNav}
                href="/services"
                className={`flex-grow ${
                  isParentActive("/services") ? "text-[#F05A24] font-semibold" : ""
                }`}
              >
                Services
              </Link>
              <button
                onClick={toggleMobileServices}
                className="p-2 -mr-2"
                aria-label="Toggle services menu"
              >
                <HiChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            
            {/* Mobile Dropdown Content */}
            <div className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
               {services.map((service) => (
                  <Link
                    key={service.href}
                    onClick={toggleNav}
                    href={service.href}
                    className={`block py-3 px-4 text-sm rounded-lg transition-colors ${
                      isActive(service.href)
                        ? "text-[#F05A24] font-semibold bg-orange-50"
                        : "text-gray-600 hover:text-[#F05A24] bg-gray-50"
                    }`}
                  >
                    {service.title}
                  </Link>
               ))}
            </div>
          </li>

          <li className="py-5 border-b border-gray-200">
            <Link
              onClick={toggleNav}
              href="/contact"
              className={`block ${
                isActive("/contact") ? "text-[#F05A24] font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="py-5">
            <Link
              onClick={toggleNav}
              href="/contact"
              className="block px-6 py-2.5 border-2 border-[#F05A24] text-[#F05A24] rounded-lg text-center hover:bg-[#F05A24] hover:text-white transition-all duration-300"
            >
              Lets Start Building
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;