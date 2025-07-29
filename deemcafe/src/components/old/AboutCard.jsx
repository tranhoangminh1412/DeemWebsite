"use client";

import React from "react";
import Image from "next/image";

export default function AboutCard({
  title,
  description,
  buttons,
  image, // optional image URL
}) {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-2xl p-6 md:p-10">
      {/* Optional Full-Width Image */}
      {image && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-center"
            sizes="100vw"
          />
        </div>
      )}

      {/* Title and underline */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase text-white">
        {title}
      </h2>
      <div className="w-[78px] h-[4px] bg-white mb-6" />

      {/* Paragraphs */}
      {description?.map((para, idx) => (
        <p
          key={idx}
          className="text-white/90 text-sm md:text-base mb-6 leading-relaxed"
        >
          {para}
        </p>
      ))}

      {/* Buttons */}
      {buttons?.length === 1 && (
        <div className="flex justify-center">
          <button className="bg-[#8DA650] text-white px-6 py-3 rounded-full font-bold text-sm">
            {buttons[0].text}
          </button>
        </div>
      )}

      {buttons?.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {buttons.map((btn, idx) => (
            <div key={idx} className="text-center">
              <button className="bg-[#8DA650] text-white px-6 py-2 rounded-full font-bold text-sm mb-2">
                {btn.text}
              </button>
              <p className="text-white/80 text-sm leading-tight">
                {btn.subtext}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
