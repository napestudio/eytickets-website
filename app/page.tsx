import HeroHome from "@/components/Hero";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <HeroHome />
      </header>
      <section className="min-h-screen bg-gradient-to-t from-black from-0% to-primary to-70%">
        <Prices />
      </section>
      <section className="bg-gray-200">
        <div className="container mx-auto py-20"></div>
      </section>
      <footer className="bg-gradient-to-b from-black from-0% via-black via-40% to-primary to-120%">
        <Footer />
      </footer>
    </>
  );
}
