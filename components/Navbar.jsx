import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
import DropDown from "./DropDown";
import { dropDown } from "../data";
import MenuIcon from "./vectors/MenuIcon";
import MobileMenu from "./organism/MobileMenu";

const Navbar = ({ bg, textColor, darkLogo, dropDownBg }) => {
  const dropdownMenus = Object.keys(dropDown);
  const dropDownDefault = {
    state: false,
    type: "",
  };

  const [openMenu, setOpenMenu] = useState(false);

  const closeMobileMenu = () => {
    setOpenMenu(false);
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
    });
  };

  const router = useRouter();
  const path = router.pathname;
  return (
    <nav
      className={`flex items-center text-2xl justify-between px-5 lg:px-20 py-8 sticky top-0 left-0 z-50  lg:mb-0 `}
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
                src="/vectors/jade-logo-white.svg"
                width={504}
                height={174}
              />
            ) : (
              <Image src="/vectors/jade-logo.svg" width={504} height={174} />
            )}
          </div>
        </a>
      </Link>
      <div
        className={`hidden lg:flex items-center space-x-10 ${
          darkLogo ? "text-black" : "text-white"
        }`}
      >
        {dropdownMenus.map((item, itemIndex) => (
          <div
            className="relative"
            onClick={(event) => toggleDropDown(event, item)}
            key={`nav-drop-down-${itemIndex}`}
          >
            <span
              className={`capitalize text-[1.125rem] select-none drop-down ${
                path === `/${item}`
                  ? styles.activeLink
                  : "font-normal text-white/80 "
              }`}
            >
              {item}
            </span>
            {showDropDown.state && showDropDown.type === item && (
              <DropDown
                options={dropDown[showDropDown.type]}
                bg={dropDownBg}
                closeDropDown={closeDropDown}
                type={showDropDown.type}
              />
            )}
          </div>
        ))}

        <Link href="/contact">
          <a
            href="/contact"
            className={`${
              path === "/contact"
                ? styles.activeLink
                : "font-normal text-white/80 "
            } text-[1.125rem]`}
          >
            Contact
          </a>
        </Link>
      </div>
      <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <MenuIcon fillcolor={!darkLogo ? "#fff" : "#000"} />
      </div>
      {openMenu && (
        <div
          className={`lg:hidden absolute w-full top-0 left-0 overflow-auto
             ${styles.mobileMenu} `}
        >
          <MobileMenu closeMenu={closeMobileMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
