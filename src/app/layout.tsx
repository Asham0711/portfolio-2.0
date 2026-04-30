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

export const metadata: Metadata = {
  title: "Md Asham Imad",
  description: "Portfolio of Md Asham Imad - MERN Stack & Next.js Developer",
  keywords: [
    "Md Asham Imad",
    "Asham",
    "Asham Imad",
    "Full Stack Developer",
    "MERN Developer",
  ],
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
