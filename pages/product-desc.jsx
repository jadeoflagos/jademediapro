import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/vectors/Logo";

import Love from "../public/vectors/love.svg";
import search from "../public/vectors/search.svg";
import cart from "../public/vectors/cart.svg";
import share from "../public/vectors/share.svg";
import show from "../public/vectors/show.svg";
import profilePix from "../public/images/profile-pix.png";
import painting from "../public/images/painting.png";

import { productImages } from "../data";

const productDesc = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      <div className="absolute top-0 left-0 w-[3.25rem] h-[7.5rem] bg-[#C4C4C4]" />
      <nav className="flex items-center justify-between px-20 py-8">
        <Link href="/">
          <Logo color="#000" />
        </Link>
        <div className="flex items-center justify-between gap-[4.5rem] ">
          <Image src={search} />
          <span>Search for galaxy portrait</span>
          <Image src={Love} />
          <Image src={cart} />
          <Image src={profilePix} />
        </div>
      </nav>
      <main className="flex-grow grid grid-cols-[1fr,auto]">
        <div className="product-display w-full flex items-center justify-center gap-x-[3.9rem] bg-[#F4F4F2]">
          <div className="flex flex-col justify-center gap-[1.3rem]">
            {productImages.map((image, imageIndex) => (
              <span
                className={`p-1 border-[1px] border-transparent ${
                  selectedImg === imageIndex ? "border-[#D2CFC8]" : ""
                }`}
                key={`product-image-no${imageIndex}`}
              >
                <Image src={image} />
              </span>
            ))}
          </div>
          <div className="flex flex-col mt-[4.6rem] ">
            <Image src={painting} />
            <div className="flex items-center gap-[2.7rem]">
              <p className="flex items-center gap-[0.7rem]">
                <Image src={show} />
                <span>View in a room</span>
              </p>
              <p className="flex items-center gap-[0.7rem]">
                <Image src={share} />
                <span>Share</span>
              </p>
            </div>
          </div>
        </div>
        <div className="desc-text"></div>
      </main>
    </div>
  );
};

export default productDesc;
