import React, { useState, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ title, description }) => {
  return (
    <div className="w-[20rem] min-h-[29rem] text-white flex flex-col bg-black py-4 px-6 rounded-sm">
      <span className="bg-[#C4C4C4] w-20 h-20 mb-16" />
      <p className="text-3xl">{title}</p>
      <span className="py-4 flex-grow">{description}</span>
      <p className="cursor-pointer py-2 px-10 flex justify-center text-black bg-[#0DFFE5] max-w-max ">
        LEARN MORE
      </p>
    </div>
  );
};

const ServicesCarousel = () => {
  const services = [
    {
      title: "Business Strategy",
      desc:
        "We analyse change, explore vulnerability, and optimize market strengths to accomplish sustainable and healthy development because starting and running a business is not trial and error.",
    },
    {
      title: "Branding",
      desc:
        "We design powerful identities that inspire and stand the test of time through innovative and compelling visuals that resonate with customers and nurture lasting relationships.",
    },
    {
      title: "Digital Marketing",
      desc:
        "We help grow your business, stay relevant, and outweigh the competition by creating brand awareness, generating leads, and boosting your sales & revenue.",
    },
    {
      title: "Motion Design",
      desc:
        "We tell visually engaging stories by creating promotional videos and animation unveiling the grasp of what your brand does, and what it stands for.",
    },
    {
      title: "Art & Photography",
      desc:
        "We break boundaries with our painting, sculpture, drawing, and engraving in a unique and fun way while doing something creative as beautiful work of art.",
    },
  ];

  const [carouselEL, setCarouselEL] = useState({});

  const projectNames = "Testify,Weater Forecast,Zonely,Fruitfy,Lasana".split(
    ","
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleCarouselClick = (el) => {
    setCarouselEL(el);
  };
  return (
    <div className="px-20">
      <div className="flex items-center justify-end ">
        <div className="mr-6 arrow" onClick={() => carouselEL.previous()}>
          <img src="/vectors/arrow-leftline.svg" alt="" />
        </div>
        <div className="arrow" onClick={() => carouselEL.next()}>
          <img src="/vectors/arrow-rightline.svg" alt="" />
        </div>
      </div>
      <div className=" mt-12 space-x-8">
        <Carousel
          ref={handleCarouselClick}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="margin-right"
          showDots={false}
          arrows={false}
          // slidesToSlide={2}
        >
          {services.map((service, serviceIndex) => (
            <Card
              key={`service-${serviceIndex}`}
              title={service.title}
              description={service.desc}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ServicesCarousel;
