import Image from "next/image";
import React, { useState } from "react";
import Calendar from "../components/Calendar";
import DailyEmailForm from "../components/DailyEmailForm";
import Footer from "../components/Footer";
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
        bgColor="#044841"
        title="Bringing people of like-mind and goals together"
        headerImage="eventbg.png"
        subTitle=" Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work."
      />

      <section className="px-5 lg:px-20 grid lg:grid-cols-3 lg:gap-x-48 mt-12">
        <main className="col-span-2 space-y-4 lg:space-y-8 order-2 lg:order-1">
          {eventData.map((data, dataIndex) => (
            <div
              className="flex items-center border-b-2 border-black space-x-8 py-3 px-4"
              key={dataIndex}
            >
              <div className="w-2/3">
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
              <div className="w-1/3 flex lg:flex-row flex-col items-end place-self-stretch justify-between">
                <div className="">
                  <p className="lg:text-lg text-xs">{data.month}</p>
                  <p className="text-4xl lg:text-7xl">{data.date}</p>
                </div>
                <div className="flex items-center ">
                  <span className="mx-1 whitespace-nowrap lg:text-base text-xs">
                    Get details
                  </span>
                  <Image
                    src="/vectors/arrow-left.svg"
                    alt="Avatar"
                    width={25}
                    height={17}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
        <div className="flex flex-col order-1 lg:order-2 ">
          <div className="max-w-max">
            <Calendar />
          </div>
          <div className="space-y-8 hidden lg:block ">
            <Tags />
            <DailyEmailForm />
          </div>
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <div className="px-5 lg:hidden block ">
        <DailyEmailForm />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
