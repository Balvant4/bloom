"use client";

import { slideData } from "@/data/SlideData";
import { Carousel } from "../ui/carousel";

export function CarouselDemo() {
  return (
    <div className="relative overflow-hidden w-full h-full pt-10 pb-20 bg-[#1D1F2F]">
      <Carousel slides={slideData} />
    </div>
  );
}
