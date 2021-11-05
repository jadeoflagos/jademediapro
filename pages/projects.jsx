import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { projectData } from "../data";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="bg-[#2C144E] w-screen min-h-[30rem]">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white">
          <div className="w-7/12">
            <p className="font-bold text-6xl">
              We create a fully unique journey for all our clients
            </p>
            <p className="py-12 text-2xl tracking-wider">
              Jade Media Pro has always been about people while exploring
              projects of all systems and sizes. Here you'll find the individual
              stories behind the work.
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
      <section className="mt-20 px-20 py-20 ">
        <div className="w-3/5 space-y-6">
          {projectData.map((project, projectIndex) => (
            <div key={`project-${projectIndex}`}>
              <p className="flex justify-between items-center border-b border-black px-4 py-2 ">
                <span className="font-semibold text-lg">{project.title}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    activeTab == projectIndex
                      ? setActiveTab(-1)
                      : setActiveTab(projectIndex);
                  }}
                >
                  <Image
                    src={`/vectors/${
                      activeTab == projectIndex
                        ? "caret-down.svg"
                        : "caretup.svg"
                    }`}
                    alt="Avatar"
                    width={20}
                    height={10}
                  />
                </span>
              </p>

              {activeTab == projectIndex ? (
                <p className="pt-6 pb-10">
                  {projectData[projectIndex].details}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-11 mb-28 grid grid-cols-3 gap-x-8 px-20 ">
        <p className="col-span-3 text-4xl font-semibold mb-6">
          Read related posts
        </p>

        <PostCard
          date="October 21, 2021"
          title="15 SEO Best Practices: Website Architecture"
          desc="One SEO component called off-site SEO ensures that users of external pages or of social media can find your website. Being optimized for SEO increases the site’s potential to draw customers from other platforms other than the search engine. It also gives you insights on such as location, technologies used, product preferences, etc. "
        />
        <PostCard
          date="October 20, 2021"
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
        <PostCard
          date="October 20, 2021"
          title="A Guide to Google SEO Algorithm Updates"
          desc="Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. The  search engine management is to helps you identify popular keywords so you can decide how to structure or revise your needed content."
        />
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
