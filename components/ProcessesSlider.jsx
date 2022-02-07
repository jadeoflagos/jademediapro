import React, { useState, useEffect, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { ideaData } from "../data";

function ProcessesSlider({ slideToShow }) {
  const [deviceType] = useState("laptop");
  const [carousel, setCarousel] = useState(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (carousel === null) return null;
    if (slideToShow === carousel.currentSlide) return null;
    carousel.goToSlide(slideToShow);
  }, [slideToShow]);

  return (
    <Carousel
      ref={setCarousel}
      swipeable={false}
      draggable={false}
      showDots={false}
      arrows={false}
      responsive={responsive}
      ssr={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 350ms ease-in-out"
      transitionDuration={700}
      containerClass="carousel-container"
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {ideaData.map((i, ideaIndex) => (
        <Fragment key={ideaIndex}>
          <div className="flex items-center gap-x-6 mt-10">
            <Image
              priority
              src={`/images/ideas/${i.title}-Left.png`}
              width={485}
              height={259}
              alt="ideate1-img"
            />{" "}
            <span className="hidden lg:flex items-center">
              <Image
                priority
                src={`/images/ideas/${i.title}-right.png`}
                width={485}
                height={259}
                alt="ideate2-img"
              />
            </span>
          </div>
          <p className="py-8 text-[0.94rem]">{i.content}</p>
          <span className="block lg:hidden mb-[1.667rem]">
            <Image
              priority
              src={`/images/ideas/${i.title}-right.png`}
              alt="Avatar"
              width={485}
              height={259}
            />
          </span>
        </Fragment>
      ))}
    </Carousel>
  );
}

export default ProcessesSlider;
