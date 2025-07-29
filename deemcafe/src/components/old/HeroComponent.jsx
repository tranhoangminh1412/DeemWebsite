"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/drink1.jpg",
    title: "DẠ YẾN",
    subtitle: "Thành phần chính trong đồ uống",
  },
  {
    image: "/images/drink2.jpg",
    title: "TRÀ HOA HỒNG",
    subtitle: "Giải tỏa tinh thần nhẹ nhàng",
  },
  {
    image: "/images/drink3.jpg",
    title: "CÀ PHÊ CAM",
    subtitle: "Vị tươi mát, đầy năng lượng",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[500px] bg-black">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        loop
        centeredSlides
        spaceBetween={24}
        slidesPerView={"auto"}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="relative w-[70%] h-full rounded-xl overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />

            <div className="absolute bottom-0 left-[20%] p-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-white/80 text-sm mb-4">{slide.subtitle}</p>
              <button className="bg-[#8DA650] text-white px-6 py-2 rounded-full text-sm font-bold">
                TÌM HIỂU THÊM
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Swiper-compatible pagination dots */}
      <div className="custom-swiper-pagination absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2"></div>
    </div>
  );
}
