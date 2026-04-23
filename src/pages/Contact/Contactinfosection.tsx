import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

// Update with actual background image path
import ContactBgImage from "@/assets/contact-us.jpg"; 

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

interface ContactInfoSectionProps {
  heading?: string;
  backgroundImage?: string;
  contactInfo?: ContactInfo[];
}

const defaultContactInfo: ContactInfo[] = [
  {
    icon: <FaPhoneAlt className="w-4 h-4" />,
    label: "Phone Number:",
    value: "+234 803 639 0777",
    link: "tel:+2341234567890",
  },
  {
    icon: <FaEnvelope className="w-4 h-4" />,
    label: "Email Address:",
    value: "busdev@routelinksys.com",
    link: "mailto:busdev@routelinksys.com",
  },
  {
    icon: <FaInstagram className="w-4 h-4" />,
    label: "Socials:",
    value: "RoutelinkVAS",
    link: "https://instagram.com/routelinkvas",
  },
  {
    icon: <FaMapMarkerAlt className="w-4 h-4" />,
    label: "Office Address:",
    value: "Ground Floor, Africa Re House, Plot 1679 Karimu Kotun St, Victoria Island, Lagos.",
    link: "https://maps.google.com/?q=HQ+Routelink+Lagos",
  },
];

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  heading = "Contact Us",
  backgroundImage = ContactBgImage,
  contactInfo = defaultContactInfo,
}) => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center py-20 bg-[#FACAB9] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#FACAB9]">
         <Image
            src={backgroundImage}
            alt="Contact background"
            fill
            className="hidden md:block object-contain object-right"
            priority
         />
         {/* Optional Overlay to ensure text readability or match peach tone if needed 
             The provided image looks like it has a peach background or filter. 
             If the raw image is not peachy, we might need a mix-blend-overlay or similar. 
             Assuming raw image needs the peach tint based on previous context.
         */}
         {/* <div className="absolute inset-0 bg-[#F4D4C8] mix-blend-multiply opacity-60" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        
        {/* Heading */}
        <h2 className="text-3xl font-medium text-white mb-12">
          {heading}
        </h2>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-sm flex flex-col items-start justify-between min-h-[220px] transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-[#F05A24] flex items-center justify-center text-white mb-6">
                {info.icon}
              </div>

              {/* Text Group */}
              <div>
                {/* Label */}
                <p className="text-gray-900 text-sm mb-2">{info.label}</p>

                {/* Value */}
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`text-[#F05A24] font-medium leading-snug hover:underline block ${
                      info.label === "Office Address:" ? "text-base" : "text-lg"
                    }`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className={`text-[#F05A24] font-medium leading-snug ${
                    info.label === "Office Address:" ? "text-base" : "text-lg"
                  }`}>
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;