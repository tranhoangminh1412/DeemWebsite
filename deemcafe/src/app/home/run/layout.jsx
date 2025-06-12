import { Geist, Geist_Mono } from "next/font/google";

import { AuthProvider } from "@/contexts/authContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deem Cafe Informational Website",
  description: "Welcome to DEEM :)",
};

export default function MenuLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Wrap the page content with AuthProvider */}
      <div className="min-h-screen bg-[#242424] text-white">{children}</div>
    </div>
  );
}
