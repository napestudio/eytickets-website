import Features from "@/components/Features";
import HeroHome from "@/components/Hero";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";
import Slider from "@/components/TicketSlider/Slider";

export default function Home() {
  return (
    <>
      {/* <div>
        <HeroHome />
      </div> */}
      <section className="bg-gradient-to-t from-[#000000] to-[#3ADDBE] py-16 md:py-32">
        <div className="mx-auto">
          <h2 className="text-4xl uppercase text-black font-black text-center mb-20">
            Gestión de entradas, <span className="font-normal"> en segundos</span>
          </h2>
          <Features />
        </div>
      </section>
      <section className="bg-black">
        {/* por que elegirnos */}
        <div className="max-w-[80vw] md:max-w-[45vw] mx-auto space-y-10">
          <div className="relative  p-4 rounded-br-3xl rounded-bl-3xl text-center">
            {/* <svg
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 520 520"
              className="absolute top-0 -left-7 w-[30px] h-[30px] rotate-90"
            >
              <path d="M0,0h520C232.82,0,0,232.82,0,520V0Z" />
            </svg> */}
            <h2 className="text-4xl uppercase text-white font-black">
              Por qué elegirnos
            </h2>
            {/* <svg
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 520 520"
              className="absolute top-0 -right-7 w-[30px] h-[30px]"
            >
              <path d="M0,0h520C232.82,0,0,232.82,0,520V0Z" />
            </svg> */}
          </div>
        </div>
        <div className="container mx-auto py-20">
          <Slider />
        </div>
      </section>
      {/* <section className="min-h-screen bg-gradient-to-t from-black from-0% to-primary to-70%">
        <Prices />
      </section>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto"></div>
      </section>
      <footer className="bg-gradient-to-b from-black from-0% via-black via-40% to-primary to-120%">
        <Footer />
      </footer> */}
    </>
  );
}
