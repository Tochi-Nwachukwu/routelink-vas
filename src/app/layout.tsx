import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.routelinkvas.com"),
  title: {
    default: "Routelink VAS | Nigeria's Premier VAS Platform",
    template: "%s | Routelink VAS",
  },
  description:
    "Routelink VAS is Nigeria's largest and most reliable Value Added Services platform. We provide seamless infrastructure for Bulk SMS, USSD codes, Voice services, and Airtime/Data APIs for businesses.",
  keywords: [
    "VAS platform Nigeria",
    "Value Added Services",
    "Bulk SMS Nigeria",
    "USSD API",
    "Telecom API",
    "Airtime API",
    "Data API",
    "Routelink VAS",
    "Routelink",
  ],
  authors: [{ name: "Routelink VAS Engineering Team" }],
  creator: "Routelink VAS",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    title: "Routelink VAS | Nigeria's Premier VAS Platform",
    description:
      "Scale your business communications with Nigeria's most robust VAS infrastructure. Bulk SMS, USSD, and more.",
    siteName: "Routelink VAS",
    images: [
      {
        url: "/images/routelinkvas-og-image.png",
        width: 1200,
        height: 630,
        alt: "Routelink VAS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Routelink VAS | Nigeria's Premier VAS Platform",
    description:
      "Scale your business communications with Nigeria's most robust VAS infrastructure.",
    images: ["/images/routelinkvas-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}