import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import InterviewCard from "../../components/InterviewCard";
import SocialButtons from "../../components/SocialButtons";
import { blogPostData } from "../../data";
import SectionHeader from "../../components/organism/SectionHeader";
import EyeBrow from "../../components/organism/EyeBrow";
import SecondHeaderTwo from "../../components/organism/SecondHeaderTwo";
import Pagination from "../../components/Pagination";
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
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <section className={`w-screen  bg-[#502A7A] pb-9 `}>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row lg:pt-16 lg:pb-12 lg:items-center justify-between px-5 lg:px-20 text-white">
          <div className="lg:w-7/12">
            <p className="font-bold text-4xl lg:text-8xl leading-[3.875rem]">
              Blog Posts
            </p>
            <p className="pt-12 lg:pb-12 text-base lg:text-2xl lg:tracking-wider">
              Experient design thinking and innovative stories
            </p>
            <div className="hidden lg:flex ">
              <SocialButtons />
            </div>
          </div>
          <span className="w-1/12" />
          <div className="lg:w-4/12 w-full flex items-center justify-center">
            <Image
              src={`/images/Blog-header.png`}
              alt="Avatar"
              width={316.27}
              height={350.74}
            />
          </div>
        </div>
        <div className="w-full px-5 flex flex-col pt-11 lg:hidden">
          <SocialButtons />
        </div>
      </section>

      <div className="lg:mt-12 px-5 lg:px-20 lg:py-20 py-10">
        <div className="hidden lg:flex">
          {tabs.map((tab, tabIndex) => (
            <span
              key={tabIndex}
              onClick={() => setActiveTab(tabIndex)}
              className={`px-10 border-b cursor-pointer pb-2 text-xs lg:text-base ${
                activeTab == tabIndex
                  ? "text-[#77459B] border-[#77459B]"
                  : "border-transparent"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="lg:hidden flex">
          {tabs.splice(0, 4).map((tab, tabIndex) => (
            <span
              key={tabIndex}
              onClick={() => setActiveTab(tabIndex)}
              className={`px-2 border-b cursor-pointer text-xs whitespace-nowrap pb-2 ${
                activeTab == tabIndex
                  ? "text-[#77459B] border-[#77459B]"
                  : "border-transparent"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-12 w-full grid lg:grid-cols-3 lg:gap-x-20 gap-y-5">
          {blogPostData.map((blogData) => (
            <Link
              key={`blog-post-id${blogData.id}`}
              href="/blog/[blogPost]"
              as={`/blog/${blogData.id}`}
            >
              <a>
                <BlogCard date={blogData.date || undefined} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-5 lg:px-20 py-20 ">
        <Pagination />
      </div>
      <div className="px-5 lg:px-20 py-20  lg:mb-20">
        <EyeBrow text="Watch Exclusive interviews with profesionals" />
        <div className=" mt-12 grid lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-0 ">
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
