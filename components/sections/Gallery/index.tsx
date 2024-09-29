import React from "react";
import SectionContainer from "../../SectionContainer";
import AnimateElement from "@/components/AnimateElement";
import Image from "next/image";

const arr = Array(9).fill(0);
export default function Gallery() {
  return (
    <SectionContainer id="gallery" className="space-y-20">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-500 capitalize">Nosso trabalho</span>
        <span className="font-bold  text-5xl capitalize">Trabalhos recentes</span>
      </AnimateElement>
      <div className="md:grid md:grid-cols-3 flex flex-col gap-6">
        {arr.map((i, idx) => (
          <div className="relative w-full h-80" key={idx}>
            <Image src="/services/1.jpg" alt="Imagem" fill />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
