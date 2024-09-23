"use client";
import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <SectionContainer className="md:grid md:grid-cols-2 flex-col-reverse gap-20  mt-12 md:mt-20 " bgClassName="relative" id="home">
      <div className="flex flex-col justify-center gap-8 z-[1]  ">
      <span className="md:text-6xl text-[40px] font-black uppercase">materiais e qualidade <span className="border-b border-b-primary">luxuosa</span>.</span>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <ContactUsBtn />
      </div>
      <div className="relative w-full md:h-full md:min-h-[400px]  h-[400px] mt-5 z-[1]">
<Image src="/hero.jpg" alt="Hero" className="object-cover object-center rounded" fill />
      </div>
      <Image src="/bg.png" className="absolute object-cover z-[-1]" fill />

    </SectionContainer>
  );
}
