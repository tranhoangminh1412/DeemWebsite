"use client";

import React from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Contact Info */}
        <div className="max-w-md">
          <h3 className="text-lg font-bold mb-2">THÔNG TIN LIÊN HỆ</h3>
          <div className="w-[78px] h-[2px] bg-white mb-4" />
          <p className="text-sm mb-1">
            <span className="font-bold">Địa chỉ:</span> Số 3 ngõ 2, Giảng Võ, Hà
            Nội, Việt Nam
          </p>
          <p className="text-sm mb-1">
            <span className="font-bold">Số điện thoại:</span> 088.920.6246
          </p>
          <p className="text-sm mb-1">
            <span className="font-bold">Facebook:</span> Deem Coffee
          </p>
          <p className="text-sm mb-4">
            <span className="font-bold">Instagram:</span> wearedeem
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#8DA650] text-white px-4 py-2 rounded-full font-medium text-sm">
              <Facebook className="w-4 h-4" /> Facebook
            </button>
            <button className="flex items-center gap-2 bg-[#8DA650] text-white px-4 py-2 rounded-full font-medium text-sm">
              <Instagram className="w-4 h-4" /> Instagram
            </button>
          </div>
        </div>

        {/* Right: CTA Box */}
        <div className="bg-[#1A1A1A] rounded-lg px-6 py-8 max-w-sm w-full flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-center text-base font-bold uppercase leading-relaxed mb-1 self-end">
              THAM GIA CỘNG ĐỒNG DEEM <br /> ĐỂ NHẬN NHIỀU ƯU ĐÃI HẤP DẪN
            </p>
            <div className="w-[57%] h-[2px] bg-white mb-4 self-end" />
          </div>

          <button className="bg-[#8DA650] text-white font-bold text-sm px-6 py-3 rounded-full self-end">
            ĐIỀN FORM ĐĂNG KÝ
          </button>
        </div>
      </div>
    </footer>
  );
}
