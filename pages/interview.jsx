import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewCard from "../components/InterviewCard";
import Pagination from "../components/Pagination";
import Link from "next/link";
import SecondHeaderTwo from "../components/organism/SecondHeaderTwo";

const Interview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
           <SecondHeaderTwo headerImg="interview.png" title="Engaging One-on-One discussion with Big Guns" subTitle="Design begins after we begin to think about how to present an experience most successfully, whether a button we put in can solve a problem." />
      {/* <div className="bg-[#502A7A] w-screen min-h-[30rem] pb-11">
        <div>
          <Navbar textColor="white" dropDownBg="purple" />
        </div>
        <div className="flex items-center justify-between px-20 text-white pt-12 space-x-12">
          <div className="w-7/12">
            <p className="text-6xl font-bold leading-tight">
              Engaging One-on-One discussion with Big Guns
            </p>
            <p className="py-12 text-2xl tracking-wider">
              Design begins after we begin to think about how to present an
              experience most successfully, whether a button we put in can solve
              a problem.{" "}
            </p>
            <div>
              <SocialButtons />
            </div>
          </div>
          <span className="w-1/12" />
          <div className="w-4/12 flex items-center justify-center">
            <Image
              src="/images/interview.png"
              alt="Avatar"
              width={494}
              height={494}
            />
          </div>
        </div>
      </div> */}
      <div className="mt-12 px-5 lg:px-20 py-20 ">
        <p className="font-semibold text-3xl lg:text-6xl mb-8">60 minutes:</p>
        <div className="grid lg:grid-cols-3  gap-8">
          {Array(9)
            .fill("")
            .map((interview, interviewIndex) => (
              <Link
                href="/video-playing"
                key={`interview-60min-no${interviewIndex}`}
              >
                <a>
                  <InterviewCard />
                </a>
              </Link>
            ))}
        </div>
      </div>
      <section className="px-5 lg:px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <Footer />
    </div>
  );
};

export default Interview;
