import type { Metadata } from "next";
import NavBar from "@/components/Navbar";

import "./globals.css";
import { LenisScroller } from "@/providers/LenisScroller";

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
          <NavBar />
          <LenisScroller>{children}</LenisScroller>
        </main>
      </body>
    </html>
  );
}
