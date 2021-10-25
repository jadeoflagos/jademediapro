import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

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
      <section className="mt-20 px-20 py-20 flex">
        <div className="w-8/12">
          <div>
            <p className="flex justify-between items-center border-b border-black">
              <span>Business Strategy</span>
              <Image
                src="/vectors/caretup.svg"
                alt="Avatar"
                width={26}
                height={13}
              />
            </p>
          </div>
        </div>
        <div className="w-4/12 px-20">
          <Image
            src="/images/market.png"
            alt="Avatar"
            width={492}
            height={259}
          />
        </div>
      </section>
      <section className="px-20">
        <p>Read related posts</p>
        <div className="grid grid-cols-3 gap-x-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
