import React from "react";

const Button = ({ label, greenBtn, purpleBtn, outline }) => {
  return (
    <div
      className={`${
        (greenBtn && !outline)
          ? "text-black bg-[#0DFFE5]"
          : "text-white bg-[#502A7A]"
      } ${
       ( greenBtn && outline)
          ? "text-black bg-[#0DFFE5]"
          : outline? "text-[#502A7A] bg-white border border-[#502A7A]":""
      }  rounded-sm w-full h-[3.8rem] flex items-center justify-center cursor-pointer hover:bg-opacity-80 text-[0.933rem] uppercase`}
    >
      {label}
    </div>
  );
};

export default Button;
