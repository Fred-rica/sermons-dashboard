import React from "react";
import { Icons } from "./SvgIcons";
import { cn } from "@/utils/styleUtlies";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative md:w-[404px] w-full h-10 flex items-center border border-[#EDEFF5] space-x-3 rounded-4xl px-4",
        className,
      )}
    >
      <Icons.search />
      <input
        type="text"
        placeholder={placeholder}
        className=" placeholder-[#9AA6AC] font-light text-sm outline-none text-[#9AA6AC] w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
