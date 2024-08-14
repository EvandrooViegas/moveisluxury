import data from "@/data";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function ContactUsBtn() {
  return (
    <a className="group flex items-center gap-2 bg-primary text-white w-fit px-5 py-2.5 rounded " href={data.booking_url}>
        <span className="font-bold">
          MARQUE AGORA!
        </span>
          <IoMdArrowForward className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
    </a>
  );
}
