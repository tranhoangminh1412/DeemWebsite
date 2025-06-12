"use client";

import React from "react";
import WorkshopCard from "./WorkshopCard";
import workshopPic from "@/assets/gapBong.png";

const workshopItems = [
  {
    image: workshopPic,
    time: "Thời gian: 9h ngày 20.10.2024",
    location: "Địa điểm: DEEM Coffee, 3/2 Giảng Võ",
    title: "Workshop Gấp bông tặng Hoa",
    description:
      "Các thành phần được sử dụng trong đồ uống dành cho Dạ Yến được chúng tôi tuyển chọn...",
    buttonText: "ĐỌC THÊM",
  },
  {
    image: workshopPic,
    time: "Thời gian: 9h ngày 20.10.2024",
    location: "Địa điểm: DEEM Coffee, 3/2 Giảng Võ",
    title: "Workshop Gấp bông tặng Hoa",
    description:
      "Các thành phần được sử dụng trong đồ uống dành cho Dạ Yến được chúng tôi tuyển chọn...",
    buttonText: "ĐỌC THÊM",
  },
];

export default function WorkshopGrid({
  col = "2",
  items = [
    {
      image: workshopPic,
      time: "Thời gian: 9h ngày 20.10.2024",
      location: "Địa điểm: DEEM Coffee, 3/2 Giảng Võ",
      title: "Workshop Gấp bông tặng Hoa",
      description:
        "Các thành phần được sử dụng trong đồ uống dành cho Dạ Yến được chúng tôi tuyển chọn...",
      buttonText: "ĐỌC THÊM",
    },
    {
      image: workshopPic,
      time: "Thời gian: 9h ngày 20.10.2024",
      location: "Địa điểm: DEEM Coffee, 3/2 Giảng Võ",
      title: "Workshop Gấp bông tặng Hoa",
      description:
        "Các thành phần được sử dụng trong đồ uống dành cho Dạ Yến được chúng tôi tuyển chọn...",
      buttonText: "ĐỌC THÊM",
    },
  ],
}) {
  return (
    <div
      className={`grid gap-8 max-w-6xl mx-auto grid-cols-${col} sm:grid-cols-${col} px-6 py-12`}
    >
      {items.map((item, index) => (
        <WorkshopCard key={index} {...item} />
      ))}
    </div>
  );
}
