"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "./Card";

type Feature = {
  tag: string;
  title: string;
  description: string;
};

type SliderProps = {
  features: Feature[];
};

export default function Slider({ features }: SliderProps) {
  return (
    <Swiper
      spaceBetween={70}
      slidesPerView={1.9}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper.slideTo(1))}
      centeredSlides={true}
      className="select-none flex items-center"
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index} className="relative min-h-[330px] odd:bg-black even:bg-white rounded-full p-20 even:rounded-4xl even:rounded-tr-none p-6 shadow-md m-4">
          <Card            
            tag={feature.tag}
            title={feature.title}
            description={feature.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
