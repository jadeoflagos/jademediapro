import Image from "next/image";
import React, { useState } from "react";
import Calendarr from "../components/Calendar";
import DailyEmailForm from "../components/DailyEmailForm";
import Footer from "../components/Footer";
import LearnMoreArrow from "../components/LearnMoreArrow";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/organism/SectionHeader";
import Pagination from "../components/Pagination";
import Tags from "../components/Tags";
import { eventData } from "../data";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <SectionHeader
        imageHeight="490"
        imageWidth="275.89"
        bgColor="#044841"
        title="Bringing people of like-mind and goals together"
        headerImage="Event-header.png"
        subTitle="We connect professionals, businesses, and people to have  seamless experience every stage of an online or in-person event. Get detailed information about ticket sales, events, and more."
      />

      <section className="px-5 lg:px-20 grid lg:grid-cols-3 lg:gap-x-32 mt-12 lg:mb-12">
        <main className="col-span-2 space-y-4 lg:space-y-8 order-2 lg:order-1">
          <div className="mb-20">
            {eventData.map((data, dataIndex) => (
              <div
                className="flex items-center border-b-2 border-black lg:space-x-8 py-3 px-4"
                key={dataIndex}
              >
                <div className="lg:w-2/3">
                  <p className="text-[0.8rem] lg:text-xl font-semibold">
                    {data.title}
                  </p>
                  <p className="text-[0.625rem] lg:text-lg mt-3">
                    <span className="lg:pr-3 pr-1">{data.venue}</span>
                    <span className="border-l border-black lg:pl-2 pl-1">
                      {data.required}
                    </span>
                  </p>
                </div>
                <div className="lg:w-1/3 flex lg:flex-row flex-col items-end place-self-stretch justify-between">
                  <div className="">
                    <p className="lg:text-lg text-xs">{data.month}</p>
                    <p className="text-4xl lg:text-7xl">{data.date}</p>
                  </div>
                  <span className="w-36">
                    <LearnMoreArrow text="Get details" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <section className="px-5 lg:block hidden">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </main>
        <div className="flex flex-col items-start order-1 lg:order-2 ">
          <div className="max-w-max -ml-6">
            <Calendarr />
          </div>
          <div className="space-y-8 hidden lg:block  mb-28">
            <Tags />
            <DailyEmailForm />
          </div>
        </div>
      </section>
      <section className="px-5 my-10 lg:hidden">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <div className="px-5 my-16 lg:my-0 lg:hidden block ">
        <DailyEmailForm />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
