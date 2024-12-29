import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${montserratFont.className} container antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
