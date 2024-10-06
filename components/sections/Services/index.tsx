import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <SectionContainer
      id="services"
      className="space-y-12"
      bgClassName="bg-secondary"
    >
      <AnimateElement className="flex flex-col  gap-4 items-center text-center">
        <span className="font-bold text-neutral-500 capitalize">
          Nossos serviços
        </span>
        <span className="font-bold  text-5xl capitalize">
          Tudo sobre o nosso trabalho
        </span>
      </AnimateElement>

      <div className="md:grid md:grid-cols-3 flex flex-col gap-6">
        {services.map((s, idx) => (
          <div key={s.title} className="bg-white shadow rounded">
            <div className="relative w-full h-60">
              <Image
                src={`/services/${idx + 1}.jpg`}
                className="object-cover rounded rounded-b-none"
                fill
                alt="Image"
              />
            </div>
            <div className="px-10 py-6 flex flex-col gap-3 text-center items-center">
              <span className="text-3xl font-bold text-primary">{s.title}</span>
              <p className="text-neutral-600 text-xl">{s.description}</p>
              <Link href="/budget" className="w-full mt-4">
                <Button className="w-fit  text-xl px-8 py-7" variant="outline">
                  Saiba Mais!
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const services = [
  {
    title: "Mobiliário Sob Medida",
    description:
      "Criação de móveis exclusivos e personalizados para atender ao seu estilo e necessidades. Cada peça é feita à mão, garantindo que o seu espaço seja único e cheio de personalidade.",
  },
  {
    title: "Design Sofisticado e Acessível",
    description:
      "Oferecemos móveis com design contemporâneo, utilizando materiais premium e acabamentos de luxo, tudo a preços acessíveis. Beleza e elegância ao alcance de todos.",
  },
  {
    title: "Durabilidade e Conforto",
    description:
      "Nossos móveis são projetados para durar, com foco em conforto e funcionalidade. Combine estética de alto nível com a durabilidade que seu lar merece.",
  },
];
