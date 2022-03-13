import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ title, description, gif }) => {
  const router = useRouter();
  return (
    <div className="w-full text-white  flex flex-col bg-black py-8 px-6 rounded-sm">
      <span className=" w-20 h-20 mb-16">
        <img
          src={`/gifs/${gif}.gif`}
          alt="service-icon"
          className="w-full h-full"
        />
      </span>
      <p className="text-2xl mb-[0.38rem] font-semibold">{title}</p>
      <span className="text-[0.94rem] items-end mb-4">{description}</span>
      <span className="flex-grow" />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#0DFFE5",
          color: "black",
          width: "9.46rem",
          fontSize: "0.94rem",
          borderRadius: " 1.42325px",
        }}
        variant="contained"
        className="py-[0.75rem] font-semibold hover:opacity-90"
        onClick={() => router.push("/services")}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

const ServicesCarousel = () => {
  const services = [
    {
      title: "Business Strategy",
      desc: "We analyse change, explore vulnerability, and optimize market strengths to accomplish sustainable and healthy development because starting and running a business is not trial and error.",
      gif: "business-strategy",
    },
    {
      title: "Branding",
      desc: "We design powerful identities that inspire and stand the test of time through innovative and compelling visuals that resonate with customers and nurture lasting relationships.",
      gif: "Branding",
    },
    {
      title: "Digital Marketing",
      desc: "We help grow your business, stay relevant, and outweigh the competition by creating brand awareness, generating leads, and boosting your sales & revenue.",
      gif: "Digital-marketing",
    },
    {
      title: "Motion Design",
      desc: "We tell visually engaging stories by creating promotional videos and animation unveiling the grasp of what your brand does, and what it stands for.",
      gif: "Motion-Design",
    },
    {
      title: "Art & Photography",
      desc: "We break boundaries with our painting, sculpture, drawing, and engraving in a unique and fun way while doing something creative as beautiful work of art.",
      gif: "Art-Photography",
    },
    {
      title: "Website & Application Development",
      desc: "We creatively design and develop websites and products that are purpose-built, designed for speed, vastly responsive, and deliver a great experience to your users.",
      gif: "Web-App-Project",
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
    <div>
      <div className="flex items-center justify-end ">
        <div
          className="mr-6 cursor-pointer"
          onClick={() => carouselEL.previous()}
        >
          <img src="/vectors/arrow-leftline.svg" alt="" />
        </div>
        <div className="cursor-pointer" onClick={() => carouselEL.next()}>
          <img src="/vectors/arrow-rightline.svg" alt="" />
        </div>
      </div>
      <div className=" mt-12">
        <Carousel
          ref={handleCarouselClick}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="margin-right"
          showDots={false}
          arrows={false}
        >
          {services.map((service, serviceIndex) => (
            <div className="flex h-full" key={`service-${serviceIndex}`}>
              <Card
                key={`service-${serviceIndex}`}
                title={service.title}
                description={service.desc}
                gif={service.gif}
              />
              <span className="w-4 h-full bg-white" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ServicesCarousel;
