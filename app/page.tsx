import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/Map";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Services />
      <Map />
    </div>
  );
}
