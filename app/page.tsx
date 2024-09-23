import Exprience from "@/components/sections/Exprience";
import Form from "@/components/sections/Form";
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/Map";
import Prices from "@/components/sections/Prices";
import Promotions from "@/components/sections/Promotions";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Steps from "@/components/sections/Steps";
import Workers from "@/components/sections/Workers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Exprience />
      <Steps />
    <Workers />
    <Prices />
    <Promotions />
    <Services />
    <Reviews />
    <Form />
    <Map />
    </main>
  );
}
