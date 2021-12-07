import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const SectionHeader = ({
  headerImage,
  bgColor,
  navBarColor,
  title,
  subTitle,
}) => {
  return (
    <div className={`w-screen lg:min-h-[30rem] bg-black bg-[${bgColor}] `}>
      <div>
        {/* <Navbar textColor={navBarColor} /> */}
      </div>
      <div className="flex flex-col lg:flex-row  lg:items-center justify-between px-5 lg:px-20 text-white">
        <div className="lg:w-7/12 w-full">
          <p className="font-bold  text-3xl lg:text-7xl leading-tight">
            {title}
          </p>
          <p className="lg:flex pt-6 lg:pt-12 lg:pb-12 text-base lg:text-2xl lg:tracking-wider">
            {subTitle}
          </p>
        </div>
        <span className="w-1/12" />
        <div className="lg:w-4/12 w-full flex items-center justify-center">
          <Image
            src={`/images/${headerImage}`}
            alt="Avatar"
            width={494}
            height={494}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
