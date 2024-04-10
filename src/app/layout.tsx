import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CipherCraft",
  description: "Edtech platform",
  icons: {
    icon: ['./favicon.svg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <Navbar/>
        </div>
        {children}
        <div className="relative w-full flex items-center justify-center">
        <Footer/>
        </div>
        </body>
    </html>
  );
}
