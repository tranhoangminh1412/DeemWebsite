"use client";

import React from "react";
import Image from "next/image";

export default function DrinkCard({ image, title, description, buttonText }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-md p-4 flex flex-col justify-between">
      <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-1">
          {title}
          <div className="w-[40px] h-[2px] bg-white mt-1" />
        </h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <button className="bg-[#8DA650] text-white px-4 py-2 rounded-full font-bold text-sm w-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
