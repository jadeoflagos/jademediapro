import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleRoutes, routesNames } from "../utils/helper";
import styles from "../styles/Home.module.css";
const DropDown = ({ options = [], bg = "black", closeDropDown, type }) => {
  const bgColors = {
    purple: "rgba(44, 20, 78, 0.5)",
    black: "rgba(66, 66, 66, 0.5)",
    white: "rgba(232, 232, 232, 0.5)",
    green: "rgba(2, 51, 46, 0.5)",
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
      style={{ backgroundColor: bgColors[bg], zIndex: 1000 }}
      ref={dropDown}
      className={`drop-down absolute shadow-lg  flex flex-col py-[1.35rem] gap-y-[1.5rem] pl-8 pr-8 select-none font-semibold text-[1.31rem] rounded-[2px] `}
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
              className={`${textColor} ${styles.linkBorder}   pb-2 w-max ${
                bg === "white" ? "border-b-black" : "border-b-white "
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
