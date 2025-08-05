'use client';
import React from "react";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { useNavbar } from "@/contexts/NavbarContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { setActiveTab } = useNavbar();

  const links = [
    { label: "VỀ CHÚNG TÔI", path: "/about" },
    { label: "SẢN PHẨM", path: "/products" },
    { label: "THÀNH VIÊN", path: "/team" },
    { label: "DỊCH VỤ KHÁC", path: "/services" },
  ];

  const isActive = (path) => pathname === path;

  const handleClick = (path) => {
    setActiveTab(path);
    router.push(path);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center text-sm font-medium px-6 pt-6 pb-6 text-white z-20 backdrop-blur-xs bg-[#09090933] w-full">
      <Image src={logo} alt="DEEM Logo" />
      <div className="hidden md:flex gap-8 font-[beauSans]">
        {links.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => handleClick(path)}
            className={`hover:text-white/80 border-b-2 transition-all cursor-pointer ${
              isActive(path) ? 'border-white' : 'border-transparent'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
