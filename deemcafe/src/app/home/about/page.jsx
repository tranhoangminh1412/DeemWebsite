"use client";

import React from "react";
import KhungNganFooter from "@/assets/KhungNganFooter.jpg";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import spotlightImg from "@/assets/DeemSpotlightImg.png";

const aboutContent = {
  heading: "VỀ CHÚNG TÔI",
  paragraphs: [
    "Nestled in a small alley in the heart of Hanoi, DEEM is a place where you can savor coffee and experience the city's slower pace of life. Here, the usual hustle and bustle gradually quiets down, offering you tranquility and relaxation.",
    "DEEM’s logo is inspired by the image of “Flowers Blooming in Stone,” symbolizing extraordinary beauty arising from seemingly barren surroundings. This image represents purity and resilience, showcasing nature’s magic in harsh conditions. The blooming flower from stone signifies the belief that, regardless of circumstances, there is always a hidden beauty waiting to be discovered.",
    "The DEEM logo is not just a symbol; it embodies the journey of exploration and growth. It conveys a message of pure energy and serenity, reminding us that in every moment, there is an opportunity to develop and uncover true beauty.",
  ],
};

const content2 = {
  heading: "Cộng Đồng",
  content: {
    button: "Tìm hiểu thêm",
    description: "DEEM và hành trình tìm về sự bình yên trong tâm hồn",
    image: spotlightImg,
  },
};

export default function AboutSection() {
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
      <Image
        src={spotlightImg}
        alt=""
        className="max-h-[558px] w-full object-cover"
      />
      <main className="px-4 md:px-20">
        <section className="flex flex-col gap-24 max-w-6xl mx-auto mt-[6%] pb-30">
          <AboutCard
            title="VỀ CHÚNG TÔI"
            description={[
              "Nestled in a small alley in the heart of Hanoi, DEEM is a place where you can savor coffee and experience the city's slower pace of life. Here, the usual hustle and bustle gradually quiets down, offering you tranquility and relaxation.",
              `DEEM's logo is inspired by the image of "Flowers Blooming in Stone," symbolizing extraordinary beauty arising from seemingly barren surroundings. This image represents purity and resilience, showcasing nature's magic in harsh conditions. The blooming flower from stone signifies the belief that, regardless of circumstances, there is always a hidden beauty waiting to be discovered.`,
              `The DEEM logo is not just a symbol; it embodies the journey of exploration and growth. It conveys a message of pure energy and serenity, reminding us that in every moment, there is an opportunity to develop and uncover true beauty.`,
            ]}
          />

          <AboutCard
            title="CỘNG ĐỒNG"
            buttons={[
              {
                text: "TÌM HIỂU THÊM",
                subtext: "DEEM và hành trình tìm về sự bình yên trong tâm hồn",
              },
              {
                text: "TÌM HIỂU THÊM",
                subtext: "DEEM và hành trình tìm về sự bình yên trong tâm hồn",
              },
              {
                text: "TÌM HIỂU THÊM",
                subtext: "DEEM và hành trình tìm về sự bình yên trong tâm hồn",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
