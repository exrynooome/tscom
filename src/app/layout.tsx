import type { Metadata } from "next";
import { Inter, Alumni_Sans } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const alumni = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ТСком",
  description: "Комплексные системы безопасности",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${alumni.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
