import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import data from "@/data";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function page() {
  return (
    <SectionContainer className="flex flex-col gap-4 items-center justify-center space-y-10">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-500 capitalize">
          ENTRE EM CONTACTO CONNOSCO
        </span>
        <span className="font-bold  text-5xl capitalize">NOSSOS CONTACTOS</span>
      </AnimateElement>
      <div className="flex flex-col justify-center items-center gap-10">
        {contacts.map((c) => (
          <Link
            href={c.href}
            className="text-6xl font-black flex items-center gap-3 text-neutral-500 hover:text-primary"
          >
            {c.icon}
            <span>{c.name}</span>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}

const contacts = [
  { name: "@moveis.luxury", icon: <FaFacebookF />, href: "google.com" },
  { name: "@moveis.luxury", icon: <FaInstagram />, href: "google.com" },
  { name: data.email, icon: <HiOutlineMail />, href: "google.com" },
  { name: data.number, icon: <FiPhone />, href: "google.com" },
];
