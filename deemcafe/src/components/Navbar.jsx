"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logoDeem.png";

export default function Navbar() {
  const router = useRouter();

  const handleNav = (path) => () => {
    console.log(path);
    router.push(path);
  };

  return (
    <header className="bg-transparent pt-[34px] pb-[34px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <span
            onClick={() => {
              router.push("/");
            }}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            <Image
              priority
              className="max-w-40 max-h-fit"
              src={logo}
              alt="DEEM Logo"
            />
          </span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white/80 select-none">
            <button
              onClick={handleNav("/home/about")}
              className="hover:text-white cursor-pointer"
            >
              VỀ CHÚNG TÔI
            </button>
            <button
              onClick={handleNav("/home/drinks")}
              className="hover:text-white cursor-pointer"
            >
              ĐỒ UỐNG
            </button>
            <button
              onClick={handleNav("/home/membership")}
              className="hover:text-white cursor-pointer"
            >
              THẺ TRẢ PHÍ
            </button>
            <button
              onClick={handleNav("/home/community")}
              className="hover:text-white cursor-pointer"
            >
              COMMUNITY
            </button>
            <button
              onClick={handleNav("/home/event")}
              className="hover:text-white cursor-pointer"
            >
              EVENT
            </button>
          </nav>
        </div>
        <button
          onClick={handleNav("/auth/login")}
          className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          ĐĂNG NHẬP
        </button>
      </div>
    </header>
  );
}
