"use client";
import React, { useEffect } from "react";
import { TableProps } from "@/types/table.types";
import { Icons } from "./SvgIcons";

const Table = <T,>({
  headers,
  renderRow,
  renderExpandedRow,
  rowsPerPage = 10,
  currentPage,
  setPage,
  expandedRow,
  isLoading,
  handleToggleExpand,
  filteredData,
}: TableProps<T>) => {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage,
  );

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage > totalPages || currentPage === 0) {
      setPage(1);
    }
  }, [filteredData.length, currentPage, rowsPerPage, setPage]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-[#F5F8FC] text-[#041549] font-medium text-xs uppercase">
            {headers.map((header, index) => (
              <th key={index} className="py-5">
                {typeof header === "string" ? (
                  header
                ) : (
                  <div className="flex items-center gap-1">
                    {header.label}
                    {header.icon && <span>{header.icon}</span>}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {isLoading
            ? [...Array(rowsPerPage)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  {headers.map((_, colIndex) => (
                    <td key={colIndex} className="py-3 px-4">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </td>
                  ))}
                </tr>
              ))
            : paginatedData.map((rowData, index) => (
                <React.Fragment key={index}>
                  <tr
                    className={` ${
                      expandedRow === index ? "bg-[#F1F5F9]" : ""
                    }`}
                  >
                    {renderRow(rowData, index, handleToggleExpand, expandedRow)}
                  </tr>
                  <tr>
                    <td colSpan={headers.length} className="relative">
                      <div className="mx-auto w-[97%] border-b border-[#EDEFF5]" />
                    </td>
                  </tr>
                  {expandedRow === index && renderExpandedRow && (
                    <tr className="bg-inherit">
                      <td colSpan={headers.length}>
                        {renderExpandedRow(rowData)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-between py-5 bg-white px-4 rounded-b-4xl">
        <span className="text-sm text-[#676767] font-medium">
          {filteredData.length === 0
            ? "0 Sermons"
            : `${Math.min(startIndex + 1, filteredData.length)} - 
       ${Math.min(startIndex + rowsPerPage, filteredData.length)} 
       of ${filteredData.length} Sermons`}
        </span>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex  border border-[#EDEFF5] items-center rounded-lg px-[14px] text-[#676767] bg-[#F6F7FA]  py-2 gap-2 text-sm">
            {currentPage}
            <Icons.arrow />
            {/* <select
              className=" bg-[#F6F7FA] text-[#676767] outline-none cursor-pointer"
              value={currentPage}
              onChange={(e) => setPage(Number(e.target.value))}
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Page {i + 1}
                </option>
              ))}
            </select> */}
          </div>
          <div className="space-x-2 flex">
            <button
              onClick={() => setPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isLoading}
              className={`text-sm  font-medium cursor-pointer ${
                currentPage === 1
                  ? "text-[#828CB2] cursor-not-allowed"
                  : "text-[#041549]"
              } `}
            >
              Prev
            </button>
            <p className="text-[#828CB2]">|</p>
            <button
              onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages || isLoading}
              className={`text-sm font-medium cursor-pointer ${
                currentPage === totalPages
                  ? "text-[#828CB2] cursor-not-allowed"
                  : "text-[#041549]"
              } `}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
