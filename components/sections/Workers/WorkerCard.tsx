import React from "react";
import d from "@/data";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function BarberCard({
  barber: b,
}: {
  barber: (typeof d.workers)[number];
}) {
  return (
    <div key={b.name} className="flex flex-col gap-8 max-w-[400px] mx-auto">
      <div className="w-full aspect-[1/1.3]  relative">
        <Image
          src={b.img_path}
          fill
          alt="Barber Image"
          className="object-center object-cover select-none"
        />
      </div>
      <span className="font-bold text-2xl">{b.name}</span>
      <span className="text-neutral-400">{b.description}</span>
      <ul className="flex items-center gap-2.5">
        {b.socials.map((s) => (
          <li
            key={s.name}
            className="p-2 text-sm rounded-full bg-primary text-white flex items-center justify-center"
          >
            <a href={s.url}>
              {s.name === "facebook" && <FaFacebookF />}
              {s.name === "instagram" && <FaInstagram />}
              {s.name === "email" && <MdOutlineMailOutline />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
