import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
    // html 태그와 body 태그 양쪽 모두에 추가하는 것이 안전하다.
    <html lang="ko" suppressHydrationWarning={true}>
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
        suppressHydrationWarning={true} // 이 부분을 추가하여 body의 속성 불일치를 무시한다.
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}