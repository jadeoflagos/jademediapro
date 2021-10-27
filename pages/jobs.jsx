import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import InterviewCard from "../components/InterviewCard";
import SocialButtons from "../components/SocialButtons";

const Jobs = () => {
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
              <div className="bg-[#46BFB2] grid grid-cols-2 py-3 px-4">
                <p className="text-[2.5rem] w-1/2">{op.position}</p>
                <div className="border-l border-black pl-10">
                  <div className="flex flex-col justify-items-stretch">
                    <p>{op.location}</p>
                    <p>{op.type}</p>
                    <p>{op.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="w-[30%]">
            <p>Filters</p>
          </aside>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
