import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import React from "react";

export default function page() {
  return (
    <SectionContainer className="flex flex-col gap-4 items-center justify-center space-y-10">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-500 capitalize">SOBRE NÓS</span>
        <span className="font-bold  text-5xl capitalize">
        Qualidade Luxuosa
        </span>
      </AnimateElement>
    <p className="text-center">
    Na Móveis Luxury, acreditamos que todos merecem viver rodeados de móveis de alta qualidade sem precisar comprometer o orçamento. Fundada por Vieira Lopes, a nossa empresa oferece mobiliário artesanal com design sofisticado e atenção ao detalhe, tudo a um preço acessível.
Combinamos a elegância de materiais premium e acabamentos refinados com um compromisso de criar soluções de mobiliário personalizadas, que se adaptam a qualquer estilo de vida. Cada peça que criamos é única e feita sob medida, garantindo que o seu espaço tenha o toque luxuoso que merece, sem perder de vista a funcionalidade.
Na Móveis Luxury, a nossa missão é trazer o luxo acessível para o seu lar, com móveis que unem estética, conforto e durabilidade.

    </p>
    </SectionContainer>
  );
}
