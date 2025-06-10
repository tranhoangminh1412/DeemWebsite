"use client";

import React from "react";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import spotlightImg from "@/assets/DeemSpotlightImg.png";
import menu from "@/assets/menu.png";
import banner1 from "@/assets/bannerWorkshop.png";
import banner2 from "@/assets/bannerWorkshop1.png";
import WorkshopGrid from "@/components/WorkshopGrid";

export default function MenuPage() {
  return (
    // <section className="w-full px-6 md:px-20 py-12 bg-black text-white">
    //   <div className="min-h-screen bg-[#242424] text-white">
    //     <main className="pt-10 px-4 md:px-20">
    //       <div className="rounded-md p-6 md:p-10 max-w-4xl mx-auto">
    //         <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase">
    //           {aboutContent.heading}
    //         </h2>
    //         <div className="w-[78px] h-[4px] bg-white mb-6" />

    //         {aboutContent.paragraphs.map((para, idx) => (
    //           <p key={idx} className="text-white/90 text-sm md:text-base mb-6">
    //             {aboutContent.paragraphs}
    //           </p>
    //         ))}
    //       </div>
    //     </main>
    //   </div>

    // </section>

    <div className="min-h-screen bg-[#242424] text-white">
      <Image src={banner1} alt="" className="=h-full w-full object-contain" />
      <Image src={banner2} alt="" className="=h-full w-full object-contain" />
      <main className="px-4 md:px-20">
        <WorkshopGrid onlyTwo />
      </main>
    </div>
  );
}
