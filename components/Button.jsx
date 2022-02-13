import React from "react";

const Button = ({ label, greenBtn, purpleBtn, outline }) => {
  return (
    <div
      className={`${
        greenBtn && !outline
          ? "text-black bg-[#0DFFE5]"
          : greenBtn && outline
          ? " text-[#0DFFE5] border border-[#0DFFE5] hover:text-white hover:bg-[#0DFFE5]"
          : !greenBtn && outline
          ? "text-[#502A7A] bg-white border border-[#502A7A] hover:bg-[#502A7A] hover:text-white"
          : "text-white bg-[#502A7A]"
      }  rounded-sm w-full h-12 flex items-center justify-center cursor-pointer hover:bg-opacity-80 text-[0.933rem] uppercase font-semibold`}
    >
      {label}
    </div>
  );
};

export default Button;
