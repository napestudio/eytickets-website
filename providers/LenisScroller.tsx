"use client";

import { ReactLenis } from "lenis/react";

export const LenisScroller = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};
