"use client";
import Image from "next/image";
import bgImage from "@/assets/homeBackground.png"; 
import Navbar from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between z-10">
       
       <div></div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 pb-10 gap-6 md:gap-0">
          <HeroText />
          <HeroContent />
        </div>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
}
