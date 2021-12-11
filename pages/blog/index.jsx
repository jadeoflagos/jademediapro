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
     <SecondHeaderTwo headerImg="blogbg.png" title="Blog Posts" subTitle=" Experient design thinking and innovative stories
" />
      <div className="lg:mt-12 px-5 lg:px-20 lg:py-20 py-10">
        <div className="hidden lg:flex">
          {tabs.map((tab, tabIndex) => (
            <span
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
          {tabs.splice(0,4).map((tab, tabIndex) => (
            <span
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
