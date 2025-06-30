"use client"; /* refactor li to a component and make this server */
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { PriceCardType } from "@/lib/types";

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export default function PriceCard({
  credit,
  index,
}: {
  credit: PriceCardType;
  index: number;
}) {

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: React.MouseEvent<HTMLLIElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <li
      key={credit.id}
      className={cn(
        "aspect-video md:aspect-square rounded-4xl p-2 text-center text-white cursor-grab select-none",
        index === 1
          ? "bg-black md:w-[25vw]"
          : index === 2
          ? "md:w-[20vw] md:h-[20vw] bg-primary md:rotate-5"
          : "md:w-[20vw] md:h-[20vw] bg-primary md:-rotate-5"
      )}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
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
    </li>
  );
}
