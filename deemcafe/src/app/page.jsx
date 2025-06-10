// app/page.jsx or pages/index.jsx depending on your Next.js structure
"use client";

import React from "react";
import HeroCard from "@/components/HeroCard";
import DrinkImageSliderCard from "@/components/DrinkFeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#242424] text-white">
      <main className="px-4 md:px-20">
        <section className="flex flex-col gap-24 max-w-6xl mx-auto mt-[6%] pb-30">
          <HeroCard
            image="/../app/deemAmbient.png"
            title="VỀ DEEM"
            description="DEEM và hành trình tìm về sự bình yên trong tâm hồn"
            buttonText="TÌM HIỂU THÊM"
          />
          <HeroCard
            image="/images/drink_story.jpg"
            title="CÂU CHUYỆN ĐỒ UỐNG"
            description="DEEM và hành trình tìm về sự bình yên trong tâm hồn"
            buttonText="TÌM HIỂU THÊM"
          />
          <HeroCard
            image="/images/drink_story.jpg"
            title="CỘNG ĐỒNG"
            description="DEEM và hành trình tìm về sự bình yên trong tâm hồn"
            buttonText="TÌM HIỂU THÊM"
          />
          <DrinkImageSliderCard />
        </section>
      </main>
    </div>
  );
}
