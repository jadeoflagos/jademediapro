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
              src="/images/blogbg.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 px-20 py-20">
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
        <div className="mt-12 w-full grid grid-cols-3 gap-x-20 gap-y-5"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
