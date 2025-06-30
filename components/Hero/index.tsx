import Experience from "./experience";
import "./hero.css";

export default function HeroHome() {
  return (
    <div className="min-h-[85vh] w-full bg-gradient-to-t from-[#0F3730] to-[#000000] relative">
      <div className="absolute top-0 w-full h-full inset-0 grid place-items-center">
        <div>
          <p className="text-primary font-bold text-5xl -mb-5">Eventos</p>
          <h1 className="big_title font-black inline-flex">tickets</h1>
        </div>
      </div>
      <div className="hidden absolute top-0 w-full h-full inset-0">
        <Experience />
      </div>
    </div>
  );
}
