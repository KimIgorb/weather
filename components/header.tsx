import SearchInput from "@/UI/search-input";
import Image from "next/image";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="pt-5 pb-7 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Image src='/logo.svg' alt="Weather Logo" width={65} height={65} className="w-7 h-7 lg:w-auto lg:h-auto"/>
        <h1 className="uppercase font-bold text-xs sm:text-base md:text-xl lg:text-2xl text-main">next weather</h1>
      </div>
      <Suspense>
        <SearchInput />
      </Suspense>
    </header>
  )
}