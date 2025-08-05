"use client";
import Image from "next/image";
import bgImage from "@/assets/backgroundSanPham.png";
import HeroText from "@/components/HeroText";
import HeroContent from "@/components/HeroContent";

export default function AboutUs() {
    return (
        <div className="relative w-screen h-screen overflow-hidden brightness-120">
            {/* Background image */}
            <Image
                src={bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                objectPosition="0% 34%"
                quality={100}
                priority
            />

            <div className="absolute top-30 inset-0 flex flex-col justify-between z-10">

                {/* Hero Section */}
                <div className="pl-15 flex flex-col md:flex-row justify-between items-start md:items-center px-6 pb-10 gap-6 md:gap-0">
                    <div className=" md:text-[100px] leading-[1] text-white flex flex-col font-extrabold min-w-[30%] min-w-[400px]">
                        <p className="self-baseline">SẢN</p>
                        <p className="self-end">PHẨM</p>
                    </div>
                    <div></div>
                </div>
            </div>
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/18 z-0" />
        </div>
    );
}
