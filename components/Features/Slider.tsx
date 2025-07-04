"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "./Card";
import { cn } from "@/lib/utils";

type Feature = {
  tag: string;
  title: string;
  description: string;
};

type SliderProps = {
  features: Feature[];
};

export default function Slider({ features }: SliderProps) {
  const [isSlideActive, setIsSlideActive] = useState<number | null>(null);

  return (
    <Swiper
      spaceBetween={70}
      slidesPerView={1.1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
      }}
      onSlideChange={(swiper) => {
        setIsSlideActive(swiper.activeIndex);
      }}
      onSwiper={(swiper) => {
        setIsSlideActive(swiper.activeIndex);
      }}
      centeredSlides={true}
      grabCursor={true}
      className="select-none flex items-center"
    >
      {features.map((feature, index) => {
        const isActive = index === isSlideActive;
        console.log("isSlideActive", isSlideActive);
        const dada = isActive
          ? "p-20 bg-[#EDEDED] rounded-[4rem] rounded-br-none"
          : "p-20 bg-black rounded-full";
        const style = {
          title: isActive ? "text-black" : "text-primary",
          text: isActive ? "text-black" : "text-primary",
          label: isActive ? "text-primary" : "text-white",
        };

        return (
          <SwiperSlide
            key={index}
            //even:rounded-[4rem] even:rounded-br-none even:bg-[#EDEDED]
            className={cn(
              "relative min-h-[320px] p-20 p-6 shadow-md transition-all duration-500 ease-in-out",
              dada
            )}
          >
            <Card
              tag={feature.tag}
              title={feature.title}
              description={feature.description}
              style={style}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
