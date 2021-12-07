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
    <div>
      <div className="w-full min-h-[30rem] bg-[#2C144E]">
        <SectionHeader
          title="Everything you need for growth and development"
          subTitle="Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work."
          headerImage=""
        />
        {/* <div>
          <Navbar dropDownBg="white" textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white bg-[#2C144E] pt-8 ">
          <div className=" w-7/12">
            <p className="text-6xl font-bold leading-tight">
              Everything you need for growth and development
            </p>
            <p className=" py-8 text-2xl tracking-wider">
              Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work.
            </p>
          </div>
          <span className="w-1/12" />
          <div className="w-4/12 flex items-center justify-center">
            <Image src={Saly19} height={520} width={520} />
          </div>
        </div> */}
        <div className="py-32 bg-white px-5 lg:px-20">
          <div className="flex items-center mb-24">
            <span className="font-semibold mr-[0.857rem]">Related</span>
            <div className="flex items-cente gap-[0.857rem] overflow-x-auto">
              {freebiesTab.map((item, itemIndex) => (
                <span
                  key={`freebies-tab-number${itemIndex}`}
                  className=" rounded-[6.18rem] py-3 px-10  bg-[#EDEDF0] "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-[3.1rem] gap-x-[2.75rem]">
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
          <div className="mt-8 flex flex-col">
            <h3 className="font-semibold text-[3rem]">
              Featured Paintings and Wall Frames{" "}
            </h3>
            <div className="hidden mt-[6.4rem] mb-32 lg:grid grid-cols-3 gap-x-[6.375rem]">
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
              {products.slice(0,2).map((product, productIndex) => (
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
