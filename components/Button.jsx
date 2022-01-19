import React from "react";

const Button = ({ label, greenBtn, purpleBtn }) => {
  return (
    <div
      className={`${
        greenBtn? "text-black bg-[#0DFFE5]" : "text-white bg-[#502A7A]"
      } rounded-sm w-full h-[3.8rem] flex items-center justify-center cursor-pointer hover:bg-opacity-80 text-[1.31rem] uppercase`}
    >
      {label}
    </div>
  );
};

export default Button;
