"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import { Icons } from "../common/SvgIcons";

const Topnav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <header className="h-20 py-10 border-b border-[#E5EFFF] rounded-4xl flex justify-between bg-white shadow-card mt-7 items-center pl-[29.5px] pr-7">
        <Image
          src={"/assets/logo.svg"}
          alt={"logo"}
          width={77}
          height={23}
          className="w-[77px] h-[23px] cursor-pointer"
        />
        <div className="flex w-3/5 justify-between items-center">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Search sermon, playlist, series or anything..."}
            className="hidden md:flex"
          />
          <button
            className="border border-[#FF3333] rounded-4xl w-[108px] h-[40px] text-[#041549] text-[15px] font-medium shadow-[0px_10px_20px_rgba(9, 61, 94, 0.1)] cursor-pointer hidden md:block"
            onClick={(e) => e.preventDefault}
          >
            create
          </button>
          <Icons.notifications className=" cursor-pointer hidden md:block" />
          <div className="flex gap-2 items-center cursor-pointer">
            <Icons.userIcon />
            <p className="text-[#041549] font-medium text-base">Durodola A.</p>
            <Icons.arrow />
          </div>
        </div>
      </header>
    </>
  );
};

export default Topnav;
