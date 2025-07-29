'use client';
import React from "react";
import Image from "next/image";
import logo from "@/assets/Logo.png"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center text-sm font-medium px-6 pt-6 pb-6 text-white z-20 backdrop-blur-md w-full">
      <Image src={logo} alt=""/>
      <div className="hidden md:flex gap-8 font-[beauSans]">
        <a href="#" className="hover:text-white/80">VỀ CHÚNG TÔI</a>
        <a href="#" className="hover:text-white/80">SẢN PHẨM</a>
        <a href="#" className="hover:text-white/80">THÀNH VIÊN</a>
        <a href="#" className="hover:text-white/80">DỊCH VỤ KHÁC</a>
      </div>
    </nav>
  );
}
