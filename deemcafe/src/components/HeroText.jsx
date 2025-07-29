import React from "react";
import "./fonts.css"

export default function HeroText() {
  return (
    <div className="text-[40px] md:text-[64px] leading-[1] text-white flex flex-col font-extrabold">
      <p className="self-baseline">VỀ</p>
      <p className="self-center">CHÚNG</p>
      <p className="self-end">TÔI</p>
    </div>
  );
}
