import { PriceCardType } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function PriceCard({ credit, index }: { credit: PriceCardType; index: number }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border-2 rounded-3xl py-8 px-5 h-full",
        index === 1 ? "border-primary" : "border-black"
      )}
    >
      <div
        className={cn(
          "flex justify-between items-center text-white text-xs uppercase",
          index === 1 ? "text-white" : "text-black"
        )}
      >
        <span>Tu evento</span>
        <span className="text-xl font-black">Desde</span>
        <span>2025</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span
          className={cn(
            "text-6xl uppercase font-black ",
            index === 1 ? "text-primary" : "text-white"
          )}
        >
          {credit.amount}
        </span>
        <span
          className={cn(
            "text-2xl uppercase font-bold",
            index === 1 ? "text-white" : "text-black"
          )}
        >
          {credit.description}
        </span>
      </div>
      <div
        className={cn(
          "uppercase font-bold",
          index === 1 ? "text-white" : "text-black"
        )}
      >
        ARS {credit.price} por qr
      </div>
    </div>
  );
}
