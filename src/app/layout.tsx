import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://md-asham-imad.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Md Asham Imad | Software Engineer",
    template: "%s | Md Asham Imad",
  },
  description:
    "Portfolio of Md Asham Imad — Software Engineer at Cloudkaptan specialising in MERN Stack, Next.js, React Native, and Salesforce (Apex, LWC, Flows).",
  keywords: [
    "Md Asham Imad",
    "Asham Imad",
    "Asham",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "Salesforce Developer",
    "Apex Developer",
    "LWC Developer",
    "Cloudkaptan",
    "Portfolio",
    "Web Developer India",
    "Kolkata Developer",
  ],
  authors: [{ name: "Md Asham Imad", url: BASE_URL }],
  creator: "Md Asham Imad",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Md Asham Imad | Software Engineer",
    description:
      "Software Engineer at Cloudkaptan — MERN, Next.js, React Native & Salesforce developer. Explore my projects, skills and experience.",
    siteName: "Md Asham Imad Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Asham Imad – Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Asham Imad | Software Engineer",
    description:
      "Software Engineer at Cloudkaptan — MERN, Next.js, React Native & Salesforce developer.",
    creator: "@asham0711",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-dark bg-light dark:text-[#ffffff] text-[#171717]`}
      >
        <ThemeProvider>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="block md:hidden">
            <MobileNavbar />
          </div>
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
