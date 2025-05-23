"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FaqButton({
  props,
}: {
  props: { question: string; answer: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="cursor-pointer w-full" onClick={handleClick}>
        <div className="flex justify-between">
          <h3 className="text-primary w-full uppercase font-bold text-left">{props.question}</h3>
          <span className="text-white">{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      <div
        className={cn(
          `overflow-hidden`,
          isOpen ? "h-auto" : "h-0"
        )}
      >
        <p className="text-white text-sm mt-2">{props.answer}</p>
      </div>
    </>
  );
}
