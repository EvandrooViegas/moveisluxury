"use client";
import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import React, { useMemo, useState } from "react";

export default function Wrapper() {
  const [selectedQuerys, setSelectedQuerys] = useState(queryArr);
  const isSelected = (q: string) => {
    return selectedQuerys.some((qr) => qr === q);
  };

  const selectOrDeselect = (q: string) => {
    if (isSelected(q)) {
      const nArr = selectedQuerys.filter((i) => i !== q);
      setSelectedQuerys(nArr);
    } else {
      setSelectedQuerys([...selectedQuerys, q]);
    }
  };

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) => 
        selectedQuerys.some(f => p.filters.includes(f))
      );
  }, [selectedQuerys])
  return (
    <SectionContainer id="gallery" className="space-y-12">
      <AnimateElement className="flex flex-col gap-4 items-center text-center">
        <span className="font-bold text-neutral-500 capitalize">
          Nosso trabalho
        </span>
        <span className="font-bold  text-5xl capitalize">
          Trabalhos recentes
        </span>
        <div className="flex items-center gap-1.5">
        {queryArr.map((q) => (
          <div
            onClick={() => selectOrDeselect(q)}
            key={q}
            className={`text-lg  border  ${
              isSelected(q) ? "border-primary text-primary" : "text-neutral-600"
            } rounded-full px-3 py-1.5 `}
          >
            {q}
          </div>
        ))}
      </div>
      </AnimateElement>
    
      <div className="md:grid md:grid-cols-2 flex flex-col gap-6">
        {filteredPhotos.map((i, idx) => (
          <div key={idx}>
            <div className="relative w-full h-80">
              <Image src={i.img} alt="Imagem" fill className="object-cover " />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const queryArr = ["cozinha", "loja", "quarto"];

const photos = [
  { img: "/portfolio/1.jpg", filters: [queryArr[0]] },
  { img: "/portfolio/2.jpg", filters: [queryArr[1], queryArr[0]] },
  { img: "/portfolio/3.jpg", filters: [queryArr[1]] },
  { img: "/portfolio/4.jpg", filters: [queryArr[2]] },
];
