import AnimateElement from "@/components/AnimateElement";
import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import React from "react";

export default function Promotions() {
  return (
    <div className="relative flex  h-[500px] ">
      <div className="full relative">
        <Image
          fill
          src={"/banners/1.jpg"}
          alt="Banner"
          className={` z-[-1] grayscale object-cover object-center transition-all`}
        />
      </div>
      <div className="full relative">
        <Image
          fill
          src={"/banners/2.jpg"}
          alt="Banner"
          className={`z-[-1]    object-cover object-center transition-all aspect-video`}
        />
      </div>

      <div className="absolute z-[-1] bg-black/70 inset-0" />
      <SectionContainer className="absolute inset-0 flex flex-col justify-center items-center gap-1.5">
        <AnimateElement className="text-6xl font-bold  text-white px-2 py-1.5 text-center">ESTÁ À ESPERA DE QUÊ?</AnimateElement>
        <AnimateElement className="text-center text-white w-2/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </AnimateElement>
        <AnimateElement className="mt-6" animate={{ opacity: [0, 1], transition: { duration: 1 } }}>

        <ContactUsBtn />
        </AnimateElement>
      </SectionContainer>
    </div>
  );
}
