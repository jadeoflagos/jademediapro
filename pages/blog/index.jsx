import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import InterviewCard from "../../components/InterviewCard";
import SocialButtons from "../../components/SocialButtons";
import { blogPostData } from "../../data";

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
      <div className="bg-[#502A7A] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" dropDownBg="purple" />
        </div>
        <div className="flex items-center justify-between px-20 text-white">
          <div className="w-7/12">
            <p className="font-bold text-8xl">Blog Posts</p>
            <p className="py-12 text-2xl tracking-wider">
              Experient design thinking and innovative stories
            </p>
            <div>
              <SocialButtons />
            </div>
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
        <div className="mt-12 w-full grid grid-cols-3 gap-x-20 gap-y-5">
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
      <div className="px-20 py-20 mb-20">
        <p className=" pb-12 text-6xl">
          Watch Exclusive interviews with profesionals
        </p>
        <div className="grid grid-cols-3 gap-x-8">
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
