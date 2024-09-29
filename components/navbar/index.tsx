"use client";
import React, { useEffect, useState } from "react";
import links from "./links";
import data from "@/data";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo";
import AnimateElement from "../AnimateElement";
import ContactUsBtn from "../ContactUsBtn";
import Marquee from "react-fast-marquee";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      window.document.body.classList.remove("show-scrollbar");
      window.document.body.classList.add("hide-scrollbar");
    } else {
      window.document.body.classList.add("show-scrollbar");
      window.document.body.classList.remove("hide-scrollbar");
    }
  }, [open]);

  return (
    <>
      <div
        className={`transition-all flex flex-col  bg-white text-black border-b border-b-black/10 fixed top-0 inset-x-0 nav-z max-screen-w mx-auto `}
      >
        <div className="bg-secondary text-black p-3 ">
          <Marquee>
            {`${data.name} | LIGUE AGORA ${data.number} | VISITE-NOS ${data.location} | CONTACTE-NOS ${data.email}`}
          </Marquee>
        </div>
        <nav className="flex full justify-between items-center  py-4 px-8">
          <Logo />

          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline text-2xl"
          >
            <GiHamburgerMenu />
          </button>
          <ul className="hidden md:flex  gap-8">
            {links.map((l) => (
              <a href={l.href} key={l.href} className="hover:bg-primary hover:text-white py-1 hover:px-3 px-0 transition-all cursor-pointer">
                <li>{l.name}</li>
              </a>
            ))}
          </ul>
          <div className="hidden md:inline">
            <ContactUsBtn outline />
          </div>
        </nav>
        <div
          className={`md:hidden  inset-0  ${open ? "bg-foreground/40" : ""} ${
            open ? "fixed nav-z " : "absolute z-[-100]"
          }`}
        >
          <div
            className={`relative h-full bg-foreground  w-[400px] max-w-[80vw] transition-all  ${
              open ? "translate-x-0 nav-z " : "-translate-x-full"
            } `}
          >
            <button
              onClick={() => setOpen(false)}
              className={`absolute nav-z right-0  text-4xl bg-foreground p-1.5 transition-all ${
                open ? "translate-x-full" : "-translate-x-full"
              }`}
            >
              <IoMdClose />
            </button>
          <div className="pl-12 py-24 h-full flex flex-col justify-between">
          <ul className=" font-semibold  flex flex-col gap-6">
              {links.map((l, idx) => (
                <a href={l.href} key={l.href} >
                  <li className="">
                    {idx + 1}. {l.name}
                  </li>
                </a>
              ))}
            </ul>
            <ContactUsBtn  />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
