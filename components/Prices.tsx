import { credits } from "@/lib/constants";
import PriceCard from "./PriceCard";
import { cn } from "@/lib/utils";

export default function Prices() {
  return (
    <div>
      <div className="max-w-[80vw] md:max-w-[45vw] mx-auto space-y-10">
        <div className="bg-black p-4 rounded-3xl text-center">
          <h2 className="text-4xl uppercase text-primary font-black">
            Cobertura y precios
          </h2>
        </div>
        <p className="text-black font-semibold text-center">
          En EY Tickets comprás creditos por adelantado y usás uno por cada
          ticket QP que vendas o envíes. Los créditos no vencen y se compran
          fácilmente desde la sección {"Créditos"} en la web.
        </p>
      </div>
      <div className="container mx-auto py-20">
        <ul className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center mt-4 items-center">
          {credits.map((credit, index) => (
            <li
              key={credit.id}
              className={cn(
                "aspect-video md:aspect-square rounded-4xl p-2 text-center text-white",
                index === 1
                  ? "bg-black md:w-[25vw]"
                  : index === 2
                  ? "md:w-[20vw] md:h-[20vw] bg-primary md:rotate-5"
                  : "md:w-[20vw] md:h-[20vw] bg-primary md:-rotate-5"
              )}
            >
              <PriceCard credit={credit} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
