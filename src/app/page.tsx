"use client";

import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import { Icons } from "@/components/common/SvgIcons";
import SermonTable from "@/components/SermonTable";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="w-full">
      <p className="font-medium text-xl">Sermons</p>
      <div className="py-6  rounded-t-4xl flex md:flex-row flex-col justify-between bg-white shadow-card mt-7 items-center px-4  md:gap-0 gap-4 ">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={"Search sermon.."}
        />
        <div className="flex gap-4">
          <Button
            text="Filter By"
            variant="primary"
            className="border border-[#EDEFF5]"
            icon={<Icons.filter />}
          />
          <Button
            text="Create Sermon"
            variant="secondary"
            icon={<Icons.add />}
          />
        </div>
      </div>

      <SermonTable />
    </section>
  );
}
