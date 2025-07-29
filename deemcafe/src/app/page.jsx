"use client";
import Image from "next/image";
import bgImage from "@/assets/homeBackground.png";
import Navbar from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden brightness-120">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="0% 23%"
        quality={100}
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between z-10">
        <div className="mt-40 ml-250 ">
          <p className="mb-4">
            DEEM Coffee là chốn dừng chân nơi vẻ đẹp và tinh thần kiên cường
            cùng tồn tại. Giống như một đóa hoa nở giữa đá...
          </p>
          <a href="#" className="text-white underline">
            Xem thêm →
          </a>
        </div>
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
