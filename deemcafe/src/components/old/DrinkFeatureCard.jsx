"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const drinks = [
  {
    image: "/images/drink1.jpg",
    title: "TÊN ĐỒ UỐNG/ ĐỒ UỐNG THEO MÙA",
    description: "Mô tả đơn giản về đồ uống\nThành phần, cách pha chế",
  },
  {
    image: "/images/drink2.jpg",
    title: "TRÀ GỪNG MẬT ONG",
    description: "Ấm áp, tốt cho sức khỏe\nPhù hợp ngày se lạnh",
  },
  {
    image: "/images/drink3.jpg",
    title: "CÀ PHÊ CAM",
    description: "Cà phê đen kết hợp nước cam tươi\nVị chua nhẹ và sảng khoái",
  },
];

export default function DrinkFeatureCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-md w-full mx-auto">
      {/* Top: Image carousel */}
      <div className="relative w-full aspect-[915/415]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {drinks.map((drink, i) => (
            <SwiperSlide key={i}>
              <Image
                src={drink.image}
                alt={drink.title}
                fill
                className="object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {drinks.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 cursor-pointer hover:bg-black/80">
          <ChevronLeft className="text-white w-6 h-6" />
        </div>

        {/* Right Arrow */}
        <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 cursor-pointer hover:bg-black/80">
          <ChevronRight className="text-white w-6 h-6" />
        </div>
      </div>

      {/* Bottom: Text Section */}
      <div className="flex flex-col gap-4 px-6 py-6 bg-black text-white md:flex-row md:justify-between md:items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">
            {drinks[activeIndex].title}
          </h2>
          <p className="text-white/80 text-sm whitespace-pre-line">
            {drinks[activeIndex].description}
          </p>
        </div>
        <button className="bg-[#8DA650] text-white px-6 py-2 rounded-full font-bold text-sm mt-4 md:mt-0 w-fit">
          TÌM HIỂU THÊM
        </button>
      </div>
    </div>
  );
}
