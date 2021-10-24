import React from "react";
import Logo from "./vectors/Logo";
import Link from "next/link";
const Navbar = ({ bg, textColor }) => {
  return (
    <nav
      className={`flex items-center justify-between px-20 py-8 sticky top-0 left-0`}
      style={{ backgroundColor: bg, color: textColor }}
    >
      <Link href="/index">
        <Logo />
      </Link>
      <div className="flex items-center space-x-10">
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
        <Link href="/services">
          <a href="/services">Services</a>
        </Link>
        <Link href="/projects">
          <a href="/Projects">Projects</a>
        </Link>
        <Link href="/hub">
          <a href="/about">Hub</a>
        </Link>
        <Link href="/resources">
          <a href="/about">Resources</a>
        </Link>{" "}
        <Link href="/contact">
          <a href="/about">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
