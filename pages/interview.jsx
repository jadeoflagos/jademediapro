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
      <SecondHeaderTwo
        headerImg="interview.png"
        title="Engaging One-on-One discussion with Big Guns"
        subTitle="We have awesome chat with industry leading professionals from various fields discussing exverything about their experience, business oreintation, and actionable insights  on how to grow."
      />
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
