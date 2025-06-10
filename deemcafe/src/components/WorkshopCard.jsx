"use client";

import React from "react";
import Image from "next/image";

export default function WorkshopCard({
  image,
  time,
  location,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-md">
      {/* Poster */}
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain object-center"
        />
      </div>

      {/* Time & Location */}
      <div className="flex justify-between text-white/70 text-xs px-4 py-2">
        <span>{time}</span>
        <span>{location}</span>
      </div>

      {/* Content */}
      <div className="px-4 pb-6">
        <h3 className="text-white font-semibold text-base mb-2 mt-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-4 leading-snug">
          {description}
        </p>
        <button className="bg-[#8DA650] text-white px-5 py-2 rounded-full font-bold text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
