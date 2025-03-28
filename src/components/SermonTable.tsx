"use client";
import React from "react";
import Table from "./common/Table";
import useSermonTable from "@/hooks/useSermontable";
import { RowData } from "@/types/table.types";
import { Icons } from "./common/SvgIcons";
import Image from "next/image";
import { formatTime, formatDate } from "@/utils/formatDateTime";
import useAudioPlayer from "@/hooks/useAudioPlayer";

const SermonTable = () => {
  const {
    headers,
    handleToggleExpand,
    expandedRow,
    sermons,
    filterState,
    setPage,
    fetching,
  } = useSermonTable();
  const { handlePlayPause, currentAudioUrl, isPlaying } = useAudioPlayer();

  const renderRow = (rowData: RowData, index: number) => (
    <>
      <td className="py-6  pl-4 md:w-[30%] w-full">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="focus:outline-none bg-primary inline-flex lg:hidden"
            onClick={(e) => {
              e.stopPropagation();
              handleToggleExpand(index);
            }}
          >
            <Icons.arrow
              className={` inline-block lg:hidden transition-transform duration-200 ${
                expandedRow === index ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
          <div className="flex items-center gap-4">
            <Image
              src={rowData?.image_url ?? "-"}
              alt={"sermon image"}
              width={40}
              height={40}
              className="w-[40px] h-[40px] cursor-pointer rounded-[5.77px]"
            />

            <div>
              <p className="text-sm text-black"> {rowData?.title ?? "-"}</p>

              <p className="text-[#9AA6AC] text-xs">
                {rowData?.preacher?.name ?? "-"}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className=" hidden md:table-cell  text-sm text-black py-6 text-center">
        {formatTime(rowData?.duration ?? "-")}
      </td>
      <td className="hidden md:table-cell text-sm text-black py-6 text-center">
        {rowData?.number_of_listens ?? "-"}{" "}
        <span className="text-[#B0BABF]">
          {rowData.number_of_listens === 1 ? "listen" : "listens"}
        </span>
      </td>

      <td className="hidden md:table-cell text-sm text-black py-6 text-center">
        {rowData?.number_of_likes ?? "-"}{" "}
        <span className="text-[#B0BABF]">
          {rowData.number_of_likes === 1 ? "like" : "likes"}
        </span>
      </td>

      <td className="text-sm text-black py-6 text-center hidden md:table-cell ">
        {formatDate(rowData?.release_date ?? "-")}
      </td>
      <td className="text-sm text-[#15A336] py-6 text-center hidden md:table-cell ">
        <div className="text-sm text-[#15A336] py-1 px-[10px] rounded-[48px] bg-[#15A3361A]">
          {rowData?.visibility ?? "-"}
        </div>
      </td>
      <td className="text-sm text-black py-6 text-center hidden md:table-cell ">
        {formatDate(rowData?.created_at ?? "-")}
      </td>
      <td className="cursor-pointer py-6 pr-4 md:pr-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handlePlayPause(rowData?.audio_download_url ?? "-")}
            className="focus:outline-none cursor-pointer "
          >
            {currentAudioUrl === rowData?.audio_download_url && isPlaying ? (
              <Icons.pause />
            ) : (
              <Icons.play />
            )}
          </button>
          <button
            onClick={() => console.log(index)}
            className="focus:outline-none cursor-pointer "
          >
            <Icons.elipsis />
          </button>
        </div>
      </td>
    </>
  );
  const renderExpandedRow = (rowData: RowData) => {
    if (!rowData || typeof rowData !== "object") {
      return <div>No data available</div>;
    }

    return (
      <div className="text-left bg-[#008F8F]/10 p-4">
        <p>
          <strong>Duration:</strong> {formatTime(rowData?.duration ?? "-")}
        </p>
        <p>
          <strong>Listens:</strong> {rowData?.number_of_listens ?? "-"}{" "}
          <span className="text-[#B0BABF]">
            {rowData.number_of_listens === 1 ? "listen" : "listens"}
          </span>
        </p>
        <p>
          <strong>Likes:</strong> {rowData?.number_of_likes ?? "-"}{" "}
          <span className="text-[#B0BABF]">
            {rowData.number_of_likes === 1 ? "like" : "likes"}
          </span>
        </p>
        <p>
          <strong>Date Preached:</strong>{" "}
          {formatDate(rowData?.release_date ?? "-")}
        </p>
        <p className="text-[#15A336] ">
          <strong className="text-black">Status:</strong>{" "}
          {rowData?.visibility ?? "-"}
        </p>
        <p>
          {" "}
          <strong>Date Added:</strong> {formatDate(rowData?.created_at ?? "-")}
        </p>
      </div>
    );
  };

  return (
    <>
      <Table
        headers={headers}
        renderExpandedRow={renderExpandedRow}
        data={sermons}
        renderRow={renderRow}
        currentPage={filterState.page}
        setPage={setPage}
        expandedRow={expandedRow}
        handleToggleExpand={handleToggleExpand}
        isLoading={fetching}
      />
    </>
  );
};

export default SermonTable;
