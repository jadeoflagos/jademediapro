import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InterviewCard from "../components/InterviewCard";
import SocialButtons from "../components/SocialButtons";
import Pagination from "../components/Pagination";

const Interview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <div className="bg-[#502A7A] w-screen min-h-[30rem] pb-11">
        <div>
          <Navbar textColor="white" />
        </div>
        <div className="flex items-center justify-between px-20 text-white pt-12 space-x-12">
          <div className="w-7/12">
            <p className="font-bold text-7xl">
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
      </div>
      <div className="mt-12 px-20 py-20 ">
        <p className="font-semibold text-6xl mb-8">60 minutes:</p>
        <div className="grid grid-cols-3  gap-8">
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
        </div>
      </div>
      <section className="px-20">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <Footer />
    </div>
  );
};

export default Interview;
