"use client";
import SectionContainer from "@/components/SectionContainer";
import barber from "@/data";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import WorkerCard from "./WorkerCard";
import AnimateElement from "@/components/AnimateElement";
export default function Workers() {
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
    <SectionContainer id="workers" className="bg-foreground">
      <div className="hidden md:grid grid-cols-4 gap-8">
        <AnimateElement className="relative   aspect-square" animate={{ y: [50, 0], opacity: [0, 1], rotate: [30, 0], transition: { delay: 0.3 } }}>
          <Image
            src="/icon.png"
            fill
            alt="Icon"
            className="object-contain "
          />
        </AnimateElement>
        {barber.workers.map((b, idx) => (
          <AnimateElement animate={{ opacity: [0, 1], x: [-40, 0], transition: { duration: 1, type: "just", delay: 0.6 * idx } }} key={idx}>
            <WorkerCard barber={b} key={b.name} />
          </AnimateElement>
        ))}
      </div>
      <div className="md:hidden flex  gap-4 flex-col items-center">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {barber.workers.map((b) => (
              <CarouselItem key={b.name}>
                <WorkerCard barber={b} />
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
      </div>
    </SectionContainer>
  );
}
