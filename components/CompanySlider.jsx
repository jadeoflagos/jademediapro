import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import React, { useState } from "react";
import { Testimonies } from "../data/Testimonials";

const CompanySlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [deviceType, setDevice] = useState("laptop");
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType={deviceType}
      arrows={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {Testimonies.map((testimony, testimonyIndex) => (
        <div
          className="relative min-h-[27.6rem]"
          key={`testimony-${testimonyIndex}`}
        >
          <div className="flex items-start  mt-8 lg:mt-0">
            <div className="">
              <Image
                src={`/images/${testimony.img}`}
                alt="Avatar"
                width={200}
                height={200}
              />
            </div>
            <div className="ml-10 text-xs">
              <p className="font-bold lg:text-3xl mb-1">{testimony.name}</p>
              <p className="lg:text-xl">{testimony.position}</p>
            </div>
          </div>
          <div className="flex absolute top-1/4 bottom-0 right-0 left-12 space-x-14">
            <Image src="/vectors/qou.svg" alt="Avatar" width={60} height={72} />
            <p className="text-xs lg:text-base bg-[#044841] text-white px-4 lg:px-9 py-6  lg:w-[27rem] h-auto ">
              {testimony.review}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default CompanySlider;
