import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import data from "@/data";
import React from "react";

export default function Prices() {
  return (
    <SectionContainer id="prices" className=" flex flex-col gap-y-4 ">
      <AnimateElement className="text-neutral-400 font-bold">PREÇO DOS NOSSOS SERVIÇOS</AnimateElement>
      <AnimateElement className="text-6xl font-extrabold w-1/2">QUAL DOS NOSSOS SERVIÇOS VOCÊ PRECISA?</AnimateElement>
    <ul className="flex md:flex-row flex-col flex-wrap gap-x-4 justify-between  gap-y-6">
        {data.prices.map((p, idx) => (
            <AnimateElement element="li"  animate={{ opacity: [0, 1], x: [-40, 0], transition: { duration: idx * 0.1 + 0.5, type: "just" } }} key={p.name} className="md:w-[45%] p-4 border-b border-b-neutral-400/40">
                <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{p.name}</span>
                <span className="font-semibold text-lg text-neutral-400">{p.price}</span>

                </div>
                <span className="font-semibold text-neutral-400">{p.description}</span>
            </AnimateElement>
        ))}
    </ul>
    </SectionContainer>
  );
}
