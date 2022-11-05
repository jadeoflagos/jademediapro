import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const SectionHeader = ({
  headerImage,
  bgColor,
  navBarColor,
  title,
  subTitle,
  darkLogo,
  headerColor,
  dropDownBg,
  imageWidth = "494",
  imageHeight = "494",
}) => {
  return (
    <div
      className={`w-screen lg:min-h-[30rem] pb-24`}
      style={{ background: bgColor }}
    >
      <div>
        <Navbar
          textColor={navBarColor}
          darkLogo={darkLogo}
          dropDownBg={dropDownBg ?? "black"}
        />
      </div>
      <div
        className="flex flex-col lg:flex-row  lg:items-center justify-between px-5 lg:px-20 text-white "
        style={{
          color: headerColor ?? "white",
        }}
      >
        <div className="lg:w-7/12 w-full lg:pt-28">
          <p className="font-semibold  text-3xl lg:text-[3.2rem] leading-[3.875rem]">
            {title}
          </p>
          <p className="lg:flex pt-6 lg:pt-12 lg:pb-12 text-base font-normal lg:text-[1.33rem] lg:tracking-wider leading-[1.8rem]">
            {subTitle}
          </p>
        </div>
        <span className="w-1/12" />
        <div className="lg:w-4/12 w-full flex items-center justify-center">
          <Image
            src={`/images/${headerImage}`}
            alt="Avatar"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
