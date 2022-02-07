import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { freebiesTab, products } from "../data";
import Pagination from "../components/Pagination";

import Image from "next/image";
import Product from "../components/Product";
import Saly19 from "../public/images/Saly-19.png";
import SectionHeader from "../components/organism/SectionHeader";

const freebies = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="overflow-auto">
      <div className="overflow-auto w-full min-h-[30rem] bg-[#2C144E]">
        <SectionHeader
          imageHeight="453"
          imageWidth="453"
          title="Everything you need for growth and development"
          subTitle="Free daily high-quality design resources hand-picked for creatives, designers and developers, ranging from fonts, mockups, graphics, templates & more from amazing artists. "
          headerImage="Freebies-header.png"
        />
        <div className="py-32 bg-white px-5 lg:px-20">
          <div className="flex items-center mb-24">
            <span className="font-semibold mr-[0.857rem]">Related</span>
            <div className="flex items-cente gap-[0.857rem] overflow-x-auto">
              {freebiesTab.map((item, itemIndex) => (
                <span
                  key={`freebies-tab-number${itemIndex}`}
                  className=" rounded-[6.18rem] py-2 px-5 lg:py-3 lg:px-10  bg-[#EDEDF0] text-[0.6rem] lg:text-base whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-[3.1rem] gap-x-[2.75rem] mb-20">
            {Array(12)
              .fill("")
              .map((item, itemIndex) => (
                <div
                  key={`freebies-list-cat${itemIndex}`}
                  className="flex flex-col items-center justify-center bg-[#E8E8E8] shadow-[1px,5px,10px,rgba(196, 189, 227, 0.25)] rounded-[4px] py-10 "
                >
                  <Image
                    src="/images/freebies1.png"
                    width={270.21}
                    height={270.21}
                    alt="freebies-icon"
                  />
                  <div className="mt-8 flex flex-col items-center justify-center">
                    <span>Rumah Sakit</span>
                    <span>Rujukan</span>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className="mt-[8.5rem] flex flex-col">
            <h3 className="font-semibold text-[3rem]">
              Featured Paintings and Wall Frames{" "}
            </h3>
            <div className="hidden mt-[4.5rem] mb-32 lg:grid grid-cols-3 gap-x-[6.375rem]">
              {products.map((product, productIndex) => (
                <Product
                  key={`product-${productIndex}`}
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  delivery="FREE Delivery"
                />
              ))}
            </div>
            <div className="lg:hidden mt-[6.4rem] mb-32 grid grid-cols-2 gap-x-8">
              {products.slice(0, 2).map((product, productIndex) => (
                <Product
                  key={`product-${productIndex}`}
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  delivery="FREE Delivery"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default freebies;
