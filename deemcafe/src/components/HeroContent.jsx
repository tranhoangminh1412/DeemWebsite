import React from "react";

export default function HeroContent() {
  return (
    <div className="max-w-lg text-sm font-light text-white">
      <p className="mb-4">
        DEEM Coffee là chốn dừng chân nơi vẻ đẹp và tinh thần kiên cường cùng tồn tại. Giống như một đóa hoa nở giữa đá...
      </p>
      <a href="#" className="text-white underline">Xem thêm →</a>

      <div className="mt-6">
        <div className="text-xs font-semibold mb-2">THÔNG TIN LIÊN HỆ</div>
        <button className="bg-[#6C743C] px-6 py-2 rounded-full text-white hover:bg-[#7e8849]">
          LIÊN HỆ
        </button>
      </div>
    </div>
  );
}
