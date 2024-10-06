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
          <div className="relative w-full h-80">
            <Image src="/portfolio/1.jpg" alt="Imagem" className="object-cover" fill />
          </div>
          <div className="relative w-full h-80">
            <Image src="/portfolio/2.jpg" alt="Imagem" className="object-cover" fill />
          </div>
          <div className="relative w-full h-80">
            <Image src="/portfolio/3.jpg" alt="Imagem" className="object-cover" fill />
          </div>
          <div className="relative w-full h-80">
            <Image src="/portfolio/4.jpg" alt="Imagem" className="object-cover" fill />
          </div>
      </div>
    </SectionContainer>
  );
}
