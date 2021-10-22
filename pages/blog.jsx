import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  const tabs = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
  ];
  return (
    <div>
      <div className="bg-[#502A7A] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white">
          <div>
            <p className="font-bold text-8xl">Blog Posts</p>
            <p className="py-12 text-2xl tracking-wider">
              Experient design thinking and innovative stories
            </p>
            <div className="flex space-x-4 items-center">
              <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-[#4477AA] max-w-max ">
                <Image
                  src="/vectors/twitter.svg"
                  alt="Avatar"
                  width={20}
                  height={20}
                />
                <span className="text-xs pl-3"> TWITTER</span>
              </p>
              <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-[#1275B1] max-w-max ">
                <Image
                  src="/vectors/linkdin.svg"
                  alt="Avatar"
                  width={20}
                  height={20}
                />
                <span className="text-xs pl-3"> LINKEDIN</span>
              </p>{" "}
              <p className="cursor-pointer py-3 px-12 flex items-center justify-center  bg-black max-w-max ">
                <Image
                  src="/vectors/medium.svg"
                  alt="Avatar"
                  width={20}
                  height={20}
                />
                <span className="text-xs pl-3"> MEDIUM</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/blogbg.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 px-20">
        <div>
          {tabs.map((tab, tabIndex) => (
            <span>{tab}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
