"use client";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export const LenisScroller = ({ children }: { children: any }) => {
  const lenisRef = useRef<any | null>(null);

  const lenis = useLenis(({ scroll }) => { });

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};
