// components/TotalPoints.js
import React from "react";

export default function TotalPoints({ points }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-12 flex justify-between items-center text-white text-sm">
      <span className="font-semibold">
        TỔNG SỐ ĐIỂM TÍCH ĐƯỢC TỪ QUÃNG CHẠY: {points}
      </span>
      <button className="bg-[#8DA650] text-white px-4 py-2 rounded text-sm">
        ĐỔI ĐIỂM TẠI ĐÂY
      </button>
    </div>
  );
}
