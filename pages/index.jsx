import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Illus from "../components/vectors/Iluust";
import InterviewCard from "../components/InterviewCard";
import { useState } from "react";
import PostCard from "../components/PostCard";
import ServicesCarousel from "../components/ServicesCarousel";
import Product from "../components/Product";
import { eventData, ideaData } from "../data";
import Link from "next/link";
import { Header } from "../data/HomePage";
import EyeBrow from "../components/organism/EyeBrow";
import styles from "../styles/Home.module.css";

import unlockFuture from "../public/gifs/Unlock Your Future.gif";
import Heading from "../components/organism/Heading";
import Button from "../components/Button";
import ProcessesSlider from "../components/ProcessesSlider";
import { useRouter } from "next/router";
import LearnMoreArrow from "../components/LearnMoreArrow";

export default function Home() {
  const router = useRouter();
  const [activeIdea, setActiveIdea] = useState(0);
  const openings = [
    {
      position: "Project Manager",
      location: "Lagos",
      type: "Full Time",
      company: "GIG Logistics",
    },
    {
      position: "Graphic Designer",
      location: "New Jersey",
      type: "Contract",
      company: "Crane Inc.",
    },
    {
      position: "Sales Executive",
      location: "Abuja",
      type: "Full Time",
      company: "NMI Pharmacy",
    },
  ];
  const products = [
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winecup.png",
    },
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winebottle.png",
    },
    {
      name: "Imperfection is perfect | Custom Poster",
      price: "USD 45",
      img: "winebottle.png",
    },
  ];
  return (
    <div>
      <div
        className="w-screen  lg:min-h-[50rem] "
        style={{
          background: `url("/images/homebg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Navbar dropDownBg="black" textColor="white" />
        </div>
        <div className="py-20  text-white  px-8 w-full lg:px-20 lg:grid grid-cols-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p
              className={`${styles.headerFamily}  font-bold text-5xl lg:text-[6.5rem] leading-3 md:leading-[6.5rem]`}
            >
              {Header.title}
            </p>
            <p className="my-10 text-base lg:text-[1.25rem] leading-[1.86rem] font-normal">
              {Header.subTitle}
            </p>
            <div className="w-[13.61rem]">
              <Link
                href={{
                  pathname: "/projects",
                  query: { id: 0 },
                }}
              >
                <a className="flex items-center">
                  <Button label="VIEW PROJECTS" greenBtn />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-24 flex flex-col lg:flex-row items-center px-8">
        <div className="lg:w-4/12 w-full lg:order-1 order-2">
          <div className="hidden lg:flex lg:justify-center">
            <Image src={unlockFuture} alt="unlock-future" />
          </div>
          <div className="lg:hidden my-8">
            <Image src={unlockFuture} alt="unlock-future" />
          </div>
          <div className="flex flex-col lg:hidden text-base">
            <p className="my-8  text-[#666666]">
              On the other hand, Digital marketing is the practice of creating
              content to attract more customers and build relationships. It is
              more than just advertising; it is an essential component for any
              company to grow its business. Through digital marketing,
              businesses are able to harness the collective power of people,
              data, and modern software practices to reimagine their customer
              experience. The strategies that are most effective in digital
              marketing with reference to data-driven attribution models, mobile
              optimization, search engine optimization (SEO), email marketing,
              social media advertising, and conversion rates. With these
              strategies in mind and the help of Jade Media Pro, you can expand
              your business and look ahead to the success of your business more
              than it is right now in the coming times whether you are starting
              a new business or you already have an existing business.
            </p>
            <div className="mt-8 flex items-center ">
              <Link href="/services">
                <a
                  href="/services"
                  className="mr-1"
                  style={{ fontWeight: "bolder" }}
                >
                  {/* <span className="mt-2">
                    <LearnMoreArrow
                      text="Find out more about what is Branding and how does it help
                    your Business?"
                    />
                  </span> */}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-8/12 w-full lg:px-12 lg:order-2 order-1">
          <p className="text-3xl lg:text-5xl font-semibold lg:leading-[3.9rem]  ">
            Unlock your future by taking advantage of{" "}
            <Link
              href={{
                pathname: "/services",
                query: { id: 1 },
              }}
            >
              <a
                className="border-b border-black "
                style={{ paddingBottom: "-1rem" }}
              >
                Branding
              </a>
            </Link>{" "}
            &{" "}
            <Link
              href={{
                pathname: "/services",
                query: { id: 3 },
              }}
            >
              <a
                className="border-b border-black "
                style={{ paddingBottom: "-1rem" }}
              >
                Digital marketing
              </a>
            </Link>
          </p>
          <div className="text-[0.94rem]">
            <p className="mt-8   text-[#666666]">
              Few businesses live the test of time. Many businesses are
              struggling with different strategies and identifying which one
              truly fits. All sorts of brands - personal, entrepreneurial, or
              small and even big players need something special to succeed and
              we get it... you want to stand out in a crowded marketplace. In
              fact, we hold the golden key in our hands. It's in our ability to
              internalize what we actually believe in. Your business requires a
              unique brand vision that you can communicate with the rest of the
              world, as well as values that you can internalize. That’s what
              makes you unique and different. Your brand should have a
              personality. This allows customers and potential customers to
              better relate to your company and your products and services.
              According to studies, current and potential customers are far more
              likely to connect with your business if they can visualize a
              personality type. These are known as archetypes in the branding
              field.
            </p>
            <p className="my-8 lg:flex hidden text-[#666666]">
              On the other hand, Digital marketing is the practice of creating
              content to attract more customers and build relationships. It is
              more than just advertising; it is an essential component for any
              company to grow its business. Through digital marketing,
              businesses are able to harness the collective power of people,
              data, and modern software practices to reimagine their customer
              experience. The strategies that are most effective in digital
              marketing with reference to data-driven attribution models, mobile
              optimization, search engine optimization (SEO), email marketing,
              social media advertising, and conversion rates. With these
              strategies in mind and the help of Jade Media Pro, you can expand
              your business and look ahead to the success of your business more
              than it is right now in the coming times whether you are starting
              a new business or you already have an existing business.
            </p>
            <div className="  mt-8 lg:flex items-center hidden">
              <Link href="/services">
                <a
                  href="/services"
                  className="mr-1 text-[0.94rem]  flex items-center"
                  style={{ fontWeight: "bolder" }}
                >
                  <LearnMoreArrow
                    text=" Find out more about what is Branding and how does it help your
                  Business?"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex flex-col lg:flex-row items-center lg:px-8  bg-[#502A7A]">
        <div className="hidden lg:w-4/12 lg:pl-12 w-full lg:flex flex-row  items-center lg:items-start lg:flex-col text-white space-y-8 ">
          {ideaData.map((i, index) => (
            <div
              className={`flex flex-col cursor-pointer lg:flex-row items-center space-x-10 ${
                activeIdea !== index ? " hover:scale-150" : ""
              }`}
              key={index}
              onClick={() => setActiveIdea(index)}
            >
              <span
                className={` order-2 lg:order-1 ${
                  activeIdea == index
                    ? "w-3 h-3 border p-2"
                    : " w-2 h-2 bg-opacity-50"
                }  rounded-full bg-white `}
              />
              <p
                className={`border-b order-1 lg:order-2 ${
                  activeIdea == index
                    ? "text-[3.1875rem]"
                    : "text-xl font-light border-transparent"
                }  `}
              >
                {i.title}
              </p>
            </div>
          ))}
        </div>
        <div className=" lg:w-8/12 w-screen px-[1.375rem] lg:px-12 text-white">
          <p className="text-[2.67rem] lg:max-w-[64.25rem] lg:text-[3.2rem] font-semibold  leading-[3.9rem]">
            Our five foundational process to create your strategic brand’s
            success
          </p>
          <div
            className={`${styles.ideaMobile}  w-full my-4 flex flex-row items-center text-white space-x-8 lg:hidden overflow-x-auto`}
          >
            {ideaData.map((i, index) => (
              <div
                onClick={() => setActiveIdea(index)}
                className="flex cursor-pointer text-[0.94rem] flex-col items-center font-normal"
                key={index}
              >
                <p
                  className={`border-b ${
                    activeIdea == index
                      ? "text-[3.2rem] font-bold border-white"
                      : " font-light border-transparent"
                  }  `}
                >
                  {i.title}
                </p>
                <span
                  className={` ${
                    activeIdea == index
                      ? "w-[0.66rem] h-[0.66rem] border p-2 "
                      : " w-[0.3rem] h-[0.3rem] bg-opacity-50"
                  }  rounded-full bg-white `}
                />
              </div>
            ))}
          </div>

          <ProcessesSlider slideToShow={activeIdea} />
          <div className="w-[18.68rem]">
            <Link
              href={{
                pathname: "/projects",
                query: { id: 1 },
              }}
            >
              <Button label="Get your Brand process" greenBtn />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[1.375rem]  lg:px-20 pt-32">
        <p className="text-3xl lg:text-[4.27rem] font-semibold lg:leading-[5.3rem]">
          Put money, attention, and resources where it's most effective to
          generate income
        </p>
      </div>
      <div className="pl-[1.375rem] lg:px-20">
        <ServicesCarousel />
      </div>
      <div className="px-[1.375rem] lg:px-20 pt-32">
        <Heading text="Exclusive interviews with industry leading professionals" />
      </div>
      <section className="flex flex-col md:flex-row md:gap-x-16 items-stretch px-[1.375rem] md:pl-20 2xl:pl-14 mt-12 h-[26rem] ">
        <div className="md:w-3/5 h-full w-full relative">
          <iframe
            src="https://player.vimeo.com/video/668966622?h=72c3312ed7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Interview-Coming-Soon-Trailer.mp4"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <div className="md:w-2/5 items-stretch flex flex-col">
          <div>
            <p className="text-[#046C62] mb-8 text-[2rem] leading-tight lg:leading-[2.4rem] lg:text-[2.18rem] mt-7 lg:mt-0">
              60 minutes with Adaeze of <u>CAV Digital</u>
            </p>
            <div className="text-[0.94rem] mt-6 mb-[2.36rem]">
              <p>
                We start by defining a clear image of exactly who you serve and
                precisely how they think. Why? Because you can’t help people
                unless you know them – their hopes, their fears, their problems,
                and their pitfalls. What converts a total stranger into a
                die-hard fan of your brand? A constant pull of value and
                inspiration. At this stage, we map out your customer’s journey
                so you’ll be able to meet them at their point of need before one
                of your competitors does.
              </p>
              <p> We partner with brands to take communication.</p>
            </div>
          </div>
          <p className="flex flex-grow" />
          <div className="w-[12.36rem]">
            <Button
              label=" watch more"
              onClick={() => router.push("/interview")}
            />
          </div>
        </div>
      </section>
      <section className="px-[1.375rem] lg:px-20 pt-[1rem] lg:pt-12 mb-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6 lg:gap-y-0">
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
      </section>
      <section className="px-[1.375rem] lg:px-20 mt-20 lg:mt-32">
        <p className=" text-4xl lg:text-[3.2rem] leading-12 font-semibold">
          Discover popular and profitable{" "}
          <a
            href="/blog"
            className="border-b border-black "
            style={{ paddingBottom: "-1rem" }}
          >
            editorials
          </a>
        </p>
      </section>
      <section className="mt-11 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-8 px-[1.375rem] lg:px-20 ">
        <PostCard
          date="October 21, 2021"
          title="15 SEO Best Practices: Website Architecture"
          desc="One SEO component called off-site SEO ensures that users of external pages or of social media can find your website. Being optimized for SEO increases the site’s potential to draw customers from other platforms other than the search engine. It also gives you insights on such as location, technologies used, product preferences, etc. "
        />
        <PostCard
          date="October 21, 2021"
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
        <PostCard
          date="October 21, 2021"
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
      </section>
      <section className="mt-32 px-[1.375rem] lg:px-20">
        <div className=" mb-[4.5rem] grid grid-cols-2 lg:grid-cols-3 lg:gap-x-20 gap-x-11 gap-y-8">
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 ">
          <EyeBrow text=" Explore our full catalogue" />
          <div className="w-[15.6rem]">
            <Button label="VISIT STORE" onClick={() => router.push("/store")} />
          </div>
        </div>
      </section>
      <section className="lg:mt-32 mt-16 grid  grid-cols-1 lg:grid-cols-2 px-[1.375rem] lg:px-20 mb-44">
        <div className="w-full flex flex-col lg:pr-28">
          <EyeBrow text="Don’t miss the next live meeting to experience growth" />
          <div className="w-full grid grid-cols-2 gap-x-12  mt-20 ">
            {eventData.slice(0, 2).map((event, eventIndex) => (
              <div className="w-full flex flex-col" key={eventIndex}>
                <div className="flex items-end space-x-1 lg:space-x-5">
                  <p className="flex flex-col">
                    <span className="text-xs">{event.month}.</span>
                    <span className="text-6xl">{event.date}</span>
                  </p>
                  <p className="flex flex-col text-[0.625rem] lg:text-base">
                    <span>{event.venue}</span>
                    <span>{event.required}</span>
                  </p>
                </div>
                <div className="text-[#046C62] text-[1.5rem] lg:text-[2.18rem] my-10 flex w-full flex-grow lg:leading-[2.4rem]">
                  {event.title}
                </div>
                <LearnMoreArrow text="Get details" />
              </div>
            ))}
          </div>
          <span className="flex-grow" />
          <div className="w-[14.56rem] mt-8">
            <Button
              label="UPCOMING EVENTS"
              onClick={() => router.push("/events")}
            />
          </div>
        </div>
        <div className="lg:pl-28 lg:border-l-2 flex flex-col border-black">
          <EyeBrow text="Find the right job to boost your brilliant career" />
          <div className="space-y-6 flex-grow mt-20">
            {openings.map((op, opIndex) => (
              <div
                className="bg-[#46BFB2] hover:bg-[#098B81] cursor-pointer grid grid-cols-2 py-3 px-4"
                key={opIndex}
              >
                <p className="lg:text-[2rem] text-[1.5rem] w-1/2">
                  {op.position}
                </p>
                <div className=" border-l flex  text-[0.625rem] lg:text-base border-black pl-10">
                  <div className="flex flex-grow  flex-col justify-center lg:justify-items-stretch">
                    <p>{op.location}</p>
                    <p>{op.type}</p>
                    <p>{op.company}</p>
                  </div>
                  <img
                    src="/vectors/arrow-left.svg"
                    alt="job-arrow"
                    className="w-5 h-4 self-end "
                  />
                </div>
              </div>
            ))}
          </div>
          <Link href="/jobs">
            <div className="mt-16 w-[14.56rem]">
              <Button
                label="VIEW ALL JOBS"
                onClick={() => router.push("/jobs")}
              />
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
