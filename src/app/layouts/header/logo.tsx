import Link from "next/link";
import React from "react";

export default function Logo(){
  return (
    <Link
      href="https://www.material-tailwind.com/"
      target="_blank"
      className="flex justify-start basis-1/4 text-base font-semibold min-w-[7.5rem]"
    >
      Material Tailwind
    </Link>
  )
}
