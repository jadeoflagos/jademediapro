import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import DailyEmailForm from "../components/DailyEmailForm";
import CheckboxLabels from "../components/Form/CheckBoxLabel";
import { openings } from "../data";

const Jobs = () => {
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
  const lists = ["Location", "Type of Work", "Industries"];
  return (
    <div>
      <div className="w-screen min-h-[30rem]">
        <div>
          <Navbar darkLogo />
        </div>
        <div className="flex items-center justify-between px-20 ">
          <div className="w-7/12">
            <p className="font-bold text-7xl">
              Discover your next career move with our efficiently managed job
              searches
            </p>
          </div>
          <span className="w-1/12" />
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/Saly-15.png"
              alt="Avatar"
              width={363}
              height={644}
            />
          </div>
        </div>
      </div>
      <div className="px-20 pb-20">
        <div>
          {tabs.map((tab, tabIndex) => (
            <span
              onClick={() => setActiveTab(tabIndex)}
              className={`px-3 border-b cursor-pointer pb-2 ${
                activeTab == tabIndex
                  ? "text-[#77459B] border-[#77459B]"
                  : "border-transparent"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <section className="mt-12 w-full flex">
          <div className="w-[70%] pr-20 space-y-6">
            {openings.map((op, opIndex) => (
              <div className="bg-[#46BFB2] items-center grid grid-cols-2 py-3 px-4">
                <p className="text-[2.5rem] w-1/2">{op.position}</p>
                <div className="border-l border-black flex items-end justify-between pl-10">
                  <div className="flex flex-col justify-items-stretch">
                    <p>{op.location}</p>
                    <p>{op.type}</p>
                    <p>{op.company}</p>
                  </div>
                  <Image
                    src="/vectors/arrow-left.svg"
                    alt="Avatar"
                    width={25}
                    height={17}
                  />
                </div>
              </div>
            ))}
          </div>
          <aside className="w-[30%]">
            <p>Filters</p>
            <div className="mt-4">
              <CheckboxLabels label="All Offers" />
              <CheckboxLabels label="Most Relevant" />
              <CheckboxLabels label="Recommended" />
              <CheckboxLabels label="Most Recent" />
            </div>
            <div className="mt-4 mb-10">
              {lists.map((list, listIndex) => (
                <div key={`list-${listIndex}`}>
                  <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
                    <span className="font-semibold text-lg">{list}</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        activeTab == listIndex
                          ? setActiveTab(-1)
                          : setActiveTab(listIndex);
                      }}
                    >
                      <Image
                        src={`/vectors/${
                          activeTab == listIndex
                            ? "caret-down.svg"
                            : "caretup.svg"
                        }`}
                        alt="Avatar"
                        width={20}
                        height={10}
                      />
                    </span>
                  </p>

                  {/* {activeTab == listIndex ? (
                    <p className="pt-6 pb-10">{lists[listIndex].details}</p>
                  ) : (
                    ""
                  )} */}
                </div>
              ))}
            </div>
            <DailyEmailForm />
          </aside>
        </section>
      </div>
      <section className="px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
