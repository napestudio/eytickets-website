import type { Metadata } from "next";

import "./globals.css";
import { LenisScroller } from "@/components/common/lenis-scroller";

export const metadata: Metadata = {
  title: "Eventos Ya",
  description: "Administración de eventos y entradas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <main>
          <LenisScroller>  
            {children}
          </LenisScroller>
        </main>
      </body>
    </html>
  );
}
