import type { Metadata } from "next";
import localFont from 'next/font/local'
import NavBar from "@/components/Navbar";

import "./globals.css";
import { LenisScroller } from "@/providers/LenisScroller";

export const metadata: Metadata = {
  title: "Eventos Ya",
  description: "Administración de eventos y entradas.",
};

const roboto = localFont({
  src: [
    {
      path: './fonts/Nebulica-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Nebulica-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <main>
          <NavBar />
          <LenisScroller>{children}</LenisScroller>
        </main>
      </body>
    </html>
  );
}
