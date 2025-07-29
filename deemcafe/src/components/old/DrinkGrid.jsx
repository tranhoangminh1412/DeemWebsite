"use client";

import React, { useState } from "react";
import DrinkCard from "./DrinkCard";

const allDrinks = Array(15).fill({
  image: "/images/drink1.jpg",
  title: "Dạ Yến",
  description: "Các thành phần được sử dụng trong đồ uống",
  buttonText: "THÊM VÀO GIỎ",
});

export default function DrinkGrid() {
  const [expanded, setExpanded] = useState(false);

  const visibleDrinks = expanded ? allDrinks : allDrinks.slice(0, 9);

  return (
    <section className="bg-[#1a1a1a] px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleDrinks.map((item, index) => (
          <DrinkCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {!expanded && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExpanded(true)}
            className="bg-[#8DA650] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#7c9448] transition"
          >
            HIỂN THỊ THÊM
          </button>
        </div>
      )}
    </section>
  );
}
