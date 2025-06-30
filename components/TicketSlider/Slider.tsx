"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

export default function Slider() {
  return (
    <Swiper
      effect="coverflow"
      spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 1.2,
          spaceBetween: 0,
        },
      }}
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
      className="min-h-[450px] select-none flex items-center wrapper"
    >
      {/* <SwiperSlide className="relative">
        <div className="absolute inset-0 z-50 ">
          <div className="h-full flex flex-col md:flex-row">
            <div className="w-full md:w-3/7 pl-20 flex flex-row justify-center items-center">
              <h2 className="text-black font-black text-xl md:text-5xl text-balance">
                Super precio
              </h2>
            </div>
            <div className="w-full md:w-4/7 border-l-4 border-[#243330] border-dashed">
              <div className="text-[#243330] text-xs md:text-sm flex flex-col gap-4 justify-center h-full text-balance px-20">
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
        <div className="w-full aspect-square md:aspect-auto md:h-[400px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            version="1.1"
            viewBox="0 0 1301.3 500.94"
            className="w-full h-full"
          >
            <path
              className="color-primary fill-primary stroke-black stroke-4 z-50 "
              d="M1220.14,250.46c0,35.41,23.1,65.42,55.05,75.79,14.58,4.73,24.61,18.09,24.61,33.42v102.2c0,20.74-16.82,37.56-37.56,37.56H39.07c-20.74,0-37.56-16.82-37.56-37.56v-100.86c0-15.75,9.95-29.94,24.92-34.86,31.79-10.46,54.74-40.39,54.74-75.69s-22.95-65.22-54.74-75.68c-14.96-4.92-24.92-19.11-24.92-34.86V39.06C1.51,18.32,18.33,1.5,39.07,1.5h1223.17c20.74,0,37.56,16.82,37.56,37.56v100.86c0,15.75-9.95,29.94-24.92,34.86-31.79,10.46-54.74,40.4-54.74,75.68h0Z"
            />
          </svg>
        </div>
      </SwiperSlide> */}
      <SwiperSlide className="relative">
        <div className="absolute inset-0 z-50 md:block hidden">
          <div className="h-full flex flex-col md:flex-row gap-2.5">
            <div className="w-full md:w-3/7 pl-20 flex flex-col justify-center items-start md:items-center">
              <h2 className="font-black text-3xl md:text-5xl text-balance">
                Super precio
              </h2>
            </div>
            <div className="w-full md:w-4/7 md:border-l-4 border-primary md:border-dashed">
              <div className="text-primary text-xs md:text-sm flex flex-col gap-4 justify-center h-full text-balance px-20">
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
          className="w-full h-[230px] md:block hidden md:h-[600px] lg:h-[400px] mx-auto"
        >
          <path
            className="color-primary stroke-primary stroke-6 overflow-hidden z-50"
            d="M1220.14,250.46c0,35.41,23.1,65.42,55.05,75.79,14.58,4.73,24.61,18.09,24.61,33.42v102.2c0,20.74-16.82,37.56-37.56,37.56H39.07c-20.74,0-37.56-16.82-37.56-37.56v-100.86c0-15.75,9.95-29.94,24.92-34.86,31.79-10.46,54.74-40.39,54.74-75.69s-22.95-65.22-54.74-75.68c-14.96-4.92-24.92-19.11-24.92-34.86V39.06C1.51,18.32,18.33,1.5,39.07,1.5h1223.17c20.74,0,37.56,16.82,37.56,37.56v100.86c0,15.75-9.95,29.94-24.92,34.86-31.79,10.46-54.74,40.4-54.74,75.68h0Z"
          />
        </svg>
        <div className="md:hidden block border-2 p-8 md:w-max border-primary rounded-xl max-w-[80svw] mx-auto">
          <div className="h-full flex flex-col md:flex-row gap-2.5 ">
            <div className="w-full md:w-3/7 flex flex-col justify-center items-start">
              <h2 className="font-black text-3xl md:text-5xl text-balance">
                Tu propia ticketera
              </h2>
            </div>
            <div className="w-full md:w-4/7 md:border-l-4 border-primary md:border-dashed">
              <div className="text-primary text-sm md:text-sm flex flex-col gap-4 justify-center h-full text-balance">
                <p>
                  Desde EyTickets te creamos un sitio a medida sin cargo para
                  que puedas vender entradas para tus eventos con tu propia
                  identidad.
                </p>
                <p>
                  Tu sitio web personalizado cuenta con el listado de eventos,
                  página de preguntas frecuentes y checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className="relative">
        <div className="absolute inset-0  z-50">
          <div className="h-full flex flex-col md:flex-row ">
            <div className="w-full md:w-3/7 pl-20 flex flex-col justify-center items-center">
              <h2 className="text-black font-black text-xl md:text-5xl text-balance">
                Super precio
              </h2>
            </div>
            <div className="w-full md:w-4/7 border-l-4 border-[#243330] border-dashed">
              <div className="text-[#243330] text-xs md:text-sm flex flex-col gap-4 justify-center h-full text-balance px-20">
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
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] mx-auto"
        >
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
        className="swiper-item-list-next absolute right-35 top-44 cursor-pointer z-10"
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
        className="swiper-item-list-prev rotate-180 absolute left-35 top-44 cursor-pointer z-10"
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
      </svg> */}
    </Swiper>
  );
}
