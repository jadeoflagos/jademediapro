import Image from "next/image";
import React, { useState } from "react";
import Calendar from "../components/Calendar";
import DailyEmailForm from "../components/DailyEmailForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Tags from "../components/Tags";
import { eventData } from "../data";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="bg-[#044841] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white py-2">
          <div className="w-8/12">
            <p className="text-7xl font-semibold">
              Bringing people of like-mind and goals together
            </p>
            <p className="py-12 text-2xl">
              Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work.
            </p>
          </div>
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/eventbg.png"
              alt="Avatar"
              width={363}
              height={644}
            />
          </div>
        </div>
      </div>
      <section className="px-20 grid grid-cols-3 gap-x-8 mt-12">
        <main className="col-span-2">
          {eventData.map((data, dataIndex) => (
            <div className="flex items-center space-x-8 py-3 px-4">
              <div>
                <p className="text-lg">{data.title}</p>
                <p className="text-lg">
                  <span>{data.venue}</span>
                  <span>{data.required}</span>
                </p>
              </div>
              <div className="">
                <p>{data.month}</p>
                <p className="text-4xl">{data.date}</p>
              </div>

              <div className="flex items-center ">
                <span className="mx-3">Get details</span>
                <Image
                  src="/vectors/arrow-left.svg"
                  alt="Avatar"
                  width={25}
                  height={17}
                />
              </div>
            </div>
          ))}
        </main>
        <div className="">
          <Calendar />
          <div className="mb-8">
            <Tags />
          </div>
          <DailyEmailForm />
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
