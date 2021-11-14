import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/vectors/Logo";

import Love from "../public/vectors/love.svg";
import search from "../public/vectors/search.svg";
import cart from "../public/vectors/cart.svg";
import shippingIcon from "../public/vectors/shipping-icon.svg";
import cartButton from "../public/vectors/cart-button.svg";
import backArrow from "../public/vectors/back-arrow.svg";
import location from "../public/vectors/location.svg";
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
      <main className="flex-grow  mt-[4rem] grid grid-cols-[1fr,auto] gap-x-[7.875rem] px-20">
        <div className="product-display w-full flex items-center justify-center gap-x-[3.9rem] bg-[#F4F4F2] h-[40rem]">
          <div className="flex flex-col justify-center gap-[1.3rem]">
            {productImages.map((image, imageIndex) => (
              <span
                onClick={() => setSelectedImg(imageIndex)}
                className={`flex items-center justify-center p-1 border-[1px] border-transparent ${
                  selectedImg === imageIndex ? "border-[#D2CFC8]" : ""
                }`}
                key={`product-image-no${imageIndex}`}
              >
                <Image src={image} />
              </span>
            ))}
          </div>
          <div className="flex flex-col mt-[4rem]  ">
            <Image src={painting} height={500} width={431} />
            <div className="flex items-center justify-center gap-[2.7rem]">
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
        <div className="desc-text flex flex-col">
          <Link href="/store">
            <a className="flex items-center">
              <Image src={backArrow} />
              <span className="ml-[0.625rem]">Back</span>
            </a>
          </Link>
          <span className="mt-[2rem] mb-[0.5rem] text-[3.06rem]">
            Wallowing Breeze{" "}
          </span>
          <span>Hettie Richards</span>
          <div className="flex flex-col mt-[2.12rem] mb-[2.6rem]">
            <span>Oil on canvas,</span>
            <span>2008</span>
            <span>Gallery wrap canvas</span>
            <span>canvas</span>
            <span>26 in × 23 in</span>
          </div>
          <p className="max-w-[34rem] pb-2 border-b-2 border-black">
            Dynamic and elusive abstraction and texture. Plays between the lines
            of chaos and serenity. Perfect fit for modern and contemporary
            styled interiors.
          </p>
          <span className="my-[1.8rem] font-bold">$ 620</span>
          <div className="flex items-center">
            <Image src={location} />
            <span className="ml-2">Ships from New York, NY, USA</span>
          </div>
          <div className="flex items-center mt-2">
            <Image src={shippingIcon} />
            <span className="ml-2">
              Estimated to ship in 3 - 7 days within USA
            </span>
          </div>
          <button className="my-[2.25rem] border-none outline-none py-1 bg-[#502A7A] flex items-center justify-center text-white ">
            <Image src={cartButton} />
            <span className="ml-[2.25rem]">ADD TO CART</span>
          </button>
          <span>Taxes and shipping fees will apply upon checkout</span>
        </div>
      </main>
    </div>
  );
};

export default productDesc;
