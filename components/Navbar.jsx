import React, { useState } from "react";
import Logo from "./vectors/Logo";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
import DropDown from "./DropDown";
import { dropDown } from "../data";
import MenuIcon from "./vectors/MenuIcon";

const Navbar = ({ bg, textColor, darkLogo, dropDownBg }) => {
  const dropdownMenus = Object.keys(dropDown);
  const dropDownDefault = {
    state: false,
    type: "",
    styles: {},
  };

  const [showDropDown, setShowDropDown] = useState(dropDownDefault);

  const closeDropDown = () => {
    setShowDropDown(dropDownDefault);
  };

  const toggleDropDown = (e, type) => {
    if (showDropDown.state && showDropDown.type === type) {
      closeDropDown();
      return;
    }

    setShowDropDown({
      state: true,
      type,
      styles: { top: `${e.clientY}px`, left: `${e.clientX - 30}px` },
    });
  };

  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      {showDropDown.state && (
        <DropDown
          options={dropDown[showDropDown.type]}
          bg={dropDownBg}
          styles={showDropDown.styles}
          closeDropDown={closeDropDown}
          type={showDropDown.type}
        />
      )}
      <nav
        className={`flex items-center justify-between px-5 lg:px-20 py-8 sticky top-0 left-0 z-50 mb-[4.875rem] lg:mb-0 `}
        style={{
          backgroundColor: bg ? bg : "transparent",
          color: textColor ?? "white",
          fontWeight: "normal",
        }}
      >
        <Link href="/">
          <a href="/">
            <div className="flex flex-col w-[3.6rem] h-[1.3rem] lg:w-[7.6rem] lg:h-[2.8rem]">
              {!darkLogo ? (
                <Image
                  src="/vectors/white-brand-logo.svg"
                  width={123}
                  height={46}
                />
              ) : (
                <Image
                  src="/vectors/black-brand-logo.svg"
                  width={123}
                  height={46}
                />
              )}
            </div>
          </a>
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          {dropdownMenus.map((item, itemIndex) => (
            <span
              className="capitalize select-none drop-down"
              onClick={(event) => toggleDropDown(event, item)}
              key={`nav-drop-down-${itemIndex}`}
            >
              {item}
            </span>
          ))}

          <Link href="/contact">
            <a
              href="/contact"
              className={`${path === "/contact" ? styles.activeLink : ""}`}
            >
              Contact
            </a>
          </Link>
        </div>
        <div className="lg:hidden">
          <MenuIcon
            fillcolor={
              !dropDownBg ? "#fff" : dropDownBg === "black" ? "#fff" : "#000"
            }
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
