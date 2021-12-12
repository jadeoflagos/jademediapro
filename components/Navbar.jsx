import React, { useState } from "react";
import Logo from "./vectors/Logo";
import Link from "next/link";
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
        className={`flex items-center justify-between px-5 lg:px-20 py-8 sticky top-0 left-0 z-50`}
        style={{
          backgroundColor: bg ? bg : "transparent",
          color: textColor ?? "white",
          fontWeight: "normal",
        }}
      >
        <Link href="/">
          <a href="/">
            <Logo color={darkLogo && "#000"} />
          </a>
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          {/* <Link href="/about">
          <a
            href="/about"
            className={`${path === "/about" ? styles.activeLink : ""}`}
          >
            About
          </a>
        </Link> */}
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
          <MenuIcon fillColor={dropDownBg === "black" ? "#fff" : "#000"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
