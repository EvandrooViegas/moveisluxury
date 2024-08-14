import Exprience from "@/components/sections/Exprience";
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/Map";
import Prices from "@/components/sections/Prices";
import Promotions from "@/components/sections/Promotions";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Workers from "@/components/sections/Workers";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Exprience />
    <Workers />
    <Prices />
    <Promotions />
    <Services />
    <Reviews />
    <Map />
    </main>
  );
}
