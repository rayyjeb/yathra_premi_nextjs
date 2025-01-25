import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";



// Adding Urbanist font
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yathra Premi",
  description: "Yathra Premi is a travel agency that offers a wide range of travel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
