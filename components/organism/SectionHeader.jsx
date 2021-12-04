import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const SectionHeader = ({
  headerImage,
  bgColor,
  navBarColor,
  title,
  subTitle,
  children,
}) => {
  return (
    <div className={`w-screen lg:min-h-[30rem] bg-black bg-[${bgColor}] `}>
      <div>{/* <Navbar textColor={navBarColor} /> */}</div>
      <div className="flex flex-col lg:flex-row  lg:items-center justify-between px-5 lg:px-20 text-white">
        <div className="lg:w-7/12">
          <p className="font-bold te text-3xl lg:text-7xl leading-tight">{title}</p>
          <p className="hidden lg:flex pt-12 lg:pb-12 text-base lg:text-2xl lg:tracking-wider">{subTitle} </p>
          <div className="hidden lg:flex">{children}</div>
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
        <p className="flex lg:hidden pt-5 pb-5  lg:pt-12 lg:pb-12 text-base lg:text-2xl lg:tracking-wider">{subTitle} </p>

      </div>
    </div>
  );
};

export default SectionHeader;
