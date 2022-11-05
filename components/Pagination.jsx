import React from "react";
import Image from "next/image";
import nextIcon from "../public/vectors/next-icon.svg";
import previousIcon from "../public/vectors/previous-icon.svg";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex items-center w-full lg:w-8/12 ">
      <div className="flex items-center">
        <span className="mr-[0.5rem] lg:text-base text-xs">Previous</span>
        <Image src={previousIcon} />
      </div>
      <div className="flex-grow select-none text-[#502A7A] font-bold flex items-center justify-center lg:gap-[3.75rem]] ">
        {Array(5)
          .fill(" ")
          .map((page, pageIndex) => (
            <span
              key={`pagination-page-count${pageIndex}`}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`py-2 px-2 lg:px-4 border-b-[1px] border-transparent ${
                currentPage === pageIndex + 1 ? "border-[#502A7A]" : ""
              }`}
            >
              {pageIndex + 1}
            </span>
          ))}
      </div>
      <div className="flex items-center">
        <Image src={nextIcon} />
        <span className="ml-[0.5rem] lg:text-base text-xs">Next</span>
      </div>
    </div>
  );
};

export default Pagination;
