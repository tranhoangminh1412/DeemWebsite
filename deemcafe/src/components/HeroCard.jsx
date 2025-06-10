// components/HeroCard.jsx
"use client";

import React from "react";
import Image from "next/image";

export default function HeroCard({ image, title, description, buttonText }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-md aspect-[915/415] relative">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="bg-black flex flex-col justify-center px-10 py-6">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="w-[78px] h-[4px] bg-white mb-6"></div>
          <p className="text-white/80 text-xl mb-6">{description}</p>
          <button className="bg-[#8DA650] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg- transition align-baseline w-[40%] max-h-10 cursor-pointer text-nowrap w-fit">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
