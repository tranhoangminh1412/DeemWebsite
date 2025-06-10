import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/contexts/authContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import KhungNganFooter from "@/assets/KhungNganFooter.jpg"

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the page content with AuthProvider */}
        <AuthProvider>
          <div className="min-h-screen bg-[#242424] text-white">
            <Navbar />
            {children}
            <Image
              src={KhungNganFooter}
              className="w-full object-cover"
              alt="Footer"
            />
            <Footer />{" "}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
