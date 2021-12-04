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

      <section className="px-20 grid grid-cols-3 gap-x-48 mt-12">
        <main className="col-span-2 space-y-8">
          {eventData.map((data, dataIndex) => (
            <div
              className="flex items-center border-b-2 border-black  space-x-8 py-3 px-4"
              key={dataIndex}
            >
              <div className="w-2/3">
                <p className="text-xl font-semibold">{data.title}</p>
                <p className="text-lg mt-3">
                  <span className="pr-3">{data.venue}</span>
                  <span className="border-l border-black pl-2">
                    {data.required}
                  </span>
                </p>
              </div>
              <div className="w-1/3 flex items-end justify-between">
                <div className="">
                  <p className="text-lg">{data.month}</p>
                  <p className="text-7xl">{data.date}</p>
                </div>
                <div className="flex items-center ">
                  <span className="mx-1 whitespace-nowrap">Get details</span>
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
        <div className="flex flex-col ">
          <div className="max-w-max">
            <Calendar />
          </div>
          <div className="space-y-8 ">
            <Tags />
            <DailyEmailForm />
          </div>
        </div>
      </section>
      <section className="px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <Footer />
    </div>
  );
};

export default Events;
