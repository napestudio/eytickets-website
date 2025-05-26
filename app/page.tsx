import Features from "@/components/Features";
import HeroHome from "@/components/Hero";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <HeroHome />
      </div>
      <section className="bg-gradient-to-t from-[#000000] to-[#3ADDBE] py-16 md:py-32">
        <div className="container mx-auto">
          <h2 className="text-center text-black md:text-8xl">
            Gestión de Eventos, en segundos
          </h2>
          <Features />
          {/* por que elegirnos */}
          <h2>Por qué elegirnos</h2>
          <div className="w-full h-[500px] border border-primary rounded-4xl relative">
            <div className="absolute h-full -left-10 flex items-center">
              <div className="bg-black rounded-full w-[100px] h-[100px] relative border border-primary"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gradient-to-t from-black from-0% to-primary to-70%">
        <Prices />
      </section>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto"></div>
      </section>
      <footer className="bg-gradient-to-b from-black from-0% via-black via-40% to-primary to-120%">
        <Footer />
      </footer>
    </>
  );
}
