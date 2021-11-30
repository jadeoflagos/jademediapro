import React, { useState } from "react";
import Logo from "./vectors/Logo";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
import DropDown from "./DropDown";

const Navbar = ({ bg, textColor, darkLogo }) => {
  const [showDropDown, setShowDropDown] = useState({
    state: false,
    type: "",
  });

  const router = useRouter();
  const path = router.pathname;
  return (
    <nav
      className={`flex items-center justify-between px-20 py-8 sticky top-0 left-0 z-50`}
      style={{ backgroundColor: bg, color: textColor, fontWeight: "normal" }}
    >
      <Link href="/">
        <a href="/">
          <Logo color={darkLogo && "#000"} />
        </a>
      </Link>
      <div className="flex items-center space-x-10">
        {/* <Link href="/about">
          <a
            href="/about"
            className={`${path === "/about" ? styles.activeLink : ""}`}
          >
            About
          </a>
        </Link> */}
        <div className="flex flex-col relative ">
          <span
            onClick={() =>
              setShowDropDown((currentState) => ({
                state: !currentState.state,
                type: "about",
              }))
            }
            // href="/about"
            // className={`${path === "/about" ? styles.activeLink : ""}`}
          >
            About
          </span>
          {showDropDown.state && showDropDown.type === "about" && (
            <DropDown
              options={"What we do,Testimonials,Volunteerings,Career".split(
                ","
              )}
              navBg={bg}
            />
          )}
        </div>
        <Link href="/services">
          <a
            href="/services"
            className={`${path === "/services" ? styles.activeLink : ""}`}
          >
            Services
          </a>
        </Link>
        <Link href="/projects">
          <a
            href="/projects"
            className={`${path === "/projects" ? styles.activeLink : ""}`}
          >
            Projects
          </a>
        </Link>
        <Link href="/hub">
          <a
            href="/hub"
            className={`${path === "/hub" ? styles.activeLink : ""}`}
          >
            Hub
          </a>
        </Link>
        <Link href="/resources">
          <a
            href="/resources"
            className={`${path === "/resources" ? styles.activeLink : ""}`}
          >
            Resources
          </a>
        </Link>{" "}
        <Link href="/contact">
          <a
            href="/contact"
            className={`${path === "/contact" ? styles.activeLink : ""}`}
          >
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
