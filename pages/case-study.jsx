import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const CaseStudy = () => {
  return (
    <div>
      <div>
        <Navbar dropDownBg="black" bg="#fff" textColor="#000" darkLogo />
      </div>
      <Image
        // layout="fill"
        src="/images/awotele.png"
        width={1920}
        height={1027}
      />
      <main>
        <div className="header text-center mt-[11rem]">
          <h2 className="text-[4.5rem] font-semibold">Awotele</h2>
          <span className="text-[3rem]">Case Study</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
