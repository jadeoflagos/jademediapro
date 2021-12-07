import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import { products, storeTab } from "../data";
import Product from "../components/Product";
import Link from "next/link";

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        {/* <Navbar darkLogo /> */}
      </div>
      <div
        className="w-screen h-[31rem] lg:px-20 px-5"
        style={{
          background: `url("/images/storebg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-1/3 h-full lg:px-10 flex flex-col justify-center"
          style={{
            background: `url("/images/storebg2.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-lg lg:text-5xl mb-12 font-semibold">
            High-Quality Artistry Framed Just For You
          </p>
          <p className="text-xs lg:text-2xl">
            Our gallery is made from selected and best quality designs that are
            suitable for your creative space
          </p>
        </div>
      </div>
      <section className="px-5 lg:px-20 py-20">
        <div className="flex items-center mb-24">
          <span className="font-semibold mr-[0.857rem]">Related</span>
          <div className="flex items-cente gap-[0.857rem] flex-grow lg:flex-grow-0 overflow-x-auto lg:overflow-x-hidden">
            {storeTab.map((item, itemIndex) => (
              <span
                key={`store-tab-number${itemIndex}`}
                className=" rounded-[6.18rem] py-3 px-10  bg-[#EDEDF0] "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className=" mt-[6.4rem] mb-32 grid grid-cols-2 gap-x-4 lg:grid-cols-3 lg:gap-[6.375rem]">
          {products.map((product, productIndex) => (
            <Link href="/product-desc" key={`product-${productIndex}`}>
              <a>
                <Product
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  delivery="FREE Delivery"
                />
              </a>
            </Link>
          ))}
          {products.map((product, productIndex) => (
            <Link href="/product-desc" key={`product-${productIndex}`}>
              <a>
                <Product
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  delivery="FREE Delivery"
                />
              </a>
            </Link>
          ))}
          {products.map((product, productIndex) => (
            <Link href="/product-desc" key={`product-${productIndex}`}>
              <a>
                <Product
                  title={product.name}
                  price={product.price}
                  img={product.img}
                  delivery="FREE Delivery"
                />
              </a>
            </Link>
          ))}
        </div>{" "}
      </section>
      <section className="lg:px-20 px-5">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>

      <Footer />
    </div>
  );
};

export default Store;
