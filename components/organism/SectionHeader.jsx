import React from "react";
import Navbar from "../Navbar";

const SectionHeader = ({
  headerImage,
  navBarColor,
  title,
  subTitle,
  children,
}) => {
  return (
    <div
      className="w-screen lg:min-h-[50rem]"
      style={{
        background: `url("/images/homebg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Navbar textColor={navBarColor} />
      </div>
      <div className="py-20 lg:max-w-[65%] w-full text-white flex flex-col justify-center px-8 lg:px-20">
        <p className="font-extrabold text-5xl lg:text-8xl">{title}</p>
        <p className="my-10 text-base lg:text-2xl font-normal">{subTitle}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SectionHeader;
