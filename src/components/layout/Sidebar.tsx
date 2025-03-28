"use client";
import useSidebarItems from "@/hooks/useSidebarItems";
import { cn } from "@/utils/styleUtlies";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const sidebarItems = useSidebarItems();
  return (
    <nav
      className="hidden lg:flex lg:flex-col gap-y-4 h-full mt-6  w-[271px] rounded-4xl bg-white shadow-card p-4"
      style={{
        backgroundImage: "url('/assets/sidebarBackground.jpg')",
        backgroundSize: "100% 100%",
      }}
    >
      {sidebarItems.map((items, index) => {
        const isActive = pathname === items.link;
        return (
          <Link
            key={index}
            href={items.link}
            className={cn(
              "flex mx-2 items-center rounded-sm capitalize cursor-pointer",
              {
                "relative after:rounded-3xl after:absolute after:right-0 after:w-[4px] after:h-[36px] after:bg-[#FB394F] after:top-1/2 after:-translate-y-1/2 ":
                  isActive,
                "": !isActive,
              },
            )}
          >
            <button
              className={cn(
                "flex items-center gap-4 p-2  justify-start w-full bg-inherit cursor-pointer",
                {
                  "text-[#1A2024] font-medium": isActive,
                  "text-[#84919A] font-normal": !isActive,
                },
              )}
            >
              <div
                className={cn(
                  "w-[36px] h-[36px] rounded-md  flex items-center justify-center",
                  {
                    "bg-[#FB394F] ": isActive,
                    "bg-inherit": !isActive,
                  },
                )}
              >
                {React.cloneElement(items.icon, {
                  width: 20,
                  height: 20,
                  fill: isActive ? "white" : "#84919A",
                })}
              </div>

              <p className=" text-sm capitalize">{items.title}</p>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;
