import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import DailyEmailForm from "../components/DailyEmailForm";
import CheckboxLabels from "../components/Form/CheckBoxLabel";
import { openings } from "../data";
import SelectVariants from "../components/Form/Select";
import SectionHeader from "../components/organism/SectionHeader";

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
  const [location, setLocation] = useState("");
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  return (
    <div>
      <SectionHeader
        imageWidth="258.26"
        imageHeight="458.18"
        darkLogo
        bgColor="white"
        navBarColor="#000"
        headerColor="black"
        title="Discover your next career move with our efficiently managed job
        searches
"
        headerImage="jobbg.png"
      />
      <div className="px-5 lg:px-20 py-16">
        <div>
          {tabs.slice(3).map((tab, tabIndex) => (
            <span
              key={tabIndex}
              onClick={() => setActiveTab(tabIndex)}
              className={`px-3 border-b cursor-pointer lg:text-base text-xs pb-2 ${
                activeTab == tabIndex
                  ? "text-[#77459B] border-[#77459B]"
                  : "border-transparent"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <section className="mt-12 w-full  grid lg:grid-cols-3 lg:gap-x-48 ">
          <div className="col-span-2  space-y-6 lg:order-1 order-2">
            {openings.map((op, opIndex) => (
              <div
                key={opIndex}
                className="bg-[#46BFB2] items-center grid grid-cols-2 py-3 px-4 hover:bg-[#098B81] cursor-pointer"
              >
                <p className="text-2xl lg:text-[2.18rem] w-1/2 leading-[2.8rem]">
                  {op.position}
                </p>
                <div className="border-l border-black flex items-end justify-between pl-7 lg:pl-10">
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
          <aside className="order-1 lg:order-2">
            <p>Filters</p>
            <div className="mt-4">
              <CheckboxLabels label="All Offers" />
              <CheckboxLabels label="Most Relevant" />
              <CheckboxLabels label="Recommended" />
              <CheckboxLabels label="Most Recent" />
            </div>
            <div className="mt-4 mb-10 space-y-5">
              <div>
                <p className="font-bold text-lg">Location</p>
                <SelectVariants
                  value={location}
                  onChange={handleLocationChange}
                  menuitems={["Abuja", "Ilorin", "Lagos"]}
                />
              </div>
              <div>
                <p className="font-bold text-lg">Type of Work</p>
                <SelectVariants menuitems={["Abuja", "Ilorin"]} />
              </div>
              <div>
                <p className="font-bold text-lg">Industries</p>
                <SelectVariants menuitems={["Abuja", "Ilorin"]} />
              </div>
            </div>
            <div className="hidden lg:block">
              {" "}
              <DailyEmailForm />
            </div>
          </aside>
        </section>
      </div>
      <section className="px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <div className="lg:hidden block my-10 mx-5">
        {" "}
        <DailyEmailForm />
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
