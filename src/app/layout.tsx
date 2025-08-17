import type { Metadata } from "next";
import { Geist, Geist_Mono, Do_Hyeon } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doHyeon = Do_Hyeon({
  variable: "--font-do-hyeon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "메고지고 - 프리미엄 한국 떡",
  description: "전통 방식과 프리미엄 재료로 정성스럽게 만든 정통 한국 떡을 메고지고에서 경험해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doHyeon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
