import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./index.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ProvidersWrapper from "./ProvidersWrapper";
import data from "@/data";
const font = Poppins({ subsets: ["latin"],weight: "400" });

export const metadata: Metadata = {
  title: `BEM-VINDO AO SITE DO ${data.name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-black ${font.className}`}>
      <link rel="icon" href="/favicon.png" sizes="any" />
        <ProvidersWrapper>
          <Navbar/>
          <main className="mt-[140px]">

          {children}
          </main>
          <Footer />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
