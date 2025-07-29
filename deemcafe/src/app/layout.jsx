import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/contexts/authContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/old/Footer";
import Image from "next/image";
import KhungNganFooter from "@/assets/KhungNganFooter.jpg";

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
          <div className="min-h-screen bg-transparent text-white">
            <div className="flex w-full">
              <Navbar />
            </div>
            {children}
            
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
