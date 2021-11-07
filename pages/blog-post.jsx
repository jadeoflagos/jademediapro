import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import SocialButtons from "../components/SocialButtons";
import Tags from "../components/Tags";

const BlogPost = () => {
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
      <div className=" w-screen min-h-[30rem]">
        <div>
          <Navbar darkLogo />
        </div>
        <p className=" px-20 w-7/12 py-12 text-7xl tracking-wider">
          Work from home has taken new turn in the pandemic
        </p>
      </div>
      <section className="mt-12 px-20 py-20 flex">
        <div className="w-4/5">
          <SocialButtons />
          <div className="mt-28">
            <Image
              src="/images/computer.png"
              alt="avatar"
              height={600}
              width={1000}
            />

            <p className="my-14">
              Our mission is to close the word gap so that students can achieve
              at higher levels. When learners are equipped with the building
              blocks of language, they have greater access to education,
              information, and opportunities.{" "}
            </p>
            <p>
              At Vocabulary.com, we're passionate about growing strong readers,
              writers, and thinkers. That's what drives us to create innovative
              tools and engaging experiences that go above and beyond basic
              definitions to teach for depth of knowledge and enduring
              understanding.{" "}
            </p>
            <p className="my-14">
              Founded in 2008, Vocabulary.com was built by a multidisciplinary
              team of educators, lexicographers, data scientists, and
              developers. Together, they recognized the need for an effective
              instructional technology that would empower learners to unpack the
              complexity and nuances of the English language. The solution they
              developed was Vocabulary.com, a platform built on best practices
              that is systematic, engaging, and adaptive.
            </p>
            <p>
              To date, Vocabulary.com has served more than 5.1 billion questions
              to learners all over the world, and is used by 3.8 million
              students in 56,000 schools. At Vocabulary.com, we're passionate
              about growing strong readers, writers, and thinkers. That's what
              drives us to create innovative tools and engaging experiences that
              go above and beyond basic definitions to teach for depth of
              knowledge and enduring understanding.
            </p>
            <h2 className="text-5xl font-bold my-16">
              The Secondary definition
            </h2>
            <p className="my-14">
              Our mission is to close the word gap so that students can achieve
              at higher levels. When learners are equipped with the building
              blocks of language, they have greater access to education,
              information, and opportunities.{" "}
            </p>
            <p>
              At Vocabulary.com, we're passionate about growing strong readers,
              writers, and thinkers. That's what drives us to create innovative
              tools and engaging experiences that go above and beyond basic
              definitions to teach for depth of knowledge and enduring
              understanding.{" "}
            </p>
            <p className="my-14">
              Founded in 2008, Vocabulary.com was built by a multidisciplinary
              team of educators, lexicographers, data scientists, and
              developers. Together, they recognized the need for an effective
              instructional technology that would empower learners to unpack the
              complexity and nuances of the English language. The solution they
              developed was Vocabulary.com, a platform built on best practices
              that is systematic, engaging, and adaptive.
            </p>
            <p>
              To date, Vocabulary.com has served more than 5.1 billion questions
              to learners all over the world, and is used by 3.8 million
              students in 56,000 schools. At Vocabulary.com, we're passionate
              about growing strong readers, writers, and thinkers. That's what
              drives us to create innovative tools and engaging experiences that
              go above and beyond basic definitions to teach for depth of
              knowledge and enduring understanding.
            </p>
          </div>
        </div>
        <div className="w-1/5">
          <Tags />
        </div>
      </section>

      <section className="px-20 my-12 w-full grid grid-cols-3 gap-x-20 gap-y-5">
        <h3 className="col-span-3 mb-8 text-5xl font-bold">
          Similar articles recommended
        </h3>
        <BlogCard date="Nov 01 2020" />
        <BlogCard date="Oct 31 2021" />
        <BlogCard date="Oct 31 2021" />
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
