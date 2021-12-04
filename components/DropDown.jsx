import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useRouter } from "next/router";

const bgColors = {
  purple: "#2C144E",
  black: " #424242",
  white: "#E8E8E8",
  green: "#02332E",
};

const DropDown = ({
  options = [],
  bg = "black",
  styles = {},
  closeDropDown,
  type
}) => {
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
      className={`drop-down absolute  flex flex-col py-[1.35rem] gap-y-[1.5rem] pl-8 pr-8 select-none font-semibold text-[1.31rem] rounded-[2px] mt-[1.3rem] `}
    >
      {options.map((option) => {
        const routeName = option.toLowerCase();
        return (
          <Link href={`/${routeName}`}>
            <a
              key={`drop-down-active-option_${option}`}
              href={`/${option}`}
              className={`${textColor} pb-2 border-b-[1px]  ${
                path === `/${routeName}`
                  ? `${bg === "white" ? "border-b-black" : "border-b-white"}`
                  : "border-b-transparent"
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
