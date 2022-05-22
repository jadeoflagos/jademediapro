import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { projectData } from "../data/ProjectPage";
import SectionHeader from "../components/organism/SectionHeader";
import { useRouter } from "next/router";
import { scrollToArea } from "../utils/helper";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const { query, replace } = useRouter();
  const id = query.id;
  useEffect(() => {
    if (id) {
      const projectTitle = projectData[id].title;
      setActiveTab(id);
      scrollToArea(projectTitle);
      replace("/projects", undefined, { shallow: true });
    }
  }, [id]);

  return (
    <div>
      <SectionHeader
        imageWidth="400"
        imageHeight="400"
        bgColor="#2C144E"
        navBarColor="white"
        title="We create a fully unique journey for all our clients"
        headerImage="Projects-header.png"
        subTitle="Jade Media Pro has always been about people, and we've worked hard over the years to ensure that our clients are fully satisfied. Here are some unique stories behind the works we’ve undertaken."
        dropDownBg="purple"
      />
      <section className="mt-20 lg:px-20 px-5 py-20 ">
        <div className="w-full space-y-6">
          {projectData.map((project, projectIndex) => (
            <div key={`project-${projectIndex}`}>
              <div className="flex justify-between items-center border-b-2 border-black px-4 py-2 w-full lg:w-[70%] ">
                <span className="font-semibold lg:text-4xl text-xl">
                  {project.title}
                </span>
                <div
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
                </div>
              </div>

              {activeTab == projectIndex ? (
                <div className="pt-6 pb-10 " id={project.title}>
                  <div className="w-full">
                    {projectData[projectIndex].details.map(
                      (item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="flex items-center w-full">
                            <p className="w-[20%]" />
                            <p
                              className="w-full lg:w-[50%] py-2 px-3 text-lg lg:text-3xl border-b-2 border-black cursor-pointer "
                              onClick={() => {
                                activeSubTab == itemIndex
                                  ? setActiveSubTab(-1)
                                  : setActiveSubTab(itemIndex);
                              }}
                            >
                              {item.title}
                            </p>
                          </div>
                          {activeSubTab == itemIndex && (
                            <div className=" w-full flex items-center mt-12 text-[#666666]">
                              <p className="w-[20%]" />
                              <div className="lg:w-[80%] flex-grow w-9/12 lg:text-[1.3rem]  ">
                                {item.description}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-11 mb-28 lg:grid lg:grid-cols-3 gap-x-8 px-5 lg:px-20 ">
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
