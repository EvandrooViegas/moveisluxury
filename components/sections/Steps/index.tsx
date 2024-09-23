import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import data from "@/data";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
export default function Steps() {
  return (
    <SectionContainer
      className="space-y-20"
      bgClassName="border-t-2 border-secondary"
      id="steps"
    >
      <AnimateElement className="font-black flex flex-col items-center text-center w-full space-y-4">
        <span className="text-2xl text-neutral-400">NOSSO FLUXO DE TRABALHO</span>
        <span className="text-5xl md:w-[65%]">DO ZERO AO RESULTADO FINAL</span>
      </AnimateElement>
      <div className="md:grid md:grid-cols-3 flex flex-col gap-8 ">
        {data.steps.map((step, idx) => (
          <AnimateElement
          animate={{ opacity: [0, 1], x: [-40, 0], transition: { duration: 1, type: "just", delay: 0.6 * idx } }}
            key={step.title}
            className="flex flex-col gap-1.5 rounded relative"
          >
            <div className="bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center w-fit text-center text-2xl  gap-2 rounded  text-white font-semibold">
              <span className="px-6 py-1 flex items-center justify-center">
                {" "}
                {idx + 1}
              </span>
              <span className="h-full w-0.5 bg-primary/70 rounded-full"></span>
              <IoIosArrowForward />
            </div>
            <h5 className="mt-1 font-black text-3xl bg-secondary rounded p-6">
              {step.title}
            </h5>
            <p className="text-lg text-neutral-600 bg-secondary rounded p-6">
              {step.description}
            </p>
          </AnimateElement>
        ))}
      </div>
    </SectionContainer>
  );
}
