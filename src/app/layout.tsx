import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "A portfolio website built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
