"use client";
import SectionContainer from "@/components/SectionContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

import CountUp from 'react-countup';
import AnimateElement from "@/components/AnimateElement";
import data from "@/data";


const services = data.services
export default function Services() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <SectionContainer id="services">
  <div className="flex flex-col items-center gap-20 ">
  <div className="w-full flex  gap-12 flex-col items-center">
        <AnimateElement className="font-black flex flex-col items-center text-center w-full space-y-4">
          <span className="text-2xl text-neutral-400">
            OS NOSSOS SERVIÇOS
          </span>
          <span className="text-5xl md:w-[65%]">
           TUDO O QUE PRECISA!
          </span>
        </AnimateElement>
        <AnimateElement animate={{ transition: { duration: 1.2 }, opacity: [0, 1] }} className=" w-full flex  gap-4 flex-col items-center">
          <Carousel opts={{ loop: true }} setApi={setApi} className="select-none w-full">
            <CarouselContent className="-ml-4">
              {services.map((s) => (
                <CarouselItem
                  key={s.title}
                  className="md:basis-1/3 md:h-[400px] h-[600px] ml-4 relative"
                >
                  <Image
                    src={s.image_path}
                    fill
                    alt="Service"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                  <div className="absolute bottom-0 p-6 font-bold text-white">
                    <p>{s.subtitle}</p>
                    <p className="text-3xl">{s.title}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
         {count > 0 && (
             <span className="font-black text-neutral-400">
             Slide {current} of {count}
           </span>
         )}
        </AnimateElement>
      </div>
      <div className="md:grid md:grid-cols-4 flex flex-col md:gap-20 gap-6 justify-between">
        {data.status.map((s, idx) => (
            <AnimateElement animate={{opacity: [0, 1], y: [idx % 2 === 0 ? 40 : -40, 0], transition: { duration: 1, delay: 0.4 } }} key={s.text} className="flex items-center gap-3 font-bold text-6xl">
                <span>+</span>
                <CountUp end={s.number} enableScrollSpy />
                <span className="text-sm w-[65%]">{s.text}</span>
            </AnimateElement>
        ))}
      </div>
  </div>
    </SectionContainer>
  );
}
