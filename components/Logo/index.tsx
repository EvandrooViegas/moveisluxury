import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/icon.png" width={120} height={120} alt="Icon" />
    </Link>
  );
}
