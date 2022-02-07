import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleRoutes, routesNames } from "../utils/helper";

const DropDown = ({
  options = [],
  bg = "black",
  styles = {},
  closeDropDown,
  type,
}) => {
  const bgColors = {
    purple: "#2C144E",
    black: " #424242",
    white: "#E8E8E8",
    green: "#02332E",
  };

  const dropDown = useRef(null);
  const [activeOption, setActiveOption] = useState(null);
  const textColor = bg !== "white" ? "text-white" : "text-black";

  const router = useRouter();
  const path = router.pathname;

  useClickAway(dropDown, (e) => {
    console.log({ e });
    if (e.target && e.target.className.includes("drop-down")) return;
    closeDropDown();
  });

  return (
    <div
      style={{ backgroundColor: bgColors[bg], zIndex: 1000, ...styles }}
      ref={dropDown}
      className={`drop-down absolute shadow-lg  flex flex-col py-[1.35rem] gap-y-[1.5rem] pl-8 pr-8 select-none font-semibold text-[1.31rem] rounded-[2px] mt-[1.3rem] `}
    >
      {options.map((option) => {
        const routeName = option.toLowerCase();
        return (
          <Link
            href={handleRoutes(option, type)}
            key={`drop-down-active-option_${option}`}
          >
            <a
              href={handleRoutes(option, type)}
              className={`${textColor} pb-2 border-b-[1px] border-b-transparent ${
                bg === "white" ? "hover:border-b-black" : "hover:border-b-white"
              }`}
            >
              {option}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default DropDown;
