import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import React from "react";

export default function page() {
  return (
    <SectionContainer className="flex flex-col gap-4 items-center justify-center space-y-10">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-500 capitalize">SOBRE NÓS</span>
        <span className="font-bold  text-5xl capitalize">
          NOSSAS INFORMAÇÕES
        </span>
      </AnimateElement>
    <p className="text-center">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    </SectionContainer>
  );
}
