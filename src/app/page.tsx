"use client";

import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import { Icons } from "@/components/common/SvgIcons";
import SermonTable from "@/components/SermonTable";
import useSermonTable from "@/hooks/useSermontable";

export default function Home() {
  const { filterState, setFilters, filteredSermons, setPage } =
    useSermonTable();
  return (
    <section className="w-full">
      <p className="font-medium text-xl">Sermons</p>
      <div className="py-6  rounded-t-4xl flex md:flex-row flex-col justify-between bg-white shadow-card mt-7 items-center px-4  md:gap-0 gap-4 ">
        <SearchInput
          value={filterState.searchString}
          onChange={(e) => {
            setFilters({ field: "searchString", value: e.target.value });
          }}
          placeholder="Search sermon.."
        />

        <div className="flex md:gap-4 gap-0 justify-between md:justify-end w-full">
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

      <SermonTable
        paginatedData={filteredSermons}
        setPage={setPage}
        filterState={filterState}
      />
    </section>
  );
}
