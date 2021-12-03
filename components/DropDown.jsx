import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";

const bgColors = {
  purple: "#2C144E",
  black: " #424242",
  white: "#E8E8E8",
  green: "#02332E",
};

const DropDown = ({ options = [], navBg = "purple", styles = {} }) => {
  const dropDown = useRef(null);
  const [activeOption, setActiveOption] = useState(null);
  // const bg = navBg === "bg-white";
  const textColor = navBg !== "white" ? "text-black" : "text-white";
  const closeDropDown = () => {};
  useClickAway(dropDown, closeDropDown);

  return (
    <div
      style={{ backgroundColor: bgColors[navBg], zIndex: 1000, ...styles }}
      ref={dropDown}
      className={`drop-down absolute  flex flex-col py-[1.35rem] gap-y-[1.5rem] pl-8 pr-8 select-none font-semibold text-[1.31rem] rounded-[2px] mt-[1.3rem]`}
    >
      {options.map((option) => (
        <span
          key={`drop-down-active-option_${option}`}
          className={`${textColor} pb-2 border-[1px]  ${
            activeOption === option
              ? `${navBg === "white" ? "border-black" : "border-white"}`
              : "border-transparent"
          }`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};

export default DropDown;
