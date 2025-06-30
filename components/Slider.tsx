"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

export default function Slider() {
  const swiper = useSwiper();
  return (
    <Swiper
      effect="coverflow"
      spaceBetween={50}
      slidesPerView={1.3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper.slideTo(1))}
      centeredSlides={true}
      grabCursor={true}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        prevEl: ".swiper-item-list-prev",
        nextEl: ".swiper-item-list-next",
      }}
      modules={[Navigation, EffectCoverflow]}
      className="min-h-[450px] select-none flex items-center"
    >
      <SwiperSlide className="relative">
        <div className="absolute top-[2rem] z-30 ">
          <div className="flex flex-row ">
            <div className="w-3/7 p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-7xl text-black uppercase font-black max-w-[19rem] px-8 py-20">
                Super precio
              </h2>
            </div>
            <div className="w-4/7 border-l-2 border-[#243330] border-dashed">
              <div className="text-[#243330] text-xs md:text-sm flex flex-col gap-4 justify-center h-full text-balance p-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  alias reprehenderit obcaecati esse inventore hic, blanditiis
                  quasi nemo debitis consequuntur quo? Quasi vitae error
                  adipisci ratione eum porro autem mollitia.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti facere quod vitae itaque molestiae tempore eaque?
                  Quaerat ea accusamus laudantium molestias odio. Neque
                  exercitationem, reprehenderit tempora porro nisi quia
                  temporibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          viewBox="0 0 1301.3 500.94"
          className="z-10"
        >
          <defs></defs>
          <path
            className="color-primary fill-primary stroke-black stroke-4 z-50 "
            d="M1220.14,250.46c0,35.41,23.1,65.42,55.05,75.79,14.58,4.73,24.61,18.09,24.61,33.42v102.2c0,20.74-16.82,37.56-37.56,37.56H39.07c-20.74,0-37.56-16.82-37.56-37.56v-100.86c0-15.75,9.95-29.94,24.92-34.86,31.79-10.46,54.74-40.39,54.74-75.69s-22.95-65.22-54.74-75.68c-14.96-4.92-24.92-19.11-24.92-34.86V39.06C1.51,18.32,18.33,1.5,39.07,1.5h1223.17c20.74,0,37.56,16.82,37.56,37.56v100.86c0,15.75-9.95,29.94-24.92,34.86-31.79,10.46-54.74,40.4-54.74,75.68h0Z"
          />
        </svg>
      </SwiperSlide>
      <SwiperSlide
        className="relative"
        // style={{
        //   clipPath:
        //     "polygon( 93.763% 49.998%,93.763% 49.998%,93.815% 52.083%,93.967% 54.087%,94.213% 55.992%,94.545% 57.781%,94.958% 59.437%,95.444% 60.943%,95.997% 62.283%,96.611% 63.438%,97.278% 64.392%,97.994% 65.128%,97.994% 65.128%,98.319% 65.461%,98.62% 65.89%,98.896% 66.407%,99.143% 67.002%,99.359% 67.67%,99.542% 68.401%,99.688% 69.187%,99.796% 70.021%,99.862% 70.894%,99.885% 71.799%,99.885% 92.201%,99.885% 92.201%,99.847% 93.417%,99.738% 94.57%,99.563% 95.646%,99.328% 96.628%,99.039% 97.502%,98.703% 98.252%,98.325% 98.862%,97.911% 99.316%,97.466% 99.6%,96.998% 99.699%,3.002% 99.699%,3.002% 99.699%,2.534% 99.6%,2.09% 99.316%,1.676% 98.862%,1.298% 98.252%,0.962% 97.502%,0.673% 96.628%,0.438% 95.646%,0.263% 94.57%,0.154% 93.417%,0.116% 92.201%,0.116% 72.067%,0.116% 72.067%,0.139% 71.134%,0.205% 70.23%,0.312% 69.362%,0.459% 68.542%,0.642% 67.776%,0.86% 67.076%,1.11% 66.45%,1.39% 65.907%,1.698% 65.456%,2.031% 65.108%,2.031% 65.108%,2.742% 64.367%,3.407% 63.411%,4.017% 62.255%,4.567% 60.916%,5.05% 59.412%,5.46% 57.759%,5.791% 55.975%,6.035% 54.075%,6.186% 52.077%,6.238% 49.998%,6.238% 49.998%,6.186% 47.919%,6.035% 45.921%,5.791% 44.022%,5.46% 42.237%,5.05% 40.585%,4.567% 39.081%,4.017% 37.743%,3.407% 36.587%,2.742% 35.631%,2.031% 34.89%,2.031% 34.89%,1.698% 34.542%,1.39% 34.091%,1.11% 33.548%,0.86% 32.922%,0.642% 32.222%,0.459% 31.456%,0.312% 30.636%,0.205% 29.768%,0.139% 28.864%,0.116% 27.931%,0.116% 7.797%,0.116% 7.797%,0.154% 6.581%,0.263% 5.428%,0.438% 4.352%,0.673% 3.37%,0.962% 2.496%,1.298% 1.746%,1.676% 1.136%,2.09% 0.682%,2.534% 0.398%,3.002% 0.299%,96.998% 0.299%,96.998% 0.299%,97.466% 0.398%,97.911% 0.682%,98.325% 1.136%,98.703% 1.746%,99.039% 2.496%,99.328% 3.37%,99.563% 4.352%,99.738% 5.428%,99.847% 6.581%,99.885% 7.797%,99.885% 27.931%,99.885% 27.931%,99.862% 28.864%,99.796% 29.768%,99.689% 30.636%,99.542% 31.456%,99.359% 32.222%,99.141% 32.922%,98.891% 33.548%,98.611% 34.091%,98.303% 34.542%,97.97% 34.89%,97.97% 34.89%,97.258% 35.631%,96.594% 36.587%,95.984% 37.743%,95.434% 39.082%,94.95% 40.586%,94.54% 42.239%,94.21% 44.024%,93.966% 45.923%,93.815% 47.92%,93.763% 49.998%,93.763% 49.998% )",
        // }}
      >
        <div className="absolute top-[2rem] z-20">
          <div className="flex flex-row">
            <div className="w-3/7 p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-7xl uppercase font-black max-w-[19rem] px-8 py-20">
                Super precio
              </h2>
            </div>
            <div className="w-4/7 border-l-2 border-primary border-dashed">
              <div className="text-primary text-xs md:text-sm flex flex-col gap-4 justify-center h-auto text-balance p-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  alias reprehenderit obcaecati esse inventore hic, blanditiis
                  quasi nemo debitis consequuntur quo? Quasi vitae error
                  adipisci ratione eum porro autem mollitia.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti facere quod vitae itaque molestiae tempore eaque?
                  Quaerat ea accusamus laudantium molestias odio. Neque
                  exercitationem, reprehenderit tempora porro nisi quia
                  temporibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          viewBox="0 0 1301.3 500.94"
        >
          <defs></defs>
          <path
            className="color-primary stroke-primary stroke-4 overflow-hidden z-50"
            d="M1220.14,250.46c0,35.41,23.1,65.42,55.05,75.79,14.58,4.73,24.61,18.09,24.61,33.42v102.2c0,20.74-16.82,37.56-37.56,37.56H39.07c-20.74,0-37.56-16.82-37.56-37.56v-100.86c0-15.75,9.95-29.94,24.92-34.86,31.79-10.46,54.74-40.39,54.74-75.69s-22.95-65.22-54.74-75.68c-14.96-4.92-24.92-19.11-24.92-34.86V39.06C1.51,18.32,18.33,1.5,39.07,1.5h1223.17c20.74,0,37.56,16.82,37.56,37.56v100.86c0,15.75-9.95,29.94-24.92,34.86-31.79,10.46-54.74,40.4-54.74,75.68h0Z"
          />
        </svg>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-[2rem] z-20">
          <div className="flex flex-row">
            <div className="w-3/7 p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-7xl text-black uppercase font-black max-w-[19rem] px-8 py-20">
                Super precio
              </h2>
            </div>
            <div className="w-4/7 border-l-2 border-[#243330] border-dashed">
              <div className="text-[#243330] text-xs md:text-sm flex flex-col gap-4 justify-center h-full text-balance p-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  alias reprehenderit obcaecati esse inventore hic, blanditiis
                  quasi nemo debitis consequuntur quo? Quasi vitae error
                  adipisci ratione eum porro autem mollitia.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti facere quod vitae itaque molestiae tempore eaque?
                  Quaerat ea accusamus laudantium molestias odio. Neque
                  exercitationem, reprehenderit tempora porro nisi quia
                  temporibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          viewBox="0 0 1301.3 500.94"
        >
          <defs></defs>
          <path
            className="color-primary fill-primary stroke-black stroke-4 z-50"
            d="M1220.14,250.46c0,35.41,23.1,65.42,55.05,75.79,14.58,4.73,24.61,18.09,24.61,33.42v102.2c0,20.74-16.82,37.56-37.56,37.56H39.07c-20.74,0-37.56-16.82-37.56-37.56v-100.86c0-15.75,9.95-29.94,24.92-34.86,31.79-10.46,54.74-40.39,54.74-75.69s-22.95-65.22-54.74-75.68c-14.96-4.92-24.92-19.11-24.92-34.86V39.06C1.51,18.32,18.33,1.5,39.07,1.5h1223.17c20.74,0,37.56,16.82,37.56,37.56v100.86c0,15.75-9.95,29.94-24.92,34.86-31.79,10.46-54.74,40.4-54.74,75.68h0Z"
          />
        </svg>
      </SwiperSlide>
      <svg
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="swiper-item-list-next absolute right-35 top-43 cursor-pointer z-10"
      >
        <path d="M0 19H43V27H0V19Z" fill="#3ADDBE" />
        <path
          d="M13 46L41.4056 17L47.8459 23.4404L25.5 46H13Z"
          fill="#3ADDBE"
        />
        <path
          d="M24.5 0.5L47.8459 23.4056L41.4056 29.8459L13 0.5H24.5Z"
          fill="#3ADDBE"
        />
      </svg>
      <svg
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="swiper-item-list-prev rotate-180 absolute left-35 top-43 cursor-pointer z-10"
      >
        <path d="M0 19H43V27H0V19Z" fill="#3ADDBE" />
        <path
          d="M13 46L41.4056 17L47.8459 23.4404L25.5 46H13Z"
          fill="#3ADDBE"
        />
        <path
          d="M24.5 0.5L47.8459 23.4056L41.4056 29.8459L13 0.5H24.5Z"
          fill="#3ADDBE"
        />
      </svg>
    </Swiper>
  );
}
