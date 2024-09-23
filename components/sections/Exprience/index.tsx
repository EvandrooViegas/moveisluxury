import AnimateElement from "@/components/AnimateElement";
import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import React from "react";
export default function Exprience() {
  return (
    <SectionContainer
      className="md:grid md:grid-cols-2 md:justify-between flex flex-col-reverse gap-12"
      id="exprience"
    >
      <div className="flex gap-6 md:h-auto md:mt-0 mt-6 h-[300px] ">
        <AnimateElement
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: { duration: 1, type: "just" },
          }}
          className="relative w-full"
        >
          <Image
            className="object-center object-cover"
            src="/exprience/1.jpg"
            fill
            alt="Barber"
          />
        </AnimateElement>
        <AnimateElement
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: { duration: 1.2, type: "just" },
          }}
          className="relative w-full "
        >
          <Image
            className="object-center object-cover"
            src="/exprience/2.jpg"
            fill
            alt="Barber"
          />
        </AnimateElement>
      </div>
      <AnimateElement
        animate={{
          opacity: [0, 1],
          y: [40, 0],
          transition: { duration: 1, type: "just" },
        }}
        className="flex flex-col gap-4 w-full"
      >
        <span className="font-bold text-neutral-400">
          
        </span>
        <span className="text-6xl font-extrabold uppercase">
        DEIXE O RESTO CONNOSCO
        </span>
        <p className="text-neutral-400 leading-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
        <ContactUsBtn />
      </AnimateElement>
    </SectionContainer>
  );
}
