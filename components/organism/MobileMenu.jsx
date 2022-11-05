import React, { useState } from "react";
import Link from "next/link";
import { dropDown } from "../../data";

import CrossIcon from "../vectors/CrossIcon";
import Logo from "../vectors/MenuLogo";
import CaretDown from "../vectors/CaretDown";
import { handleRoutes } from "../../utils/helper";

const MobileMenu = ({ theme = "white", closeMenu }) => {
  const [activeOption, setActiveOption] = useState("");

  const dropDownKeys = Object.keys(dropDown);
  return (
    <div className=" overflow-hidden min-h-screen bg-black/50">
      <div className="flex flex-col max-h-full w-full h-[42.75rem] bg-black pl-12 pr-10">
        <header className="mt-[1.91rem] flex flex-row items-center justify-between">
          <Logo />
          <CrossIcon
            onClick={() => {
              closeMenu();
            }}
          />
        </header>
        <main className="flex flex-col mt-[2.08rem] gap-y-[0.83rem]">
          {dropDownKeys.map((item) => (
            <div
              key={item}
              className="flex flex-col w-[13.08rem]"
              onClick={() => {
                if (item === activeOption) {
                  setActiveOption("");
                  return;
                }
                setActiveOption(item);
              }}
            >
              <div
                className={`flex flex-row items-center pr-2 justify-between mb-[0.58rem] border-b-[0.5px]  pb-1 ${
                  activeOption === item
                    ? "border-b-white"
                    : "border-b-transparent"
                }`}
              >
                <span className="capitalize text-[1.25rem]">{item}</span>
                <CaretDown />
              </div>
              {activeOption === item && (
                <div className="flex flex-col gap-y-2 mb-[1.76rem] mt-[0.58rem] ml-[2.25rem] text-[1.08rem]">
                  {dropDown[item].map((option) => (
                    <Link href={handleRoutes(option, item)} key={option}>
                      <a href={handleRoutes(option, item)}>{option}</a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact">
            <a href="/contact" className="text-[1.08rem]">
              Contact
            </a>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default MobileMenu;
