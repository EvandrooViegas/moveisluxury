import data from "@/data";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

type Props = {
  outline?: boolean;
};
export default function ContactUsBtn(props: Props) {
  const { outline } = props;
  return (
    <a
      className={`group flex items-center gap-2  w-fit px-5 py-2.5 rounded ${
        outline
          ? "bg-transparent border border-primary text-primary"
          : "bg-primary text-white"
      } `}
      href={data.booking_url}
    >
      <span className="font-bold">CONTACTE-NOS!</span>
      <IoMdArrowForward className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
    </a>
  );
}
