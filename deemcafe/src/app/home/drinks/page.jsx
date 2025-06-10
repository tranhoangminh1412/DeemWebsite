"use client";

import React from "react";
import KhungNganFooter from "@/assets/KhungNganFooter.jpg";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import spotlightImg from "@/assets/DeemSpotlightImg.png";
import HeroCard from "@/components/HeroCard";
import HeroCarousel from "@/components/HeroComponent";
import DrinkGrid from "@/components/DrinkGrid";

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
    <div className="min-h-screen bg-[#242424] text-white">
      <HeroCarousel />
      <main className="px-4 md:px-20">
        <section className="flex flex-col gap-24 max-w-6xl mx-auto mt-[6%] pb-30">
          <HeroCard
            image="/../app/deemAmbient.png"
            title="VỀ DEEM"
            description="DEEM và hành trình tìm về sự bình yên trong tâm hồn"
            buttonText="TÌM HIỂU THÊM"
          />
          <DrinkGrid />
        </section>
      </main>
    </div>
  );
}
