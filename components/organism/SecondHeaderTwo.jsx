import React from "react";
import SocialButtons from "../SocialButtons";
import Image from "next/image";
import Navbar from "../Navbar";

const SecondHeaderTwo = ({
  title,
  subTitle,
  headerImg,
  navBarColor,
  imageWidth = "456",
  imageHeight = "456",
}) => {
  return (
    <div className={`w-screen  bg-[#502A7A] `}>
      <div>
        <Navbar textColor={navBarColor} />
      </div>
      <div className="flex flex-col lg:flex-row lg:pt-32  lg:items-stretch justify-between px-5 lg:px-20 text-white">
        <div className="lg:w-7/12 lg:pb-[3.375rem]">
          <p className="font-bold text-4xl lg:text-[3.2rem] leading-[3.875rem]">
            {title}
          </p>
          <p className="pt-12 lg:pb-12 text-base lg:text-2xl lg:tracking-wider">
            {subTitle}{" "}
          </p>
          <div className="hidden lg:flex ">
            <SocialButtons />
          </div>
        </div>
        <span className="w-1/12" />
        <div className="lg:w-4/12 w-full flex items-end justify-center">
          <Image
            src={`/images/${headerImg}`}
            alt="Avatar"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
      <div className="w-full px-5 flex flex-col pt-11 lg:hidden">
        <SocialButtons />
      </div>
    </div>
  );
};

export default SecondHeaderTwo;
